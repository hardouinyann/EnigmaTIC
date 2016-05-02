var screenH, screenW, popUpWidth;
var popUpHeight = 250;
var navbarHeight = 30;
var cpt;
var cursorW, cursorH;	
var mouseX, mouseY;
var easingAmount = 0.035;
var pics = [];
var nbPics = 11;
var score = 0;
var temps = 30;
var scoreABattre = 220;
var nbClick = 0;
var jeuFini = false;
var jeuLance = false;

$(document).ready(function(){
	screenH = parseInt($('.miniJeu').height());
	screenW = parseInt($('.miniJeu').width()); 
	popUpWidth = 0.3*screenW;

	$('#redirection').hide();

	$('#message-txt .close-window').click(function () {
		$('#message-txt').hide();
	});

	$('#redirection .close-window').click(function () {
		$('#redirection').hide();
	});

	$('#raccourci img').dblclick(function(e){
		$('#redirection').hide();
		if(jeuLance == false) {
			if(jeuFini == false) {
				$('.header').addClass('selectedHeader');
				$('#redirection').hide();
				$('#virus').show();
			}else {
				if(etatDuJeu != "scene2002OrdiFin") {
					j=0;
					etatDuJeu = "scene2002OrdiFin"; 
					if($('.noMessage').length == 1) {
						textesAAfficher = tabPremierMessageRecup;
					}else {
						textesAAfficher = tabRepliquesScene2002OrdiFin;
					}
					clearInterval(afficherLeMessage);
					afficherTexte(textesAAfficher, nom);
					$('.dialogue').fadeIn();
				}
				$('.header').addClass('selectedHeader');
				$('#message-txt').show();
			}
			$(this).attr('src', 'http://www.enigma-tic.fr/images/xp/raccourci-message.png');
		}else {
			e.preventDefault();
		}
	});


	$('#raccourci img').click(function (e) {
		if(jeuLance == false) {
			if(nbClick == 0){
				$(this).attr('src', 'http://www.enigma-tic.fr/images/xp/raccourci-message-hover.png');
				nbClick++;
			}else {
				nbClick = 0;
				$(this).attr('src', 'http://www.enigma-tic.fr/images/xp/raccourci-message.png');
			}
		}else {
			e.preventDefault();
		}
	});

	$('#menu-demarrer').click( function (){ 
			$('#afficher-demarrer').show();
			$('#afficher-demarrer').click(function (){
				$('#afficher-demarrer').hide();
			});
	});

	$('.fenetre').addClass('ui-draggable').draggable({handle:'.header'});
	cpt=0;

	gestionClicks();	
	$(".miniJeu").droppable();


	$(document).on('click','.close-window',function(){
		score += 10;
		$('#score').html('Score : '+score+' pts');
	});

	$(document).on('click','.fenetre,.header',function(){

		$('.selectedHeader').removeClass('selectedHeader');
		$('.selectedFenetre').removeClass('selectedFenetre');

		if($(this).hasClass('fenetre')){
			$(this).find('.header').addClass('selectedHeader');
			$(this).addClass('selectedFenetre');
		}else if($(this).hasClass('header')){
			$(this).parent().addClass('selectedFenetre');
			$(this).addClass('selectedHeader');
		}

	});


	
});


function makePop(){
	$('#temps').html('Temps restant : '+(temps--)+'s');
	var posX = Math.random()*(screenW-popUpWidth);
	var posY = Math.random()*(screenH-popUpHeight-165);
	var url;
	do{
		url = Math.round(Math.random()*nbPics)+1;
	}while(!$.inArray(url,pics));
	pics.push(url);
	if(cpt == 0){
		t = new popUp(screenW/2,screenH/2, "secret");//sur l'image, le secret a donner
		t.draw();
	}
	var t = new popUp(posX,posY,url);
	t.draw();
	if(cpt==30){
		if($('.fenetre').length > 1){
			$('.fenetre:not(#redirection)').remove();
			$('.shortcut').remove();
			var succes = score >= scoreABattre ? "Félicitations vous avez réussi !" : " Dommage, vous avez échoué !";
			$('#info').fadeOut();
			if(score>=scoreABattre) {
				jeuFini = "true";
				$('#redirection').find('input[type=submit]').show();
			}else {
				$('#redirection').find('input[type=submit]').hide();
			}
			$('#scoreVal').attr('value', score);
			$('#options').css('z-index', '8');
			$('.header').addClass('selectedHeader');
			jeuLance = false;
			$('#redirection').find('#titre').html(succes);
			if(jeuFini == "true") {
				$('#redirection').find('p').html("Vous avez obtenu un score de "+score+" points en 30 secondes, soit "+(score/10)+" fenêtres fermées.<br/><br/>Bravo, vous avez réussi à éliminer le virus. Vous pouvez maintenant fermer cette fenêtre, et double cliquer sur le fichier message.txt pour l'ouvrir, et le lire, sans faire apparaître de virus.<br/><br/>Si vous avez envie de battre votre score vous pouvez cliquer sur le bouton rejouer ci-dessous.");
			}else {
				$('#redirection').find('p').html("Vous avez obtenu un score de "+score+" points en 30 secondes, soit "+(score/10)+" fenêtres fermées.<br/><br/>Désolé, vous n'avez pas réussi à fermer assez de fenêtres, et le virus a endommagé le fichier. Veuillez rejouer pour tenter d'atteindre le score minimum requis, et débloquer la lecture du fichier.");
			}

			$('#redirection').show();
		}
	}
	if(cpt++<30){//30
		setTimeout(makePop, 800);
	}
}


function gestionClicks(){

	//focus sur dossier au simple click
	$('.dossier').click(function(){
		$(this).addClass('dossierClicked');
	});	

	//perte de focus sur le dossier au click ailleurs
	$('.miniJeu').click(function(ev){
		if(ev.target.nodeName=="BODY")
			$('.dossierClicked').removeClass('dossierClicked');
	});

	//lancement des virus
	$(document).on('click','#jouer, #rejouer',function(ev){
		jeuLance = true;
		$('#options').css('z-index', '0');
		$('.dialogue').fadeOut();
		$('#info').fadeIn();
		$(ev.target).parent().parent().parent().hide();
		cpt = 0;
		temps = 30;
		score = 0;
		$('#score').html('Score : '+score+' pts');
		makePop(25, 150);
	});
}


function removeWindow(t){
	$this = $(t);
	$this.parent().parent().remove();
	if($('.shortcut').find('span').html().split(' ')[0]==1){
		$('.shortcut').remove();
	}else{
		var nb = $('.shortcut').find('span').html().split(' ')[0];
		nb--;
		 $('.shortcut').find('span').html(nb+" Fenêtres");
	}
}

function toto(e){
	e.preventDefault();
	var id_jeu = $(e.target)[0][0];
	var id_jeu = $(e.target)[0][1];
}


var popUp = function(x, y, url){

        this.x = x;
        this.y = y;
        this.url = url;


    this.draw = function() {
        $('.miniJeu').append(
	        $('<div class="fenetre selectedFenetre fenetregrise" id="fenetre-configuration2"'+
	          'style="left:'+this.x+'px;top:'+this.y+'px">'+
	        	'<div class="header ui-draggable-handle selectedHeader">'+
	        		'<b style="color:white;margin-left:2%;margin-top:50%">Virus détecté !</b>'+
	        		"<div class='close-window' onClick='removeWindow(this)'>X</div>"+
	        	'</div>'+
	        	'<img src="http://www.enigma-tic.fr/images/xp/'+this.url+'.png">'+
			'</div>')
			);
		$('.fenetre').addClass('ui-draggable').draggable({handle:'.header'});

		if($('.shortcut').length==0){
			$('.barre').append('<div id="fenetre-tache" class="shortcut">'+
								'<img src="http://www.enigma-tic.fr/images/xp/internet.png" style="width:60px;margin:-8px -10px 0 -25px;">'+
								'<span>1 Fenêtres</span>'+
							'</div> '
							);
		}else{
			var nb = $('.shortcut').find('span').html().split(' ')[0];
			nb++;
			 $('.shortcut').find('span').html(nb+" Fenêtres");
		}
		
    }

}