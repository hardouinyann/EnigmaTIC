<!DOCTYPE html>
<html>
<?php include_once(VIEWS_PATH."layout/head.php") ?>
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
	<!-- Cinématique : Préambule du jeu -->
	<div id="chapitre-1">
		<div id="chap1scene1">
			<div id="top-bar"></div>
			<div id="bottom-bar"></div>
			<div id="svgloadchap1scene1" class="personnage"></div>
			<div class="dialogue diagThomas">
				<img src="<?php echo PICTURES_PATH?>thomas-dialogue.png" alt="image dialogue" />
				<div><strong class="nom"></strong><p class="dialogue-txt"></p>
					<a class="next"><i class="fa fa-chevron-right"></i></a></div>
			</div>
			<div class="dialogue diagleopold">
				<img src="<?php echo PICTURES_PATH?>leopold-dialogue.png" alt="image dialogue" />
				<div><strong class="nom"></strong><p class="dialogue-txt"></p>
					<a class="next"><i class="fa fa-chevron-right"></i></a></div>
			</div>
		</div>
		<div id="chap1scene2">
			<div id="top-bar"></div>
			<div id="bottom-bar"></div>
			<div id="svgloadchap1scene2" class="personnage"></div>
			<div class="dialogue">
				<img src="<?php echo PICTURES_PATH?>thomas-dialogue-2.png" alt="image dialogue" />
				<div><strong class="nom"></strong><p class="dialogue-txt"></p>
					<a class="next"><i class="fa fa-chevron-right"></i></a></div>
		</div>
		</div>
		<div id="chap1scene3">
			<div id="top-bar"></div>
			<div id="bottom-bar"></div>
			<img class="personnage" src="<?php echo PICTURES_PATH?>thomas-2.svg" alt="Thomas" />
			<div class="dialogue">
				<img src="<?php echo PICTURES_PATH?>thomas-dialogue-2.png" alt="image dialogue" />
				<div><strong class="nom"></strong><p class="dialogue-txt"></p>
					<a class="next"><i class="fa fa-chevron-right"></i></a></div>
			</div>
		</div>
		<div id="chap1scene4">
			<div id="top-bar"></div>
			<div id="bottom-bar"></div>
			<div id="svgloadchap1scene4" class="personnage"></div>
			<div class="dialogue">
				<img src="<?php echo PICTURES_PATH?>thomas-dialogue.png" alt="image dialogue" />
				<div><strong class="nom"></strong><p class="dialogue-txt"></p>
					<a class="next"><i class="fa fa-chevron-right"></i></a></div>
			</div>
		</div>
	</div>
	<?php include_once(VIEWS_PATH."layout/scripts.php") ?>
</body>
</html>