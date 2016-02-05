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
			<div class="theNavigation"><b>Vous êtes ici</b> : <a href="<?php echo home_url( ); ?>">Accueil</a> / <?php printf( __( 'Résultats de la recherche pour les termes : "<strong>%s</strong>"' ), '<span>' . get_search_query() . '</span>'); ?> (<?php echo $total_results; ?> objets trouvés)</div>
			<?php while (have_posts()) : the_post(); ?>
		<article>
			<h1><?php the_title(); ?></h1>
			<date><?php the_time('d'); ?>/<?php the_time('m'); ?></date>
			<metadata><i class="fa fa-tags"></i><span><?php the_tags(''); ?></span><i class="fa fa-comments"></i><span><?php comments_popup_link('Aucun commentaire', '1 commentaire', '% commentaires'); ?></span></metadata>
			<?php
				if ( '' != get_the_post_thumbnail() ) {
					echo '<div class="feature-img">';
			?>
				<a href="<?php the_permalink(); ?>">
				<?php the_post_thumbnail('normal-post');
						echo '</div>';
					}
			?>
			<p><?php the_content(''); ?></p>
			<div class="more"><a href="<?php the_permalink(); ?>" class="read-more">Lire l'article en entier <i class="fa fa-angle-right"></i></a>
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