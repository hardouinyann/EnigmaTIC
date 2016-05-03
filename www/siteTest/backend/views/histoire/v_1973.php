<?php if(empty($_SESSION['user'])) header('Location: '.WEBROOT); ?>
<?php 
$dejaValide = "false";
if($_SESSION['succes']) {
    for($i=sizeof($_SESSION['succes']); $i >= 0 ; $i--) {
        if($_SESSION['succes'][$i] == "2002") {
            $dejaValide = "true";
        }
    }
}; ?>
<?php if($dejaValide == "false") { ?>
<!-- Bouton pour sauvegarder le jeu -->
<a id="passer-cinematique" style="display: inline;">Passer la cinématique&nbsp;&nbsp;&nbsp;<i class="fa fa-angle-right" aria-hidden="true"></i></a>
<a id="end-1973-read">J'ai fini de lire le fichier texte affiché dans la console.</a>
<form id="form1973" class="formDejaVu" action='<?php echo (WEBROOT); ?>histoire/bureau' method='post'>
      <input type='hidden' name="id_jeu" value="1973"/>
       <input type="hidden" name="score" value=""></input>
       <input type='submit' id="end-1973" name='validation_jeu' value='Retourner dans le bureau de Léopold'/>
</form>
<form id="form" class='formUpdateShell' action='<?php echo (WEBROOT); ?>histoire/bureau' method='post'></form>
<div id="jeu">
    <div id="scene-1973-jeu">
      <div id='console'>
          <div id='contenu-1'>C:\Bureau > <span class='cursor-console'></span></div>        
      </div> 
      <div id="feuille">
        <p><b>Utilisez les commandes ci-dessous avec la console pour parcourir les fichiers de l'ordinateur.</b><br/><br/>Vous devez ouvrir tous les fichier textes (avec comme extension .txt), jusqu'à ce que vous trouviez un fichier intéressant.<br/><br/>
          - <b>dir</b> : Affiche le contenu d'un dossier.
          (<i>Exemple : Tapez "dir" dans la console, et pressez la touche entrée. </i>)<br/><br/>
          - <b>cd</b> : Pour changer de répertoire (de dossier). Permet de naviguer à travers les dossiers.
          (<i>Exemple :  Tapez "cd recherches". Cette commande ouvrira le dossier qui s'appelle "recherches"</i>).<br/><br/>
          - <b>Pour revenir au dossier précédent</b>: Il faut taper "<b>cd ..</b>" (<i>ne pas oublier l'espace entre "cd" et les deux points ".." !</i>)<br/><br/>
          - <b>type</b> : permet d'afficher le contenu d'un fichier texte.(<i>Exemple : Tapez "<b>type recette.txt</b>". Cette commande affichera le contenu du fichier "Recette.txt"</i>).<br/><br/>
           Si vous voyez affiché <b>&lt;REP&gt;</b> devant un mot, cela signifique que c'est <b>un répertoire</b>. Vous pouvez l'ouvrir avec la commande "cd". <b>S'il n'y a pas ce mot devant un mot, c'est que vous devez l'ouvrir en utilisant la commande "type"</b>.<br/><br/>
         <b>Par exemple, tapez les commandes ci-dessous à la suite dans la console : </b><br/><br/>
         1) Tapez dir, puis pressez la touche entrée.<br/>
         2) Tapez cd "un nom de dossier" (<i>exemple : cd documents</i>). Pressez la touche entrée.<br/>
         3) Retapez dir et pressez la touche entrée.<br/>
         4) Tapez type "un nom de fichier".txt (<i>exemple : type hello.txt</i>). Pressez la touche entrée.<br/>
         5) Tapez "cd .." et pressez la touche entrée pour revenir au dossier précédent.<br/><br/>
         Utilisez les commandes que vous avez pu tester ci-dessus pour parcourir l'ordinateur et tous les dossiers qu'il contient, jusqu'à ce qu'un <b>événement intervienne</b>.
</p>
        <img src="<?php echo PICTURES_PATH ?>feuille.png" alt="feuille de papier" />
      </div>
    </div> 
    <div id="scene-1973-zoom">
      <div id="top-bar"></div>
      <div id="bottom-bar"></div>
      <p id="shell-txt">C:\Bureau > <span class="cursor-console curs"></span></p>
    </div>
    <div id="scene-1973">
      <div id="top-bar"></div>
      <div id="bottom-bar"></div>
    </div>
    <div class="dialogue">
        <img src="<?php echo PICTURES_PATH ?>thomas-dialogue-2.png" alt="image dialogue" />
        <div><strong class="nom">Thomas</strong><p class="dialogue-txt"></p>
          <a class="next"><i class="fa fa-chevron-right"></i></a></div>
      </div>
  </div>
  <div id="message-aide">
    <div class="container">
        <div class="close"></div>
        <h2>Vous avez besoin d'aide ? </h2>
        <p id="help-txt"></p>
    </div>
</div>
  <script src="<?php echo JAVASCRIPT_PATH?>jquery-1.7.2.min.js"></script>
<script type="text/javascript" src="<?php echo JAVASCRIPT_PATH ?>scriptTerminal.js"></script>
<?php }else { ?>
<!-- Vidéo d'ambiance-->
    <video id="bgvid" poster="<?php echo PICTURES_PATH?>bg-cosmos.jpg" loop>
        <source src="<?php echo VIDEOS_PATH?>cosmos.mp4" type="video/mp4">
        <source src="<?php echo VIDEOS_PATH?>cosmos.webm" type="video/webm">
        <source src="<?php echo VIDEOS_PATH?>cosmos.ogv" type="video/ogv">
    </video>
    <section id="date-bloquee">
        <div class="entete-form">
                <img src="<?php echo PICTURES_PATH?>logo-enigmatic-blanc.svg" alt="logo Enigma'TIC blanc" />
                <h2>Date Déjà jouée</h2>
            </div>
            <div id="infos-date">
                <p>Désolé, mais vous avez déjà joué et réussi cette date. Vous ne pouvez pas la rejouer pour le moment. Une page avec tous les minis-jeux du site sera mise en place dans les semaines qui suivent, afin que vous puissiez rejouer à vos minis-jeux préférés. Merci de votre compréhension !</p>
            </div>
            <a href="<?php echo WEBROOT ?>" class="bouton">Retourner dans le bureau de Léopold</button>
    </div>
    </section>
    <footer>
        <?php include_once(VIEWS_PATH."layout/footer.php") ?>
    </footer>
<?php } ?>
