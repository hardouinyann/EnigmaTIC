	/* VARIABLES GLOBALES */
	var audio = document.querySelector("audio");
	var video = document.querySelector("video");
	var volumeOn = true;
	/* VARIABLE POUR GERER L'AFFICHAGE DU TEXTE DES CINEMATIQUES */
	var texte, actual_texte, nb_msg;
	var tabRepliquesScene1 = ["Tiens... Cela fait longtemps que je n’ai pas eu de nouvelles de grand-père...","Il doit encore avoir la tête plongée dans l’une de ses nouvelles inventions farfelues... Il n’arrêtera jamais décidément !", "Je vais essayer de l’appeler pour voir s’il va bien quand même. <br/>(<i>Thomas compose le numéro et l’appelle...</i>).", "<i>Vous êtes bien sur le répondeur de Léopold ! Laissez un message après le bip sonore ! Je vous répondrais, si jamais je ne me perd pas dans les couloirs du temps hahaha ! (Biiip).</i>", "Bon, il ne répond pas... Je vais essayer de l’appeler plus tard...<br/>Sa messagerie est toujours aussi drôle ! Sacré grand-père !", "Aller, je vais rentrer à la maison en attendant. Brrr, il fait vraiment froid aujourd'hui !"];
	var tabRepliquesScene2 = ["Me voilà à la maison ! Il fait meilleur ici ! Je vais essayer de rappeler grand-père.","(<i>Thomas essaye de l'appeler à nouveau).</i> Toujours aucune réponse, je tombe à nouveau sur son répondeur ! ", "Bon, j’espère qu’il va vite me rappeler, je n’aime pas quand il ne me donne pas de nouvelles aussi longtemps... ", "Il devrait vraiment prendre des vacances et laisser un peu tomber ses expériences scientifiques !"];
	var tabRepliquesScene3 = ["<i>(Deux jours plus tard...</i>). Bon, voilà, j’ai réservé mon billet de train. Je vais aller voir grand-père !","Je préfère aller vérifier s’il va bien, vu qu’il ne me donne plus de nouvelles depuis plusieurs jours ! Et puis, ça lui fera plaisir de me voir !"];
	var tabRepliquesScene4 = ["<i>(Le lendemain...</i>). Me voilà enfin chez grand-père ! Allons voir s'il est là !", "Tiens j’ai sonné... mais il ne répond-pas. Mais qu’est ce qu’il fabrique !","La porte est dévérouillée... Je lui ai pourtant dis plusieurs fois de faire attention et de verouiller sa porte d'entrée ! Quel tête de mule! ", "Bon aller, je rentre ! De toute façon il doit sûrement être encore occupé dans son bureau, il n’a pas du entendre la sonnette."];
	var messageAide = "Vous voilà lancé dans l'aventure <b>Enigma'TIC</b> ! Dans le jeu, vous retrouverez régulièremet des cinématiques comme celle-ci. Pour faire <b>défiler les dialogues des personnages</b>, cliquez sur la flèche à droite de la bulle de dialogue. Vous pouvez cliquer à tout moment sur cette flèche si vous voulez faire défiler les dialogues rapidement. Si vous souhaitez passer cette cinématique, cliquez sur le bouton prévu à cet effet, en bas à droite de l'écran.<br/><br/>Vous retrouverez en haut de l'écran des éléments de navigation fixe. Ils vous permettront de mettre le jeu en plein écran, de couper le son si vous le souhaitez, ou encore d'ouvrir le menu de navigation du site par exemple. A vous de jouer!";
	var nom = "Thomas";
	var j=0;
	var etatDuJeu, afficherLeMessage ;
	var textesAAfficher = tabRepliquesScene1;
	$('#home section').show();
	$('.startGame').click(lancerLeJeu);
	$('.next').click(changerMessageDialogue);
	$("#svgloadchap1scene1").svg({
	        onLoad: function(){
	            var svg = $("#svgloadchap1scene1").svg('get');
	            svg.load('http://www.enigma-tic.fr/images/thomas-manteau.svg', { addTo: true,  changeSize: false});        
	 }, settings: {}} );  

	/* FONCTION QUI PERMET DE LANCER LE JEU */
	function lancerLeJeu () {
		$('.fa-user').css('display', 'inline-block');
		$('#passer-cinematique').fadeIn(1000);
		$('#passer-cinematique').click(passerCinematique);
		$('.menu').animate({ 'top' : '15%', 'left' : '5%', 'opacity' : '0.9'},1000);
		$('#options').animate({ 'top' : '15%', 'opacity' : '0.9'},1000);
		$('#home').fadeOut(1200);
		$('#chapitre-1').fadeIn(300);
		$('#chap1scene1').fadeIn(2000);
		$('#help-txt').html(messageAide);
		etatDuJeu = "chapitre1scene1";
		afficherTexte(textesAAfficher, nom);
	}

	function passerCinematique (){
		$(location).attr('href',"http://www.enigma-tic.fr/siteTest/histoire/bureau");
	}

	/* FONCTION QUI PERMET DE CHANGER LES DIALOGUES EN FONCTION DE LA SCENE */
	function changerMessageDialogue () {
		clearInterval(afficherLeMessage);
		var brasNormal = $('#bras_x5F_normal');
		var brasPhone = $('#bras_x5F_tel');
		var brasNormalScene2 = $('#brasNormal');
		var brasPhoneScene2 = $('#brasTel');
		if(etatDuJeu == "chapitre1scene1" && j=="5") {
			j=0;
			etatDuJeu = "chapitre1scene2";
			textesAAfficher = tabRepliquesScene2;
			$('#chap1scene1').fadeOut(600);
			$('.dialogue').hide();
			$('#chap1scene2').fadeIn(3000);
			$('.dialogue').fadeIn(3500);
			setTimeout(function () {
				$('svg').remove();
				$("#svgloadchap1scene2").svg({
			        onLoad: function(){
			            var svg2 = $("#svgloadchap1scene2").svg('get');
			            svg2.load('http://www.enigma-tic.fr/images/thomas.svg', { addTo: true,  changeSize: false});        
			    }, settings: {}} ); 
			}, 500);
		}else if(etatDuJeu == "chapitre1scene1" && j=="2") {
			nom = "Léopold";
			$('.diagThomas').hide();
			$('.diagleopold').fadeIn();
			j++;
		}else if(etatDuJeu == "chapitre1scene1" && j=="1") {
        	setTimeout(function() { 
        		brasNormal.fadeOut(200);
        		brasPhone.show()}, 
        	2000);
        	j++;
		}else if(etatDuJeu == "chapitre1scene1" && j=="3") {
        	brasNormal.show();
        	brasPhone.fadeOut(200);
        	nom = "Thomas";
			$('.diagThomas').fadeIn();
			$('.diagleopold').hide();
        	j++;
		}else if(etatDuJeu == "chapitre1scene2" && j=="0") {
        	brasNormalScene2.fadeOut(200);
        	brasPhoneScene2.show();
        	j++;
        }else if(etatDuJeu == "chapitre1scene2" && j=="1") {
        	brasNormalScene2.show();
        	brasPhoneScene2.fadeOut(200);
        	j++;
        }else if(etatDuJeu == "chapitre1scene2" && j=="3") {
			j=0;
			etatDuJeu = "chapitre1scene3";
			textesAAfficher = tabRepliquesScene3;
			$('#chap1scene2').fadeOut(600);
			$('.dialogue').hide();
			$('#chap1scene3').fadeIn(3000);
			$('.dialogue').fadeIn(3500);
			setTimeout(function () {
				$('svg').remove();
				$("#svgloadchap1scene4").svg({
			        onLoad: function(){
			            var svg3 = $("#svgloadchap1scene4").svg('get');
			            svg3.load('http://www.enigma-tic.fr/images/thomas-manteau-2.svg', { addTo: true,  changeSize: false});        
			    }, settings: {}} ); 
			}, 500);
		}else if(etatDuJeu == "chapitre1scene3" && j=="1"){
			j=0;
			etatDuJeu = "chapitre1scene4";
			textesAAfficher = tabRepliquesScene4;
			$('#chap1scene3').fadeOut(600);
			$('.dialogue').hide();
			$('#chap1scene4').fadeIn(3000);
			$('.dialogue').fadeIn(3500);
		}else if(etatDuJeu == "chapitre1scene4" && j=="0") {
			$('#thomasface').fadeOut();
			$('#thomasdos').show();
			$('#chap1scene4 .personnage svg').animate({'height' : '35%'}, 1000);
			j++;
		}else if(etatDuJeu == "chapitre1scene4" && j=="3") {
			$('.dialogue').hide();
			$(location).attr('href',"http://www.enigma-tic.fr/siteTest/histoire/bureau");
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
		

