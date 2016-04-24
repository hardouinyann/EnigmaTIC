<!-- Page d'accueil du site -->
<div id="home">
	<!-- Son d'ambiance QUI EST PUTIN DE CASSE COUILLE QUND TU DEVELOPPE ALORS NIKEARASSE JLA MUTE-->
	<audio loop>
	  <!--<source src="<?php echo AUDIOS_PATH?>bensound-relaxing.mp3" type="audio/mpeg">-->
	</audio>
	<!-- Vidéo d'ambiance-->
	<video id="bgvid" poster="<?php echo PICTURES_PATH?>bg-cosmos.jpg" loop>
		<source src="<?php echo VIDEOS_PATH?>cosmos.mp4" type="video/mp4">
		<source src="<?php echo VIDEOS_PATH?>cosmos.webm" type="video/webm">
		<source src="<?php echo VIDEOS_PATH?>cosmos.ogv" type="video/ogv">
	</video>
	<section>
		<div id="infos">
			<img src="<?php echo PICTURES_PATH?>logo-enigmatic-blanc.svg" alt="logo Enigma'TIC blanc" />
			<h2>Plongez-vous dans l’aventure et aidez Thomas à retrouver son grand-père Léopold !</h2>
			<p>Enigma’TIC est un jeu en ligne interactif qui vous permettra de retracer les <b>évolutions majeures</b> des <b>interfaces graphiques</b>, à travers une histoire immersive et originale.</p>
			<p>Ce jeu vous plongera dans une fabuleuse aventure à travers les couloirs du temps, où vous devrez aider Thomas à retrouver son grand-père, Léopold, qui a disparu depuis plusieurs jours...</p>
			<a href="<?php echo WEBROOT ?>histoire/preambule">Lancer le jeu</a>
		</div>
		<div id="connexion">
			<p>Si vous avez déjà un <b>compte utilisateur</b> sur le site, connectez-vous pour retrouver le jeu là où vous l’aviez arreté !</p>
			<form action="" method="POST">
				<input type="text" name="mail" id="pseudo" placeholder="votre email" />
				<input type="password" name="password" class="password" placeholder="mot de passe" />
				<p class="left" ><a href="">Mot de passe oublié ?</a></p>
				<p class="right"><a href="<?php echo WEBROOT ?>accueil/inscription">Créer un compte utilisateur</a></p>
				<button class="bouton">Se connecter</button>
			</form>
		</div>
	</section>
	<footer>
        <?php include_once(VIEWS_PATH."layout/footer.php") ?>
    </footer>
</div>
<!-- Message d'aide -->
<div id="message-aide">
	<div class="container">
		<div class="close"></div>
		<h2>Vous avez besoin d'aide ? </h2>
		<p id="help-txt">Si vous n'avez jamais joué à <b>Enigma'TIC</b>, cliquez sur le bouton '<i>Lancer le jeu</i>' pour vous lancer dans l'aventure ! Si vous avez déjà un compte utilisateur sur le site, connectez-vous avec le formulaire à votre disposition sur la page d'accueil. Vous serez redirigé vers le <b>bureau de Léopold</b> et vous pourrez continuer l'aventure !<br><br>Si vous avez <strong>besoin d'aide</strong> à tout moment dans le jeu, cliquez sur ce bouton d'aide (<i>ce bouton</i> : <i class="fa fa-question-circle"></i>), présent systématiquement en haut à droite de la fenêtre de votre navigateur. Vous aurez ainsi plus d'informations sur les actions qui sont attendues que vous réalisiez. Pour fermer cette fenêtre cliquez sur la croix en haut à gauche de ce bloc.</p>
	</div>
</div>