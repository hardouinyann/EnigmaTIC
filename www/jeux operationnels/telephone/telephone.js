var carte;
var canvas;



	function finChargementPage(){
    	console.log("chargé");
    	
		canvas= document.getElementById("carte");
		canvas.width= 500;
		canvas.height= 300;
		paper.setup(canvas);
		paper.install(window);
		carte= paper.project.importSVG("map3.svg", finChargementCarte);

	}

	document.addEventListener("DOMContentLoaded", finChargementPage);


	function finChargementCarte(item){
		//stock l'objet dans une variable carte
		carte= item;
		console.log(carte);



		
   

		
	}//fin chargementCarte