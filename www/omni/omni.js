
function allowDrop(ev) {
   
   	 ev.preventDefault(); 
   }
  	

function drag(ev) {

    ev.dataTransfer.setData("text", ev.target.id);

    var haut= document.getElementById("haut");
    var bas= document.getElementById("bas");
    
    haut.className="auDessus";
    bas.className="auDessus";
}





function handleDragLeave(e) {
  this.classList.remove('survoler');  // this / e.target is previous target element.
}

function drop(ev) {

	var haut= document.getElementById("haut");
    var bas= document.getElementById("bas");

    haut.className="";
    bas.className="";



    ev.preventDefault();
    //console.log(ev.target.id);

    var data = ev.dataTransfer.getData("text");
   	var id= document.getElementById(data).id;
   	//console.log(id);

   	/*if(ev.target.id == "haut"){
	    console.log("enHaut");
	}
	if(ev.target.id == "bas"){
	    console.log("enBas");
	}*/

	charger(id, ev.target.id)

}

function charger(id, ev){
	var div= document.getElementById("controle"+id);
	var view= document.getElementById("view"+id);

	
	if(ev == "haut"){
		var affiche= document.getElementsByClassName("afficher haut");
		for(i=0; i<affiche.length; i++){
			affiche[i].className="";
		}
		

		if(id == "Telephone" || id == "Avant" || id == "Arriere" || id == "Etat" || id == "Params"){
			var afficheGauche= document.getElementsByClassName("vue gauche haut");
			for(i=0; i<afficheGauche.length; i++){
				afficheGauche[i].className="";
			}
			view.className="vue gauche haut";
		}

		if(id == "Tv" || id == "Appli" || id == "Musique" || id == "Gps"){
			var afficheDroite= document.getElementsByClassName("vue droite haut");
			for(i=0; i<afficheDroite.length; i++){
				afficheDroite[i].className="";
			}
			view.className="vue droite haut";
		}
		
		div.className= "afficher haut";
	}
	if( ev == "bas"){
		
		var affiche= document.getElementsByClassName("afficher bas");
		for(i=0; i<affiche.length; i++){
			affiche[i].className="";
		}


		if(id == "Telephone" || id == "Avant" || id == "Arriere" || id == "Etat" || id == "Params"){
			var afficheGauche= document.getElementsByClassName("vue gauche bas");
			for(i=0; i<afficheGauche.length; i++){
				afficheGauche[i].className="";
			}
			view.className="vue gauche bas";
		}

		if(id == "Tv" || id == "Appli" || id == "Musique" || id == "Gps"){
			var afficheDroite= document.getElementsByClassName("vue droite bas");
			for(i=0; i<afficheDroite.length; i++){
				afficheDroite[i].className="";
			}
			view.className="vue droite bas";
		}

	


		div.className= "afficher bas";
	}
	
}






jQuery(function($){
	'use strict';

	$(document).ready(function() {
		var index=1;
		$("div.controle div.top ul li:nth-child(n+2):not(li:last-child)").on("click", function(){
			var li= $(this);
			if(li.hasClass("desactiver")){
				li.removeClass("desactiver");
			} else{
				li.addClass("desactiver");
			}
		});

		$("div.controle ul li").on("click", function(){
			var alt= $(this).attr('alt');
			$("div.controle div#"+alt).css("z-index", index);
			index++;
			console.log(index);
		});

		$("div#controleAppli p#fermerAppli").on("click", function(){
			$("div#controleAppli div:last-child").css("z-index", index);
			index++;
		});


		$("div#controleMusique div.liste ul li").on("click", function(){
			

			var titreTop= $("#titreMusique");
			var son= $(this).attr("href");
			titreTop.html($(this).html());
			son= "musiques/"+son+".mp3";
			var audio= document.getElementById("audio");
	
			if($(this).hasClass("enEcoute")){
				$(this).removeClass("enEcoute");
				audio.pause();
			} else {
				audio.src= son;
				audio.play();
				$("div#controleMusique div.liste ul li.enEcoute").removeClass("enEcoute");
				$(this).addClass("enEcoute");
			}
			


		});


	});




});



function eteindreEcran(){
	jQuery(function($){
		'use strict';
		$("div.ecran").animate({opacity : "toggle"}, 600);

	});
}

function modeNuit(ev){
	jQuery(function($){
		'use strict';
		console.log(ev.target);
		if($(ev.target).hasClass("desactiver")){
			$('div.voiture div.nuit').animate({opacity : 1}, 600);
		} else{
			$('div.voiture div.nuit').animate({opacity : 0}, 600);
		}
		

	});
}

function klaxonner(){
	var audio = new Audio('klaxon.mp3');
	audio.play();
}

function appeler(){
	document.getElementById("appeler").innerHTML= "Appel en cours...";
	var num= document.getElementById("numero").value;
	num= parseInt(num);
	if(typeof num == "number" && num == 0381962973){
		var audio= new Audio('klaxon.mp3');
		console.log(audio.duration);
		audio.play();
		setTimeout(function(){ alert("fin discussion"); }, audio.duration);
	} else {
		alert("numéro incorrect");
		document.getElementById("appeler").innerHTML= "Appeler";
	}
}


function rouler(){
	//Récupère les élements Nom de lieu, Lien pour l'iframe, Iframe
	var valeurInput = document.getElementById("address").value;
	var address= document.getElementById("address").href;
	var map= document.getElementById("map");
	//Charge la nouvelle adresse sur l'iframe
	map.src= address;
	//Véfirie si l'adresse n'est pas nul
	if(valeurInput == undefined || valeurInput == ""){
		alert("Veuillez entrer une destination");
	}

}


function entrerAddresse(){
	//L'adresse choisit dans le select est mise dans l'input 
	document.getElementById("address").value= document.getElementById("selectAddress").value;

	//récupère tous les options
	var options= document.getElementById("selectAddress").getElementsByTagName("option");
	//Boucle sur les options pour savoir laquelle est selectionnée
	for(i=0; i<options.length; i++){
		//si elle est selectionné
		if(options[i].selected == true){
			//Stocke le label qui contient le lien de l'iframe dans option
			var option= options[i].label;
		}
	}
	//on met sur l'input dans son href la valeur du lien pour la récupérer quand on va décider de déplacer la voiture
	document.getElementById("address").href= option;
}
