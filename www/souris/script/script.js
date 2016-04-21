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
var nbPics = 12;

$(document).ready(function(){
	cpt=0;
	gestionClicks();	
	$("body").droppable();



	//gestion de la souris virtuelle et du ralentissement
	cursorW = parseInt($('#cursor img').css('width'))/2;
	cursorH = parseInt($('#cursor img').css('height'))/2;

	$(document).mousemove(function(event){
		mouseX = (event.pageX)-cursorW;
		mouseY = (event.pageY)-cursorH;		

		var xDistance = mouseX - parseInt($('#cursor').position().left);
	   	var yDistance = mouseY - parseInt($('#cursor').position().top);
	   	var distance = Math.sqrt(xDistance * xDistance + yDistance * yDistance);
	    if (distance >= 1) {
	        $('#cursor').css('left',parseInt($('#cursor').position().left) + xDistance * easingAmount);
	        $('#cursor').css('top',parseInt($('#cursor').position().top) + yDistance * easingAmount);
	    }	

	});	

	$(document).click(function(){
		var sourisVirtuelleX = $('#cursor').position().left;
		var sourisVirtuelleY = $('#cursor').position().top;
		var cpt = 0;
		//pour fermer les fenetres
		$.each($('.close'),function(){
			$this = $(this);
			let height = parseInt($this.css('height'));
			let width = parseInt($this.css('width'));
			let x = $this.offset().left;
			let y = $this.offset().top;
			let xEnd = x+width;
			let yEnd = y+height;
			console.log($this)
			console.log("cpt : "+cpt++);
			console.log(x+":"+y+":"+xEnd+":"+yEnd+":"+sourisVirtuelleX+":"+sourisVirtuelleY);
			if(sourisVirtuelleX>=x-20 && sourisVirtuelleX<=xEnd+20){
				console.log("bon X")
				if(sourisVirtuelleY>=y && sourisVirtuelleY<=yEnd){
					$this.trigger('click');
				}

			} 
		})
		//pour cliquer sur l'icone
	})


	
});


function makePop(){
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
	if(cpt++<=0){
		setTimeout(makePop,150);
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
	$('.dossier').dblclick(function(){
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




class popUp {

    constructor(x, y, url) {
        this.x = x;
        this.y = y;
        this.url = url;
    }

    draw() {

        $('body').append(
	        $('<div class="fenetre selectedFenetre" id="fenetre-configuration2"'+
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