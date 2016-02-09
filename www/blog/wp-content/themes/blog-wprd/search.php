<?php get_header(); ?>
<aside>
	<?php get_sidebar(); ?>
</aside>
<section>
	<!-- START ARTICLE -->
			<?php is_tag(); 
				global $wp_query;
				$total_results = $wp_query->found_posts;
			?>
			<?php if (have_posts()) : ?>
			<div class="theNavigation"><b>Vous êtes ici</b>&nbsp;&nbsp;<i class="fa fa-angle-right"></i>&nbsp;&nbsp;<a href="<?php echo home_url( ); ?>">Accueil</a>&nbsp;&nbsp;<i class="fa fa-angle-right"></i>&nbsp;&nbsp;<?php printf( __( '<strong>Résultats de la recherche pour les termes</strong> : "<strong>%s</strong>"' ), '<span>' . get_search_query() . '</span>'); ?> (<i><?php echo $total_results; ?> objets trouvés</i>)</div>
			<?php while (have_posts()) : the_post(); ?>
		<article>
			<h1><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h1>
			<date><?php the_time('d'); ?>/<?php the_time('m'); ?></date>
			<p><?php the_excerpt(); ?></p>
			<div class="more"><a href="<?php the_permalink(); ?>" class="read-more">Lire cet article ou cette page <i class="fa fa-angle-right"></i></a>
				<div class="share">
					<span class='st_facebook_hcount' st_title='<?php the_title(); ?>' st_url='<?php the_permalink(); ?>'></span>
					<span class='st_twitter_hcount' st_title='<?php the_title(); ?>' st_url='<?php the_permalink(); ?>'></span>
				</div>
			</div>
		</article>
		<!-- END OF ARTICLE -->
		<?php endwhile; ?>
			<div>
				<?php if(function_exists('wp_pagenavi')) { wp_pagenavi(); } ?>
			</div>
		<?php else : ?>
		<?php endif; ?> 
</section>
<?php get_footer(); ?>