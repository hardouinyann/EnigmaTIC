$fenetres = [];
$fenetre = $('<div class="fenetre"><div class="header"></div></div>');
$pages = [];
$icone = null;
$xml = null;
$currentFolder = null;

$(document).ready(function(){
	
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
		
	$( "body" ).droppable();

});

var cpt = 0;
function ajouterClickEventSurDossier(){

	console.log($icone)

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
		/*$('.fenetre').each(function(){
			$('this').css('background-color','rgb(140,140,140');
		});
		$(this).find('.header').css('background-color','rgb(120,120,200');*/

	});

	$(document).on('dblclick','.dossier',function(){
		$this = $(this);
		$dossier_parent =($xml.find('dossier[name='+$this.attr('id')+']')!=null) ? $xml.find('dossier[name='+$this.attr('id')+']') : null;
		var numero_etage =($dossier_parent!=null)? parseInt($dossier_parent.attr('etage'))+1 :  null;
		$sous_dossiers = ($dossier_parent.find('sous-dossier[etage='+numero_etage+']')!=null) ? $dossier_parent.find('sous-dossier[etage='+numero_etage+']') : null;

		if($this.parent().prop('nodeName')=='BODY' && $fenetres[$this.prop('id')]==null ){
			$currentFolder = $dossier_parent;
			$('.selectedHeader').removeClass('selectedHeader');
			$('.selectedFenetre').removeClass('selectedFenetre');
			$fenetres[$this.prop('id')] = $fenetre.clone().prop('id','fenetre-'+$this.prop('id')).draggable({handle:'.header'});//on crééer la fenetre
			$fenetres[$this.prop('id')].addClass('selectedFenetre').find('.header').addClass('selectedHeader');
			var cpt2 = 0;
			$sous_dossiers.each(function(){
				console.log($(this).attr('name')+"yolo")
				$fenetres[$this.prop('id')].append($icone.clone()).find('.iconeWrapper').eq(cpt2).append("<br><h8 style='margin-left:35px'>"+$(this).attr('name')+"</h8>");
				$fenetres[$this.prop('id')].find('.dossier').eq(cpt2++).prop('id',$(this).attr('name'));
			});
			//a utiliser  :  .append($icone.clone()).append("<br><h8 style='margin-left:35px'>Dossier</h8>")
			var motLettreMaj  = $this.prop('id').substr(0,1).toUpperCase()+$this.prop('id').substr(1,$this.prop('id').length).replace('-',' ').replace('-',' ');
			$fenetres[$(this).prop('id')].find('.header').append("<b style='color:white;margin-left:2%;margin-top:50%'>"+motLettreMaj+"</b>");//pour avoir un titre de fenetre
			$('body').append($fenetres[$(this).prop('id')]);
		}else if($(this).parent().prop('nodeName')=='BODY' && $fenetres[$(this).prop('id')]!=null){
			//$('.fenetre').css('z-index','2');
			$fenetres[$(this).prop('id')].css('z-index','3');
		}else if($(this).parent().hasClass('fenetre')){
			$currentFolder = $xml.find('sous-dossier[name='+$this.prop('id')+']');
			console.log($xml.find('sous-dossier[name='+$this.prop('id')+']').children())
		}		
		//console.log($fenetres);

	});
		
}