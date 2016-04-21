<!DOCTYPE html>
<html>
    <head>
        <title><?php echo $this->TITRE; ?> | ADNFC</title>
        <meta name="description" content="<?php if(!empty($this->currentContent[0]->description)){ echo $this->currentContent[0]->description;} ?>">
        <link rel="icon" type="image/png" href="<?php echo WEBROOT; ?>image/logo.png" />
        <meta charset="UTF-8">
        <meta name=viewport content="width=device-width, initial-scale=1">

        <link rel="stylesheet" type="text/css"  href="<?php echo WEBROOT; ?>style/base.css">
        <link rel="stylesheet" type="text/css"  href="<?php echo WEBROOT; ?>style/balises.css">

    </head>

    <body>
    <?php include_once(VIEWS_PATH."layout/analyticstracking.php") ?>
    <header>

        <?php
        if(!empty($_SESSION['id'])) echo '
					<a href="'.WEBROOT.'administration" title="administration de l\'ADNFC" class="administration">Administration</a>
				';
        ?>

        <a rel="alternate" hreflang="en" href="<?php echo WEBROOT.'page/lang/english/'; ?>" title="anglais"><img src="<?php echo WEBROOT; ?>image/icons/en.png" alt="anglais"></a>
        <a rel="alternate" hreflang="de" href="<?php echo WEBROOT.'page/lang/deutsch/' ?>" title="allemand"><img src="<?php echo WEBROOT; ?>image/icons/de.png" alt="allemand"></a>

        <span>Retrouvez-nous sur :</span>
        <a target="_blank" href="https://www.facebook.com/adnfc.fr" title="Notre compte facebook"><img src="<?php echo WEBROOT; ?>image/icons/facebook.svg" alt="facebook"></a>
        <a target="_blank" href="https://twitter.com/ADN_FC" title="Notre compte twitter"><img src="<?php echo WEBROOT; ?>image/icons/twitter.svg" alt="twitter"></a>
        <a target="_blank" href="https://fr.linkedin.com/nhome/" title="Notre compte linkedin"><img src="<?php echo WEBROOT; ?>image/icons/linkedin.svg" alt="linkedin"></a>
        <a target="_blank" href="https://plus.google.com/u/0/106370807879299832232/posts" title="Notre compte google+"><img src="<?php echo WEBROOT; ?>image/icons/google.svg" alt="google+"></a>

        <form method="post" action="<?php echo WEBROOT;?>recherche">

            <input type="search" name="search" placeholder="Recherche...">
            <input type="submit">

        </form>

    </header>

    <main>
    	
    	<header>

		    <nav>
		        <a href="<?php echo WEBROOT; ?>" title="" <?php if(CONTROLLER == "accueil") echo ' class="active"'; ?>>Accueil</a>
		        <a href="<?php echo WEBROOT; ?>page/agence" title="" <?php if(CONTROLLER == "page" AND ACTION == "agence") echo ' class="active"'; ?>>Agence</a>
		        <a href="<?php echo WEBROOT; ?>page/espace_economique" title="" <?php if(CONTROLLER == "page" AND ACTION == "espace_economique") echo ' class="active"'; ?>>Espace économique</a>
		        <a href="<?php echo WEBROOT; ?>publications" title="" <?php if(CONTROLLER == "publications") echo ' class="active"'; ?>>Publications</a>
		        <a href="<?php echo WEBROOT; ?>contact" title="" <?php if(CONTROLLER == "contact") echo ' class="active"'; ?>>Contact</a>
		    </nav>
		
		    <a href="<?php echo WEBROOT; ?>" title="" class="logo">
		        <img src="<?php echo WEBROOT; ?>image/logo.png" alt="Logo ADNFC">
		    </a>
		
		</header>

            <section>
                        <strong class="high"><?php echo $this->currentContent[0]->hat; ?></strong>
                        <p class="description"><?php echo $this->currentContent[0]->catch; ?></p>

                <?php echo $content_for_layout; ?>
            </section>


		<footer>
		    <!-- Go to www.addthis.com/dashboard to customize your tools -->
		    <div class="addthis_sharing_toolbox"><span>Partagez cette page sur : </span></div>
		</footer>

    </main>

    <footer>

        <section>
            <?php include_once(VIEWS_PATH.'layout/footer.php'); ?>
        </section>

    </footer>



    <!-- Go to www.addthis.com/dashboard to customize your tools -->
    <script src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-53971e627e6df938"></script>
    <script src="<?php echo JAVASCRIPT_PATH; ?>jquery.js"></script>
    <script src="<?php echo JAVASCRIPT_PATH; ?>jquery.fancybox/jquery.fancybox.js"></script>
    <script src="<?php echo JAVASCRIPT_PATH; ?>recherche.js"></script>



    </body>

</html>