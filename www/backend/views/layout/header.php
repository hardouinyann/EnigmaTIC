<!-- Elements de navigation fixe (menu, réseaux sociaux, son, plein écran, etc...) -->
<div class="menu">
		<a><i class="fa fa-bars open-menu"></i></a>
		<a href="https://www.facebook.com/projetenigmatic/" target="_blank"><i class="fa fa-facebook"></i></a>
		<a href="https://twitter.com/ThomasEnigmaTIC" target="_blank"><i class="fa fa-twitter"></i></a>
</div>
<div id="options">
	<span id="userconnect">
<<<<<<< HEAD:www/backend/views/layout/header.php
		<?php if(!empty($_SESSION['user'])) echo "Bonjour <b>".$_SESSION['user']->login."</b>&nbsp;&nbsp;•&nbsp;&nbsp;<a href='http://www.enigma-tic.fr/accueil/deconnexion'>Se déconnecter</a>"?>
=======
		<?php if(!empty($_SESSION['user'])) echo "Bonjour <b>".$_SESSION['user']->login."</b>&nbsp;&nbsp;•&nbsp;&nbsp;<a href='".WEBROOT."accueil/deconnexion'>Se déconnecter</a>"?>
>>>>>>> 39201451cbb8c72914c35a09182a89eb53ef7a26:www/siteTest/backend/views/layout/header.php
	</span>
	<i class="fa fa-user"></i>
	<i class="fa fa-question-circle"></i>
	<i class="fa fa-arrows-alt" aria-hidden="true"></i>
</div>