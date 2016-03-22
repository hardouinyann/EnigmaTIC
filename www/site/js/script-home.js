	/* VARIABLES GLOBALES */
	var audio = document.querySelector("audio");
	var video = document.querySelector("video");
	var volumeOn = true;
	/* VARIABLE POUR GERER L'AFFICHAGE DU TEXTE DES CINEMATIQUES */
	var texte, actual_texte, nb_msg;
	var tabRepliquesScene1 = ["Tiens... Cela fait longtemps que je n’ai pas eu de nouvelles de grand-père...","Il doit encore avoir la tête plongée dans l’une de ses nouvelles inventions farfelues... Il n’arrêtera jamais décidément !", "Je vais essayer de l’appeler pour voir s’il va bien quand même. <br/>(<i>Thomas compose le numéro et l’appelle...</i>).", "Bon, il ne répond pas... Je vais essayer de l’appeler plus tard...", "Aller, je vais rentrer à la maison en attendant. Brrr, il fait vraiment froid aujourd'hui !"];
	var tabRepliquesScene2 = ["Me voilà à la maison ! Il fait meilleur ici ! Je vais essayer de rappeler grand-père. (<i>Thomas essaye de l'appeler à nouveau).</i>","Toujours aucune réponse, je tombe à nouveau sur son répondeur ! ", "Bon, j’espère qu’il va vite me rappeler, je n’aime pas quand il ne me donne pas de nouvelles aussi longtemps... ", "Il devrait vraiment prendre des vacances et laisser un peu tomber ses expériences scientifiques !"];
	var tabRepliquesScene3 = ["<i>(Un jour plus tard...</i>). Bon, voilà, j’ai réservé mon billet de train. Je vais aller voir grand-père !","Je préfère aller vérifier s’il va bien, vu qu’il ne me donne plus de nouvelles depuis plusieurs jours ! Et puis, ça lui fera plaisir de me voir !"];
	var tabRepliquesScene4 = ["Me voilà enfin chez grand-père ! Allons voir s'il est là !", "Tiens j’ai sonné... mais il ne répond-pas. Mais qu’est ce qu’il fabrique !","La porte est dévérouillée... Je lui ai pourtant dis plusieurs fois de faire attention et de verouiller sa porte d'entrée ! Quel tête de mule! ", "Bon aller, je rentre ! De toute façon il doit sûrement être encore occupé dans son bureau, il n’a pas du entendre la sonnette."];
	var nom = "Thomas";
	var j=0;
	var etatDuJeu, afficherLeMessage ;
	var textesAAfficher = tabRepliquesScene1;

	$('.startGame').click(lancerLeJeu);
	$('.next').click(changerMessageDialogue);

	/* FONCTION QUI PERMET DE LANCER LE JEU */
	function lancerLeJeu () {
		$('.menu').animate({ 'top' : '15%', 'left' : '5%', 'opacity' : '0.9'},1000);
		$('#options').animate({ 'top' : '15%', 'opacity' : '0.9'},1000);
		$('#home').fadeOut(1200);
		$('#chapitre-1').fadeIn(300);
		$('#chap1scene1').fadeIn(2000);
		etatDuJeu = "chapitre1scene1";
		afficherTexte(textesAAfficher, nom);
	}

	/* FONCTION QUI PERMET DE CHANGER LES DIALOGUES EN FONCTION DE LA SCENE */
	function changerMessageDialogue () {
		clearInterval(afficherLeMessage);
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
			$(location).attr('href',"bureau-de-leopold.html");
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
		

