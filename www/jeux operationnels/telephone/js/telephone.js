var carte;
var canvas;
var voiture;
var etat;
var enPiste=1;
var nbRoute= 0;

const PAS= 5;



	function finChargementPage(){
    	console.log("chargé");
    	
		canvas= document.getElementById("carte");
		canvas.width= 1920;
		canvas.height= 1080;
		paper.setup(canvas);
		paper.install(window);
		carte= paper.project.importSVG("map3.svg", finChargementCarte);

	}

	document.addEventListener("DOMContentLoaded", finChargementPage);
	document.onkeydown = keypressHandler;


	function deplacer(ev){

		if(ev.keyCode == 39){
			paper.view.onFrame= function(){
				voiture.position.x += PAS;
				document.onkeyup= function(){
					paper.view.detach('frame');
				}
			}
		}

		if(ev.keyCode == 37){
			paper.view.onFrame= function(){
				voiture.position.x -= PAS;
				document.onkeyup= function(){
					paper.view.detach('frame');
				}
			}
		}

		if(ev.keyCode == 38){
			paper.view.onFrame= function(){
				voiture.position.y -= PAS;
				document.onkeyup= function(){
					paper.view.detach('frame');
				}
			}
		}

		if(ev.keyCode == 40){
			paper.view.onFrame= function(){
				voiture.position.y += PAS;
				document.onkeyup= function(){
					paper.view.detach('frame');
				}
			}
		}
	}


	function changerEtape(e){
		console.log("fin appel");
		carte.children[etat].visible= false;
		etat= e;	
		carte.children[etat].visible= true;
	}



	function keypressHandler(ev){
		var initX= voiture.position.x;
		var initY= voiture.position.y;

		/*for(var i=0; i<carte.children["hors-piste"].children.length; i++){

			if(voiture.bounds.intersects(carte.children["hors-piste"].children[i].bounds)){

				console.log(carte.children["hors-piste"].children[0]);
				carte.children["hors-piste"].children[i].visible= false;
				deplacer(ev);
				return;
			} else {
				paper.view.detach('frame');
				carte.children["hors-piste"].children[i].visible= true;
			}

		}*/

		/*if(voiture.bounds.intersects(carte.children["hors-piste"].children[5].bounds)){
			console.log(this);
			carte.children["hors-piste"].children[5].visible= false;
		} else {
			deplacer(ev);
		}*/

		if(etat ==  "antennes"){
			if(voiture.bounds.intersects(carte.children["antennes"].children["reseau3"].bounds)){
				paper.view.detach('frame');
				carte.children["enAppel"].visible= true;
				alert("sur atenne");
				changerEtape("ami");
				return;
			}
		}

		if(etat == "ami"){
			if(voiture.bounds.intersects(carte.children["ami"].bounds)){
				paper.view.detach('frame');
				carte.children["enAppel"].visible= false;
				alert("sur amis");
				changerEtape("collegue");
				return;
			}
		}

		if(etat == "collegue"){
			if(voiture.bounds.intersects(carte.children["collegue"].bounds)){
				paper.view.detach('frame');
				alert("sur collegue");
				changerEtape("parc");
				return;
			}
		}

		if(etat == "parc"){
			if(voiture.bounds.intersects(carte.children["parc"].bounds)){
				paper.view.detach('frame');
				alert("sur parc");
				changerEtape("eglise");
				return;
			}
		}

		if(etat == "eglise"){
			if(voiture.bounds.intersects(carte.children["eglise"].bounds)){
				paper.view.detach('frame');
				alert("sur eglise");
				changerEtape("chercheur");
				return;
			}
		}

		if(etat == "chercheur"){
			if(voiture.bounds.intersects(carte.children["chercheur"].bounds)){
				paper.view.detach('frame');
				alert("sur chercheur");
				changerEtape("cle");
				return;
			}
		}

		if(etat == "cle"){
			if(voiture.bounds.intersects(carte.children["cle"].bounds)){
				paper.view.detach('frame');
				alert("sur cle");
				carte.children["cle"].visible= false;
				carte.children["cadenas"].visible= false;
				changerEtape("fin");
				return;
			}
		}


		if(etat == "fin"){
			if(voiture.bounds.intersects(carte.children["message"].bounds)){
				paper.view.detach('frame');
				alert("fin");
				return;
			}
		}


		
		

		/*for(var i=0; i<carte.children["routes_1_"].children.length; i++){
			if(voiture.bounds.intersects(carte.children["routes_1_"].children[i].bounds)){
				deplacer(ev);
				carte.children["routes_1_"].children[i].visible= false;
				enPiste=1;
				return;
			} else {
				paper.view.detach('frame');
				console.log("sortie de route");
				carte.children["routes_1_"].children[i].visible= true;
				enPiste=0;
			}

		}*/
		
		/*for(var i=0; i<carte.children["routes_1_"].children.length; i++){
			if(voiture.bounds.intersects(carte.children["routes_1_"].children[i].bounds)){
				deplacer(ev);
				carte.children["routes_1_"].children[i].visible= false;
				enPiste=1;
				nbRoute++;
				return;
			}

			if(nbRoute == carte.children["routes_1_"].children.length) {
				paper.view.detach('frame');
				console.log("sortie de route");
				carte.children["routes_1_"].children[i].visible= true;
				enPiste=0;
			}

		}*/
		deplacer(ev);
		for(var i=0; i<carte.children["hors-piste"].children.length; i++){
			if(etat != "fin" && voiture.bounds.intersects(carte.children["pont"].bounds)){
				paper.view.detach('frame');
				alert("Tu ne peux pas traverser le pont");
				window.location.reload();
			}
			if(voiture.bounds.intersects(carte.children["hors-piste"].children[i].bounds)){
				paper.view.detach('frame');
				console.log(carte.children["hors-piste"].children[i]);
				alert("Perdu tu est sorti de la route");
				window.location.reload();
			}
		}

				



	}//fin function keyPressed

	function finChargementCarte(item){
		//stock l'objet dans une variable carte
		carte= item;
		console.log(carte);
		voiture= carte.children["voiture"];
		voiture.position.x+=100;
		etat= "antennes";
		
   		carte.children["ami"].visible= false;
   		carte.children["parc"].visible= false;
   		carte.children["cle"].visible= false;
   		carte.children["eglise"].visible= false;
   		carte.children["chercheur"].visible= false;
   		carte.children["collegue"].visible= false;
   		carte.children["enAppel"].visible= false;


		
	}//fin chargementCarte

