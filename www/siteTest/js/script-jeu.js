/* REPLIQUE CINEMATIQUE PREAMBULE */
	var tabRepliquesScene1 = ["Tiens... Cela fait longtemps que je n’ai pas eu de nouvelles de grand-père...","Il doit encore avoir la tête plongée dans l’une de ses nouvelles inventions farfelues... Il n’arrêtera jamais décidément !", "Je vais essayer de l’appeler pour voir s’il va bien quand même. <br/>(<i>Thomas compose le numéro et l’appelle...</i>).", "<i>Vous êtes bien sur le répondeur de Léopold ! Laissez un message après le bip sonore ! Je vous répondrais, si jamais je ne me perd pas dans les couloirs du temps hahaha ! (Biiip).</i>", "Bon, il ne répond pas... Je vais essayer de l’appeler plus tard...<br/>Aller, je vais rentrer à la maison en attendant. "];
	var tabRepliquesScene2 = ["Me voilà à la maison ! Je vais essayer de rappeler grand-père.","(<i>Thomas essaye de l'appeler à nouveau).</i> Toujours aucune réponse, je tombe à nouveau sur sa messagerie ! ", "J’espère qu’il va vite me rappeler, je n’aime pas quand il ne me donne pas de nouvelles aussi longtemps... ", "Il devrait vraiment prendre des vacances et laisser un peu tomber ses expériences scientifiques !"];
	var tabRepliquesScene3 = ["<i>(Deux jours plus tard...</i>). Voilà, j’ai réservé mon billet de train. Je vais aller voir grand-père !","Je préfère aller vérifier s’il va bien, vu qu’il ne me donne plus de nouvelles depuis plusieurs jours ! Et puis, ça lui fera plaisir de me voir !"];
	var tabRepliquesScene4 = ["<i>(Le lendemain...</i>). Me voilà chez lui ! Allons voir s'il est là !", "Tiens j’ai sonné... mais il ne répond-pas. Il n'est peut-être pas là... Je vais essayer d'ouvrir la porte quand même. ","Elle s'ouvre ! Je lui ai pourtant dis plusieurs fois de faire attention et de verrouiller sa porte d'entrée ! Quel tête de mule! ", "Aller, je rentre ! De toute façon je parie qu'il doit encore être occupé dans son bureau, et qu'il n’a pas entendu la sonnette."];
	var messageAide = "Vous voilà lancé dans l'aventure <b>Enigma'TIC</b> ! Dans le jeu, vous retrouverez régulièremet des cinématiques comme celle-ci. Pour faire <b>défiler les dialogues des personnages</b>, cliquez sur la flèche à droite de la bulle de dialogue. Vous pouvez cliquer à tout moment sur cette flèche si vous voulez faire défiler les dialogues rapidement. Si vous souhaitez passer cette cinématique, cliquez sur le bouton prévu à cet effet, en bas à droite de l'écran.<br/><br/>Vous retrouverez en haut de l'écran des éléments de navigation fixe. Ils vous permettront de mettre le jeu en plein écran, de couper le son si vous le souhaitez, ou encore d'ouvrir le menu de navigation du site par exemple. A vous de jouer!";

/* REPLIQUES BUREAU DE LEOPOLD */
	var tabRepliquesBureau = ["Tiens c'est bizarre... J'ai fouillé toute la maison, mais grand-père n'est toujours pas là !", "Je commence vraiment à m'inquiéter ! Je suis sans nouvelles de lui depuis quasiment une semaine !", "Je vais chercher dans son bureau pour voir s'il n'a pas laissé un message, ou quelque chose qui m'indiquerait où il pourrait se trouver. Il est peut-être simplement sorti en ville...", "Je suis sûr que je trouverais des indices ici. Il y passe tout son temps, à travailler sur ses sujets de recherches."," Aller, au boulot ! Voyons voir ce qu'on peut trouver dans ce bureau !"];
	var tabRepliqueCadrePhoto = ["C'est un cadre avec une photo de grand-père et moi ! Je me souviens, nous l'avons prise quand nous sommes allés en vacances dans le sud de la France !", "On avait loué un gîte très atypique, et on avait fait de la randonnée ! C'était vraiment sympa !"];
	var tabRepliqueBibliotheque = ["C'est la bibliothèque de grand-père. Il y a beaucoup de livres sur les interfaces graphiques et l'informatique. Ce sont des domaines qui nous passionent tous les deux !"];
	var tabRepliqueTravaux = ["Ce sont des livres et documents qui servent à grand-père pour ses travaux de recherche. Il y a des livres sur la physique quantique, et je crois qu'il y a aussi des plans de construction ! "];
	var tabRepliqueTableau = ["C'est un tableau en liège, avec des post-it vierges dessus. Je pourrais m'en servir si j'en ai besoin."];
	var tabRepliqueBureau = ["Voyons voir de plus près ce qu'il y a sur le bureau. Un ordinateur portable éteint, des documents, un téléphone fixe...","Tiens... Il semblerait qu'il y ait un espèce de carnet de bord ! Regardons-ça de plus près."];

/* REPLIQUES 1973 */
	var tabRepliquesScene1973 = ["Whooooh ! Mais... mais... que s'est-il passé ?!!! Où suis-je ! Je n'aurais peut-être pas du entrer dans cette espère de machine, et appuyer sur le bouton du cadran ! ","On dirait que j'ai été... téléporté ! Ce bureau a l'air très ancien ! Mais... Je reconnais cet ordinateur sur la table ! C'est un modèle appelé Xerox Alto !", "Grand-père m'en avait parlé, et il m'en avait montré une photo ! Il avait même écrit un article sur son blog à propos de celui-ci.", "On dirait que j'ai fait un voyage dans le temps ! Le Xerox Alto a fait son apparition en 1973, et aujourd'hui il n'existe que très peu d'exemplaires de celui-ci. Voyons voir s'il fonctionne."];
	var tabRepliquesScene21973 = ["Voilà j'ai allumé l'ordinateur ! Je me retrouve sur un programme d'invite de commandes, ou Shell comme on dit en anglais.", "Je vais essayer de regarder s'il contient des fichiers intéressants. Je n'ai que ça à faire de toute façon, puisque je ne sais pas comment retourner dans le bureau de grand-père...", "Peut-être que je trouverais quelque chose qui m'aidera à y retourner, ou bien même un message de grand-père... Je le connais, il ne laisse rien au hasard !", "Je suis sûr que si je suis arrivé là, c'est parcequ'il le voulait ! Voyons voir ce que je peux trouver !"];
	var tabRepliquesScene31973 = ["Bon, cela fait longtemps que je n'ai pas utilisé une console d'invite de commandes comme celle-là, mais je me souviens toujours des commandes principales ! ","Je vais les noter sur un bout de papier. (<i>Thomas déchire une page de son bloc note, et écrit dessus</i>).", "Je ne les ai pas toutes notées, seulement celles qui me serviront pour parcourir les fichiers de l'ordinateur.", "Voilà, je vais poser mon bout de papier à côté de l'ordinateur, comme ça je me souviendrais quelles commandes utiliser."];
	var tabRepliquesSceneFin1973 = ["Ouf ! J'ai réussi à revenir dans le bureau ! Il semblerait vraiment que ce soit une machine à remonter dans le temps...", "J'ai réussi à la configurer, et j'ai ajouté en mémoire les dates que j'ai trouvées sur le fichier texte du Xerox Alto.", "Je vais pouvoir faire d'autres voyages dans le passé. Je peux donc me rendre en 1982, en 1987, en 1995, ou bien en 2001.","Je devrais probablement visiter toutes ces dates, et voir si je peux en apprendre plus sur les travaux de grand-père. J'aimerais vraiment en savoir plus sur cette étrange machine !"];

/* REPLIQUES 1982 */
	var tabRepliquesScene1982 = ["Me voilà en 1995 ! J'ai encore un peu de mal à m'y faire à ces voyages dans le temps...", "Cette pièce semble un peu ancienne, mais le mobilier est très luxueux ! Voyons voir ce qu'on peut trouver ici !"];

/* REPLIQUES 1995 */
	var tabRepliquesScene1995 = ["Me voilà en 1995 ! J'ai encore un peu de mal à m'y faire à ces voyages dans le temps...", "Cette pièce semble un peu ancienne, mais le mobilier est très luxueux ! Alors, qu'est ce qu'on peut trouver ici ?", "Je vois qu'il y a un ordinateur sur le bureau. Je vais essayer de l'utiliser, et je vais regarder ce que je peux trouver dessus."];

/* REPLIQUES 2001 */
	var tabRepliquesScene2001 = ["Je suis arrivé en 2001 ! Cette date ne me semble pas si lointaine, et pourtant c'est un vieil ordinateur que je vois sur le bureau là.", "C'est fou comme les évolutions des nouveaux ordinateurs se sont faîtes de plus en plus rapidement au fil des années.","Je vais continuer sur ma lancée, et je vais regarder ce qu'il y a sur cet ordinateur."];

/* REPLIQUES 2030 */
	var tabRepliquesScene2030 = ["Me voilà dans le futur ! Je suis en 2030 ! Tiens il y a un robot. Bonjour !", "Bonjour Thomas ! Comment vas-tu ? J'attendais ta visite ! J'ai un message à  te délivrer, mais pour le récupérer tu devras réussir les jeux que je te propose, d'accord ?", "Vous êtes un robot farceur dis donc ! D'accord, très bien ! Je suis prêt pour les casses-têtes ! "];

/* VARIABLES GLOBALES */
	var texte, actual_texte, nb_msg, cursor, cursorCons;
	var messageAideBureau = '';
	var messageAide1973 = "Il semblerait que vous avez été transporté dans un autre espace-temps... Utilisez la <strong>console de commande</strong> de l'ordinateur pour voir s'il contient des fichiers intéressants. Peut-être que vous trouverez quelque chose qui pourrait vous aider à revenir dans le bureau de Léopold. <br/><br/>Pour comprendre comment l'utiliser, lisez la <strong>note de Thomas</strong>. Vous y trouverez les commandes qui vous permettront de parcourir les fichiers et dossiers de l'ordinateur. Testez et utilisez ces commandes pour réussir à naviguer dans l'arborescence de l'ordinateur, jusqu'à ce que vous trouviez un fichier utile.";
	var nom = "Thomas";
	var j=0;
	var etatDuJeu;
	var messageAide, textesAAfficher;

/* QUEL SCENE EN COURS */
	if ($('#chapitre-1').length == 1) {
		$('.fa-user').hide();
		$('.objets').hide();
		$('#passer-cinematique').fadeIn(1000);
		$('#passer-cinematique').click(passerCinematique);
		$('.menu').animate({ 'top' : '15%', 'left' : '5%', 'opacity' : '0.9'},1000);
		$('#options').animate({ 'top' : '15%', 'opacity' : '0.9'},1000);
		$('#help-txt').html(messageAide);
		etatDuJeu = "chapitre1scene1";
		textesAAfficher = tabRepliquesScene1;
	}else if($('#bureau-leopold').length == 1) {
		$('.formDejaVu').on('submit', function(ev){
			ev.preventDefault();
			console.log("toto");
			//ca va envoyer la requete de mettre dejaVu a 1
			$.post(
		        '/projects/EnigmaTIC/www/siteTest/histoire/bureau',
		        'justSawDesktop=ok',
		        function(data){
		        	console.log("done");
		        },
		        'html'
		    );
		});
		etatDuJeu = "bureau-leopold";
		textesAAfficher = tabRepliquesBureau;
		$('.dialogue').fadeIn(3500);
		$('.cadre').click(actionCadre);
		$('.tableau').click(actionTableau);
		$('.bibliotheque').click(actionBibliotheque);
		$('.travaux').click(actionTravaux);
		$('.bureau').click(zoomBureau);
		$('.rideau').click(zoomBureau);
	}else if($('#scene-1973-jeu').length == 1 && etatDuJeu != "scene1973") {
		etatDuJeu = "scene1973";
		textesAAfficher = tabRepliquesScene1973;
		messageAide = messageAide1973;
		$('#passer-cinematique').click(function() {
			clearInterval(afficherLeMessage);
			j=0;
			etatDuJeu = "scene1973-jeu"; 
			textesAAfficher = tabRepliquesScene31973;
			$('#scene-1973-jeu').fadeIn(500);
			$('#scene-1973').fadeOut(100);
			$('#scene-1973-zoom').fadeIn(100);
			$('#scene-1973-zoom').addClass('scene-flou');
			$('#passer-cinematique').fadeOut(500);
			$('#top-bar').fadeOut(500);
			$('#bottom-bar').fadeOut(500);
			$('.dialogue').hide();
			$('.curs').hide();
			$('.menu').animate({ 'top' : '10%', 'left' : '5%', 'opacity' : '0.9'},1000);
			$('#options').animate({ 'top' : '10%', 'opacity' : '0.9'},1000);
			$('.dialogue').css('z-index', '6');
			$('.dialogue').fadeIn(500);
			afficherTexte(textesAAfficher, nom);
		});
		$('.objets').hide();
		$('.dialogue').css('top', '50%');
		$('.menu').animate({ 'top' : '15%', 'left' : '5%', 'opacity' : '0.9'},1000);
		$('#options').animate({ 'top' : '15%', 'opacity' : '0.9'},1000);
		$('#help-txt').html(messageAide);
	}else if ($('#scene-1982').length == 1) {
		$('.objets').hide();
		$('.dialogue').css('top', '55%');
		$('.menu').animate({ 'top' : '15%', 'left' : '5%', 'opacity' : '0.9'},1000);
		$('#options').animate({ 'top' : '15%', 'opacity' : '0.9'},1000);
		etatDuJeu = "scene1982";
		textesAAfficher = tabRepliquesScene1982;
	}else if ($('#scene-1995').length == 1) {
		$('.objets').hide();
		$('.dialogue').css('top', '55%');
		$('.menu').animate({ 'top' : '15%', 'left' : '5%', 'opacity' : '0.9'},1000);
		$('#options').animate({ 'top' : '15%', 'opacity' : '0.9'},1000);
		etatDuJeu = "scene1995";
		textesAAfficher = tabRepliquesScene1995;
	}else if($('#scene-2001').length == 1) {
		$('.objets').hide();
		$('.dialogue').css('top', '55%');
		$('.menu').animate({ 'top' : '15%', 'left' : '5%', 'opacity' : '0.9'},1000);
		$('#options').animate({ 'top' : '15%', 'opacity' : '0.9'},1000);
		etatDuJeu = "scene2001";
		textesAAfficher = tabRepliquesScene2001;
	}else if($('#scene-2030').length == 1) {
		$('.objets').show();
		$('.dialogue').css('top', '55%');
		$('.menu').animate({ 'top' : '15%', 'left' : '5%', 'opacity' : '0.9'},1000);
		$('#options').animate({ 'top' : '15%', 'opacity' : '0.9'},1000);
		etatDuJeu = "scene2030";
		textesAAfficher = tabRepliquesScene2030;
	}

/* GESTION EVENEMENTS BUREAU */

	if($('#dial1-vu').length == 1) {
		$('.dialogue').hide();
		$('#interactive').fadeIn(1000);
	}

	if($('#shell-fini').length == 1) {
		$('.dialogue').fadeIn();
		$('#interactive').hide();
		j=0;
		etatDuJeu = "finShell";
		textesAAfficher = tabRepliquesSceneFin1973;
		afficherTexte(textesAAfficher, nom);
		clearInterval(afficherLeMessage);
	}

	 /* $('#form1973').on('submit', function(ev){
			ev.preventDefault();
			console.log("toto");
			//ca va envoyer la requete de mettre dejaVu a 1
			$.post(
		        '/projects/EnigmaTIC/www/siteTest/histoire/bureau',
		        'justSawDesktop=ok',
		        function(data){
		        	console.log("done");
		        },
		        'html'
		    );
		}); */

	/* AFFICHER / CACHER LE BLOC NOTE */
	$('.blocNote').click(afficherBlocNote);
	$('.close-note').click(cacherBlocNote);

	/* GESTION DE L'AFFICHAGE DES DIALOGUES */
	$('.next').click(changerMessageDialogue);
	afficherTexte(textesAAfficher, nom);

	function passerCinematique (){
		$(location).attr('href',"http://127.0.0.1/projects/EnigmaTIC/www/siteTest/accueil/inscription");
	}

/* FONCTION POUR AFFICHER / CACHER LE BLOC NOTE */
	function afficherBlocNote () {
		$('#darker').fadeIn(500);
		$('.bloc-note').animate({ 'top' : '0' }, 500);
		$('.bloc-note').addClass('active');
	}

	function cacherBlocNote () {
		$('#darker').fadeOut(500);
		$('.bloc-note').animate({ 'top' : '-200%' }, 500);
		$('.bloc-note').removeClass('active');
	}

/* ACTIONS UTILISATEUR DANS LE BUREAU */

	function actionCadre () {
		$('#darker').fadeIn(500);
		$('#zoom-objets-bureau').show();
		$('#photo-cadre').fadeIn(500);
		$('.dialogue').css('z-index', '8');
		etatDuJeu = "bureau-leopold-cadre";
		clearInterval(afficherLeMessage);
		textesAAfficher = tabRepliqueCadrePhoto;
		afficherTexte(textesAAfficher, nom);
		$('.dialogue').fadeIn(500);
	}

	function actionTableau () {
		$('#darker').fadeIn(500);
		$('#zoom-objets-bureau').show();
		$('#tableau, #tableau-liege').fadeIn(500);
		$('.dialogue').css('z-index', '8');
		etatDuJeu = "bureau-leopold-tableau";
		$('.close-tableau').click(function () {
			$('#darker').fadeOut(500);
			$('#zoom-objets-bureau').fadeOut(500);
			$('#tableau, #tableau-liege').fadeOut(500);
			$('.dialogue').fadeOut(250);
			$('.dialogue').css('z-index', '3');
		});
		clearInterval(afficherLeMessage);
		textesAAfficher = tabRepliqueTableau;
		afficherTexte(textesAAfficher, nom);
		$('.dialogue').fadeIn(500);
	}

	function actionBibliotheque () {
		etatDuJeu = "bureau-leopold-bibliotheque";
		clearInterval(afficherLeMessage);
		textesAAfficher = tabRepliqueBibliotheque;
		afficherTexte(textesAAfficher, nom);
		$('.dialogue').fadeIn(500);
	}

	function actionTravaux () {
		etatDuJeu = "bureau-leopold-travaux";
		clearInterval(afficherLeMessage);
		textesAAfficher = tabRepliqueTravaux;
		afficherTexte(textesAAfficher, nom);
		$('.dialogue').fadeIn(500);
	}

	function zoomBureau () {
		$('#darker').fadeIn(500);
		$('#zoom-objets-bureau').show();
		$('#zoom-bureau').fadeIn(500);
		$('.dialogue').css('z-index', '8');
		etatDuJeu = "bureau-leopold-zoombureau";
		$('.dialogue').fadeIn(500);
		$('.close-zoom').click(function () {
			$('#darker').fadeOut(500);
			$('#zoom-objets-bureau').fadeOut(500);
			$('#zoom-bureau').fadeOut(500);
			$('.dialogue').css('z-index', '3');
			$('.dialogue').fadeOut(250);
			clearInterval(afficherLeMessage);
			j = 0;
		});
		clearInterval(afficherLeMessage);
		textesAAfficher = tabRepliqueBureau;
		afficherTexte(textesAAfficher, nom);
	}

/* FONCTION QUI PERMET DE CHANGER LES DIALOGUES EN FONCTION DE LA SCENE */
	function changerMessageDialogue () {
		clearInterval(afficherLeMessage);
		if(etatDuJeu == "chapitre1scene1" && j=="1") {
			setTimeout(function () {
	        	$('#thomaschap1scene1phone').show();
	        	$('#thomaschap1scene1').fadeOut(600);
	        }, 200);
        	setTimeout(function () {
        		$('#thomaschap1scene1').css('animation','bougerThomasd');
        	}, 600);
        	j++;
        	afficherTexte(textesAAfficher, nom);
		}else if(etatDuJeu == "chapitre1scene1" && j=="2") {
			nom = "Léopold";
			$('.diagThomas').hide();
			$('.diagleopold').fadeIn();
			j++;
			afficherTexte(textesAAfficher, nom);
		}else if(etatDuJeu == "chapitre1scene1" && j=="3") {
        	$('#thomaschap1scene1phone').fadeOut(200);
        	$('#thomaschap1scene1').show();
        	nom = "Thomas";
			$('.diagThomas').fadeIn();
			$('.diagleopold').hide();
        	j++;
        	afficherTexte(textesAAfficher, nom);
		}else if(etatDuJeu == "chapitre1scene1" && j=="4") {
			j=0;
			etatDuJeu = "chapitre1scene2";
			textesAAfficher = tabRepliquesScene2;
			$('#chap1scene1').fadeOut(600);
			$('.dialogue').hide();
			$('#chap1scene2').fadeIn(3000);
			$('.dialogue').fadeIn(3500);
			afficherTexte(textesAAfficher, nom);
		}else if(etatDuJeu == "chapitre1scene2" && j=="0") {
        	$('#thomaschap1scene2phone').show();
        	$('#thomaschap1scene2').fadeOut(600);
        	setTimeout(function () {
        		$('#thomaschap1scene2').css('animation','bougerThomasd');
        	}, 600);
        	j++;
        	afficherTexte(textesAAfficher, nom);
        }else if(etatDuJeu == "chapitre1scene2" && j=="1") {
        	$('#thomaschap1scene2phone').fadeOut(200);
        	$('#thomaschap1scene2').show();
        	j++;
        	afficherTexte(textesAAfficher, nom);
        }else if(etatDuJeu == "chapitre1scene2" && j=="3") {
			j=0;
			etatDuJeu = "chapitre1scene3";
			textesAAfficher = tabRepliquesScene3;
			$('#chap1scene2').fadeOut(600);
			$('.dialogue').hide();
			$('#chap1scene3').fadeIn(3000);
			$('.dialogue').fadeIn(3500);
			afficherTexte(textesAAfficher, nom);
		}else if(etatDuJeu == "chapitre1scene3" && j=="1"){
			j=0;
			etatDuJeu = "chapitre1scene4";
			textesAAfficher = tabRepliquesScene4;
			$('#chap1scene3').fadeOut(600);
			$('.dialogue').hide();
			$('#chap1scene4').fadeIn(3000);
			$('.dialogue').fadeIn(3500);
			afficherTexte(textesAAfficher, nom);
		}else if(etatDuJeu == "chapitre1scene4" && j=="0") {
			$('#thomaschap1scene4dos').show();
        	$('#thomaschap1scene4').fadeOut(600);
			j++;
			afficherTexte(textesAAfficher, nom);
		}else if(etatDuJeu == "chapitre1scene4" && j=="3") {
			$('.dialogue').hide();
			$(location).attr('href',"http://www.enigma-tic.fr/siteTest/accueil/inscription");
		}else if(etatDuJeu == "scene1973" && j=="3") {
			j=0;
			etatDuJeu = "scene1973-zoom"; 
			textesAAfficher = tabRepliquesScene21973;
			$('#scene-1973-zoom').fadeIn(500);
			$('.dialogue').hide();
			$('.dialogue').fadeIn(3500);
			afficherTexte(textesAAfficher, nom);
		}else if(etatDuJeu == "scene1973-zoom" && j=="3") {
			j=0;
			etatDuJeu = "scene1973-jeu"; 
			textesAAfficher = tabRepliquesScene31973;
			$('#top-bar').fadeOut(500);
			$('#bottom-bar').fadeOut(500);
			$('#scene-1973-zoom').addClass('scene-flou');
			$('.dialogue').hide();
			$('.curs').hide();
			$('#scene-1973-jeu').fadeIn(500);
			$('.menu').animate({ 'top' : '10%', 'left' : '5%', 'opacity' : '0.9'},1000);
			$('#options').animate({ 'top' : '10%', 'opacity' : '0.9'},1000);
			$('.dialogue').css('z-index', '6');
			$('.dialogue').fadeIn(500);
			$('#passer-cinematique').fadeOut();
			afficherTexte(textesAAfficher, nom);
		}else if(etatDuJeu == "scene1973-jeu" && j=="3") {
			$('.dialogue').fadeOut();
			$('#feuille').css('display','inline-block');
		}else if(etatDuJeu == "scene1973-fin" && j=="4"){
				$.post(
			        '/projects/EnigmaTIC/www/siteTest/histoire/bureau',
			        'finShell=ok',
			        function(data){
			        },
			        'html'
			    );
			$('#form1973').fadeIn();
			$('.dialogue').fadeOut();
			$('#end-1973').fadeIn();
		}else if(etatDuJeu == "finShell" && j=="3") {
			$.post(
			    '/projects/EnigmaTIC/www/siteTest/histoire/bureau',
			    'finShellVu=ok',
			    function(data){
			       console.log("fin sheelllll");
			     },
			     'html'
			   );
			$('.dialogue').fadeOut();
			$(".formDejaVu").submit();
		}else if(etatDuJeu == "bureau-leopold" && j=="4"){
			$( ".formDejaVu" ).submit();
			$('.dialogue').fadeOut(250);
			$('#interactive').fadeIn(1000);
			setTimeout(function () { j=0; }, 500);
		}else if(etatDuJeu == "bureau-leopold-tableau" && j=="0") {
			$('#darker').fadeOut(500);
			$('.dialogue').fadeOut(250);
			$('.dialogue').css('z-index', '3');
			$('#zoom-objets-bureau').fadeOut(250);
			$('#tableau, #tableau-liege').fadeOut(500);
			setTimeout(function () { j=0; }, 500);
		}else if(etatDuJeu == "bureau-leopold-cadre" && j=="1"){
			$('#darker').fadeOut(500);
			$('.dialogue').fadeOut(250);
			$('.dialogue').css('z-index', '3');
			$('#zoom-objets-bureau').fadeOut(250);
			$('#photo-cadre').fadeOut(250);
			setTimeout(function () { j=0; }, 500);
		}else if ((etatDuJeu == "bureau-leopold-bibliotheque" && j=="0")||(etatDuJeu == "bureau-leopold-travaux" && j=="0")){
			$('.dialogue').fadeOut(250);
			$('.dialogue').css('z-index', '3');
			$('#photo-cadre').fadeOut(250);
			setTimeout(function () { j=0; }, 500);
		}else if(etatDuJeu == "scene1982" && j=="1") {
			$('#top-bar').fadeOut(500);
			$('#bottom-bar').fadeOut(500);
			$('.menu').animate({ 'top' : '10%', 'left' : '5%', 'opacity' : '0.9'},1000);
			$('#options').animate({ 'top' : '10%', 'opacity' : '0.9'},1000);
			$('.objets').fadeIn();
			$('.dialogue').fadeOut(250);
		}else if(etatDuJeu == "scene1995" && j=="2") {
			$('#top-bar').fadeOut(500);
			$('#bottom-bar').fadeOut(500);
			$('.menu').animate({ 'top' : '10%', 'left' : '5%', 'opacity' : '0.9'},1000);
			$('#options').animate({ 'top' : '10%', 'opacity' : '0.9'},1000);
			$('.objets').fadeIn();
			$('.dialogue').fadeOut(250);
		}else if(etatDuJeu == "scene2030" && j=="0") {
			$('.dialogue').fadeOut(250);
			nom = "Robot";
			$('.dialogueRobot').fadeIn();
			j++;
			afficherTexte(textesAAfficher, nom);
		}else if(etatDuJeu == "scene2030" && j=="1") {
			$('.dialogue').fadeIn();
			nom = "Thomas";
			$('.dialogueRobot').fadeOut(250);
			j++;
			afficherTexte(textesAAfficher, nom);
		}else if(etatDuJeu == "scene2030" && j=="2") {
			$('.dialogue').fadeOut();
			$(location).attr('href',"http://127.0.0.1/projects/EnigmaTIC/www/robot");
		}else {
			j++;
			afficherTexte(textesAAfficher, nom);
		}
	}

/* FONCTION QUI PERMETTENT DE CHANGER DE MESSAGE */
	function afficherTexte(tableau, nomParle){
		$('.nom').text(nomParle);
		var chaine;
		if(tableau[j].length > 1) {
			chaine = tableau[j];
		}else {
			chaine = tableau;
		}
		var nb_car = chaine.length; 
		var tab = chaine.split("");
		texte = new Array;
		var txt = '';
		nb_msg = nb_car - 1;

		for (i=0; i<nb_car; i++) {
			texte[i] = txt+tab[i];
			var txt = texte[i];
		}
		actual_texte = 0;
		afficherLeMessage = setInterval("changerMessage()", 15);
	}

	function changerMessage() {
		var diagTxt = document.getElementsByClassName("dialogue-txt");
		var i;
		for (i = 0; i < diagTxt.length; i++) {
		    diagTxt[i].innerHTML = texte[actual_texte];
		}
		actual_texte++;
		if(actual_texte >= texte.length) {
			actual_texte = nb_msg;
		}
	}

	
		