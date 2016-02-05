<?php get_header(); ?>
<aside>
	<?php get_sidebar(); ?>
</aside>
<section>
	<!-- START ARTICLE -->
		<div class="theNavigation"><b>Vous êtes ici</b> : <a href="<?php echo home_url( ); ?>">Accueil</a> / <strong><?php the_title(); ?></strong></div>
		<?php if (have_posts()) : ?>
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
		<?php if ( comments_open() ) comments_template(); ?>
		<?php endwhile; ?>
		<?php else : ?>
		<?php endif; ?> 
</section>
<?php get_footer(); ?>