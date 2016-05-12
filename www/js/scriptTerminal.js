var ligneActuelle = 1;

$divActuelle = null;

var entete="C:\\Bureau > ";

var cursor;

$xml = null;

$dossierActuel = null;

var requete = [];
var reqFailed = 0;

var reqFailed = 0;

var repliqueMessageTrouve = ["Hum... Après avoir lu ce fichier texte, je crois que je sais comment retourner dans le bureau de grand-père !","Le cadran sur lequel j'ai appuyé, et qui est arrivé ici avec moi doit sûrement être la machine à voyager dans le temps qui est citée dans ce fichier texte.", "Tout cela semble complètement fou ! C'est sûrement Léopold qui a créé cette machine, puisqu'elle était dans son bureau ! Je ne comprend pas pourquoi il ne m'en a jamais parlé... ","Je vais essayer de trouver comment accéder aux dates configurées citées dans le document... Ca y est ! J'ai réussi ! Je vais essayer de retourner en 2016 maintenant !"];



$(document).ready(function(){

	$divActuelle = $('#contenu-1');//initialise la première div
	$.ajax( {
            type: "GET",
            url: "../../src/arbo.xml",
            dataType: "xml",

            success: function(xml) {
            	$xml = $(xml).find('bureau');
            	$dossierActuel = $xml;            	
            }
    });

	gestionTouches(); 
	gestionToucheSuppr();
	curseurClignotant();	

});


function gestionTouches(){

	$(document).keypress(function(e){

		var touche = e.which;

		var nbLignes = $('#entete').children().length;
		$divActuelle = $('#contenu-'+ligneActuelle);
		if(touche==13 && ($divActuelle.text().split('>')[1] != "" && $divActuelle.text().split('>')[1] != " ") ){	

			ligneActuelle++;	
			$('#console').append('<div id="contenu-'+ligneActuelle+'"> </div>');//on rajoute une ligne

			//On route la requête a effectuer

			if(ligneActuelle>1){
				console.log($divActuelle)
				requete = $divActuelle.text().split(entete)[1].split(' ');
				executeRequete(requete);
			}

			$divActuelle = $('#contenu-'+ligneActuelle);

			$divActuelle.append(entete);

			$('.cursor-console').remove();

			$divActuelle.append("<span class='cursor-console'></span>");		

		}else{//si c'est une touche normale

			$divActuelle.find("span").before(String.fromCharCode(e.which));	

		}
	});
}


function executeRequete(){
	var fonctionToCall = requete[0];
	requete.splice(0,1);
	var worked = false;
	var regex = new RegExp(/([^A-Za-z\-])/);	
	if(!regex.test (fonctionToCall))
		eval('if((typeof '+fonctionToCall+' == "function" && requete.length>=1) ||'+ 
			'( typeof '+fonctionToCall+' == "function" && requete.length==0 && '+fonctionToCall+'==dir) '+
			'){'+fonctionToCall+'();worked = true;reqFailed=0;}else{worked = false;reqFailed=1;}');

	if(!worked){
		c("mauvaise commande");
		ligneActuelle++;
		$('#console').append('<div id="contenu-'+ligneActuelle+'"> </div>');//on rajoute une ligne
		$divActuelle = $('#contenu-'+ligneActuelle);
		$('.cursor-console').remove();
		$divActuelle.append("<span class='cursor-console'></span>");
	}
}


function dir(){

	$divActuelle.after('<div id="contenu-'+(ligneActuelle++)+'">&nbsp;&nbsp;Répertoire actuel '+entete.split(' >')[0]+'</div><br>');

	var nbFic = 0, nbDoss = 0;
	$dossierActuel.children().each(function(){
		$this = $(this);
		var date = $this.attr('date');
		var heure = $this.attr('heure');
		var nom = $this.attr('name');
		var type;

		if($this.prop('nodeName')=='dossier' || $this.prop('nodeName')=='sous-dossier' ){
			type = '&lt;REP&gt;';
			nbDoss++;
		}else{
			type = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
			nbFic++;
		}   

		$('#console').append('<div id="contenu-'+(ligneActuelle++)+'">'+date+' &emsp;'+heure+' &emsp;'+type+' &emsp;'+replaceAll(ucfirst(nom),'-',' ')+'</div>');
	});

	$('#console').append('<div id="contenu-'+(ligneActuelle++)+'">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;'+nbFic+' fichier(s)</div>');

	$('#console').append('<div id="contenu-'+(ligneActuelle++)+'">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;'+nbDoss+' Rép(s)</div>');

	$('#console').append('<div id="contenu-'+(ligneActuelle)+'"></div>');

	$('#console').scrollTop($('#console').prop('scrollHeight') + 250);
}



function cd(){
	var params = requete[0].split('/');
	var nomDossier = "";

	//pour obtenir un nom en un mot s'il y a des espaces, et non un tableau
	for(var i=0;i<requete.length;i++){
		if(i!=requete.length-1)nomDossier += requete[i]+' ';
		else nomDossier += requete[i];
	}


	if(params[0]=='..' && $divActuelle.text().split('\\').length>2){
		$dossierActuel = $dossierActuel.parent();
		c($dossierActuel)
		var dossiers =entete.split('\\');
		var nbDossiers = dossiers.length;

		entete = "";

		for(var i=0;i<nbDossiers-1;i++){
			entete += dossiers[i]+'\\'
		}

		entete = entete.substr(0,entete.length-1)+' > ';

	}else {
		$dossierActuel.children().each(function(){

			if(replaceAll($(this).attr('name'),'-',' ').toLowerCase() == nomDossier.toLowerCase()){
				if( $(this).prop('tagName').toLowerCase()!='fichier'){
					$dossierActuel = $(this);
					entete = entete.split(' ')[0]+'\\'+nomDossier.toLowerCase()+' > ';
				}else{
					ligneActuelle++;
					$('#console').append('<div id="contenu-'+ligneActuelle+'"> </div>');//on rajoute une ligne
					$divActuelle = $('#contenu-'+ligneActuelle);
					$('.cursor-console').remove();
					$divActuelle.append("<span class='cursor-console'></span>");
				}
			}

		});

	}
	$('#console').scrollTop($('#console').prop('scrollHeight') + 250);

}



function type(){

	if(requete.length == 1){

		var nomFic = requete[0];

		if((nomFic == "machine.txt") || (nomFic == "Machine.txt")) {
			$('#end-1973-read').fadeIn();
			$('#end-1973-read').click(function () {
				$('#end-1973-read').fadeOut();
				j=0;
				etatDuJeu = "scene1973-fin"; 
				textesAAfficher = repliqueMessageTrouve;
				clearInterval(afficherLeMessage);
				afficherTexte(repliqueMessageTrouve, nom);
				$('.dialogue').fadeIn(200);
			});
		}

		$dossierActuel.children().each(function(){

			$this = $(this);
			if($this.prop('nodeName')=='fichier' && $this.attr('name').toLowerCase() == nomFic.toLowerCase()){
				c($this.html()); 

				$('#console').append('<br><div id="contenu-'+(ligneActuelle++)+'">'+$this.html()+'</div><br>');
			}

		});

		$('#console').append('<div id="contenu-'+(ligneActuelle)+'"></div>');

	}

	$('#console').scrollTop($('#console').prop('scrollHeight') + 250);


}



function gestionToucheSuppr(){

	$(document).keydown(function(e){

		if(e.which==8){

			var tailleLimite = (ligneActuelle==1) ? (parseInt(entete.length)) :(parseInt(entete.length))+1 ;

			if($divActuelle.before().text().length>tailleLimite ){//si c'est après, ne pas suppr le pseudo + >

				$divActuelle.before().text($divActuelle.before().text().slice(0,-1)).append("<span class='cursor-console'></span>");

			}

			e.preventDefault();

		}

	});

}



function curseurClignotant(){

	cursor = window.setInterval(function () {

    if ($('.cursor-console').css('visibility') === 'visible') {

        $('.cursor-console').css({

            visibility: 'hidden'

        });

    } else {

        $('.cursor-console').css({

            visibility: 'visible'

        });

        }

    }, 1000);

}



function c(text){

	console.log(text);

	//console.trace();

}



function ucfirst(str) {

  str += '';

  var f = str.charAt(0)

    .toUpperCase();

  return f + str.substr(1);

}



function replaceAll(str, find, replace) {

  return str.replace(new RegExp(find, 'g'), replace);

}





