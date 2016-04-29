<div id="home">
	<!-- Son d'ambiance--><audio loop>
	  <source src="<?php echo AUDIOS_PATH?>bensound-relaxing.mp3" type="audio/mpeg">
	</audio>
	<!-- Vidéo d'ambiance--><video id="bgvid" poster="<?php echo PICTURES_PATH?>bg-cosmos.jpg" loop>
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
				<input type="text" name="login" id="login" placeholder="votre email" />
				<input type="password" name="password" id="password" placeholder="mot de passe" />

				<p class="left" ><a href="">Mot de passe oublié ?</a></p>
				<p class="right"><a href="">Créer un compte utilisateur</a></p>
				<button  class="bouton">Se connecter</button>
			</form>
		</div>
	</section>
</div>
<div id="message-aide">
	<div class="container">
		<div class="close"></div>
		<h2>Vous avez besoin d'aide ? </h2>
		<p id="help-txt">Si vous n'avez jamais joué à <b>Enigma'TIC</b>, cliquez sur le bouton '<i>Lancer le jeu</i>' pour découvrir l'univers du projet et vous lancer dans l'aventure. Si vous avez déjà un compte utilisateur sur le site, connectez-vous avec le formulaire à votre disposition sur la page d'accueil. Vous serez redirigé vers le <b>bureau de Léopold</b> et vous pourrez continuer l'aventure !<br><br>Si vous avez <strong>besoin d'aide</strong> à tout moment dans le jeu, cliquez sur le bouton d'aide (<i>ce bouton</i> : <i class="fa fa-question-circle"></i>), présent en haut à droite de la fenêtre de votre navigateur. Vous aurez ainsi plus d'informations sur les actions qui sont attendues que vous réalisiez. Pour fermer cette fenêtre cliquez sur la croix en haut à gauche de ce bloc.</p>
	</div>
</div>