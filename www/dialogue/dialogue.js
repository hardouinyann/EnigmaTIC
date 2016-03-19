function direBonjour(){
	var tab= ["Bonjour nous sommes Enigmatic le meilleur groupe de Rizhome","Et nous allons vous en mettre plein la vue !", "Bonne chance pour retrouver Papie."];
	var nom= "Leopold";
	afficherTexte(tab, nom);
}

function afficherTexte(tableau, nomParle){
	var i=0;
	var pense= document.getElementById("pense");
	var bulle= document.getElementById("bulle");
	var nom; var placeTexte;

	jQuery(function ($){
		'use strict';
		nom=  $('#pense h3').get(0);
		placeTexte= $('#pense #bulle p').get(0);
	});

	pense.style.opacity= "1";

	placeTexte.innerHTML= tableau[i];
	nom.innerHTML= nomParle;

	
	bulle.addEventListener("click", function(){
		if(i<tableau.length-1){
			i++;
			placeTexte.innerHTML= tableau[i];
		} else {
			pense.style.opacity="0";
			placeTexte.innerHTML="";
			i=0;
		}
	});

}



