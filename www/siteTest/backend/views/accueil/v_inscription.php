<style>
    .fa-question-circle, .fa-arrows-alt {
        display: none;
   	}   
</style>
	<script src="<?php echo JAVASCRIPT_PATH?>inscription.js"></script>
<!-- Page d'inscription du site -->
<div id="home">
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
				<p>Pour <b>continuer le jeu</b>, vous avez besoin de <b>créer un compte utilisateur</b>. Il vous permettra ainsi d'enregistrer votre progression, et ce dès le début de l'aventure ! Vous pourrez ainsi y jouer quand vous le voudrez, et où vous voulez. Vous pourrez ensuite le quitter à n'importe quel moment, sans perde votre sauvegarde, reliée à votre compte utilisateur.<br/><br/>L'<b>inscription est rapide</b>, et vous n'avez pas besoin d'entrer vos informations personnelles, sauf votre adresse email. Elle vous servira pour vous connecter au jeu, ou si vous avez perdu votre mot de passe. Vous ne recevrez aucun email de notre part, sauf si vous ne vous souvenez plus votre mot de passe, ou que vous nous avez autorisé à vous envoyer des emails dans le cadre du jeu. </p>
				<?php
					/* FORMULAIRE D'INSCRIPTION */
					
					if(!empty($this->dataForView->created) && $this->dataForView->created){
						header("Location:".WEBROOT."histoire/bureau'");
					}elseif(!empty($this->dataForView->alreadyExist)) {
						echo "<p class='error'>Désolé, mais le ".$this->dataForView->alreadyExist." que vous avez rentré est déjà utilisé par un autre joueur !<br/>Veuillez saisir un autre ".$this->dataForView->alreadyExist." s'il vous plaît.</p>";
						echo '<form id="form-inscription" action="" method="POST">
							<div>
								<input type="text" name="login" class="pseudo" placeholder="Choississez votre pseudo" id="0" pattern=".{4,}" required/>
								<input type="text" name="mail" class="mail" placeholder="Tapez votre adresse mail" id="1" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required />
							</div>
							<div>
								<input type="password" name="password" class="password" placeholder="Tapez votre mot de passe" id="2"  pattern=".{6,}" onchange="form.password_verif.pattern = this.value;" required/>
								<input type="password" name="password_verif" class="password" placeholder="Retapez votre mot de passe" id="3"  pattern=".{6,}" required/>
							</div>
							<button class="bouton">Créer votre compte</button>
						</form>';
					}elseif(!empty( $this->dataForView->created ) && !$this->dataForView->created){
						echo "<p class='error'>Désolé, mais votre compte n'a malheureusement pas pu être créé ! Veuillez réessayer plus tard.</p>";
						echo '<form id="form-inscription" action="" method="POST">
							<div>
								<input type="text" name="login" class="pseudo" placeholder="Choississez votre pseudo" id="0" pattern=".{4,}" required/>
								<input type="text" name="mail" class="mail" placeholder="Tapez votre adresse mail" id="1" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required />
							</div>
							<div>
								<input type="password" name="password" class="password" placeholder="Tapez votre mot de passe" id="2"  pattern=".{6,}" onchange="form.password_verif.pattern = this.value;" required/>
								<input type="password" name="password_verif" class="password" placeholder="Retapez votre mot de passe" id="3"  pattern=".{6,}" required/>
							</div>
							<button class="bouton">Créer votre compte</button>
						</form>';
					}else if(!empty($_SESSION['user'])){
						header('Location: '.WEBROOT.'histoire/bureau');
					}else {
				?>
				<form id="form-inscription" action="" method="POST">
					<div>
						<input type="text" name="login" class="pseudo" placeholder="Choississez votre pseudo" id="0" pattern=".{4,}" required/>
						<input type="text" name="mail" class="mail" placeholder="Tapez votre adresse mail" id="1" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required />
					</div>
					<div>
						<input type="password" name="password" class="password" placeholder="Tapez votre mot de passe" id="2"  pattern=".{6,}" onchange="form.password_verif.pattern = this.value;" required/>
						<input type="password" name="password_verif" class="password" placeholder="Retapez votre mot de passe" id="3"  pattern=".{6,}" required/>
					</div>
					<button class="bouton">Créer votre compte</button>
				</form>
				<?php
					}
				?>
			</div>
	</section>
	<footer>
        <?php include_once(VIEWS_PATH."layout/footer.php") ?>
    </footer>
</div>