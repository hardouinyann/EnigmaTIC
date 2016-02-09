<?php get_header(); ?>
<aside>
	<?php get_sidebar(); ?>
</aside>
<section>
	<!-- START ARTICLE -->
		<div class="theNavigation"><b>Vous êtes ici</b>&nbsp;>&nbsp;<a href="<?php echo home_url( ); ?>">Accueil</a>&nbsp;>&nbsp;<strong><?php the_title(); ?></strong></div>
		<?php if (have_posts()) : ?>
		<?php while (have_posts()) : the_post(); ?>
		<article>
			<h1><?php the_title(); ?></h1>
			<date><?php the_time('d'); ?>/<?php the_time('m'); ?></date>
			<metadata class="standard"><i class="fa fa-tags"></i><span><?php the_tags(''); ?></span><i class="fa fa-comments"></i><span><?php comments_popup_link('Aucun commentaire', '1 commentaire', '% commentaires'); ?></span></metadata>
			<metadata class="resp"><i class="fa fa-tags"></i><span><?php the_tags(''); ?></span><i class="fa fa-comments"></i><span><?php comments_popup_link('Aucun commentaire', '1 commentaire', '% commentaires'); ?></span><i class="fa fa-calendar-o"></i><span><?php the_time('d F Y'); ?></span></metadata>
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
			<div class="more"><a class="read-more">&nbsp;</a>
				<div class="share" style="float: left;">
					<span class='st_facebook_hcount' st_title='<?php the_title(); ?>' st_url='<?php the_permalink(); ?>'></span>
					<span class='st_twitter_hcount' st_title='<?php the_title(); ?>' st_url='<?php the_permalink(); ?>'></span>
				</div>
			</div>
		</article>
		<div class="nextPrevPost">
			<div class="prev"><?php previous_post('<i class="fa fa-angle-left"></i>&nbsp;&nbsp;<strong>Article précédent</strong> : %', '', 'yes'); ?></div>
			<div class="next"><?php next_post('<strong>Article suivant</strong> : % &nbsp;<i class="fa fa-angle-right"></i>', '', 'yes'); ?></div>
		</div>
		<!-- END OF ARTICLE -->
		<?php if ( comments_open() ) comments_template(); ?>
		<?php endwhile; ?>
		<?php else : ?>
		<?php endif; ?> 
</section>
<?php get_footer(); ?>