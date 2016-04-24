	/* VARIABLE POUR GERER L'AFFICHAGE DU TEXTE DES CINEMATIQUES */
	var texte, actual_texte, nb_msg, cursor, cursorCons;
	var tabRepliquesBureau = ["Tiens c'est bizarre... J'ai fouillé toute la maison, mais grand-père n'est toujours pas là ! Pourtant la porte d'entrée n'était pas vérouillée... ", "Je commence vraiment à m'inquiéter pour lui ! Généralement il me rapelle rapidement...", "Je vais chercher dans son bureau pour voir s'il n'a pas laissé un message par exemple.", "Je suis sûr que je trouverais des indices dans son bureau. Il passe tout son temps ici, à travailler sur ses sujets de recherches."," Aller, au boulot ! Voyons voir ce qu'on peut trouver ici !"];
	var tabRepliquesScene1973 = ["Whooooh ! Mais... mais... que s'est-il passé ?!!! Où suis-je ! On dirait que j'ai été... téléporté ! ","Ce bureau a l'air très ancien ! Oh, mais je reconnais cet ordinateur sur le bureau ! C'est un Xerox Alto !", "Grand-père m'en avait parlé, et il m'avait montré une photo de cet ordinateur ! Je crois même qu'il avait écrit un article sur son blog à propos de celui-ci.", "On dirait que j'ai fait un voyage dans le temps ! Le Xerox Alto a été révélé au grand public en 1973. Bon, voyons voir si cet ordinateur fonctionne !"];
	var tabRepliquesScene21973 = ["Voilà j'ai allumé l'écran de l'ordinateur ! Je me retrouve sur un programme d'invite de commandes, ou Shell comme on dit en anglais.","Je vais essayer de fouiller dans cet ordinateur pour voir s'il y a des fichiers intéressants !", "Peut-être que je trouverais plus d'informations sur la localisation de grand-père. Je le connais, il ne laisse rien au hasard !", "Je suis sûr que je suis là parcequ'il le voulait ! Voyons voir ce que je peux trouver !"];
	var tabRepliqueCadrePhoto = ["C'est un cadre avec une photo de grand-père et moi ! Je me souviens, nous l'avons prise quand nous sommes allés en vacances dans le sud de la France !", "On avait loué un gîte très atypique, et on avait fait de la randonnée ! C'était vraiment sympa !"];
	var tabRepliqueBibliotheque = ["C'est la bibliothèque de livres de grand-père. Elle est bien remplie dis donc ! Il y a des livres en tout genre !","Il y a de nombreux livres sur l'informatique, et en particulier sur les interfaces graphiques. C'est un domaine qui nous passione tous les deux !"];
	var tabRepliqueTravaux = ["Ce sont des livres et documents qui servent à grand-père pour ses travaux de recherche.", "C'est le bazar dis donc ! Il y a aussi des plans de construction on dirait, et des livres sur la physique quantique ! "];
	var tabRepliqueTableau = ["C'est un tableau en liège, avec des post-it vierges dessus. Je pourrais m'en servir si j'en ai besoin."];
	var messageAideBureau = '';
	var messageAide1973 = "";
	var nom = "Thomas";
	var j=0;
	var etatDuJeu;
	var messageAide, textesAAfficher;

	if($('#bureau-leopold').length == 1) {
		console.log("onnnk");
		etatDuJeu = "bureau-leopold";
		textesAAfficher = tabRepliquesBureau;
		$('.dialogue').fadeIn(3500);
		$('.cadre').click(actionCadre);
		$('.tableau').click(actionTableau);
		$('.bibliotheque').click(actionBibliotheque);
		$('.travaux').click(actionTravaux);
		$('.bureau').click(zoomBureau);
	}else if($('#scene-1973-jeu').length == 1 && etatDuJeu != "scene1973") {
		$('.dialogue').css('top', '55%');
		$('.menu').animate({ 'top' : '15%', 'left' : '5%', 'opacity' : '0.9'},1000);
		$('#options').animate({ 'top' : '15%', 'opacity' : '0.9'},1000);
		$('#help-txt').html(messageAide);
		etatDuJeu = "scene1973";
		textesAAfficher = tabRepliquesScene1973;
		messageAide = messageAide1973;
		curseurClignotant();
	}

	/* AFFICHER / CACHER LE BLOC NOTE */
	$('.blocNote').click(afficherBlocNote);
	$('.close-note').click(cacherBlocNote);

	/* GESTION DE L'AFFICHAGE DES DIALOGUES */
	$('.next').click(changerMessageDialogue);
	afficherTexte(textesAAfficher, nom);

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
		etatDuJeu = "bureau-leopold-zoombureau";
		$('#darker').fadeIn(500);
		$('#zoom-objets-bureau').show();
		$('#zoom-bureau').fadeIn(500);
		$('.dialogue').css('z-index', '8');
		$('.close-zoom').click(function () {
			$('#darker').fadeOut(500);
			$('#zoom-objets-bureau').fadeOut(500);
			$('#zoom-bureau').fadeOut(500);
			$('.dialogue').css('z-index', '3');
		});
	}

/* FONCTION QUI PERMET DE CHANGER LES DIALOGUES EN FONCTION DE LA SCENE */
	function changerMessageDialogue () {
		clearInterval(afficherLeMessage);
		if(etatDuJeu == "scene1973" && j=="3") {
			j=0;
			etatDuJeu = "scene1973-zoom"; 
			textesAAfficher = tabRepliquesScene21973;
			$('#scene-1973-zoom').fadeIn(500);
			$('.dialogue').hide();
			$('.dialogue').fadeIn(3500);
			afficherTexte(textesAAfficher, nom);
		}else if(etatDuJeu == "scene1973-zoom" && j=="3") {
			$('#top-bar').fadeOut(500);
			$('#bottom-bar').fadeOut(500);
			$('#scene-1973-zoom').addClass('scene-flou');
			$('.dialogue').hide();
			$('#scene-1973-jeu').fadeIn(500);
			$('.menu').animate({ 'top' : '10%', 'left' : '5%', 'opacity' : '0.9'},1000);
			$('#options').animate({ 'top' : '10%', 'opacity' : '0.9'},1000);
			afficherTexte(textesAAfficher, nom);
			clearInterval(cursor);
		}else if(etatDuJeu == "bureau-leopold" && j=="4"){
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
		}else if ((etatDuJeu == "bureau-leopold-bibliotheque" && j=="1")||(etatDuJeu == "bureau-leopold-travaux" && j=="1")){
			$('.dialogue').fadeOut(250);
			$('.dialogue').css('z-index', '3');
			$('#photo-cadre').fadeOut(250);
			setTimeout(function () { j=0; }, 500);
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
		afficherLeMessage = setInterval("changerMessage()", 20);
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

	function curseurClignotant(){
		cursor = window.setInterval(function () {
        if ($('.cursor').css('visibility') === 'visible') {
            $('.cursor').css({
                visibility: 'hidden'
            });
        } else {
            $('.cursor').css({
                visibility: 'visible'
            });
	        }
	    }, 5000);
}
		