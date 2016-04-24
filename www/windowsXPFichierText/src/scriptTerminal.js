var ligneActuelle = 1;
$divActuelle = null;
var entete="C:\\Bureau > ";
var cursor;
$xml = null;
$dossierActuel = null;
var requete = [];


$(document).ready(function(){

	$divActuelle = $('#contenu-1');//initialise la première div
	$.ajax( {
            type: "GET",
            url: "src/arbo.xml",
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
		//si on appuye sur entrer
		if(touche==13){	
			ligneActuelle++;	
			$('#contenu').append('<div id="contenu-'+ligneActuelle+'"> </div>');//on rajoute une ligne
			//On route la requête a effectuer
			if(ligneActuelle>1){
				console.log($divActuelle)
				requete = $divActuelle.text().split(entete)[1].split(' ');
				executeRequete(requete);
			}
			$divActuelle = $('#contenu-'+ligneActuelle);
			$divActuelle.append(entete);
			$('.cursor').remove();
			$divActuelle.append("<span class='cursor'></span>");		
		}else{//si c'est une touche normale
			$divActuelle.find("span").before(String.fromCharCode(e.which));	
		}
		
	});
}

function executeRequete(){

	var fonctionToCall = requete[0];
	requete.splice(0,1);
	c('if(typeof '+fonctionToCall+' == "function")'+fonctionToCall+'()')
	eval('if(typeof '+fonctionToCall+' == "function")'+fonctionToCall+'()');
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
			type = ' &emsp;&emsp;&emsp;&emsp;';
			nbFic++;
		}   
		$('#contenu').append('<div id="contenu-'+(ligneActuelle++)+'">'+date+' &emsp;'+heure+' &emsp;'+type+' &emsp;'+replaceAll(ucfirst(nom),'-',' ')+'</div>');
	});
	$('#contenu').append('<div id="contenu-'+(ligneActuelle++)+'">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;'+nbFic+' fichier(s)</div>');
	$('#contenu').append('<div id="contenu-'+(ligneActuelle++)+'">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;'+nbDoss+' Rép(s)</div>');
	$('#contenu').append('<div id="contenu-'+(ligneActuelle)+'"></div>');
	
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
				$dossierActuel = $(this);
				entete = entete.split(' ')[0]+'\\'+nomDossier.toLowerCase()+' > ';
			}
		});
	}
	
}


function type(){
	if(requete.length == 1){
		var nomFic = requete[0];
		$dossierActuel.children().each(function(){
			$this = $(this);
			if($this.prop('nodeName')=='fichier' && $this.attr('name').toLowerCase() == nomFic.toLowerCase()){
				c($this.html());

				/*$dossierActuel.children().each(function(){*/
					//$this = $(this);
					/*var date = $this.attr('date');
					var heure = $this.attr('heure');
					var nom = $this.attr('name');*/   
					$('#contenu').append('<br><div id="contenu-'+(ligneActuelle++)+'">'+$this.html()+'</div><br>');
				/*});*/
			}
		});
		$('#contenu').append('<div id="contenu-'+(ligneActuelle)+'"></div>');
	}
}

function gestionToucheSuppr(){
	$(document).keydown(function(e){
		if(e.which==8){
			var tailleLimite = (ligneActuelle==1) ? (parseInt(entete.length)) :(parseInt(entete.length))+1 ;
			if($divActuelle.before().text().length>tailleLimite ){//si c'est après, ne pas suppr le pseudo + >
				$divActuelle.before().text($divActuelle.before().text().slice(0,-1)).append("<span class='cursor'></span>");
			}
			e.preventDefault();
		}
	});
}

function curseurClignotant(){
	cursor = window.setInterval(function () {
        if ($('.cursor').css('visibility') === 'visible') {
            $('.cursor').css({
                visibility: 'hidden'
            });
        } else {
            $('.cursor').css({
                visibility: 'visible'
            });
        }
    }, 500);
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


//deplacer curseur
//virer système de mdp
//dir donne nombre de fichiers / repertoires
//cd ..  quand one st sur le bureau