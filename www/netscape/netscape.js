
jQuery(function($){
		'use strict';

	$(document).ready(function() {
	   
	   // ++++++++++++++++ Fonction qui masque si on clique n'importe où ----> MANQUANTE

		//Affiche le sous menu de chaque élément du menu principal
		$('div.menu ul li').on('click', function(){
			//on récupère le ul qui doit être affiché. $(this) == li cliqué 
			var ul= $(this).children('ul');


			//si ce ul est déjà affiché
			if(ul.attr('class') == 'afficher' ){
				//le caché
				$(ul).removeClass('afficher');

			//si ce ul n'est pas encore affiché
			} else {
				//désaffiché celui qui serait potentiellement déjà affiché
				$('div.menu ul li ul.afficher').removeClass('afficher');
				//Affiché ce ul
				$(ul).addClass('afficher');
			}
			
		});

		





	});

});
//tableau qui enregistre les sites visités pour le boutons back
var navigation= new Array;
navigation[0]='index';
var idNavigation= 0;

document.addEventListener("DOMContentLoaded", finChargementPage);

function finChargementPage(){

	

}

//détecte si l'utilisateur appuie sur entrée dans le champs input text 
function keyPressed(event){
	if(event.keyCode == 13) chercherAdresse();
}


//va analyser la chaine de caractère pour savoir quel site à été demandé et appelle la fonction afficherAdresse avec le nom du site
function chercherAdresse(){
	//lien sur l'élément input
	var url= document.getElementById('url');
	//on coupe la chaîne ['www',"url.value",".extension"]
	var idSite= url.value.split('.');

	//sécurité pour vérifier que les www sont présents
	if(idSite[0] != "www"){ 
		alert("Format inconnu. Une url s'écrit sous la forme : www.nomdusite.extension");
		return false;
	};

	//vérification de la présence d'une extension qui n'est pas nulle
	if(idSite[2] == null || idSite[2] == ""){
		alert("Format inconnu. Une url s'écrit sous la forme : www.nomdusite.extension.");
		return false;
	}
	
	//vérification de la nature de l'extension
	if(idSite[2] != "fr" && idSite[2] != "com" && idSite[2] != "net" && idSite[2] != "org"){
		alert("Extension non reconnu. Les extensions acceptées sont : .fr, .com, .net, .org");
		return false;
	}

	afficherAdresse(idSite[1]);
	console.log(idSite);
	if(url.value == "www.google.com" || url.value== "www.invente.com"){
		afficherAdresse(idSite[1]);
	} else {
		afficherAdresse('introuvable');
	}

	idNavigation++;
	
}

function afficherAdresse(nomSite){
	console.log(navigation);
	var url= document.getElementById('url');

	//Si le site que l'on visite acuellement est différent que celui que l'on veut visiter => alors ajouter ce site dans le tableau de navigation
	if(navigation[navigation.length-1] != nomSite){ navigation.push(nomSite);  }
	
	//Si on veut aller sur l'accueil
	if(nomSite == 'index'){
		//Supprime l'url de l'input
		url.value="";
		//Selectionne la div affiché puis lui enlève la classe pour la masquer
		var site= document.getElementsByClassName("siteAfficher");
		site[0].className="";
		//On affiche la page d'accueil
		var index= document.getElementById('index');
		index.className= "siteAfficher";

	} else {
		//On écrie le site demandé dans l'input
		url.value="www."+nomSite+".com";
		//On supprime l'accueil au cas ou il serait affiché
		var index= document.getElementById('index');
		index.className= "";

		//vérifie qu'il n'y a pas déjà de site chargé
		var site= document.getElementsByClassName("siteAfficher");
		//si c'est le cas on le masque
		if(site[0] != null){ site[0].className=""; }

		//On récupère le site que l'on veut afficher et y ajoute la classe CSS pour l'afficher
		var site= document.getElementById(nomSite)
		site.className="siteAfficher";
	}
	
}


function back(){
	console.log(idNavigation);
	if(idNavigation > 0){
		afficherAdresse(navigation[idNavigation-1]);
		idNavigation--;
	}
}

function forward(){
	if(idNavigation < navigation.length-1){
		afficherAdresse(navigation[idNavigation+1]);
	}
}

function home(){
	afficherAdresse('index');
}


function reload(){
	chercherAdresse();
}

function addBookmarks(){
	var url= document.getElementById('url');

	var listeBookmarks= document.getElementById("listeBookmarks");
	var li=  document.createElement("li");
	var t=document.createTextNode(url.value);
	
	li.appendChild(t);
	listeBookmarks.appendChild(li);

}