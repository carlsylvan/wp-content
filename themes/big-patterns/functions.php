<?php
/**
 * Big Patterns functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Big_Bob
 */

if ( ! defined( 'BIG_PATTERNS_VERSION' ) ) {
	// Replace the version number of the theme on each release.
	$theme_data = wp_get_theme();
	define( 'BIG_PATTERNS_VERSION', $theme_data->get( 'Version' ) );
}

if ( ! function_exists( 'big_bob_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function big_bob_setup() {

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus(
			array(
				'menu-1' => esc_html__( 'Navbar', 'big-patterns' ),
				'menu-2' => esc_html__( 'Main Sidebar', 'big-patterns' ),
				'menu-3' => esc_html__( 'Footer', 'big-patterns' ),
				'menu-4' => esc_html__( 'Page Sidebar', 'big-patterns' ),
			)
		);

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support(
			'html5',
			array(
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
				'style',
				'script',
			)
		);

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support(
			'custom-logo',
			array(
				'height'      => 88,
				'width'       => 191,
				'flex-width'  => true,
				'flex-height' => false,
			)
		);

		add_theme_support('header_text');
		add_theme_support('align-wide');
	}
endif;
add_action( 'after_setup_theme', 'big_bob_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function big_bob_content_width() {
	// This variable is intended to be overruled from themes.
	// Open WPCS issue: {@link https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/issues/1043}.
	// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
	$GLOBALS['content_width'] = apply_filters( 'big_bob_content_width', 640 );
}
add_action( 'after_setup_theme', 'big_bob_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function big_bob_widgets_init() {
	register_sidebar(
		array(
			'name'          => esc_html__( 'Main Sidebar 1', 'big-patterns' ),
			'id'            => 'sidebar-1',
			'description'   => esc_html__( 'This will serve widgets (blocks) to the top sidebar of any non-page areas of your website.
			This includes any section of your site that is not explicitly built as a page (posts, 404, search, etc.).
			This sidebar includes a sticky feature that can be toggled on and off in the Navigation section of the 
			customizer.  If you add a Main Sidebar 2, then this sidebar will remain static, and sidebar 2 will
			become sticky.  If a main sidebar menu is used, then the widgets (blocks) for this area will be 
			featured below it.', 'big-patterns' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);
	register_sidebar(
		array(
			'name'          => esc_html__( 'Main Sidebar 2', 'big-patterns' ),
			'id'            => 'sidebar-2',
			'description'   => esc_html__( 'Please read the description for Main Sidebar 1 before reading this 
			description.  This will only be displayed if Main Sidebar 1 is displayed.  This sidebar includes a 
			sticky feature that can be toggled on and off in the Navigation section of the customizer.
			This will be set below the first sidebar.', 'big-patterns' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);
	register_sidebar(
		array(
			'name'          => esc_html__( 'Page Sidebar 1', 'big-patterns' ),
			'id'            => 'sidebar-3',
			'description'   => esc_html__( 'This will serve widgets (blocks) to the top sidebar of a page built
			using pages (not posts).  This sidebar includes a sticky feature that can be toggled on and off in the 
			Navigation section of the customizer.  You can also remove this sidebar from pages by using the control
			in the Layout section of the customizer, or you can select the No Sidebar Template in the block editor.
			Note that you may need to publish the page before you can see the No Sidebar Template take effect.
			If a main sidebar menu is used, then the widgets (blocks) for this area will be featured below it.', 'big-patterns' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);
	register_sidebar(
		array(
			'name'          => esc_html__( 'Page Sidebar 2', 'big-patterns' ),
			'id'            => 'sidebar-4',
			'description'   => esc_html__( 'Please read the description for Page Sidebar 1 before reading this 
			description.  This will only be displayed if Page Sidebar 1 is displayed.  This sidebar includes a 
			sticky feature that can be toggled on and off in the Navigation section of the customizer.
			This will be set below the first sidebar.', 'big-patterns' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);
	register_sidebar(
		array(
			'name'          => esc_html__( 'Footer', 'big-patterns' ),
			'id'            => 'footer-1',
			'description'   => esc_html__( 'These widgets (blocks) will be entered into the footer at the bottom of the page.', 'big-patterns' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);
}
add_action( 'widgets_init', 'big_bob_widgets_init' );

/**
 * Apply theme's stylesheet to the visual editor.
 *
 * @uses add_editor_style() Links a stylesheet to visual editor
 * @uses get_stylesheet_uri() Returns URI of theme stylesheet
 */
add_editor_style( get_stylesheet_uri() );

/**
 * Enqueue scripts and styles.
 */
function big_bob_scripts() {
	wp_enqueue_style( 'big-patterns-style', get_stylesheet_uri(), array(), BIG_PATTERNS_VERSION );
	wp_style_add_data( 'big-patterns-style', 'rtl', 'replace' );
    $big_bob_prev_font_1 = "";
    $big_bob_prev_font_2 = "";
    $big_bob_prev_font_3 = "";
    if (get_theme_mod('big_bob_fonts_title', 'IBM Plex Mono') != "") {
        $big_bob_font = get_theme_mod('big_bob_fonts_title', 'IBM Plex Mono');
        $big_bob_font = trim($big_bob_font);
        $big_bob_font = str_replace(' ', '+', $big_bob_font);
        $big_bob_url = 'https://fonts.googleapis.com/css?family=';
        $big_bob_url .= $big_bob_font;
        wp_enqueue_style('big-patterns-google-fonts', esc_url($big_bob_url), false);
        $big_bob_prev_font_1 = $big_bob_url;
    }
	if (get_theme_mod('big_bob_fonts_main_title', 'Syncopate') != "") {
        $big_bob_font = get_theme_mod('big_bob_fonts_main_title', 'Syncopate');
        $big_bob_font = trim($big_bob_font);
        $big_bob_font = str_replace(' ', '+', $big_bob_font);
        $big_bob_url = 'https://fonts.googleapis.com/css?family=';
        $big_bob_url .= $big_bob_font;
        if ($big_bob_url != $big_bob_prev_font_1) {
            wp_enqueue_style('big-patterns-google-fonts-2', esc_url($big_bob_url), false);
        }
		$big_bob_prev_font_2 = $big_bob_url;
    }
    if (get_theme_mod('big_bob_fonts_paragraph', "IBM Plex Mono") != "") {
        $big_bob_font = get_theme_mod('big_bob_fonts_paragraph', "IBM Plex Mono");
        $big_bob_font = trim($big_bob_font);
        $big_bob_font = str_replace(' ', '+', $big_bob_font);
        $big_bob_url = 'https://fonts.googleapis.com/css?family=';
        $big_bob_url .= $big_bob_font;
        if (($big_bob_url != $big_bob_prev_font_1) && ($big_bob_url != $big_bob_prev_font_2)) {
            wp_enqueue_style('big-patterns-google-fonts-3', esc_url($big_bob_url), false);
        }
		$big_bob_prev_font_3 = $big_bob_url;
    }
    if (get_theme_mod('big_bob_fonts_misc', 'Syncopate') != "") {
        $big_bob_font = get_theme_mod('big_bob_fonts_misc', 'Syncopate');
        $big_bob_font = trim($big_bob_font);
        $big_bob_font = str_replace(' ', '+', $big_bob_font);
        $big_bob_url = 'https://fonts.googleapis.com/css?family=';
        $big_bob_url .= $big_bob_font;
        if (($big_bob_url != $big_bob_prev_font_1) && ($big_bob_url != $big_bob_prev_font_2) && ($big_bob_url != $big_bob_prev_font_3)) {
            wp_enqueue_style('big-patterns-google-fonts-4', esc_url($big_bob_url), false);
        }
    }
	wp_enqueue_style('big-patterns-font-awesome', get_template_directory_uri() . '/vendor/fontawesome-free/css/all.min.css');
	wp_enqueue_script( 'big-patterns-scripts-js', get_template_directory_uri() . '/js/big-patterns-scripts.js?v=0.4', array('jquery'), '20160909', true );

	wp_enqueue_script( 'big-patterns-skip-link-focus-fix', get_template_directory_uri() . '/js/skip-link-focus-fix.js', array(), BIG_PATTERNS_VERSION, true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'big_bob_scripts' );

/*block extensions*/
function big_bob_guten_enqueue() {
    wp_enqueue_script(
        'big-patterns-guten-script',
        get_template_directory_uri() . '/js/big-patterns-guten.js?v=0.1',
		array( 'wp-blocks' )
    );
}
add_action( 'enqueue_block_editor_assets', 'big_bob_guten_enqueue' );//has to be added to block editor assets

/*block variations*/
function prefix_editor_assets() {
	wp_enqueue_script(
		'prefix-block-variations',
		get_template_directory_uri() . '/js/block-variation.js',
		array( 'wp-blocks' )
		);
	}
add_action( 'enqueue_block_editor_assets', 'prefix_editor_assets' );


/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}

function big_bob_register_my_pattern_categories() {
	register_block_pattern_category(
		'big_bob-cover-patterns',
		array( 'label' => __( 'Cover', 'big-patterns' ) )
	);
	register_block_pattern_category(
		'big_bob-nav-color-patterns',
		array( 'label' => __( 'Navbar Colors', 'big-patterns' ) )
	);
	register_block_pattern_category(
		'big_bob-body-color-patterns',
		array( 'label' => __( 'Body Colors', 'big-patterns' ) )
	);
	register_block_pattern_category(
		'big_bob-mixed-color-patterns',
		array( 'label' => __( 'Mixed Colors', 'big-patterns' ) )
	);
	register_block_pattern_category(
		'big_bob-footer-patterns',
		array( 'label' => __( 'Footer', 'big-patterns' ) )
	);
	register_block_pattern_category(
		'big_bob-images-text-patterns',
		array( 'label' => __( 'Images and Text', 'big-patterns' ) )
	);
	register_block_pattern_category(
		'big_bob-text-patterns',
		array( 'label' => __( 'Text', 'big-patterns' ) )
	);
	register_block_pattern_category(
		'big_bob-post-patterns',
		array( 'label' => __( 'Blog', 'big-patterns' ) )
	);
}
   
add_action( 'init', 'big_bob_register_my_pattern_categories' );

/*These are the core patterns being removed:
core/query-standard-posts,  core/query-medium-posts,  core/query-small-posts,core/query-grid-posts,  core/query-large-title-posts,
core/query-offset-posts,  core/social-links-shared-background-color,*/
remove_theme_support('core-block-patterns');

function big_bob_register_my_patterns() {
	register_block_pattern(
		'big-patterns/four-images-with-text-nav-colors',
		array(
			'title'      => __( 'Four Images with Text set to Navbar Colors
				(prieview in new tab)', 'big-patterns' ),
			'categories' => array( 'big_bob-nav-color-patterns' ),
			'content'    => '<!-- wp:group {"className":"bb-four-images-text bb-nav-colors"} -->
			<div class="wp-block-group bb-four-images-text bb-nav-colors"><!-- wp:group -->
			<div class="wp-block-group"><!-- wp:media-text {"mediaPosition":"right"} -->
			<div class="wp-block-media-text alignwide has-media-on-the-right is-stacked-on-mobile"><figure class="wp-block-media-text__media"></figure><div class="wp-block-media-text__content"><!-- wp:heading -->
			<h2>Section Title</h2>
			<!-- /wp:heading -->
			
			<!-- wp:paragraph -->
			<p>Describe what the content and images are about here.</p>
			<!-- /wp:paragraph --></div></div>
			<!-- /wp:media-text -->
			
			<!-- wp:columns -->
			<div class="wp-block-columns"><!-- wp:column -->
			<div class="wp-block-column"><!-- wp:heading {"placeholder":"Title","align":"center"} -->
			<h2></h2>
			<!-- /wp:heading -->
			
			<!-- wp:image {"align":"center"} -->
			<figure class="wp-block-image aligncenter"><img alt=""/></figure>
			<!-- /wp:image -->
			
			<!-- wp:paragraph {"placeholder":"Write your description here."} -->
			<p></p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:column -->
			
			<!-- wp:column -->
			<div class="wp-block-column"><!-- wp:heading {"placeholder":"Title","align":"center"} -->
			<h2></h2>
			<!-- /wp:heading -->
			
			<!-- wp:image {"align":"center"} -->
			<figure class="wp-block-image aligncenter"><img alt=""/></figure>
			<!-- /wp:image -->
			
			<!-- wp:paragraph {"placeholder":"Write your description here."} -->
			<p></p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:column -->
			
			<!-- wp:column -->
			<div class="wp-block-column"><!-- wp:heading {"placeholder":"Title","align":"center"} -->
			<h2></h2>
			<!-- /wp:heading -->
			
			<!-- wp:image {"align":"center"} -->
			<figure class="wp-block-image aligncenter"><img alt=""/></figure>
			<!-- /wp:image -->
			
			<!-- wp:paragraph {"placeholder":"Write your description here."} -->
			<p></p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:column --></div>
			<!-- /wp:columns --></div>
			<!-- /wp:group --></div>
			<!-- /wp:group -->',
		)
	);
	register_block_pattern(
		'big-patterns/four-images-with-text-body-colors',
		array(
			'title'      => __( 'Four Images with Text set to Body Colors
				(prieview in new tab)', 'big-patterns' ),
			'categories' => array( 'big_bob-body-color-patterns' ),
			'content'    => '<!-- wp:group {"className":"bb-four-images-text"} -->
			<div class="wp-block-group bb-four-images-text"><!-- wp:group -->
			<div class="wp-block-group"><!-- wp:media-text {"mediaPosition":"right"} -->
			<div class="wp-block-media-text alignwide has-media-on-the-right is-stacked-on-mobile"><figure class="wp-block-media-text__media"></figure><div class="wp-block-media-text__content"><!-- wp:heading -->
			<h2>Section Title</h2>
			<!-- /wp:heading -->
			
			<!-- wp:paragraph -->
			<p>Describe what the content and images are about here.</p>
			<!-- /wp:paragraph --></div></div>
			<!-- /wp:media-text -->
			
			<!-- wp:columns -->
			<div class="wp-block-columns"><!-- wp:column -->
			<div class="wp-block-column"><!-- wp:heading {"placeholder":"Title","align":"center"} -->
			<h2></h2>
			<!-- /wp:heading -->
			
			<!-- wp:image {"align":"center"} -->
			<figure class="wp-block-image aligncenter"><img alt=""/></figure>
			<!-- /wp:image -->
			
			<!-- wp:paragraph {"placeholder":"Write your description here."} -->
			<p></p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:column -->
			
			<!-- wp:column -->
			<div class="wp-block-column"><!-- wp:heading {"placeholder":"Title","align":"center"} -->
			<h2></h2>
			<!-- /wp:heading -->
			
			<!-- wp:image {"align":"center"} -->
			<figure class="wp-block-image aligncenter"><img alt=""/></figure>
			<!-- /wp:image -->
			
			<!-- wp:paragraph {"placeholder":"Write your description here."} -->
			<p></p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:column -->
			
			<!-- wp:column -->
			<div class="wp-block-column"><!-- wp:heading {"placeholder":"Title","align":"center"} -->
			<h2></h2>
			<!-- /wp:heading -->
			
			<!-- wp:image {"align":"center"} -->
			<figure class="wp-block-image aligncenter"><img alt=""/></figure>
			<!-- /wp:image -->
			
			<!-- wp:paragraph {"placeholder":"Write your description here."} -->
			<p></p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:column --></div>
			<!-- /wp:columns --></div>
			<!-- /wp:group --></div>
			<!-- /wp:group -->',
		)
	);
	register_block_pattern(
		'big-patterns/image-collage-with-text-body-colors',
		array(
			'title'      => __( 'Image Collage with Text set to Body Colors
				(prieview in new tab)', 'big-patterns' ),
			'categories' => array( 'big_bob-body-color-patterns' ),
			'content'    => '<!-- wp:group {"align":"full","className":"bb-positive-growth"} -->
			<div class="wp-block-group alignfull bb-positive-growth"><!-- wp:columns {"align":"wide"} -->
			<div class="wp-block-columns alignwide"><!-- wp:column -->
			<div class="wp-block-column"><!-- wp:heading {"level":6} -->
			<h6 id="ecosystem">ECOSYSTEM</h6>
			<!-- /wp:heading -->
			
			<!-- wp:paragraph {"style":{"typography":{"lineHeight":"1.1","fontSize":"5vw"}}} -->
			<p style="font-size:5vw;line-height:1.1"><strong>Positive growth.</strong></p>
			<!-- /wp:paragraph -->
			
			<!-- wp:spacer {"height":"5px"} -->
			<div style="height:5px" aria-hidden="true" class="wp-block-spacer"></div>
			<!-- /wp:spacer --></div>
			<!-- /wp:column --></div>
			<!-- /wp:columns -->
			
			<!-- wp:columns {"align":"wide"} -->
			<div class="wp-block-columns alignwide"><!-- wp:column {"width":"33.38%"} -->
			<div class="wp-block-column" style="flex-basis:33.38%"><!-- wp:paragraph {"fontSize":"extra-small"} -->
			<p class="has-extra-small-font-size"><em>Nature</em>, in the common sense, refers to essences unchanged by man; space, the air, the river, the leaf.&nbsp;<em>Art</em>&nbsp;is applied to the mixture of his will with the same things, as in a house, a canal, a statue, a picture. But his operations taken together are so insignificant, a little chipping, baking, patching, and washing, that in an impression so grand as that of the world on the human mind, they do not vary the result.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:column -->
			
			<!-- wp:column {"width":"33%"} -->
			<div class="wp-block-column" style="flex-basis:33%"><!-- wp:spacer -->
			<div style="height:100px" aria-hidden="true" class="wp-block-spacer"></div>
			<!-- /wp:spacer -->
			
			<!-- wp:image {"sizeSlug":"large","linkDestination":"none"} -->
			<figure class="wp-block-image size-large"><img alt=""/></figure>
			<!-- /wp:image --></div>
			<!-- /wp:column -->
			
			<!-- wp:column {"width":"33.62%"} -->
			<div class="wp-block-column" style="flex-basis:33.62%"><!-- wp:image {"sizeSlug":"large","linkDestination":"none","className":"is-style-default"} -->
			<figure class="wp-block-image size-large is-style-default"><img alt=""/></figure>
			<!-- /wp:image --></div>
			<!-- /wp:column --></div>
			<!-- /wp:columns -->
			
			<!-- wp:columns {"align":"wide"} -->
			<div class="wp-block-columns alignwide"><!-- wp:column {"width":"67%"} -->
			<div class="wp-block-column" style="flex-basis:67%"><!-- wp:image {"align":"right","sizeSlug":"large","linkDestination":"none"} -->
			<figure class="wp-block-image alignright size-large"><img alt=""/></figure>
			<!-- /wp:image --></div>
			<!-- /wp:column -->
			
			<!-- wp:column {"verticalAlignment":"center","width":"33%"} -->
			<div class="wp-block-column is-vertically-aligned-center" style="flex-basis:33%"><!-- wp:paragraph {"fontSize":"extra-small"} -->
			<p class="has-extra-small-font-size">Undoubtedly we have no questions to ask which are unanswerable. We must trust the perfection of the creation so far, as to believe that whatever curiosity the order of things has awakened in our minds, the order of things can satisfy. Every man\'s condition is a solution in hieroglyphic to those inquiries he would put.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:column --></div>
			<!-- /wp:columns --></div>
			<!-- /wp:group -->',
		)
	);
	register_block_pattern(
		'big-patterns/image-collage-with-text-nav-colors',
		array(
			'title'      => __( 'Image Collage with Text set to Nav Colors
				(prieview in new tab)', 'big-patterns' ),
			'categories' => array( 'big_bob-nav-color-patterns' ),
			'content'    => '<!-- wp:group {"align":"full","className":"bb-positive-growth bb-nav-colors"} -->
			<div class="wp-block-group alignfull bb-positive-growth bb-nav-colors"><!-- wp:columns {"align":"wide"} -->
			<div class="wp-block-columns alignwide"><!-- wp:column -->
			<div class="wp-block-column"><!-- wp:heading {"level":6} -->
			<h6 id="ecosystem">ECOSYSTEM</h6>
			<!-- /wp:heading -->
			
			<!-- wp:paragraph {"style":{"typography":{"lineHeight":"1.1","fontSize":"5vw"}}} -->
			<p style="font-size:5vw;line-height:1.1"><strong>Positive growth.</strong></p>
			<!-- /wp:paragraph -->
			
			<!-- wp:spacer {"height":"5px"} -->
			<div style="height:5px" aria-hidden="true" class="wp-block-spacer"></div>
			<!-- /wp:spacer --></div>
			<!-- /wp:column --></div>
			<!-- /wp:columns -->
			
			<!-- wp:columns {"align":"wide"} -->
			<div class="wp-block-columns alignwide"><!-- wp:column {"width":"33.38%"} -->
			<div class="wp-block-column" style="flex-basis:33.38%"><!-- wp:paragraph {"fontSize":"extra-small"} -->
			<p class="has-extra-small-font-size"><em>Nature</em>, in the common sense, refers to essences unchanged by man; space, the air, the river, the leaf.&nbsp;<em>Art</em>&nbsp;is applied to the mixture of his will with the same things, as in a house, a canal, a statue, a picture. But his operations taken together are so insignificant, a little chipping, baking, patching, and washing, that in an impression so grand as that of the world on the human mind, they do not vary the result.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:column -->
			
			<!-- wp:column {"width":"33%"} -->
			<div class="wp-block-column" style="flex-basis:33%"><!-- wp:spacer -->
			<div style="height:100px" aria-hidden="true" class="wp-block-spacer"></div>
			<!-- /wp:spacer -->
			
			<!-- wp:image {"sizeSlug":"large","linkDestination":"none"} -->
			<figure class="wp-block-image size-large"><img alt=""/></figure>
			<!-- /wp:image --></div>
			<!-- /wp:column -->
			
			<!-- wp:column {"width":"33.62%"} -->
			<div class="wp-block-column" style="flex-basis:33.62%"><!-- wp:image {"sizeSlug":"large","linkDestination":"none","className":"is-style-default"} -->
			<figure class="wp-block-image size-large is-style-default"><img alt=""/></figure>
			<!-- /wp:image --></div>
			<!-- /wp:column --></div>
			<!-- /wp:columns -->
			
			<!-- wp:columns {"align":"wide"} -->
			<div class="wp-block-columns alignwide"><!-- wp:column {"width":"67%"} -->
			<div class="wp-block-column" style="flex-basis:67%"><!-- wp:image {"align":"right","sizeSlug":"large","linkDestination":"none"} -->
			<figure class="wp-block-image alignright size-large"><img alt=""/></figure>
			<!-- /wp:image --></div>
			<!-- /wp:column -->
			
			<!-- wp:column {"verticalAlignment":"center","width":"33%"} -->
			<div class="wp-block-column is-vertically-aligned-center" style="flex-basis:33%"><!-- wp:paragraph {"fontSize":"extra-small"} -->
			<p class="has-extra-small-font-size">Undoubtedly we have no questions to ask which are unanswerable. We must trust the perfection of the creation so far, as to believe that whatever curiosity the order of things has awakened in our minds, the order of things can satisfy. Every man\'s condition is a solution in hieroglyphic to those inquiries he would put.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:column --></div>
			<!-- /wp:columns --></div>
			<!-- /wp:group -->',
		)
	);
	register_block_pattern(
		'big-patterns/forest-cover',
		array(
			'title'      => __( 'Large Cover Block
				(prieview in new tab)', 'big-patterns' ),
			'categories' => array( 'big_bob-cover-patterns' ),
			'content'    => '<!-- wp:cover {"url":"' . esc_url(get_template_directory_uri()) .'/image/StockSnap_OYEIB7P371x1800.jpg","dimRatio":60,"minHeight":800,"align":"full","className":"bb-forest-cover"} -->
			<div class="wp-block-cover alignfull bb-forest-cover" style="min-height:800px"><span aria-hidden="true" class="wp-block-cover__background has-background-dim-60 has-background-dim"></span><img class="wp-block-cover__image-background" alt="" src="' . esc_url(get_template_directory_uri()) .'/image/StockSnap_OYEIB7P371x1800.jpg" data-object-fit="cover"/><div class="wp-block-cover__inner-container"><!-- wp:heading {"textAlign":"left","align":"wide","style":{"color":{"text":"#ffe074"},"typography":{"fontSize":"64px"}}} -->
			<h2 class="alignwide has-text-align-left has-text-color" style="color:#ffe074;font-size:64px">Welcome to Big Patterns</h2>
			<!-- /wp:heading -->
			
			<!-- wp:columns {"align":"wide"} -->
			<div class="wp-block-columns alignwide"><!-- wp:column {"width":"55%"} -->
			<div class="wp-block-column" style="flex-basis:55%"><!-- wp:spacer {"height":"330px"} -->
			<div style="height:330px" aria-hidden="true" class="wp-block-spacer"></div>
			<!-- /wp:spacer -->
			
			<!-- wp:paragraph {"style":{"color":{"text":"#ffe074"},"typography":{"lineHeight":"1.3","fontSize":"12px"}}} -->
			<p class="has-text-color" style="color:#ffe074;font-size:12px;line-height:1.3"><em>This is dummy text.  You should update it to something more appropriate to your site.</em></p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:column -->
			
			<!-- wp:column -->
			<div class="wp-block-column"></div>
			<!-- /wp:column --></div>
			<!-- /wp:columns --></div></div>
			<!-- /wp:cover -->',
		)
	);
	register_block_pattern(
		'big-patterns/fuji-cover',
		array(
			'title'      => __( 'Cover Block with Images
				(prieview in new tab)', 'big-patterns' ),
			'categories' => array( 'big_bob-cover-patterns' ),
			'content'    => '<!-- wp:cover {"url":"' . esc_url(get_template_directory_uri()) .'/image/StockSnap_S6YF6QRKIRx1800.jpg","id":665,"dimRatio":60,"overlayColor":"black","focalPoint":{"x":"0.76","y":"0.48"},"contentPosition":"center center","align":"full","className":"bb-cover-with-images","style":{"spacing":{"padding":{"top":"5vw","right":"5vw","bottom":"5vw","left":"5vw"}}}} -->
			<div class="wp-block-cover alignfull bb-cover-with-images" style="padding-top:5vw;padding-right:5vw;padding-bottom:5vw;padding-left:5vw"><span aria-hidden="true" class="wp-block-cover__background has-black-background-color has-background-dim-60 has-background-dim"></span><img class="wp-block-cover__image-background wp-image-665" alt="" src="' . esc_url(get_template_directory_uri()) .'/image/StockSnap_S6YF6QRKIRx1800.jpg" style="object-position:76% 48%" data-object-fit="cover" data-object-position="76% 48%"/><div class="wp-block-cover__inner-container"><!-- wp:columns {"verticalAlignment":"top","align":"full"} -->
			<div class="wp-block-columns alignfull are-vertically-aligned-top"><!-- wp:column {"verticalAlignment":"top","width":"72%","style":{"spacing":{"padding":{"right":"4vw","top":"0vw","bottom":"0vw","left":"0vw"}}}} -->
			<div class="wp-block-column is-vertically-aligned-top" style="padding-top:0vw;padding-right:4vw;padding-bottom:0vw;padding-left:0vw;flex-basis:72%"><!-- wp:image {"id":666,"sizeSlug":"large","linkDestination":"none","style":{"border":{"radius":"4px"}}} -->
			<figure class="wp-block-image size-large" style="border-radius:4px"><img alt="" class="wp-image-666"/></figure>
			<!-- /wp:image -->
			
			<!-- wp:spacer {"height":"40px"} -->
			<div style="height:40px" aria-hidden="true" class="wp-block-spacer"></div>
			<!-- /wp:spacer -->
			
			<!-- wp:group {"style":{"color":{"text":"#ffffff"},"elements":{"link":{"color":{"text":"#ffffff"}}}}} -->
			<div class="wp-block-group has-text-color has-link-color" style="color:#ffffff"><!-- wp:quote {"className":"is-style-default"} -->
			<blockquote class="wp-block-quote is-style-default"><p><em>This is dummy text.  You should update it to something more appropriate to your site.</em></p><cite><strong>— Big Patterns</strong></cite></blockquote>
			<!-- /wp:quote --></div>
			<!-- /wp:group --></div>
			<!-- /wp:column -->
			
			<!-- wp:column {"verticalAlignment":"top","width":"33.33%"} -->
			<div class="wp-block-column is-vertically-aligned-top" style="flex-basis:33.33%"><!-- wp:spacer {"height":"40px"} -->
			<div style="height:40px" aria-hidden="true" class="wp-block-spacer"></div>
			<!-- /wp:spacer -->
			
			<!-- wp:image {"id":664,"sizeSlug":"large","linkDestination":"none","style":{"border":{"radius":"4px"}}} -->
			<figure class="wp-block-image size-large" style="border-radius:4px"><img alt="" class="wp-image-664"/></figure>
			<!-- /wp:image --></div>
			<!-- /wp:column --></div>
			<!-- /wp:columns --></div></div>
			<!-- /wp:cover -->',
		)
	);
	register_block_pattern(
		'big-patterns/slant-call-to-action',
		array(
			'title'      => __( 'Slanted Call to Action with Mixed Colors
				(prieview in new tab)', 'big-patterns' ),
			'categories' => array( 'big_bob-mixed-color-patterns' ),
			'content'    => '<!-- wp:group {"align":"full","style":{"spacing":{"padding":{"top":"13em","bottom":"13em"}},"color":{"gradient":"linear-gradient(150deg,rgba(255,255,255,0) 0%,rgba(255,255,255,0) 25%,rgb(34,34,34) 25%,rgb(17,17,17) 75%,rgba(255,255,255,0) 75%,rgba(248,213,165,0) 100%)"}},"textColor":"white","className":"bb-slanted-button"} -->
			<div class="wp-block-group alignfull bb-slanted-button has-white-color has-text-color has-background" style="background:linear-gradient(150deg,rgba(255,255,255,0) 0%,rgba(255,255,255,0) 25%,rgb(34,34,34) 25%,rgb(17,17,17) 75%,rgba(255,255,255,0) 75%,rgba(248,213,165,0) 100%);padding-top:13em;padding-bottom:13em"><!-- wp:heading {"textAlign":"center","style":{"typography":{"lineHeight":"1.2"}}} -->
			<h2 class="has-text-align-center" id="art-beaute" style="line-height:1.2">Customizer Defined Colors</h2>
			<!-- /wp:heading -->
			
			<!-- wp:paragraph {"align":"center"} -->
			<p class="has-text-align-center">The interior colors will be the same as your body colors.  The corner colors will be the same as your navbar colors.</p>
			<!-- /wp:paragraph -->
			
			<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center","orientation":"horizontal"}} -->
			<div class="wp-block-buttons"><!-- wp:button {"className":"is-style-outline"} -->
			<div class="wp-block-button is-style-outline"><a class="wp-block-button__link" href="#0">Download</a></div>
			<!-- /wp:button --></div>
			<!-- /wp:buttons --></div>
			<!-- /wp:group -->',
		)
	);
	register_block_pattern(
		'big-patterns/three-column-footer',
		array(
			'title'      => __( 'Three Column Footer
				(prieview in new tab)', 'big-patterns' ),
			'categories' => array( 'big_bob-footer-patterns' ),
			'content'    => '<!-- wp:group {"className":"bb-three-col-foot"} -->
			<div class="wp-block-group bb-three-col-foot"><!-- wp:columns -->
			<div class="wp-block-columns"><!-- wp:column -->
			<div class="wp-block-column"><!-- wp:heading {"level":4,"style":{"typography":{"fontStyle":"normal","fontWeight":"700","textTransform":"capitalize","fontSize":"30px"}}} -->
			<h4 style="font-size:30px;font-style:normal;font-weight:700;text-transform:capitalize">About</h4>
			<!-- /wp:heading -->
			
			<!-- wp:paragraph {"style":{"typography":{"fontSize":"16px"}},"className":"bb-about-footer"} -->
			<p class="bb-about-footer" style="font-size:16px">This is the about section.  Describe what your site is about.  You can control the social link colors with the block editor.</p>
			<!-- /wp:paragraph -->
			
			<!-- wp:social-links {"openInNewTab":true,"className":"is-style-logos-only","style":{"spacing":{"blockGap":{"top":"15px","left":"15px"}}}} -->
			<ul class="wp-block-social-links is-style-logos-only"><!-- wp:social-link {"url":"#","service":"facebook"} /-->
			
			<!-- wp:social-link {"url":"#","service":"twitter"} /-->
			
			<!-- wp:social-link {"url":"#","service":"instagram"} /-->
			
			<!-- wp:social-link {"url":"#","service":"linkedin"} /--></ul>
			<!-- /wp:social-links --></div>
			<!-- /wp:column -->
			
			<!-- wp:column -->
			<div class="wp-block-column"><!-- wp:heading {"level":4,"style":{"typography":{"textTransform":"capitalize","fontStyle":"normal","fontWeight":"700","fontSize":"30px"}}} -->
			<h4 style="font-size:30px;font-style:normal;font-weight:700;text-transform:capitalize">Links</h4>
			<!-- /wp:heading -->
			
			<!-- wp:group {"className":"bb-group-footer-links"} -->
			<div class="wp-block-group bb-group-footer-links"><!-- wp:paragraph {"style":{"typography":{"fontSize":"16px"}}} -->
			<p style="font-size:16px"><a href="#" target="_blank" rel="noreferrer noopener">First Link</a><br><a href="#" target="_blank" rel="noreferrer noopener">Second Link</a><br><a href="#" target="_blank" rel="noreferrer noopener">Third Link</a><br><a href="#" target="_blank" rel="noreferrer noopener">Fourth Link</a></p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:column -->
			
			<!-- wp:column -->
			<div class="wp-block-column"><!-- wp:heading {"level":4,"style":{"typography":{"fontSize":"30px","fontStyle":"normal","fontWeight":"700","textTransform":"capitalize"}}} -->
			<h4 style="font-size:30px;font-style:normal;font-weight:700;text-transform:capitalize">News</h4>
			<!-- /wp:heading -->
			
			<!-- wp:latest-posts {"displayAuthor":true} /-->
			
			<!-- wp:search {"label":"","buttonText":"Search"} /--></div>
			<!-- /wp:column --></div>
			<!-- /wp:columns --></div>
			<!-- /wp:group -->',
		)
	);
	register_block_pattern(
		'big-patterns/high-low-images-text',
		array(
			'title'      => __( 'A High Image Offset Against a Low Imgage
				(prieview in new tab)', 'big-patterns' ),
			'categories' => array( 'big_bob-images-text-patterns' ),
			'content'    => '<!-- wp:columns {"className":"bb-high-low-image-text"} -->
			<div class="wp-block-columns bb-high-low-image-text"><!-- wp:column -->
			<div class="wp-block-column"><!-- wp:image {"id":525,"sizeSlug":"large","linkDestination":"none"} -->
			<figure class="wp-block-image size-large"><img alt="" class="wp-image-525"/></figure>
			<!-- /wp:image -->
			
			<!-- wp:paragraph {"style":{"typography":{"fontSize":"14px"}}} -->
			<p style="font-size:14px"><strong>White Irises</strong><br>Ogawa Kazumasa</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:column -->
			
			<!-- wp:column -->
			<div class="wp-block-column"><!-- wp:spacer -->
			<div style="height:100px" aria-hidden="true" class="wp-block-spacer"></div>
			<!-- /wp:spacer -->
			
			<!-- wp:paragraph {"style":{"typography":{"fontSize":"14px"}}} -->
			<p style="font-size:14px"><strong>Cherry Blossom</strong><br>Ogawa Kazumasa</p>
			<!-- /wp:paragraph -->
			
			<!-- wp:image {"id":524,"sizeSlug":"large","linkDestination":"none"} -->
			<figure class="wp-block-image size-large"><img alt="" class="wp-image-524"/></figure>
			<!-- /wp:image --></div>
			<!-- /wp:column --></div>
			<!-- /wp:columns -->',
		)
	);
	register_block_pattern(
		'big-patterns/image-angled-overlay-text',
		array(
			'title'      => __( 'An Image with Angled Overlay and Text
				(prieview in new tab)', 'big-patterns' ),
			'categories' => array( 'big_bob-nav-color-patterns' ),
			'content'    => '<!-- wp:cover {"url":"' . esc_url(get_template_directory_uri()) .'/image/StockSnap_S6YF6QRKIRx1800.jpg","id":764,"minHeight":700,"customGradient":"linear-gradient(135deg,rgb(54,6,6) 0%,rgb(54,6,6) 50%,rgba(155,82,224,0) 50%,rgba(155,82,224,0) 100%)","contentPosition":"top left","align":"wide","className":"bb-angled-overlay","style":{"spacing":{"padding":{"top":"2em","right":"2em","bottom":"2em","left":"2em"}}}} -->
			<div class="wp-block-cover alignwide has-custom-content-position is-position-top-left bb-angled-overlay" style="padding-top:2em;padding-right:2em;padding-bottom:2em;padding-left:2em;min-height:700px"><span aria-hidden="true" class="wp-block-cover__background has-background-dim-100 has-background-dim wp-block-cover__gradient-background has-background-gradient" style="background:linear-gradient(135deg,rgb(54,6,6) 0%,rgb(54,6,6) 50%,rgba(155,82,224,0) 50%,rgba(155,82,224,0) 100%)"></span><img class="wp-block-cover__image-background wp-image-764" alt="A container with an image background with an angled red overlay atop it. A heading and paragraph are aligned to the top left of the container." src="' . esc_url(get_template_directory_uri()) .'/image/StockSnap_S6YF6QRKIRx1800.jpg" data-object-fit="cover"/><div class="wp-block-cover__inner-container"><!-- wp:heading {"style":{"elements":{"link":{"color":{"text":"var:preset|color|white"}}},"typography":{"lineHeight":"1"}},"textColor":"white","fontSize":"huge"} -->
			<h2 class="has-white-color has-text-color has-link-color has-huge-font-size" id="art-nouveau-patterns" style="line-height:1"><strong>Navbar Colors:<br>Patterns</strong></h2>
			<!-- /wp:heading -->
			
			<!-- wp:paragraph {"style":{"elements":{"link":{"color":{"text":"var:preset|color|white"}}}},"textColor":"white","fontSize":"normal"} -->
			<p class="has-white-color has-text-color has-link-color has-normal-font-size">The overlay background colors and <br>text colors will be set to your<br>navbar colors.</p>
			<!-- /wp:paragraph --></div></div>
			<!-- /wp:cover -->',
		)
	);
	register_block_pattern(
		'big-patterns/images-nav-colored-strip',
		array(
			'title'      => __( 'Two Images with a Nav Colored Strip
				(prieview in new tab)', 'big-patterns' ),
			'categories' => array( 'big_bob-mixed-color-patterns' ),
			'content'    => '<!-- wp:group {"align":"full","style":{"color":{"gradient":"linear-gradient(180deg,rgba(255,251,15,0) 0%,rgba(255,251,15,0) 25%,rgb(255,253,16) 25%,rgb(255,253,16) 75%,rgba(255,251,15,0) 75%,rgba(255,251,15,0) 100%)"}},"className":"bb-two-image-nav-strip"} -->
			<div class="wp-block-group alignfull bb-two-image-nav-strip has-background" style="background:linear-gradient(180deg,rgba(255,251,15,0) 0%,rgba(255,251,15,0) 25%,rgb(255,253,16) 25%,rgb(255,253,16) 75%,rgba(255,251,15,0) 75%,rgba(255,251,15,0) 100%)"><!-- wp:columns -->
			<div class="wp-block-columns"><!-- wp:column {"width":"50%"} -->
			<div class="wp-block-column" style="flex-basis:50%"><!-- wp:image {"id":686,"sizeSlug":"large","linkDestination":"none"} -->
			<figure class="wp-block-image size-large"><img alt="" class="wp-image-686"/></figure>
			<!-- /wp:image --></div>
			<!-- /wp:column -->
			
			<!-- wp:column {"width":"50%"} -->
			<div class="wp-block-column" style="flex-basis:50%"><!-- wp:spacer {"height":"31px"} -->
			<div style="height:31px" aria-hidden="true" class="wp-block-spacer"></div>
			<!-- /wp:spacer -->
			
			<!-- wp:image {"id":687,"sizeSlug":"large","linkDestination":"none"} -->
			<figure class="wp-block-image size-large"><img alt="" class="wp-image-687"/></figure>
			<!-- /wp:image --></div>
			<!-- /wp:column --></div>
			<!-- /wp:columns --></div>
			<!-- /wp:group -->',
		)
	);
	register_block_pattern(
		'big-patterns/restaurant-menu',
		array(
			'title'      => __( 'Restaurant Menu
				(prieview in new tab)', 'big-patterns' ),
			'categories' => array( 'big_bob-text-patterns' ),
			'content'    => '<!-- wp:group -->
			<div class="wp-block-group"><!-- wp:spacer {"height":"50px"} -->
			<div style="height:50px" aria-hidden="true" class="wp-block-spacer"></div>
			<!-- /wp:spacer -->
			
			<!-- wp:heading {"textAlign":"center","style":{"typography":{"fontSize":48}}} -->
			<h2 class="has-text-align-center" id="a-la-carte" style="font-size:48px"><strong>À La Carte</strong></h2>
			<!-- /wp:heading -->
			
			<!-- wp:paragraph {"align":"center","fontSize":"normal"} -->
			<p class="has-text-align-center has-normal-font-size">Our menu offers a selection of artisan goods.</p>
			<!-- /wp:paragraph -->
			
			<!-- wp:spacer {"height":"10px"} -->
			<div style="height:10px" aria-hidden="true" class="wp-block-spacer"></div>
			<!-- /wp:spacer -->
			
			<!-- wp:separator {"opacity":"css","className":"is-style-default"} -->
			<hr class="wp-block-separator has-css-opacity is-style-default"/>
			<!-- /wp:separator -->
			
			<!-- wp:columns -->
			<div class="wp-block-columns"><!-- wp:column -->
			<div class="wp-block-column"><!-- wp:heading {"level":3,"fontSize":"medium"} -->
			<h3 class="has-medium-font-size" id="tiger-grilled-shrimp-54"><strong>Tiger Grilled Shrimp — $54</strong></h3>
			<!-- /wp:heading -->
			
			<!-- wp:paragraph {"style":{"typography":{"lineHeight":1.6}},"fontSize":"normal"} -->
			<p class="has-normal-font-size" style="line-height:1.6">Grilled tiger shrimp served with garlic butter, basmati rice and vegetables.</p>
			<!-- /wp:paragraph -->
			
			<!-- wp:heading {"level":3,"fontSize":"medium"} -->
			<h3 class="has-medium-font-size" id="grilled-wagyu-steak-99"><strong>Grilled Wagyu Steak — $99</strong></h3>
			<!-- /wp:heading -->
			
			<!-- wp:paragraph {"style":{"typography":{"lineHeight":1.6}},"fontSize":"normal"} -->
			<p class="has-normal-font-size" style="line-height:1.6">A tasty wagyu steak with sweat potato chips and mint sauce.</p>
			<!-- /wp:paragraph -->
			
			<!-- wp:heading {"level":3} -->
			<h3 id="green-burger-99"><strong>Green Burger — $99</strong></h3>
			<!-- /wp:heading -->
			
			<!-- wp:paragraph {"style":{"typography":{"lineHeight":1.6}},"fontSize":"normal"} -->
			<p class="has-normal-font-size" style="line-height:1.6">Green bread with fried chicken, filled with cheese, guacamole and coleslaw. Topped with onion.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:column -->
			
			<!-- wp:column -->
			<div class="wp-block-column"><!-- wp:heading {"level":3,"fontSize":"medium"} -->
			<h3 class="has-medium-font-size" id="salmon-fillet-32"><strong>Salmon Fillet — $32</strong></h3>
			<!-- /wp:heading -->
			
			<!-- wp:paragraph {"style":{"typography":{"lineHeight":1.6}},"fontSize":"normal"} -->
			<p class="has-normal-font-size" style="line-height:1.6">Fresh coast salmon served with chickpeas in tomato, peppers and sour cream.</p>
			<!-- /wp:paragraph -->
			
			<!-- wp:heading {"level":3,"fontSize":"medium"} -->
			<h3 class="has-medium-font-size" id="fresh-tagliolini-35"><strong>Fresh Tagliolini — $35</strong></h3>
			<!-- /wp:heading -->
			
			<!-- wp:paragraph {"style":{"typography":{"lineHeight":1.6}},"fontSize":"normal"} -->
			<p class="has-normal-font-size" style="line-height:1.6">This pasta is one of our most famous dishes, served with king crab and chilli pepper.</p>
			<!-- /wp:paragraph -->
			
			<!-- wp:heading {"level":3} -->
			<h3 id="hot-bold-salad-35"><strong>Hot &amp; Bold Salad — $35</strong></h3>
			<!-- /wp:heading -->
			
			<!-- wp:paragraph {"style":{"typography":{"lineHeight":1.6}},"fontSize":"normal"} -->
			<p class="has-normal-font-size" style="line-height:1.6">Hot chèvre salad with endives, mustard sauce, walnuts, Port wine and pear.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:column --></div>
			<!-- /wp:columns -->
			
			<!-- wp:spacer {"height":"50px"} -->
			<div style="height:50px" aria-hidden="true" class="wp-block-spacer"></div>
			<!-- /wp:spacer --></div>
			<!-- /wp:group -->',
		)
	);
	register_block_pattern(
		'big-patterns/simple-call-to-action',
		array(
			'title'      => __( 'Simple Call to Action Using Body Colors
				(prieview in new tab)', 'big-patterns' ),
			'categories' => array( 'big_bob-body-color-patterns' ),
			'content'    => '<!-- wp:group {"align":"full","className":"bb-simple-call-to-action"} -->
			<div class="wp-block-group alignfull bb-simple-call-to-action"><!-- wp:spacer {"height":"64px"} -->
			<div style="height:64px" aria-hidden="true" class="wp-block-spacer"></div>
			<!-- /wp:spacer -->
			
			<!-- wp:paragraph {"align":"center","style":{"typography":{"lineHeight":".9"}},"fontSize":"small"} -->
			<p class="has-text-align-center has-small-font-size" style="line-height:.9"><strong>GET IN TOUCH</strong></p>
			<!-- /wp:paragraph -->
			
			<!-- wp:heading {"textAlign":"center","style":{"typography":{"fontSize":59,"lineHeight":"1.15"}}} -->
			<h2 class="has-text-align-center" id="schedule-a-visit" style="font-size:59px;line-height:1.15"><strong>Schedule a Visit</strong></h2>
			<!-- /wp:heading -->
			
			<!-- wp:buttons -->
			<div class="wp-block-buttons"><!-- wp:button {"align":"center","className":"is-style-outline"} -->
			<div class="wp-block-button aligncenter is-style-outline"><a class="wp-block-button__link">Contact Us</a></div>
			<!-- /wp:button --></div>
			<!-- /wp:buttons -->
			
			<!-- wp:spacer {"height":"64px"} -->
			<div style="height:64px" aria-hidden="true" class="wp-block-spacer"></div>
			<!-- /wp:spacer --></div>
			<!-- /wp:group -->',
		)
	);
	register_block_pattern(
		'big-patterns/featured-image-with-paragraph',
		array(
			'title'      => __( 'Featured Image with Paragraph
				(prieview in new tab)', 'big-patterns' ),
			'categories' => array( 'big_bob-post-patterns' ),
			'content'    => '<!-- wp:post-featured-image {"className":"is-style-bb-block-fi-fit"} /-->

			<!-- wp:paragraph -->
			<p>This is a block pattern with a featured image.  If you open up a preview tab, then you will see how the image is set to the top and the background of the screen based on the screen size.  If you click on the image, and then click on the settings gear, then click the block tab in the upper right corner, then you will see that there are three style options.  The "Default" and "Fit Top" options both set the image as large as the screen allows without setting the image outside of the viewport.  "Full Top" will make the image as large as is necessary to fill the entire viewport.  Note that if you set a featured image to the homepage, then it will be set it into the body, not into the top of the page.  If you want to set media to the top of the homepage, then you should use the home header media section in the customizer.  You can also use the customizer\'s color section to reduce the opacity of the navbar so that it is easier to see the image.  Note that the featured image has been designed so that it is mobile friendly.</p>
			<!-- /wp:paragraph -->',
		)
	);
  }
   
  add_action( 'init', 'big_bob_register_my_patterns' );
