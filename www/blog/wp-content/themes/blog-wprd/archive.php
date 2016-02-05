<?php get_header(); ?>
<aside>
	<?php get_sidebar(); ?>
</aside>
<section>
	<!-- START ARTICLE -->
		<?php if (have_posts()) : 
			  global $wp_query;
			  $total_results = $wp_query->found_posts;
		?>
		<?php $post = $posts[0]; // Hack. Set $post so that the_date() works. ?>
		<?php /* If this is a category archive */ if (is_category()) { ?>
			<div class="theNavigation"><b>Vous êtes ici</b> : <a href="<?php echo home_url( ); ?>">Accueil</a> / Archives pour la catégorie : &#8216;<strong><?php single_cat_title(); ?></strong>&#8217; (<?php echo $total_results; ?> objets trouvés)</div>
		<?php /* If this is a tag archive */ } elseif( is_tag() ) { ?>
			<div class="theNavigation"><b>Vous êtes ici</b> : <a href="<?php echo home_url( ); ?>">Accueil</a> / Posts tagués : &#8216;<strong><?php single_tag_title(); ?></strong>&#8217; (<?php echo $total_results; ?> objets trouvés)</div>
		<?php /* If this is an author archive */ } elseif (is_author()) { ?>
			<div class="theNavigation"><b>Vous êtes ici</b> : <a href="<?php echo home_url( ); ?>">Accueil</a> / Auteur Archive (<?php echo $total_results; ?> objets trouvés)</div>
		<?php /* If this is a paged archive */ } elseif (isset($_GET['paged']) && !empty($_GET['paged'])) { ?>
			<div class="theNavigation"><b>Vous êtes ici</b> : <a href="<?php echo home_url( ); ?>">Accueil</a> / Blog Archives (<?php echo $total_results; ?> objets trouvés)</div>
		<?php } ?>
		<?php while (have_posts()) : the_post(); ?>
		<article>
			<h1><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h1>
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