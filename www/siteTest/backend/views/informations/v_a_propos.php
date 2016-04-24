  <style>
    ::-webkit-scrollbar {
        width: 12px;
    }
     
    ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
        border-radius: 10px;
    }
     
    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(200,200,200,0.5); 
    }

    .fa-question-circle {
        display: none;
    }

    .page{
      height:88%;
      margin-top: 2%!important;
      overflow-y:scroll!important;
    }

    .apropos, .apropos:hover {
        opacity: 0;
        width: 1%;
        font-size: 0px;
        padding: 0px 0px;
    }

    h2 {
        color: #f4e5f2;
        font-size: 25px;
        padding-top:2%;
    }

    @media only screen and (min-width: 100px) and (max-width: 1400px)  {
       .page{  height:65%; margin-top: 4%!important; }
       h2 {  padding-top: 5%; }
    }

  </style>
  <!-- Vidéo d'ambiance-->
    <video id="bgvid" poster="<?php echo PICTURES_PATH?>bg-cosmos.jpg" loop>
        <source src="<?php echo VIDEOS_PATH?>cosmos.mp4" type="video/mp4">
        <source src="<?php echo VIDEOS_PATH?>cosmos.webm" type="video/webm">
        <source src="<?php echo VIDEOS_PATH?>cosmos.ogv" type="video/ogv">
    </video>
  <h2>A Propos</h2>
  <section class="page">
    <p>Retrouvez sur cette page plus d'informations sur le projet <b>Enigma’TIC</b>, et sur l'équipe qui se cache derrière la réalisation et la conception de ce projet ! Vous pourrez également retrouver sur cette page un <b>formulaire de contact</b>.</p>
    <h3>Le projet Enigma'TIC</h3>
    <p><b>Enigma’TIC</b> est un projet multimédia immersif et interactif développé par sept étudiants en première année du Master Produits & Services Multimédia (PSM) de Montbéliard. Il a été réalisé dans le cadre des projets Rhizome, proposés chaque année aux étudiants de première année. Il a pour but de faire découvrir aux utilisateurs les évolutions majeures des interfaces graphiques, de façon ludique et intéressante, sous la forme d’une aventure exceptionnelle à vivre en ligne. Les joueurs pourront s’immerger dans une narration unique et dynamique qui leur permettra de découvrir les évolutions des interfaces graphiques à travers le temps.</p>

    <h3>L’équipe Enigma’TIC</h3>
    <p>L’équipe est composée de <b>sept étudiants</b> qui ont chacun des compétences variées dans les domaines de la Communication et du Multimédia. Le projet a entièrement été conçu et développé par les membres de ce groupe pendant l’année scolaire 2015/2016. Vous pouvez <em>survoler les photos</em> présentes ci-dessous pour connaître les rôles de chacun des membres du groupe. </p>
    <h3>Nous contacter</h3>
    <p>Si vous souhaitez nous <b>contacter</b>, vous pouvez utiliser le formulaire de contact mis à votre disposition ci-dessous. Dans le cas où le formulaire ne fonctionne pas, vous pouvez nous envoyer un email à l’adresse suivante : <a href="mailto:contact@enigma-tic.fr">contact@enigma-tic.fr</a>. Nous vous répondrons au plus vite.<br></p>
</section>
<footer>
    <?php include_once(VIEWS_PATH."layout/footer.php") ?>
</footer>