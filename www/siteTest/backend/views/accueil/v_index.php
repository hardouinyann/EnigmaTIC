<style>
    .fa-user {
        display: none;
    }
</style>
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
			<h2>Plongez-vous dans l’aventure et aidez thomas à retrouver son grand-père léopold !</h2>
			<p>Grâce au projet Enigma’TIC découvrez de façon originale et interactive les <b>évolutions majeures que les interfaces graphiques</b> ont pu connaître au cours de ces dernières années. </p>
			<p>Aidez Thomas à retrouver son grand-père, Léopold, qui a disparu, dans ce jeu en ligne exceptionnel qui vous plongera dans une fabuleuse aventure à travers les couloirs du temps ! </p>
			<a class="startGame">Lancer le jeu</a>
		</div>
		<div id="connexion">
			<p>Si vous avez déjà un <b>compte utilisateur</b> sur le site, connectez-vous pour retrouver le jeu là où vous l’aviez arreté !</p>
			<form action="" method="POST">
				<input type="text" name="mail" class="pseudo" placeholder="Tapez votre email" id="pseudo" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required title="Votre adresse email doit être valide (exemple : mail@domaine.com)." x-moz-errormessage="Votre adresse email doit être valide (exemple : mail@domaine.com)." />
				<input type="password" name="password" class="password" placeholder="Tapez votre mot de passe" id="2"  pattern=".{6,}" onchange="form.password_verif.pattern = this.value;" required title="Tapez votre mot de passe (6 caractères au minimum)." x-moz-errormessage="Tapez votre mot de passe (6 caractères au minimum)."/>
				<p class="right"><a href="<?php echo WEBROOT ?>accueil/reinitialisation">Vous avez oublié votre mot de passe ?</a></p>
				<?php if(!empty($this->dataForView->connected)) header('Location: '.WEBROOT.'histoire/bureau');   ?>
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
		<p id="help-txt">Si vous n'avez jamais joué à <b>Enigma'TIC</b>, cliquez sur le bouton '<i>Lancer le jeu</i>' pour vous lancer dans l'aventure ! Si vous avez déjà un compte utilisateur sur le site, connectez-vous avec le formulaire à votre disposition sur la page d'accueil. Vous serez redirigé vers le <b>bureau de Léopold</b> et vous pourrez continuer l'aventure !<br><br>Si vous avez <strong>besoin d'aide</strong> à tout moment dans le jeu, cliquez sur <i>ce bouton</i> : <i class="fa fa-question-circle"></i>, présent systématiquement en haut à droite de la fenêtre de jeu. Vous aurez ainsi plus d'informations sur les actions qui sont attendues que vous réalisiez. Pour fermer cette fenêtre cliquez sur la croix en haut à gauche de ce bloc.</p>
	</div>
</div>