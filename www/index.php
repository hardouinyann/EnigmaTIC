<!DOCTYPE html>
<html>
    <head>
      <title>Enigma'TIC &bull; Plongez-vous bientôt dans l’aventure !</title>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="description" content="Découvrez le projet Enigma'TIC, un projet immersif qui vous permettra de découvrir l'évolution des interfaces graphiques grâce à du contenu multimédia riche et interactif." />
      <meta name="keywords" content="interfaces grapiques, enigmatic, enigma'tic, enigma'TIC, evolution interface, evolution des interfaces graphiques, evolution interfaces numériques, projet multimedia, projet rhizome, master psm, produits et services multimedia, psm ufr stgi, rhizome" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
      <link rel="stylesheet" href="style.css" type="text/css" media="screen" />
      <link rel="stylesheet" href="fonts/stylesheet.css" type="text/css" media="screen" />
      <link rel="stylesheet" href="css/responsive.css" type="text/css" media="screen" />
      <link href='https://fonts.googleapis.com/css?family=Roboto:400,300,500,700,300italic,400italic,100italic' rel='stylesheet' type='text/css'>
      <link rel="Shortcut Icon" href="images/vign.png" />
  </head>
<body>
<section <?php if(!empty($_POST)) echo "style='display:none;'"?>>
  <div id="title"><img src="images/logo-enigmatic.svg" alt="logo Enigma'TIC" /></div>
  <div id="links"><a href="http://www.enigma-tic.fr/blog/">Voir le blog</a><a id="savoir-plus">En savoir plus</a></div>
</section>
<div id="more"<?php if(!empty($_POST)) echo "style='display:block;'"?>>
  <div class="close"><span>X</span>Fermer cette fenêtre</div>
  <h1>Pssst... vous voulez en savoir plus sur le projet Enigma’TIC ?</h1>
  <p>Voici quelques indices sur ce projet exceptionnel que vous pourrez bientôt découvrir et vivre.<br/><br/></p>
    <ul>
      <li><b>Enigma’TIC</b> est un projet multimédia immersif et interactif.</li>
      <li><b>Enigma’TIC</b> est une aventure inédite sous forme d'enquête, dans laquelle vous allez pouvoir vous immergez, afin de découvrir les évolutions majeures des interfaces graphiques.</li> 
      <li><b>Enigma’TIC</b> est un projet réalisé et conçu par sept étudiants en Master Multimédia.</li>
    </ul>
   <p class="recevoir-mail">
    Si vous souhaitez être <b>prévenu par e-mail dès que le projet sera officiellement lancé</b>, remplissez le champ ci-dessous et cliquez sur le bouton "envoyer". Dès que le projet sera lancé, vous serez prévenu par mail, et vous pourrez participer vous aussi au projet <b>Enigma'TIC</b>.</br></br>
      <?php
        if(!($_POST["email"])) {
          echo('<form method="POST" action=""><input type="text" class="button" id="email" name="email" placeholder="votreemail@domaine.com"><input type="submit" class="button" id="submit" value="ENVOYER"></form>');
        }else {
          $email = (!empty($_POST['email'])) ? $_POST['email'] : '';
          if(!empty($email) && filter_var($email, FILTER_VALIDATE_EMAIL)){
              $ip = $_SERVER['HTTP_REMOTE_IP'];
              try{
                $connexion = new PDO("mysql:host=enigmatiqmbdd.mysql.db;port=3306;dbname=enigmatiqmbdd","enigmatiqmbdd","eNigmatic1",
                                      array(
                                          PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                                          PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8",
                                          PDO::ATTR_DEFAULT_FETCH_MODE =>PDO::FETCH_OBJ
                                      )
                                     );
                $requete = $connexion->prepare("SELECT * FROM newsletter WHERE adresse_ip LIKE '$ip' OR email LIKE '$email'");
                $requete->execute();
                if(count($requete->fetchAll()) == 0){
                    if($requete = $connexion->prepare("INSERT INTO newsletter VALUES('','$email','$ip')")){
                      $requete->execute();
                      echo "<div class='valid'>Nous avons bien enregistré votre email !<br/>Vous serez prévenu par e-mail le jour du lancement officiel du projet.</div>";
                    }else{
                      echo "<div class='error'>Une erreur est survenue, nous n'avons pas pu enregistrer votre email ! Réessayez !</div>";
                      echo('<form method="POST" action=""><input type="text" class="button" id="email" name="email" placeholder="votreemail@domaine.com"><input type="submit" class="button" id="submit" value="ENVOYER"></form>');
                    }
                }else{
                  echo "<div class='valid'>Votre e-mail a déjà été enregistré, et vous serez prévenu le jour du lancement officiel du projet.</div>";
                }
                 
              }
              catch(Exception $error){
                  die('FAILED TO CONNECT TO DATABASE : '.$error->getMessage());
              }
          
          }else{
            echo "<div class='error'>Veuillez saisir une adresse email valide ! (exemple : votrenom@email.com).</div>";
            echo('<form method="POST" action=""><input type="text" class="button" id="email" name="email" placeholder="votreemail@domaine.com"><input type="submit" class="button" id="submit" value="ENVOYER"></form>');
          }
        }
      ?>
  </p>
  <div id="footer-resp" >Enigma’TIC  ©  2016<a class="mentions">Mentions Légales</a><a href="">A Propos</a></div>
</div>
<div id="mentions-legales">
    <div class="close"><span>X</span>Fermer cette fenêtre</div>
    <h2>Mentions légales</h2>
    <h3>1. Présentation du site.</h3>
    <p>En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site <a href="http://http://www.enigma-tic.fr" title="L'équipe d'Enigma'TIC - http://www.enigma-tic.fr">http://www.enigma-tic.fr</a> l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi :</p><br />
    <p><strong>Propriétaire</strong> : L'équipe d'Enigma'TIC – 4 Place Tharradin, 25200 Montbéliard<br />
    <strong>Créateur</strong>  : <a href="http://www.enigma-tic.fr/">L'équipe d'Enigma'TIC</a><br />
    <strong>Responsable publication</strong> : L'équipe d'Enigma'TIC<br />
    Le responsable publication est une personne physique ou une personne morale.<br />
    <strong>Webmaster</strong> : L'équipe d'Enigma'TIC<br />
    <strong>Hébergeur</strong> : OVH – 2 rue Kellermann - 59100 Roubaix - France<br />
    Crédits : les mentions légales ont été générées et offertes par Subdelirium <a target="_blank" href="http://www.subdelirium.com/competences/creation-de-sites-web/creation-de-site-internet-en-charente/creation-de-site-internet-cognac/" alt="creation site web cognac">création de site web Cognac</a></p>

    <h3>2. Conditions générales d’utilisation du site et des services proposés.</h3>
    <p>L’utilisation du site <a href="http://http://www.enigma-tic.fr" title="L'équipe d'Enigma'TIC - http://www.enigma-tic.fr/">http://www.enigma-tic.fr/</a> implique l’acceptation pleine et entière des conditions générales d’utilisation ci-après décrites. Ces conditions d’utilisation sont susceptibles d’être modifiées ou complétées à tout moment, les utilisateurs du site <a href="http://http://www.enigma-tic.fr">http://www.enigma-tic.fr/</a> sont donc invités à les consulter de manière régulière.</p>
    <br/><p>Ce site est normalement accessible à tout moment aux utilisateurs. Une interruption pour raison de maintenance technique peut être toutefois décidée par l'équipe d'Enigma'TIC, qui s’efforcera alors de communiquer préalablement aux utilisateurs les dates et heures de l’intervention. Le site <a href="http://http://www.enigma-tic.fr" title="L'équipe d'Enigma'TIC - http://www.enigma-tic.fr/">http://www.enigma-tic.fr/</a> est mis à jour régulièrement par l'équipe d'Enigma'TIC. De la même façon, les mentions légales peuvent être modifiées à tout moment : elles s’imposent néanmoins à l’utilisateur qui est invité à s’y référer le plus souvent possible afin d’en prendre connaissance.</p>
    <h3>3. Description des services fournis.</h3>
    <p>Le site <a href="http://http://www.enigma-tic.fr" title="L'équipe d'Enigma'TIC - http://www.enigma-tic.fr/">http://www.enigma-tic.fr/</a> a pour objet de divertir les utilisateurs en leur permettant de découvrir les évolutions majeures des interfaces graphiques, de façon ludique. Ce site a pour unique but d'informer et de divertir les utilisateurs, avec du contenu accessible en ligne gratuitement. </p>
    <p>Ce projet a été réalisé par un groupe de sept étudiants du Master "Produits et Services Multimédia" dans le cadre des projets "Rhizome". L'équipe est constituée d'Axelle Simon, de Brittany Boiteux, de Yann Hardouin, de Fei Qi, de Benoît Muller, de Justine Jouffroy et de Vincent Lepigeon. Ce projet a été entièrement conçu et réalisé par ce groupe d'étudiant, à l'université de franche-comté (UFR STGI) de Montbéliard. Ce site se présente sous la forme d'un jeu d'aventure en ligne auquel n'importe quel utilisateur peut participer.</p>
    <h3>4. Limitations contractuelles sur les données techniques.</h3>
    <p>Le site utilise la technologie JavaScript.</p>
    <p>Le site Internet ne pourra être tenu responsable de dommages matériels liés à l’utilisation du site. De plus, l’utilisateur du site s’engage à accéder au site en utilisant un matériel récent, ne contenant pas de virus et avec un navigateur de dernière génération mis-à-jour</p>
    <h3>5. Propriété intellectuelle et contrefaçons.</h3>
    <p>L'équipe d'Enigma'TIC est propriétaire des droits de propriété intellectuelle ou détient les droits d’usage sur tous les éléments accessibles sur le site, notamment les textes, images, graphismes, logo, icônes, sons, logiciels.</p>
    <p>Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de : l'équipe d'Enigma'TIC.</p>
    <p>Toute exploitation non autorisée du site ou de l’un quelconque des éléments qu’il contient sera considérée comme constitutive d’une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.</p>
    <h3>6. Limitations de responsabilité.</h3>
    <p>L'équipe d'Enigma'TIC ne pourra être tenue responsable des dommages directs et indirects causés au matériel de l’utilisateur, lors de l’accès au site http://www.enigma-tic.fr/, et résultant soit de l’utilisation d’un matériel ne répondant pas aux spécifications indiquées au point 4, soit de l’apparition d’un bug ou d’une incompatibilité.</p>
    <p>Des espaces interactifs (possibilité de poser des questions dans l’espace contact) sont à la disposition des utilisateurs. L'équipe d'Enigma'TIC se réserve le droit de supprimer, sans mise en demeure préalable, tout contenu déposé dans cet espace qui contreviendrait à la législation applicable en France, en particulier aux dispositions relatives à la protection des données. Le cas échéant, l'équipe d'Enigma'TIC se réserve également la possibilité de mettre en cause la responsabilité civile et/ou pénale de l’utilisateur, notamment en cas de message à caractère raciste, injurieux, diffamant, ou pornographique, quel que soit le support utilisé (texte, photographie…).</p>
    <h3>7. Gestion des données personnelles.</h3>
    <p>En France, les données personnelles sont protégées par la loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 du 6 août 2004, l'article L. 226-13 du Code pénal et la Directive Européenne du 24 octobre 1995.</p>
    <p>A l'occasion de l'utilisation du site <a href="http://http://www.enigma-tic.fr" title="L'équipe d'Enigma'TIC - http://www.enigma-tic.fr/">http://www.enigma-tic.fr/</a>, peuvent êtres recueillies : l'URL des liens par l'intermédiaire desquels l'utilisateur a accédé au site <a href="http://http://www.enigma-tic.fr" title="L'équipe d'Enigma'TIC - http://www.enigma-tic.fr/">http://www.enigma-tic.fr/</a>, le fournisseur d'accès de l'utilisateur, l'adresse de protocole Internet (IP) de l'utilisateur.</p>
    <p> En tout état de cause L'équipe d'Enigma'TIC ne collecte des informations personnelles relatives à l'utilisateur que pour le besoin de certains services proposés par le site <a href="http://http://www.enigma-tic.fr" title="L'équipe d'Enigma'TIC - http://www.enigma-tic.fr/">http://www.enigma-tic.fr/</a>. L'utilisateur fournit ces informations en toute connaissance de cause, notamment lorsqu'il procède par lui-même à leur saisie. Il est alors précisé à l'utilisateur du site <a href="http://http://www.enigma-tic.fr" title="L'équipe d'Enigma'TIC - http://www.enigma-tic.fr/">http://www.enigma-tic.fr/</a> l’obligation ou non de fournir ces informations.</p>
    <p>Conformément aux dispositions des articles 38 et suivants de la loi 78-17 du 6 janvier 1978 relative à l’informatique, aux fichiers et aux libertés, tout utilisateur dispose d’un droit d’accès, de rectification et d’opposition aux données personnelles le concernant, en effectuant sa demande écrite et signée, accompagnée d’une copie du titre d’identité avec signature du titulaire de la pièce, en précisant l’adresse à laquelle la réponse doit être envoyée.</p>
    <p>Aucune information personnelle de l'utilisateur du site <a href="http://http://www.enigma-tic.fr" title="L'équipe d'Enigma'TIC - http://www.enigma-tic.fr/">http://www.enigma-tic.fr/</a> n'est publiée à l'insu de l'utilisateur, échangée, transférée, cédée ou vendue sur un support quelconque à des tiers. </p>
    <p>Les bases de données sont protégées par les dispositions de la loi du 1er juillet 1998 transposant la directive 96/9 du 11 mars 1996 relative à la protection juridique des bases de données.</p>
    <h3>8. Liens hypertextes et cookies.</h3>
    <p>Le site <a href="http://http://www.enigma-tic.fr" title="L'équipe d'Enigma'TIC - http://www.enigma-tic.fr/">http://www.enigma-tic.fr/</a> contient un certain nombre de liens hypertextes vers d’autres sites, mis en place avec l’autorisation de l'équipe d'Enigma'TIC. Cependant, l'équipe d'Enigma'TIC n’a pas la possibilité de vérifier le contenu des sites ainsi visités, et n’assumera en conséquence aucune responsabilité de ce fait.</p>
    <p>La navigation sur le site <a href="http://http://www.enigma-tic.fr" title="L'équipe d'Enigma'TIC - http://www.enigma-tic.fr/">http://www.enigma-tic.fr/</a> est susceptible de provoquer l’installation de cookie(s) sur l’ordinateur de l’utilisateur. Un cookie est un fichier de petite taille, qui ne permet pas l’identification de l’utilisateur, mais qui enregistre des informations relatives à la navigation d’un ordinateur sur un site. Les données ainsi obtenues visent à faciliter la navigation ultérieure sur le site, et ont également vocation à permettre diverses mesures de fréquentation.</p>
    <p>Le refus d’installation d’un cookie peut entraîner l’impossibilité d’accéder à certains services. L’utilisateur peut toutefois configurer son ordinateur de la manière suivante, pour refuser l’installation des cookies :</p>
    <p>Sous Internet Explorer : onglet outil (pictogramme en forme de rouage en haut a droite) / options internet. Cliquez sur Confidentialité et choisissez Bloquer tous les cookies. Validez sur Ok.</p>
    <p>Sous Firefox : en haut de la fenêtre du navigateur, cliquez sur le bouton Firefox, puis aller dans l'onglet Options. Cliquer sur l'onglet Vie privée.
      Paramétrez les Règles de conservation sur :  utiliser les paramètres personnalisés pour l'historique. Enfin décochez-la pour  désactiver les cookies.</p>
    <p>Sous Safari : Cliquez en haut à droite du navigateur sur le pictogramme de menu (symbolisé par un rouage). Sélectionnez Paramètres. Cliquez sur Afficher les paramètres avancés. Dans la section "Confidentialité", cliquez sur Paramètres de contenu. Dans la section "Cookies", vous pouvez bloquer les cookies.</p>
    <p>Sous Chrome : Cliquez en haut à droite du navigateur sur le pictogramme de menu (symbolisé par trois lignes horizontales). Sélectionnez Paramètres. Cliquez sur Afficher les paramètres avancés. Dans la section "Confidentialité", cliquez sur préférences.  Dans l'onglet "Confidentialité", vous pouvez bloquer les cookies.</p>

    <h3>9. Droit applicable et attribution de juridiction.</h3>
    <p>Tout litige en relation avec l’utilisation du site <a href="http://http://www.enigma-tic.fr" title="L'équipe d'Enigma'TIC - http://www.enigma-tic.fr/">http://www.enigma-tic.fr/</a> est soumis au droit français. Il est fait attribution exclusive de juridiction aux tribunaux compétents de Paris.</p>
    <h3>10. Les principales lois concernées.</h3>
    <p>Loi n° 78-17 du 6 janvier 1978, notamment modifiée par la loi n° 2004-801 du 6 août 2004 relative à l'informatique, aux fichiers et aux libertés.</p>
    <p> Loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique.</p>
    <h3>11. Lexique.</h3>
    <p>Utilisateur : Internaute se connectant, utilisant le site susnommé.</p>
    <p>Informations personnelles : « les informations qui permettent, sous quelque forme que ce soit, directement ou non, l'identification des personnes physiques auxquelles elles s'appliquent » (article 4 de la loi n° 78-17 du 6 janvier 1978).</p>
    <div id="footer-resp">Enigma’TIC  ©  2016<a class="mentions">Mentions Légales</a><a href="">A Propos</a><a class="top" style="margin-left: 25px;" href="#">Haut de Page</a></div>
</div>
<footer <?php if(!empty($_POST)) echo "style='display:none;'"?>>Enigma’TIC  ©  2016<a class="mentions">Mentions Légales</a><a href="">A Propos</a><div></footer>
<div id="background" class="mouse-bg"></div>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script src="js/mouse.parallax.js"></script>
<script src="js/script.js"></script>
</body>
</html>
