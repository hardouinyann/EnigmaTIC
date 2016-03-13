	/* VARIABLES GLOBALES */
	var audio = document.querySelector("audio");
	var video = document.querySelector("video");
	var volumeOn = true;
	/* VARIABLE POUR GERER L'AFFICHAGE DU TEXTE DES CINEMATIQUES */
	var texte, actual_texte, nb_msg;
	var tabRepliquesScene1 = ["Tiens... Cela fait longtemps que je n’ai pas eu de nouvelles de grand-père...","Il doit encore avoir la tête plongée dans l’une de ses nouvelles inventions farfelues... Il n’arrêtera jamais décidément !", "Je vais essayer de l’appeler pour voir s’il va bien quand même. <br/><i>(Thomas compose le numéro et l’appelle...)</i>.", "Bon il ne répond pas... Je vais essayer de l’appeler plus tard...", "Aller, je vais rentrer à la maison en attendant. Brrr, il fait vraiment froid aujourd'hui !"];
	var tabRepliquesScene2 = ["<i>(Thomas essaye d'appeller à nouveau son grand-père après être rentré chez lui).</i>","Toujours aucune réponse, je tombe à nouveau sur son répondeur ! ", "Bon, j’espère qu’il va vite me rappeler, je n’aime pas quand il ne me donne pas de nouvelles aussi longtemps... ", "Il devrait vraiment prendre des vacances et laisser un peu tomber ses expériences scientifiques !"];
	var tabRepliquesScene3 = ["<i>(Un jour plus tard...</i>). Bon, voilà, j’ai réservé mon billet de train. Je vais aller voir grand-père!","Je préfère aller vérifier s’il va bien, vu qu’il ne me donne plus de nouvelles depuis plusieurs jours ! Et puis, ça lui fera plaisir de me voir !"];
	var tabRepliquesScene4 = ["Me voilà enfin chez grand-père ! Allons voir s'il est là !", "Tiens j’ai sonné... mais il ne répond-pas. Mais qu’est ce qu’il fabrique !","La porte est dévérouillée... Je lui ai pourtant dis plusieurs fois de faire attention et de verouiller sa porte d'entrée ! Quel tête de mule! ", "Bon aller, je rentre ! De toute façon il doit sûrement être encore occupé dans son bureau, il n’a pas du entendre la sonnette."];
	var nom = "Thomas";
	var j=0;
	var etatDuJeu;
	var textesAAfficher = tabRepliquesScene1;

	$(document).ready(chargerLaPage);
	$(window).load(setup);

	function chargerLaPage () {
		$('#home').hide();
		$('#load').show();
		video.pause();
	}

	function setup () {
		video.play();
		$('#load').fadeOut(800);
		$('#home').fadeIn(400);
		audio.play();
		audio.volume = 0.3;
		$(window).blur(function() { audio.pause(); });
		$(window).focus(function() { 
			if(volumeOn == true) { audio.play(); }
		 });
		$('.fa-bars').click(changerEtatMenu);
		$('#options .fa').click(sonOnOff);
		$('.startGame').click(lancerLeJeu);
		$('.next').click(changerMessageDialogue);
		$('.menu').click(afficherMenu);
	}

	/* FONCTION QUI PERMET D'AFFICHER OU CACHER LE MENU COULISSANT */ 
	function afficherMenu () {
		if($('#menu-coulissant').hasClass('ferme')) {
			$('.menu').css({ 'top' : '20px', 'left' : '2%'});
			$('.fa-facebook, .fa-twitter').hide();
			$('#menu-coulissant').addClass('ouvert');
			$('#menu-coulissant').removeClass('ferme');
			$('#menu-coulissant').animate({
				'left' : '0px'
			}, 500);
		}else {
			if(etatDuJeu == "chapitre1scene1") {
				$('.menu').animate({ 'top' : '100px', 'left' : '5%'}, 600);
			}else {
				$('.menu').animate({ 'top' : '50px', 'left' : '5%'}, 600);
			}
			$('.fa-facebook, .fa-twitter').fadeIn(2000);
			$('#menu-coulissant').addClass('ferme');
			$('#menu-coulissant').removeClass('ouvert');
			$('#menu-coulissant').animate({
				'left' : '-30%'
			}, 500);
		}
	}

	/* FONCTION QUI PERMET DE LANCER LE JEU */
	function lancerLeJeu () {
		$('.menu').animate({ 'top' : '100px', 'left' : '5%'},1000);
		$('#home').fadeOut(1200);
		$('#chapitre-1').fadeIn(300);
		$('#chap1scene1').fadeIn(2000);
		etatDuJeu = "chapitre1scene1";
		afficherTexte(textesAAfficher, nom);
	}

	/* FONCTION QUI PERMET DE CHANGER LES DIALOGUES EN FONCTION DE LA SCENE */
	function changerMessageDialogue () {
		if(etatDuJeu == "chapitre1scene1" && j=="4") {
			j=0;
			etatDuJeu = "chapitre1scene2";
			textesAAfficher = tabRepliquesScene2;
			$('#chap1scene1').fadeOut(600);
			$('.dialogue').hide();
			$('#chap1scene2').fadeIn(3000);
			$('.dialogue').fadeIn(3500);
		}else if(etatDuJeu == "chapitre1scene2" && j=="3") {
			j=0;
			etatDuJeu = "chapitre1scene3";
			textesAAfficher = tabRepliquesScene3;
			$('#chap1scene2').fadeOut(600);
			$('.dialogue').hide();
			$('#chap1scene3').fadeIn(3000);
			$('.dialogue').fadeIn(3500);
		}else if(etatDuJeu == "chapitre1scene3" && j=="1"){
			j=0;
			etatDuJeu = "chapitre1scene4";
			textesAAfficher = tabRepliquesScene4;
			$('#chap1scene3').fadeOut(600);
			$('.dialogue').hide();
			$('#chap1scene4').fadeIn(3000);
			$('.dialogue').fadeIn(3500);
		}else if(etatDuJeu == "chapitre1scene4" && j=="3") {
			j=0;
			etatDuJeu = "chapitre2scene1";
			$('#chapitre-1').fadeOut(200);
			$('.dialogue').hide();
			chargerLaPage();
			$('#load').fadeOut(1000);
			$('#jeu').fadeIn(1200);
			$('.menu').animate({ 'top' : '50px', 'left' : '5%'},1000);
		}else {
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
		setInterval("changerMessage()", 70);
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
		

	function changerEtatMenu () {
		console.log($(this).hasClass('menu-active'));
		if($(this).hasClass('menu-active')) {
			$(this).css({
				"background" : "url('images/menu.png') top left no-repeat",
			});
			$(this).removeClass('menu-active');
		}else {
			$(this).css({
				"background" : "url('images/menu-cross.png') top left no-repeat",
			});
			$(this).addClass('menu-active');
		}
	}

	/* FONCTION QUI PERMET DE COUPER OU REMETTRE LE SON */
	function sonOnOff () {
		if($(this).hasClass('fa-volume-up')){
			$('.fa-volume-up').hide();
			$('.fa-volume-off').show();
			audio.pause();
			volumeOn = false;
		}else {
			$('.fa-volume-off').hide();
			$('.fa-volume-up').show();
			audio.play();
			volumeOn = true;
		}
	}


