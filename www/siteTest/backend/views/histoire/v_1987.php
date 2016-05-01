<!-- Vidéo d'ambiance-->
    <video id="bgvid" poster="<?php echo PICTURES_PATH?>bg-cosmos.jpg" loop>
        <source src="<?php echo VIDEOS_PATH?>cosmos.mp4" type="video/mp4">
        <source src="<?php echo VIDEOS_PATH?>cosmos.webm" type="video/webm">
        <source src="<?php echo VIDEOS_PATH?>cosmos.ogv" type="video/ogv">
    </video>
    <section id="date-bloquee">
        <div class="entete-form">
                <img src="<?php echo PICTURES_PATH?>logo-enigmatic-blanc.svg" alt="logo Enigma'TIC blanc" />
                <h2>Date Bloquée</h2>
            </div>
            <div id="infos-date">
                <p>Désolé, mais cette date n'est pas encore débloquée, car elle est encore en développement. Revenez dans quelques jours pour la jouer. Vous serez prévenu sur notre <a href="https://www.facebook.com/projetenigmatic/" target="_blank"><b>page Facebook</b></a> dès qu'elle sera en ligne ! Merci de votre compréhension !</p>
            </div>
            <a href="<?php echo WEBROOT ?>" class="bouton">Retourner dans le bureau de Léopold</button>
    </div>
    </section>
    <footer>
        <?php include_once(VIEWS_PATH."layout/footer.php") ?>
    </footer>