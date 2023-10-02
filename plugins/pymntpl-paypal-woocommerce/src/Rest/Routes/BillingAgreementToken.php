<?php


namespace PaymentPlugins\WooCommerce\PPCP\Rest\Routes;


use PaymentPlugins\WooCommerce\PPCP\Admin\Settings\AdvancedSettings;
use PaymentPlugins\WooCommerce\PPCP\CheckoutValidator;
use PaymentPlugins\WooCommerce\PPCP\Factories\CoreFactories;
use PaymentPlugins\WooCommerce\PPCP\Logger;
use PaymentPlugins\WooCommerce\PPCP\Payments\Gateways\AbstractGateway;
use PaymentPlugins\WooCommerce\PPCP\Traits\CheckoutRouteTrait;
use PaymentPlugins\WooCommerce\PPCP\WPPayPalClient;

class BillingAgreementToken extends AbstractRoute {

	use CheckoutRouteTrait;

	private $client;

	private $logger;

	private $settings;

	private $factories;

	private $validator;

	public function __construct(
		WPPayPalClient $client,
		Logger $logger,
		AdvancedSettings $settings,
		CoreFactories $factories
	) {
		$this->client    = $client;
		$this->logger    = $logger;
		$this->settings  = $settings;
		$this->factories = $factories;
		$this->validator = new CheckoutValidator();
	}

	public function get_path() {
		return 'billing-agreement/token/?(?P<id>[\w-]+)?';
	}

	public function get_routes() {
		return [
			[
				'methods'  => \WP_REST_Server::CREATABLE,
				'callback' => [ $this, 'handle_request' ]
			],
			[
				'methods'  => \WP_REST_Server::READABLE,
				'callback' => [ $this, 'handle_request' ]
			]
		];
	}

	public function handle_post_request( \WP_REST_Request $request ) {
		// create the token
		$customer = WC()->customer;

		if ( $request['context'] !== 'order_pay' ) {
			$needs_shipping = WC()->cart->needs_shipping();
			$this->factories->initialize( WC()->cart, $customer );
		} else {
			$needs_shipping = false;
		}

		if ( $this->is_checkout_initiated( $request ) ) {
			if ( $needs_shipping && $this->settings->is_shipping_address_disabled() ) {
				$this->factories->billingAgreement->set_needs_shipping( false );
			}
			$this->update_customer_data( $customer, $request );

			if ( $this->is_checkout_validation_enabled( $request ) ) {
				$this->validator->validate_checkout( $request, false );
			}
			/**
			 * 3rd party code can use this action to perform custom validations.
			 *
			 * @since 1.0.31
			 */
			do_action( 'wc_ppcp_validate_checkout_fields', $request, $this->validator );

			if ( $this->validator->has_errors() ) {
				return $this->validator->get_failure_response();
			}
		}

		if ( $request['context'] === 'order_pay' ) {
			/**
			 * @var AbstractGateway $payment_method
			 */
			$payment_method = WC()->payment_gateways()->payment_gateways()[ $request['payment_method'] ];
			$this->factories->billingAgreement->set_needs_shipping( false );
			$params = $this->factories->billingAgreement->from_order( $payment_method );
		} else {
			$params = $this->factories->billingAgreement->from_cart( $request['payment_method'] );
		}

		$token = $this->client->billingAgreementTokens->create( $params );

		if ( ! is_wp_error( $token ) ) {
			return $token->token_id;
		} else {
			/**
			 * @var \WP_Error $token
			 */
			$code = $token->get_error_code();
			if ( $code === 'REFUSED_MARK_REF_TXN_NOT_ENABLED' ) {
				$msg   = __( 'This merchant account is not permitted to create Merchant Initiated Billing Agreements. Please contact PayPal support and request reference transaction access.', 'pymntpl-paypal-woocommerce' );
				$token = new \WP_Error( $token->get_error_code(), $msg, $token->get_error_data() );
			}

			return $token;
		}
	}

	public function handle_get_request( \WP_REST_Request $request ) {
		$id = $request['id'];

		return $this->client->billingAgreementTokens->retrieve( $id );
	}

}