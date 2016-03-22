
var login = "a";
var mdp = "z";


var ligneActuelle = 1;
$divActuelle = null;
var entete="C:\\Bureau > ";
var cursorCons;
$xml = null;
$dossierActuel = null;
var requete = [];

	$divActuelle = $('#contenu-1');//initialise la première div
	$.ajax( {
            type: "GET",
            url: "../src/arbo.xml",
            dataType: "xml",
            success: function(xml) {
            	$xml = $(xml).find('bureau');
            	$dossierActuel = $xml;            	
            }
    });

	gestionTouches();
	gestionToucheSuppr();
	curseurClignotant();	
	
function gestionTouches(){
	$(document).keypress(function(e){
		var touche = e.which;
		var nbLignes = $('#entete').children().length;
		$divActuelle = $('#contenu-'+ligneActuelle);
		//si on appuye sur entrer
		if(touche==13){	
			//si on en est au login
			if(ligneActuelle==1){
				if($divActuelle.text().split(' ')[1]==login){
					ligneActuelle++;
					$('#contenu').append('<div id="contenu-'+ligneActuelle+'">Mot de passe: </div>');//on rajoute une ligne
					$('.cursor-console').remove();
					$('#contenu-'+ligneActuelle).append("<span class='cursor-console'></span>");
					return;					
				}else
					return;				
			}//si on en est au mot de passe
			if(ligneActuelle==2){
				if( $divActuelle.text().split(' ')[3]==mdp)
					ligneActuelle++;
				else
					return;
			}
			ligneActuelle++;
			$('#contenu').append('<div id="contenu-'+ligneActuelle+'"> </div>');//on rajoute une ligne
			//On route la requête a effectuer
			if(ligneActuelle>4){
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
	c('if(typeof '+fonctionToCall+' == "function")'+fonctionToCall+'()')
	eval('if(typeof '+fonctionToCall+' == "function")'+fonctionToCall+'()');
}

function dir(){
	$divActuelle.after('<div id="contenu-'+(ligneActuelle++)+'">&nbsp;&nbsp;Répertoire actuel '+entete.split(' >')[0]+'</div><br>');
	$dossierActuel.children().each(function(){
		$this = $(this);
		var date = $this.attr('date');
		var heure = $this.attr('heure');
		var nom = $this.attr('name');
		var type = ($this.prop('nodeName')=='dossier' || $this.prop('nodeName')=='sous-dossier' )? '&lt;REP&gt;' : ' &emsp;&emsp;&emsp;&emsp;'/*'&lt;FIL&gt;'*/;
		$('#contenu').append('<div id="contenu-'+(ligneActuelle++)+'">'+date+' &emsp;'+heure+' &emsp;'+type+' &emsp;'+replaceAll(ucfirst(nom),'-',' ')+'</div>');
	});
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

	if(params[0]=='..'){
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

function gestionToucheSuppr(){
	$(document).keydown(function(e){
		if(e.which==8){
			if(ligneActuelle==1 && $divActuelle.before().text().length>7){//si c'est la première ligne faut pas suppr "login: "
				$divActuelle.before().text($divActuelle.before().text().slice(0,-1)).append("<span class='cursor-console'></span>");
			}else if(ligneActuelle==2 && $divActuelle.before().text().length>(parseInt(entete.length)+2) ){
				$divActuelle.before().text($divActuelle.before().text().slice(0,-1)).append("<span class='cursor-console'></span>");
			}else if(ligneActuelle>1  && $divActuelle.before().text().length>(parseInt(entete.length)+1) ){//si c'est après, ne pas suppr le pseudo + >
				$divActuelle.before().text($divActuelle.before().text().slice(0,-1)).append("<span class='cursor-console'></span>");
			}
			e.preventDefault();
		}
	});
}

function curseurClignotant(){
	cursorCons = window.setInterval(function () {
        if ($('.cursor-console').css('visibility') === 'visible') {
            $('.cursor-console').css({
                visibility: 'hidden'
            });
        } else {
            $('.cursor-console').css({
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