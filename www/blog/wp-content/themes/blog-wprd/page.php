<?php get_header(); ?>
<div id="page">
	<!-- START ARTICLE -->
	<div class="theNavigation"><b>Vous êtes ici</b>&nbsp;&nbsp;<i class="fa fa-angle-right"></i>&nbsp;&nbsp;<a href="<?php echo home_url( ); ?>">Accueil</a>&nbsp;&nbsp;<i class="fa fa-angle-right"></i>&nbsp;&nbsp;<strong><?php the_title(); ?></strong></div>
	<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
		<main>
			<h1><?php the_title(); ?></h1>
			<p><?php the_content(); ?></p>
		</main>
	<?php endwhile; endif; ?>
</div>
<?php get_footer(); ?>