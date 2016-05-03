<link rel="stylesheet" href="<?php echo STYLE_PATH?>style-souris.css" type="text/css" media="screen" />
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
    <?php if($_SESSION['user']) {
        if($_SESSION['nbMessageRecupere'] == '0') {
            echo('<span class="noMessage"></span>');
        }
    } ?>
    <div id="jeu">
        <div id="scene-2002">  
            <div id="top-bar"></div>
            <div id="bottom-bar"></div>
        </div> 
    </div>
    <div class="dialogue">
            <img src="<?php echo PICTURES_PATH ?>thomas-dialogue-2.png" alt="image dialogue" />
            <div><strong class="nom">Thomas</strong><p class="dialogue-txt"></p>
            <a class="next"><i class="fa fa-chevron-right"></i></a></div>
    </div>
    <div id='droppable' class="miniJeu"> 
            <div class="barre">
                <div id='menu-demarrer'>
                </div>
                <div id='infos'>
            </div>
            </div>  
            <div id="afficher-demarrer">
                <img src="<?php echo PICTURES_PATH ?>xp/menu-demarrer.png" alt="demarrer" />
            </div>
            <div id="raccourci">
                <img src="<?php echo PICTURES_PATH ?>xp/raccourci-message.png" alt="message" />
            </div>
            <div id="message-txt" class="ui-draggable">
                <div class="header selectedHeader ui-draggable-handle">
                    <img src="<?php echo PICTURES_PATH ?>xp/icone-message.png" />
                    <b>Message.txt - Bloc-notes</b>
                    <div class="close-window">X</div>
                </div>
                <div class="menu-xp"><img src="<?php echo PICTURES_PATH ?>xp/menu-texte.jpg" /></div>
                <div class="content-texte">
                    <?php if($_SESSION['user']) {
                         echo($_SESSION['messageAAfficher']);
                    } ?>
                </div>
            </div>
            <div id="info">
                <div id="temps">Temps restant : 30s</div>
                <div id="score">Score : 0</div>         
                <div id="score">Score à atteindre : 220 points</div>
            </div>
            <div id="virus" class="fenetreintro selectedFenetre ui-draggable">
                <div class="header selectedHeader ui-draggable-handle">
                    <b style="color:white;margin-left:2%;margin-top:50%">Virus détecté !</b>
                </div>
                <div class="content">
                    <p>Attention, il semblerait que ce fichier soit infecté. Fermez les fenêtres qui vont apparaître à l'écran, le plus vite possible, pour supprimer le virus, et pour pouvoir ouvrir le fichier.<br/><br/>Vous avez 30 secondes pour obtenir un score minimum de <b>220 points</b>. Si vous réussissez à atteindre le score minimum, vous aurez empêché le virus de se propager, et vous pourrez accéder au bureau de l'ordinateur. Sinon, vous devrez recommencer une partie, jusqu'à ce que vous réusissiez à atteindre le <b>score minimum de 220 points</b>. A vous de jouer !
                    </p>
                    <div>
                        <button id="jouer">Jouer</button>
                    </div>
                </div>
            </div>
            <div class="ui-draggable" id="redirection">
                <div class="header selectedHeader ui-draggable-handle">
                    <b style="color:white;margin-left:2%;margin-top:50%">Résultat du jeu</b>
                    <div class="close-window">X</div>
                </div>
                <div class="content">
                        <h1 id="titre"></h1>
                        <p> Description Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <div>
                            <button id="rejouer">Rejouer</button>
                        </div>
                    </div>
            </div>
                <form id="form" class="formDejaVu" action='<?php echo (WEBROOT); ?>histoire/bureau' method='post'>
                    <input type='hidden' name="id_jeu" value="2002"/>
                    <input type="hidden" name="score" id="scoreVal" value=""></input>
                    <input type='submit' name='validation_jeu' value='Enregistrer le score et retourner en 2016 avec la machine'/>
                </form>
    </div>
    <div id="message-aide">
        <div class="container">
            <div class="close"></div>
            <h2>Vous avez besoin d'aide ? </h2>
            <p id="help-txt">Regardez sur l'ordinateur si vous pouvez trouver un fichier intéressant. Pour sauvegarder votre progression, vous devez réussir le jeu, et retourner dans le bureau de Léopold. Si vous quittez le jeu avant de retourner dans le bureau de Léopold, et sans avoir réussi le jeu, vous devrez recommencer cette date.</p>
        </div>
    </div>
<script src="<?php echo JAVASCRIPT_PATH?>jquery-1.7.2.min.js"></script>
<script src="<?php echo JAVASCRIPT_PATH?>script-souris.js"></script>
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