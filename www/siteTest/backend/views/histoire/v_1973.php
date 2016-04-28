<div id="jeu">
    <div id="scene-1973-jeu">
      <div id='console'>
        <div id='entete'>
        </div>
        <div id='contenu'>  
          <div id='contenu-1'>C:\Bureau > <span class='cursor-console'></span></div>        
        </div>  
      </div> 
      <div class="objets">
      <a><img class="montre" src="<?php echo PICTURES_PATH ?>montre.png" alt="Montre" /></a>
      <a><img class="blocNote" src="<?php echo PICTURES_PATH ?>bloc-note.png" alt="Bloc Note Jeu" /></a>
    </div>
    <div class="bloc-note">
      <div class="close-note"></div>
      <form id="notes">
        <textarea autocomplete="off" rows="22">Voilà votre bloc note ! Tapez ici tout ce dont vous avez besoin...
Pour modifier le texte de ce bloc note, cliquez sur ce texte. Vous pouvez ensuite le modifier à l'infini.

Pour fermer le bloc note, cliquez sur la croix en haut sur le côté gauche du bloc note.

La sauvegarde du nouveau texte que vous avez tapé sur ce bloc note s'enregistre automatiquement quand vous le fermez (en cliquant sur la croix). Il sera le même pendant tout le jeu, et vous pouvez l'utiliser à tout moment quand vous en avez besoin.</textarea>
      </form>
    </div>  
    </div> 
    <div id="scene-1973-zoom">
      <div id="top-bar"></div>
      <div id="bottom-bar"></div>
      <p id="shell-txt">C:\Bureau > <span class="cursor"></span></p>
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
  <script src="<?php echo JAVASCRIPT_PATH?>jquery-1.7.2.min.js"></script>
<script type="text/javascript" src="<?php echo JAVASCRIPT_PATH ?>scriptTerminal.js"></script> 