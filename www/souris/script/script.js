var screenH = parseInt(screen.height);
var screenW = parseInt(screen.width); 
var popUpWidth = 0.3*screenW;
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
var scoreABattre = 270;

var ratioPhoneHauteur = 234/21;
var ratioPhoneLargeur = 419/57;

$(document).ready(function(){

	$('.fenetre').addClass('ui-draggable').draggable({handle:'.header'});
	cpt=0;

	gestionClicks();	
	$("body").droppable();


	$(document).on('click','.close',function(){
		score += 10;
		$('#score').html('Score : '+score+' pts');
	})

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
		let t = new popUp(screenW/2,screenH/2, "secret");//sur l'image, le secret a donner
		t.draw();
	}
	var t = new popUp(posX,posY,url);
	t.draw();
	if(cpt==30){
		if($('.fenetre').length > 1){
			$('.fenetre:not(#redirection)').remove();
			$('.shortcut').remove();
			var succes = score >= scoreABattre ? "Félicitations vous avez réussi !" : " Dommage, vous avez échoué !";
			if(score>=scoreABattre)
				$('#redirection').find('input[type=submit]').show();
			else
				$('#redirection').find('input[type=submit]').hide();

			$('#redirection').find('#titre').html(succes);
			$('#redirection').find('#commentaire').html("Vous avez obtenu un score de "+score+" points en 30 secondes, soit "+(score/10)+" fenêtres fermées");
			$('#redirection').fadeIn("slow");
		}
	}
	if(cpt++<30){//30
		setTimeout(makePop,1000);
	}
}


function gestionClicks(){

	//focus sur dossier au simple click
	$('.dossier').click(function(){
		$(this).addClass('dossierClicked');
	});	

	//perte de focus sur le dossier au click ailleurs
	$('body').click(function(ev){
		if(ev.target.nodeName=="BODY")
			$('.dossierClicked').removeClass('dossierClicked');
	});

	//lancement des virus
	$(document).on('click','#jouer, #rejouer',function(ev){
		$(ev.target).parent().parent().parent().parent().hide();
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




class popUp {

    constructor(x, y, url) {
        this.x = x;
        this.y = y;
        this.url = url;
    }

    draw() {

        $('body').append(
	        $('<div class="fenetre selectedFenetre fenetregrise" id="fenetre-configuration2"'+
	          'style="left:'+this.x+'px;top:'+this.y+'px">'+
	        	'<div class="header ui-draggable-handle selectedHeader">'+
	        		'<b style="color:white;margin-left:2%;margin-top:50%">Virus détecté !</b>'+
	        		"<div class='close' onClick='removeWindow(this)'>X</div>"+
	        	'</div>'+
	        	'<div><img src="images/'+this.url+'.png"></div>'+
			'</div>')
			);
		$('.fenetre').addClass('ui-draggable').draggable({handle:'.header'});

		if($('.shortcut').length==0){
			$('.barre').append('<div id="menu-demarrer" class="shortcut">'+
								'<img src="images/internet.png" style="width:60px;margin:-8px -10px 0 -25px;">'+
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