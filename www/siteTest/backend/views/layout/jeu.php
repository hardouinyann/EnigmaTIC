<!DOCTYPE html>
<html>
<?php include_once(VIEWS_PATH."layout/head-jeu.php") ?>

<body>
	<!-- Fond noir en opacité pour l'affichage du menu-->
	<div id="darker"></div>
	<!-- Div de chargement -->
	<div id="load">
		<div class="chargement"><img src="<?php echo PICTURES_PATH?>logo-sablier.svg" alt="logo chargement" />
			<p id="chargement-infos">Chargement</p>
		</div>
		<img src="<?php echo PICTURES_PATH?>bg-home.jpg" class="background" alt="background" />
	</div>
	<!-- Bouton pour passer la cinématique -->
	<a id="passer-cinematique">Passer la cinématique&nbsp;&nbsp;&nbsp;<i class="fa fa-angle-right" aria-hidden="true"></i></a>
	<header>
		<?php include_once(VIEWS_PATH."layout/lateral.php") ?>
		<?php include_once(VIEWS_PATH."layout/header.php") ?>
	</header>
	<?php echo $content_for_layout; ?>
	<?php include_once(VIEWS_PATH."layout/scripts-jeu.php") ?>
</body>
</html>