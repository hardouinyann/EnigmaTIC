jQuery(function($){
	'use strict';
	var accueil= $('div#jeu_accueil');
	$('div#jeu_accueil ul li').on('click', function(){

		var id=$(this).attr("id");
		accueil.addClass('masquer');
		$('#div_'+id).addClass('afficher');
		$('#div_'+id).removeClass('masquer');

	});



	/**** REVENIR MENU *** */

	$('header p').on('click', function(){
		accueil.removeClass('masquer');
		$('div.ecran div.afficher').addClass('masquer').removeClass('afficher');
	});

	/* *** verif mdp *** */

	$('#allerMdp').on('click', function(){
		accueil.addClass('masquer');
		$('div.ecran div#mdp').addClass('afficher').removeClass('masquer');
	});
});


function verifNbOiseau(){
	var top= document.getElementById("nbOiseauTop").value;
	var bottom= document.getElementById("nbOiseauBottom").value;
	if(top == 7 && bottom == 5){
		alert("Bien joué");
	} else {
		alert("perdu");
	}

}

function verifNbJours(){
	var jours= document.getElementById("nbJours").value;
	if(jours == 8){
		alert("Bien joué");
	} else {
		alert("perdu");
	}
}