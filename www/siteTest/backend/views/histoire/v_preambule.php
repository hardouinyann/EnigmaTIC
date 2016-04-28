<!-- Son d'ambiance-->
<audio loop>
    <!-- <source src="<?php echo AUDIOS_PATH?>bensound-relaxing.mp3" type="audio/mpeg">-->
</audio>
<!-- Bouton pour passer la cinématique -->
<a id="passer-cinematique">Passer la cinématique&nbsp;&nbsp;&nbsp;<i class="fa fa-angle-right" aria-hidden="true"></i></a>
<!-- Message d'aide pour l'utilisateur -->
<div id="message-aide">
    <div class="container">
        <div class="close"></div>
        <h2>Vous avez besoin d'aide ? </h2>
        <p id="help-txt">Vous voilà dans le bureau de <strong>Léopold</strong>, le grand-père de Thomas. Fouillez dans son bureau pour trouver des <em>indices</em> sur sa localisation. Cliquez sur les (+) que vous pouvez voir dans le décor pour avoir plus d&apos;informations sur les différents objets qui sont présents dans ce bureau. Vous pourrez ainsi peut-être découvrir où se trouve Léopold...<br/><br/>En bas de la page, vous pouvez cliquer sur votre bloc note personnel, pour y écrire tout ce dont vous avez besoin, tout au long du jeu. Vous pouvez mettre le jeu en plein écran en cliquant sur le bouton avec les coins rectangulaires, en haut à droite. A côté, vous pouvez aussi cliquer sur l'icône "utilisateur" afin d'accéder à votre profil, si vous souhaitez modifier les informations de votre compte.</p>
    </div>
</div>
<!-- Cinématique : Préambule du jeu -->
  <div id="chapitre-1">
    <div id="chap1scene1">
      <div id="top-bar"></div>
      <div id="bottom-bar"></div>
      <div class="personnage">
        <img class="personnage" id="thomaschap1scene1" src="<?php echo PICTURES_PATH?>thomas-manteau.svg" alt="Thomas" />
        <img class="personnage" id="thomaschap1scene1phone" src="<?php echo PICTURES_PATH?>thomas-manteau-telephone.svg" alt="Thomas" />
      </div>
      <div class="dialogue diagThomas">
        <img src="<?php echo PICTURES_PATH?>thomas-dialogue.png" alt="image dialogue" />
        <div><strong class="nom"></strong><p class="dialogue-txt"></p>
          <a class="next"><i class="fa fa-chevron-right"></i></a></div>
      </div>
      <div class="dialogue diagleopold">
        <img src="<?php echo PICTURES_PATH?>leopold-dialogue.png" alt="image dialogue" />
        <div><strong class="nom"></strong><p class="dialogue-txt"></p>
          <a class="next"><i class="fa fa-chevron-right"></i></a></div>
      </div>
    </div>
    <div id="chap1scene2">
      <div id="top-bar"></div>
      <div id="bottom-bar"></div>
      <div class="personnage">
        <img class="personnage" id="thomaschap1scene2" src="<?php echo PICTURES_PATH?>thomas.svg" alt="Thomas" />
        <img class="personnage" id="thomaschap1scene2phone" src="<?php echo PICTURES_PATH?>thomas-telephone.svg" alt="Thomas" />
      </div>
      <div class="dialogue">
        <img src="<?php echo PICTURES_PATH?>thomas-dialogue-2.png" alt="image dialogue" />
        <div><strong class="nom"></strong><p class="dialogue-txt"></p>
          <a class="next"><i class="fa fa-chevron-right"></i></a></div>
    </div>
    </div>
    <div id="chap1scene3">
      <div id="top-bar"></div>
      <div id="bottom-bar"></div>
      <img class="personnage" src="<?php echo PICTURES_PATH?>thomas-2.svg" alt="Thomas" />
      <div class="dialogue">
        <img src="<?php echo PICTURES_PATH?>thomas-dialogue-2.png" alt="image dialogue" />
        <div><strong class="nom"></strong><p class="dialogue-txt"></p>
          <a class="next"><i class="fa fa-chevron-right"></i></a></div>
      </div>
    </div>
    <div id="chap1scene4">
      <div id="top-bar"></div>
      <div id="bottom-bar"></div>
      <div class="personnage">
        <img class="personnage" id="thomaschap1scene4" src="<?php echo PICTURES_PATH?>thomas-manteau-2.svg" alt="Thomas" />
        <img class="personnage" id="thomaschap1scene4dos" src="<?php echo PICTURES_PATH?>thomas-manteau-dos.svg" alt="Thomas" />
      </div>
      <div class="dialogue">
        <img src="<?php echo PICTURES_PATH?>thomas-dialogue.png" alt="image dialogue" />
        <div><strong class="nom"></strong><p class="dialogue-txt"></p>
          <a class="next"><i class="fa fa-chevron-right"></i></a></div>
      </div>
    </div>
  </div>