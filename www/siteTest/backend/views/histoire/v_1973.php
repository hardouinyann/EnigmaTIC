<?php if(empty($_SESSION['user'])) header('Location: '.WEBROOT); ?>
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
        <div id='entete'>
        </div>
        <div id='contenu'>  
          <div id='contenu-1'>C:\Bureau > <span class='cursor-console'></span></div>        
        </div>  
      </div> 
      <div id="feuille">
        <p><b>Liste des commandes à taper dans la console pour naviguer dans l'ordinateur</b> :<br/><br/>
          - <b>dir</b> : (directory - répertoire). Affiche le contenu d'un dossier.
          (<i>Exemple : Taper "dir" dans la console, et presser la touche entrée. </i>)<br/><br/>
          - <b>cd</b> (chdir - change directory - changer de répertoire) : Pour naviguer à travers les dossiers.
          (<i>Exemple :  Taper "cd corbeille" ouvrira le dossier qui s'appelle "corbeille"</i>).<br/><br/>
          <b>Pour revenir au dossier précédent</b> : Il faut taper "<b>cd ..</b>" (<i>ne pas oublier l'espace entre "cd" et les deux points ".." !</i>)<br/><br/>
          - <b>&lt;REP&gt;</b> : (répertoire). Signifie que que c'est un dossier, que l'on peut ouvrir avec la commande "cd".<br/><br/>
          - <b>type</b> : permet d'afficher le contenu d'un fichier texte.
         (<i>Exemple : Taper "<b>type test.txt</b>" affichera le contenu du fichier "test.txt"</i>).<br/><br/>
         <b>Exemple de commandes à taper : </b><br/><br/>
         1) Taper dir. Presser la touche entrée.<br/>
         2) Taper cd "un nom de dossier" (<i>exemple : corbeille</i>). Presser la touche entrée.<br/>
         3) Retaper dir et presser la touche entrée.<br/>
         4) Taper type fichier.txt (remplacer "fichier" par le nom du fichier). Presser la touche entrée.<br/>
         5) Taper "cd .." et presser entrer pour revenir au dossier précédent.
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