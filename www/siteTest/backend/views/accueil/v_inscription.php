<style>
    .fa-question-circle {
        display: none;
    }
    
 </style>
	<script src="<?php echo JAVASCRIPT_PATH?>inscription.js"></script>
<!-- Page d'inscription du site -->
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
	<section class="inscription-temp">
		<div class="entete-form">
				<img src="<?php echo PICTURES_PATH?>logo-enigmatic-blanc.svg" alt="logo Enigma'TIC blanc" />
				<h2>Créer votre compte utilisateur</h2>
			</div>
			<div id="inscription">
				<p>Il est nécessaire de créer un <b>compte utilisateur</b> pour que vous puissiez sauvegarder votre progression dans le jeu. Vous pourrez ainsi y jouer quand vous le voudrez, et où vous voulez, sans perdre votre progression, même si vous quittez le site à un certain moment.<br/><br/>L'inscription est rapide, et vous n'avez pas besoin d'entrez vos informations personnelles, sauf votre adresse email. Elle vous servira pour vous connecter au jeu, ou si vous avez perdu votre mot de passe. Vous ne recevrez aucun email de notre part, sauf si vous ne vous souvenez plus votre mot de passe. </p>
				<form id="form-inscription" action="" method="POST">
					<div>
						<input type="text" name="login" placeholder="Choississez votre pseudo" id="0" pattern=".{4,}" required/>
						<input type="text" name="mail" placeholder="Tapez votre adresse mail" id="1" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required/>
					</div>
					<div>
						<input type="password" name="password" class="password" placeholder="Tapez votre mot de passe" id="2"  pattern=".{6,}" onchange="form.password_verif.pattern = this.value;" required/>
						<input type="password" name="password_verif" class="password" placeholder="Retapez votre mot de passe" id="3"  pattern=".{6,}" required/>
					</div>
					<?php

						if(!empty( $this->dataForView->created ) && $this->dataForView->created){
							echo "<h2 style='color:green'>Votre compte à été créé avec succès !</h2>";
						}elseif(!empty( $this->dataForView->alreadyExist ) && $this->dataForView->alreadyExist){
							echo "<h2 style='color:red'>Ce login / mail existe déjà !</h2>";
						}elseif(!empty( $this->dataForView->created ) && !$this->dataForView->created){
							echo "<h2 style='color:red'>Votre compte n'a pas pu être créé !</h2>";
						}

					?>
					<button class="bouton">Créer votre compte</button>
				</form>
			</div>
	</section>
	<footer>
        <?php include_once(VIEWS_PATH."layout/footer.php") ?>
    </footer>
</div>