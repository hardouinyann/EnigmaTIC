<?php get_header(); ?>
<aside>
	<?php get_sidebar(); ?>
</aside>
<section>
	<!-- START ARTICLE -->
		<div class="theNavigation"><b>Vous êtes ici</b> : <a href="<?php echo home_url( ); ?>">Accueil</a> / <strong>404 Page Not Found</strong></div>
		<article>
			<h1>Oops, la page n'existe pas ou plus !</h1>
			<p>Désolé, mais la page que vous recherchez n'existe pas ou plus. Vous pouvez essayer de rechercher une autre page avec le formulaire de recherche qui se trouve en haut de page. Sinon, vous pouvez aussi retourner à l'<a href="<?php echo home_url( ); ?>">accueil du blog</a>. Vous pouvez également visiter le <a href="http://www.enigma-tic.fr">site du projet</a>.</p>
		</article>
</section>
<?php get_footer(); ?>