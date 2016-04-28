$(document).ready(function(){
	$('IDBUTTON').submit(function(ev){

		ev.preventDefault();
		//ca va envoyer la requete de mettre dejaVu a 1
		$.post(
	        '/accueil/bureau',
	        'justSawDesktop=vrai',
	        function(data){
	        	console.log("done");
	        },
	        'json'
	    );
	})
	
});
