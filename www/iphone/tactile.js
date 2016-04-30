jQuery(function($){
	'use strict';

	$(document).ready(function() {

		var img = "photo.jpg";

		$('#ecran').css("background-image", "url(img/"+img+")");

		$('#touches p').on("click", function(){
			var p = $(this);
			entrerChiffre(p.html());
		});

		$("#lancerJeu").on("click", function(){
			$('#saisisMdp').addClass("masquer");
			$('#devinette').removeClass("masquer");
		});

		$("#revenir").on("click", function(){
			$('#devinette').addClass("masquer");
			$('#saisisMdp').removeClass("masquer");
		});


	});


});

var nbChiffre = 0;
var pass;

function entrerChiffre(p){
	if(pass == undefined){ 
		pass = p;
	} else {
		pass= pass+p;
		console.log(pass);
	}

	var ronds= document.getElementById("mdp").getElementsByTagName("div");

	ronds[nbChiffre].className= "rond";

	nbChiffre++;
	if(nbChiffre == 5){

		if(pass == 15514){
			$('#ecran').css("background-image", "url(img/bureau.jpg)");
			$("#saisisMdp").animate({opacity: 0}, 1000, function(){
				$('#saisisMdp').addClass("masquer");
			});
		} else {
			document.getElementById("error").innerHTML= "Mot de passe incorrect";
		}
		setTimeout(function(){
			for(var i=0; i<ronds.length; i++){
				ronds[i].className="rond masquer";
			}
			document.getElementById("error").innerHTML= "";
		}, 1000);
		pass = undefined;
		nbChiffre = 0;
	}
}