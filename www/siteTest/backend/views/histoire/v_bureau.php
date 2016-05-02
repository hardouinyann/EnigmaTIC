<?php if(empty($_SESSION['user'])) header('Location: '.WEBROOT); ?>
<?php if($_SESSION['bureauDejaVu']) echo('<span id="dial1-vu"></span>'); ?>
<form id="form" class='formDejaVu' action='<?php echo (WEBROOT); ?>histoire/bureau' method='post'></form>
<div id="message-aide">
    <div class="container">
        <div class="close"></div>
        <h2>Vous avez besoin d'aide ? </h2>
        <p id="help-txt">Vous voilà dans le bureau de <strong>Léopold</strong>, le grand-père de Thomas. Recherchez dans son bureau si vous pouvez trouver des choses intéressantes. Cliquez sur les (+) que vous pouvez voir dans le décor pour avoir plus d&apos;informations sur les différents objets qui sont présents dans ce bureau. Vous pourrez ainsi peut-être découvrir où se trouve Léopold...
        	<!-- <br/><br/>En bas de la page, vous pouvez cliquer sur votre <strong>bloc note personnel</strong>, pour y écrire tout ce dont vous avez besoin, tout au long du jeu. Vous pouvez mettre le jeu en plein écran en cliquant sur le bouton avec les coins rectangulaires, en haut à droite. A côté, vous pouvez aussi cliquer sur l'icône "utilisateur" afin d'accéder à votre profil, si vous souhaitez modifier les informations de votre compte. --></p>
    </div>
</div>
<div id="jeu">
	<?php if($_SESSION['shellFinDialogue']) { 
		echo('<span id="shell-fini"></span>'); }
		if(!empty($_SESSION['succes'])) { 
			echo('<span id="shell-valide"></span>');
			echo('<div id="pastForm" class="form-machine">
				<select id="dates">
					<option value="-">Choisissez une date</option>
					<option value="1982">1982 (bloquée pour le moment)</option>
					<option value="1987">1987 (bloquée pour le moment)</option>
					<option value="1995">1995 (bloquée pour le moment)</option>
					<option value="2002">2002 (débloquée)</option>
				</select>
				<button id="launchMachine">GO</button>
				<div class="close-machine"><i class="fa fa-times" aria-hidden="true"></i> Fermer cette fenêtre</div>
			</div>');
	 }?>
	<div id="machine">
	</div>
	 <div id="zoom-objets-bureau">
	    <div id="photo-cadre">
	    	<img src="<?php echo PICTURES_PATH?>cadre-photo-bureau.png" alt="photo de Léopold et Thomas" />
	    </div>
	    <div id="tableau">
	    	<div id="tableau-liege">
	    		<div class="close-tableau">close</div>
	    		<?php if(!empty($_SESSION['succes'])) {
	    			echo('<div id="succes">');
					for($i=sizeof($_SESSION['succes']) - 1 ; $i >= 0 ; $i--){
				        echo('<img src="'.PICTURES_PATH.'post-it-'.$_SESSION['succes'][$i].'.png" alt="succes" />'); 
				    }
				    echo('</div><img src="'.PICTURES_PATH.'tableau.jpg" alt="tableau-liege" />');
				}else { 
					echo('<img src="'.PICTURES_PATH.'tableau_post.jpg" alt="tableau-liege" />');
				} ?>
	    	</div>
	    </div>
	    <div id="zoom-bureau">
	    	<div class="close-zoom">close</div>
	    </div>
	</div>
    <div id="bureau-leopold">
    	<div id="interactive">
	      <div class="more bureau"></div>
	      <div class="more cadre"></div>
	      <div class="more tableau"></div>
	      <div class="more bibliotheque"></div>
	      <div class="more travaux"></div>
	      <div class="more rideau"></div>
	    </div>
    </div>
    <div class="dialogue">
        <img src="<?php echo PICTURES_PATH ?>thomas-dialogue-2.png" alt="image dialogue" />
        <div><strong class="nom">Thomas</strong><p class="dialogue-txt"></p>
          <a class="next"><i class="fa fa-chevron-right"></i></a></div>
    </div>
  </div>