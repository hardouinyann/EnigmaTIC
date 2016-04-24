<style>
    .fa-question-circle, .fa-arrows-alt {
        display: none;
    }
    
 </style>
<!-- Page d'inscription du site -->
<div id="home">
	<!-- Vidéo d'ambiance-->
	<video id="bgvid" poster="<?php echo PICTURES_PATH?>bg-cosmos.jpg" loop>
		<source src="<?php echo VIDEOS_PATH?>cosmos.mp4" type="video/mp4">
		<source src="<?php echo VIDEOS_PATH?>cosmos.webm" type="video/webm">
		<source src="<?php echo VIDEOS_PATH?>cosmos.ogv" type="video/ogv">
	</video>
	<section class="reinitialiser-temp">
		<div class="entete-form">
				<img src="<?php echo PICTURES_PATH?>logo-enigmatic-blanc.svg" alt="logo Enigma'TIC blanc" />
				<h2>Réinitialiser votre mot de passe</h2>
			</div>
			<div id="reinitialiser">
				<p>Vous ne vous souvenez plus du <b>mot de passe</b> de votre compte utilisateur ? Dans ce cas, tapez votre adresse email dans le champ ci-dessous, et vous nous enverrons par email un lien pour réinitialiser votre mot de passe, et en choisir un nouveau.</p>
				<form id="form-reinitialiser" action="" method="POST">
					<div>
						<input type="text" name="mail" class="mail" placeholder="Tapez votre adresse email" id="0" pattern=".{4,}" required title="Votre adresse email doit être valide (exemple : mail@domaine.com)." x-moz-errormessage="Votre adresse email doit être valide (exemple : mail@domaine.com)."/>
					</div>
					<button class="bouton">Réinitialiser votre mot de passe</button>
				</form>
			</div>
	</section>
	<footer>
        <?php include_once(VIEWS_PATH."layout/footer.php") ?>
    </footer>
</div>