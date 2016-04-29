$fenetres = [];
$fenetre = $('<div class="fenetre"><div class="header"><div class="close" onClick="removeWindow(this)">X</div></div></div>');
$pages = [];
$icone = null;
$xml = null;
$currentFolder = null;
var numFenetre = 0;


$(document).ready(function(){
	
	$("body").droppable();

	$.ajax( {
            type: "GET",
            url: "src/arbo.xml",
            dataType: "xml",
            success: function(xml) {
            	$xml = $(xml).find('bureau');
            	$dossiers_bureau = $xml.find('dossier');
            	$dossiers_bureau.each(function(){
            		var name = $(this).attr('name');
            		var url = $(this).attr('url')
            		$('body').append('<div id="'+name+'" class="dossier"><img src="images/'+url+'"/><br>'+name.replace('-',' ').replace('-',' ')+'</div>');            		
            	});
            	$icone = $('.dossier').eq(0).clone().empty().html("<div class='iconeWrapper'> <img src='images/dossier.png'/></div>");
            	ajouterClickEventSurDossier();
            }
    });
		
	

});

var cpt = 0;
function ajouterClickEventSurDossier(){

	$('#menu-demarrer').click(function(){
		
		if($(this).hasClass('menu-appuye'))
			$(this).removeClass('menu-appuye')
		else
			$(this).addClass('menu-appuye')
	
	})

	$(document).on('click','.dossier',function(){			
		$('.dossier').each(function(){
			$(this).css({'outline' : 'none',
						'background-color' : 'transparent'
						});
		});

		$(this).css({
			'outline' : 'dashed 1px rgba(200,200,200,0.4)',
			'background-color' : 'rgba(160,160,200,0.5)'
		});
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

	$('body > .dossier').dblclick(function(ev){
		var id = $(ev.target).parent().attr('id');
		var titre = id;
		$enfants = $xml.find('dossier[name='+id+']').children();
		var icone = $xml.find('dossier[name='+id+']').attr('url');
		var f = new Fenetre(titre, $enfants, numFenetre, icone);
		$fenetres[numFenetre++] = f;
		f.draw();	
	});


	//quand on click sur les fleche précedent ou suivant
	$(document).on("click","#previous, #next",function(ev){

		var what = $(ev.target).parent().attr('id');
		$fenetre = $(ev.target).parent().parent().parent();
		var uid = $($fenetre).data('id');
		var id =  $($fenetre).attr('id');
		var $target;
		if(what=="previous"){
			$fenetres[uid].next.push($fenetres[uid].previous.splice(-1,1));	
		}
		else if(what=="next"){
			$fenetres[uid].previous.push($fenetres[uid].next.splice(-1,1)[0][0]);	
		}
		$target = $fenetres[uid].previous[$fenetres[uid].previous.length-1];	
		if(typeof $target != "undefined") navigate($fenetre, $target);
	});

	//quand on double click sur les dossier dans une fenetre
	$(document).on('dblclick','.ssdossier',function(ev){

		$this = $(ev.target).parent().parent();
		var id = $this.attr('id');
		$fenetre = $this.parent();//on récupère la fenetre
		$fenetres[$fenetre.data('id')].previous.push(id);//on ajoute le novueau chemin pour gérer les previous/next
		navigate($fenetre, id);

	});

	$(document).on('dblclick','.fichier',function(ev){
		var id = $(ev.target).parent().parent().attr('id');
		$fichier = $xml.find('fichier[name='+id+']');
		var f = new FichierText($fichier.text(),id);
		f.draw();

	});

	$(document).on('click','.shortcut',function(ev){
		var id = $(ev.currentTarget).find('span').text().replace(' ','-').replace(' ','-');
		console.log($('.fenetre#'+id));
		$('.selectedFenetre').removeClass('selectedFenetre');
		$('.selectedHeader').removeClass('selectedHeader');
		$('.fenetre#'+id).addClass('selectedFenetre').find('.header').addClass('selectedHeader');

	});
		
	//on met le systeme navigation grace au select
}

function navigate(fenetre, id){
		console.log("id"+id);
		$fenetre.find('.ssdossier, .fichier').remove();//on supprime tous les dossiers qu'elle contient
		$fenetre.find('.header b').html(id.replace('-',' ').replace('-',' '));
		var elemNiveauParent = $xml.find('[name='+id+']').parent().find('>dossier, >sous-dossier');
		$enfants = $xml.find('sous-dossier[name='+id+'],dossier[name='+id+']').children();
		var select = Fenetre.updateSelect(elemNiveauParent, id, $enfants);
		$fenetre.find('select').html(select);
		var ssDossiers = Fenetre.createChildren($enfants);//on créer les dossiers html pour les enfants
		$fenetre.append(ssDossiers);//on les ajoute a la fenetre
}


function removeWindow(t){
	$this = $(t);
	$this.parent().parent().remove();
	
}

//retourne le niveau sous le bureau ou se situe l'élément donné
function getNiveau(id){
	$item = $xml.find('[name='+id+']');
	var parent= $item.parent();
	var cpt = 1;//le bureau ne comtpe pas
	while(parent.prop('tagName')!="bureau"){
		parent = parent.parent();
		cpt++;
	}
	return cpt;
}

class FichierText{

	constructor(text, nomFic){
		this.text = text;
		this.nom = nomFic;
	}

	draw(){
		$('body').append(
						'<div class="fenetre selectedFenetre ui-draggable" id="'+this.nom+'" style="position: relative;">'+
							'<div class="header ui-draggable-handle selectedHeader">'+
								'<div class="close" style="display:inline;float:right;" onclick="removeWindow(this)">X</div>'+
								'<b style="color:white;margin-left:2%;margin-top:50%">Bloc notes - '+this.nom.replace('-',' ').replace('-',' ')+'</b>'+
							'</div>'+	
							this.text+
						'</div>'
						);
		$('.fenetre').addClass('ui-draggable').draggable({handle:'.header'});
	}
}


class Fenetre{

	constructor(titre, enfants, numFenetre, icon){
		this.titre = titre;
		this.enfants = enfants;
		this.num = numFenetre;
		this.previous = [];
		this.previous.push(titre);
		this.next = [];
		this.icon = icon;
	}

	draw(){
		$('.selectedFenetre').removeClass('selectedFenetre');
		$('.selectedHeader').removeClass('selectedHeader');

		var divEnfants = Fenetre.createChildren(this.enfants);
		var elemNiveauParent = $xml.find('[name='+this.titre+']').parent().find('>dossier, >sous-dossier');

		
		var elemActuel = this.titre;
		var enfants = this.enfants;
			
		var select = Fenetre.updateSelect(elemNiveauParent, elemActuel, enfants);

		$('body').append('<div class="fenetre selectedFenetre" id="'+this.titre+'" data-id="'+this.num+'" style="position: relative;">'+
							'<div class="header ui-draggable-handle selectedHeader">'+
								'<div class="close" style="display:inline;float:right;" onclick="removeWindow(this)">X</div>'+
								'<b style="color:white;margin-left:2%;margin-top:50%">'+this.titre.replace('-',' ').replace('-',' ')+'</b>'+
							'</div>'+
							'<div class="sub-header">'+
								'<div id="previous"><i class="fa fa-arrow-circle-left" aria-hidden="true"></i></div>'+
								'<div id="next"><i class="fa fa-arrow-circle-right" aria-hidden="true"></i></div>'+
								'<div>'+
									'<select style="width:70%">'+
									  select+
									'</select>'+
								'</div>'+
							'</div>'+
							divEnfants+
						'</div>'
						);
		$('.barre').append('<div id="menu-demarrer" class="shortcut">'+
								'<img src="images/'+this.icon+'" style="width:25px;margin:-2px  0 0 -8px;">'+
								'<span>'+this.titre.replace('-',' ').replace('-',' ')+'</span>'+
							'</div> '
							);
		$('.fenetre').addClass('ui-draggable').draggable({handle:'.header'});
	}

	static updateSelect(elemNiveauParent, elemActuel, enfants){
		var select = "";
		//on parcourt tous les dossiers au meme niveau que le dossier actuel
		$(elemNiveauParent).each(function(){
			if($(this).prop('tagName') != "fichier"){
				var id = $(this).attr('name');
				select += '<option id="'+id+'" class="enfant"';
				select += (id == elemActuel)? "selected": "";
				select += '>'+id.replace('-',' ').replace('-',' ')+'</option>';
				if(id == elemActuel){
					$(enfants).each(function(){
						if($(this).prop('tagName') != "fichier") select += '<option id="'+$(this).attr('name')+'" class="enfant" style="margin-left: 40px;">&nbsp;&nbsp;&nbsp;&nbsp;'+$(this).attr('name').replace('-',' ').replace('-',' ')+'</option>';
					});			
				}
			}
		});
		return select;
	}

	static createChildren(children){
		var divs ='';
		$(children).each(function(){
			var nom = $(this).attr('name');
			var url = $(this).attr('url');
			var type = ($(this).prop('tagName') == "sous-dossier") ? "ssdossier" : "fichier" ;
			divs += '<div id="'+nom+'" class="dossier '+type+'">'+
						'<div class="iconeWrapper"> '+
							'<img src="images/'+url+'"><br>'+
							'<h8 style="margin-left:35px">'+nom+'</h8>'+
						'</div>'+
					'</div>'
		});
		return divs;
	}
}