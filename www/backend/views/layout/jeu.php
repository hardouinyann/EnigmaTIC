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
<<<<<<< HEAD:www/backend/views/layout/jeu.php
    <!-- Bloc Note de Thomas -->
    <div class="bloc-note">
      <div class="close-note" id="form_bloc_note"></div>
      <form id="notes" action="" method="POST">
        <textarea autocomplete="off" autofocus rows="22"><?php  echo (!empty($_SESSION['bloc_note'])) ? $_SESSION['bloc_note'] :  $this->debug($_SESSION['bloc_note']); ?></textarea>
      </form>
    </div>
=======
>>>>>>> 39201451cbb8c72914c35a09182a89eb53ef7a26:www/siteTest/backend/views/layout/jeu.php
	<header>
		<?php include_once(VIEWS_PATH."layout/lateral.php") ?>
		<?php include_once(VIEWS_PATH."layout/header.php") ?>
	</header>
	<?php echo $content_for_layout; ?>
	<?php include_once(VIEWS_PATH."layout/scripts-jeu.php") ?>
</body>
</html>