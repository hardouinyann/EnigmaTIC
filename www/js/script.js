
	$(document).ready(setup);

	function setup () {
		// Lancer l'effet de parallaxe du background
		if($(window).width() > 1000) {
      		$('#background').mouseParallax({ moveFactor: 4 });
    	}

    	$('.top').click(backToTop);
    	$('#savoir-plus').click(afficherInfosProjet);
    	$('.close').click(fermerInfosProjet);
    	$('.mentions').click(afficherMentionsLegales);
	}

	function afficherInfosProjet () {
		$('section').fadeOut(200);
		$('#more').fadeIn(1500);
		$('footer').fadeOut(200);
	}

	function fermerInfosProjet () {
		$('#more').fadeOut(200);
		$('section').fadeIn(1500);
		$('footer').fadeIn(1500);
		$('#mentions-legales').fadeOut(200);
	}

	function afficherMentionsLegales () {
		$('section').fadeOut(200);
		$('#more').fadeOut(200);
		$('#mentions-legales').fadeIn(1500);
		$('footer').fadeOut(200);
	}

	function backToTop () {
		$("html, body").animate({ scrollTop: 0 }, 600);
		return false;
	}


