/* VARIABLES GLOBALES */
	var audio = document.querySelector("audio");
	var video = document.querySelector("video");
	var volumeOn = true;
	var fullscreen = false;
	var activite_detectee = true;
	var testerActiviteUtilisateur;
	var clicAide = 0;
	
	$(document).ready(chargerLaPage);
	$(window).load(setup);

	/* FONCTION QUI PERMET DE CHARGER LA PAGE */
	function chargerLaPage () {
		if(video != null){ 
			video.play();
		}
	}

	/* FONCTION D'INITIATION DE LA PAGE */
	function setup () {
		$('#load').fadeOut(800);
		if(audio != null) {
			audio.play();
			audio.volume = 0.2;
		}
		$(window).blur(function() { 
			if(audio != null) audio.pause(); 
			clearInterval(testerActiviteUtilisateur);
		});
		$(window).focus(function() { 
			if(volumeOn == true) { 
				if(audio != null) audio.play(); 
			}
			testerActiviteUtilisateur = setInterval(utilisateurInactif, 20000);
		 });

		$('.open-menu').click(changerEtatMenu);
		$('#options .fa-volume-up, #options .fa-volume-off').click(sonOnOff);
		$('.open-menu').click(afficherMenu);
		$('#options .fa-question-circle').click(afficherMessageAide);
		$('.close').click(afficherMessageAide);
		$('.scrollTop').click(topPage);
		$('#options .fa-arrows-alt').click(afficherGrandEcran);
		testerActiviteUtilisateur = setInterval(utilisateurInactif, 10000);
		$('body').keydown(activiteDetectee);
		$(document).hover(activiteDetectee);
		$(document).click(activiteDetectee);
	}

	/* SAVOIR SI L'UTILISATEUR EST ACTIF SUR LE SITE OU PAS */
	function utilisateurInactif () {
		activite_detectee = false;
		setTimeout(testerActivite, 20000);
	}

	function testerActivite (){
		if(activite_detectee == false) {
			$('#options .fa-question-circle').addClass('clignote');
		}
	}

	function activiteDetectee() {
		clearInterval(testerActiviteUtilisateur);
		activite_detectee = true;
		testerActiviteUtilisateur = setInterval(utilisateurInactif, 20000);
	}

	/* FONCTION POUR AFFICHER LE JEU EN GRAND ECRAN */
	function afficherGrandEcran () {
		if(fullscreen == false){
			screenfull.request();
			fullscreen = true;
			$('#interactive').css('top','-15%');
		}else {
			screenfull.exit();
			fullscreen = false;
			$('#interactive').css('top','0');
		}
	}

	/* FONCTION QUI AFFICHE LE MESSAGE D'AIDE */
	function afficherMessageAide () {
		if(clicAide > 1){
			clearInterval(testerActiviteUtilisateur);
		}
		clicAide++;
		$(this).removeClass('clignote');
		if($('#message-aide').hasClass('affiche')){
			$('#message-aide').css({ 'top' : '-200%' });
			$('#message-aide').removeClass('affiche');
			$('#darker').fadeOut(200);
		}else {
			$('#message-aide').css({ 'top' : '0' });
			$('#message-aide').addClass('affiche');
			$('#darker').fadeIn(200);
		}
	}

	/* FONCTION QUI PERMET D'AFFICHER OU CACHER LE MENU COULISSANT */ 
	function afficherMenu () {
		if($('#menu-coulissant').hasClass('ferme')) {
			$('.menu').css({ 'top' : '20px', 'left' : '1%', 'z-index' : '9'});
			$('.menu .fa-facebook, .menu .fa-twitter').hide();
			$('#menu-coulissant').addClass('ouvert');
			$('#menu-coulissant').removeClass('ferme');
			$('#menu-coulissant').animate({ 'left' : '0px' }, 500);
			$('#darker').fadeIn(200);
			$('body').css('overflow', 'hidden');
		}else {
			if($('#top-bar').css('display') == 'block') {
				$('.menu').animate({ 'top' : '15%', 'left' : '5%'}, 600);
			}else {
				$('.menu').animate({ 'top' : '8%', 'left' : '5%'}, 600);
			}
			$('.menu').css('z-index', '6');
			if($('body').hasClass('temp-page') == true) {
				$('body').css('overflow', 'auto');
			}
			$('.menu .fa-facebook, .menu .fa-twitter').fadeIn(2000);
			$('#menu-coulissant').addClass('ferme');
			$('#menu-coulissant').removeClass('ouvert');
			if($(window).width() <= 600) {
				$('#menu-coulissant').animate({ 'left' : '-100%' }, 500);
			}else {
				$('#menu-coulissant').animate({ 'left' : '-50%' }, 500);
			}
			$('#darker').fadeOut(200);
		}
	}

	function changerEtatMenu () {
		console.log($(this).hasClass('menu-active'));
		if($(this).hasClass('menu-active')) {
			$(this).css({
				"background" : "url('http://www.enigma-tic.fr/images/menu.png') top left no-repeat",
			});
			$(this).removeClass('menu-active');
		}else {
			$(this).css({
				"background" : "url('http://www.enigma-tic.fr/images/menu-cross.png') top left no-repeat",
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

	function topPage (){
		$("html, body").animate({ scrollTop: 0 }, 600);
		return false;
	}