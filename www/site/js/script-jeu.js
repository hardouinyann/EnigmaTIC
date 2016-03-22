	/* VARIABLE POUR GERER L'AFFICHAGE DU TEXTE DES CINEMATIQUES */
	var texte, actual_texte, nb_msg, cursor, cursorCons;
	var tabRepliquesScene1973 = ["Whooooh ! Mais... mais... que s'est-il passé ?!!! Où suis-je ! On dirait que j'ai été... téléporté ! ","Ce bureau a l'air très ancien ! Oh, mais je reconnais cet ordinateur sur le bureau ! C'est un Xerox Alto !", "Grand-père m'en avait parlé, et il m'avait montré une photo de cet ordinateur ! Je crois même qu'il avait écrit un article sur son blog à propos de celui-ci.", "On dirait que j'ai fait un voyage dans le temps ! Le Xerox Alto a été révélé au grand public en 1973. Bon, voyons voir si cet ordinateur fonctionne !"];
	var tabRepliquesScene21973 = ["Voilà j'ai allumé l'écran ! Je me retrouve sur un programme d'invite de commandes, ou Shell comme on dit en anglais.","Je vais essayer de fouiller dans cet ordinateur pour voir s'il y a des fichiers intéressants dedans !", "Peut-être que je trouverais plus d'informations sur la localisation de grand-père. Je le connais, il ne laisse rien au hasard !", "Je suis sûr que je suis là parcequ'il le voulait ! Voyons voir ce que je peux trouver !"];
	var nom = "Thomas";
	var j=0;
	var etatDuJeu, afficherLeMessage ;
	var textesAAfficher = tabRepliquesScene1973;


	$('.blocNote').click(afficherBlocNote);
	$('.close-note').click(cacherBlocNote);
	$('.next').click(changerMessageDialogue);
	etatDuJeu = "scene1973";
	afficherTexte(textesAAfficher, nom);
	curseurClignotant();

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
		}else if(etatDuJeu == "scene1973-zoom" && j=="3") {
			$('#top-bar').fadeOut(500);
			$('#bottom-bar').fadeOut(500);
			$('#scene-1973-zoom').addClass('scene-flou');
			$('.dialogue').hide();
			$('#scene-1973-jeu').fadeIn(500);
			$('.menu').animate({ 'top' : '10%', 'left' : '5%', 'opacity' : '0.9'},1000);
			$('#options').animate({ 'top' : '10%', 'opacity' : '0.9'},1000);
			clearInterval(cursor);
		}else{
			j++;
		}
		afficherTexte(textesAAfficher, nom);
	}

	/* FONCTION QUI PERMETTENT DE CHANGER DE MESSAGE */
	function afficherTexte(tableau, nomParle){
		$('.nom').text(nomParle);
		var chaine = tableau[j];
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
	    }, 500);
}
		