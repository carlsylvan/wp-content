<?php
/**
 * The template for displaying search results pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#search-result
 *
 * @package Big_Bob
 */

get_header();


if ( is_active_sidebar( 'sidebar-1' ) || has_nav_menu('menu-2')) :
	?>
	<div class="bb-theSqueeze">
	<main id="primary" class="site-main bb-indie-left">
	<div class="bb-alignleftstyle">
	<?php
else :
	?>
	<div class="bb-theSqueeze">
	<main id="primary" class="site-main bb-aligncenterstyle">
	<div><!--no alignment necessary-->
	<?php
endif;

		if ( have_posts() ) : ?>

			<header class="page-header">
				<h1 class="page-title">
					<?php
					/* translators: %s: search query. */
					printf( esc_html__( 'Search Results for: %s', 'big-patterns' ), '<span>' . get_search_query() . '</span>' );
					?>
				</h1>
			</header><!-- .page-header -->

			<?php
			/* Start the Loop */
			while ( have_posts() ) :
				the_post();

				/**
				 * Run the loop for the search to output the results.
				 * If you want to overload this in a child theme then include a file
				 * called content-search.php and that will be used instead.
				 */
				get_template_part( 'template-parts/content', 'search' );

			endwhile;

			the_posts_pagination( array(
				'mid_size' => 3,
			) );

		else :

			get_template_part( 'template-parts/content', 'none' );

		endif;
		?>
	</div><!--close alignment-->
	</main><!-- #main -->

<?php
get_sidebar('sidebar-1');
get_sidebar('sidebar-2');
get_footer();
	?>
	</div><!--the squeeze-->
	<?php
