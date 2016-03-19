var lcc;
var canvas;
var mousePosX;
var mousePosY;
var passager;
var gauche= [];
var droite= [];


	function finChargementPage(){
    	console.log("chargé");
    	
		canvas= document.getElementById("canvasLcc");
		canvas.width= 930;
		canvas.height= 425;
		paper.setup(canvas);
		paper.install(window);
		lcc= paper.project.importSVG("lcc.svg", finChargementLcc);

	}

	document.addEventListener("DOMContentLoaded", finChargementPage);


	function finChargementLcc(item){
		//stock l'objet dans une variable lcc
		lcc= item;
		console.log(lcc);


		gauche.push(lcc.children["chevre_1_"]);
		gauche.push(lcc.children["loup"]);
		gauche.push(lcc.children["choux"]);
		gauche[3]= lcc.children["bateau"];

		lcc.children["loup"].onMouseDrag = deplacerAnimal;
		lcc.children["choux"].onMouseDrag = deplacerAnimal;
		lcc.children["chevre_1_"].onMouseDrag = deplacerAnimal;
		//lcc.children["bateau"].onMouseDrag = deplacerBateau;

		lcc.children["goDroite"].onClick= deplacerBateauDroite;
		lcc.children["goGauche"].onClick= deplacerBateauGauche;



		function verif(cote){
			var score=0;
			for(var i=0; i<droite.length; i++){
				if(droite[i] == lcc.children["loup"]){ score++;}
				if(droite[i] == lcc.children["chevre_1_"]){ score++;}
				if(droite[i] == lcc.children["choux"]){ score++;}
			}

			if( score == 3){
				alert("gagné");
				window.location.reload()
			}

			for(var i=0; i<cote.length; i++){
			    if(cote[i] == lcc.children["loup"]){
			       	for(var j=0; j<cote.length; j++){
			       		if(cote[j] == lcc.children["chevre_1_"]){
			       			alert("perdu");
			       			window.location.reload();
			       		}
			       	}
			    }
			    if(cote[i] == lcc.children["chevre_1_"]){
			       	for(var j=0; j<cote.length; j++){
			       		if(cote[j] == lcc.children["choux"]){
			       			alert("perdu");
			       			window.location.reload();
		       			}
		       		}
		       	}
		    }
		}
	
        function deplacerAnimal(ev) {

        	lcc.children["goDroite"].onClick= null;
			lcc.children["goGauche"].onClick= null;
        	
        	mousePosX= ev.point.x;
		    mousePosY=ev.point.y;
		    ev.target.position.x= mousePosX;
		    ev.target.position.y= mousePosY;
		    if(ev.target.bounds.intersects(lcc.children["bateau"].bounds)){
		    	console.log(gauche+"    ***********  "+droite);
		    	if(passager == undefined){
			       
			        console.log(passager);

			        //si il est à droite
			        if(lcc.children["bateau"].position.x > 500){
			        	passager= ev.target;
			        	for(var i=0; i<droite.length; i++){
		       				if(droite[i] == passager){
		       					ev.target.onMouseDrag= null;
		       					gauche.push(droite[i]);
		       					droite[i] = null;
		       					droite[3]= null;
		       					gauche[3]= lcc.children["bateau"];
		       					
		       					paper.view.onFrame= function(){
				        			ev.target.position.y= lcc.children["bateau"].position.y;
						        	ev.target.position.x= lcc.children["bateau"].position.x;
						        	console.log("avance");
						        	lcc.children["bateau"].position.x -=3;
				       				if(lcc.children["bateau"].position.x < 200){
				       					verif(droite);
				       					passager= undefined;
								        ev.target.position.x= 40;
								       
								        paper.view.detach('frame');
								        lcc.children["goDroite"].onClick= deplacerBateauDroite;
										lcc.children["goGauche"].onClick= deplacerBateauGauche;
				       				}
				       			}//fin paperFrame
				       			 
		       				} else{
		       					ev.target.onMouseDrag = deplacerAnimal;
		       				}
		       			}
			        	
			        
			        //si il est à gauche
			        } else if(lcc.children["bateau"].position.x < 220){
			        	passager= ev.target;
			        	for(var i=0; i<gauche.length; i++){
			        		if(gauche[i] == passager){
			        			ev.target.onMouseDrag= null;
		       					droite.push(gauche[i]);
		       					gauche[i] = null;
		       					gauche[3]= null;
		       					droite[3]= lcc.children["bateau"];
		       					
		       					paper.view.onFrame= function(){
		       						ev.target.position.y= lcc.children["bateau"].position.y;
						        	ev.target.position.x= lcc.children["bateau"].position.x;
						        	console.log("avance");
						        	lcc.children["bateau"].position.x +=3;
				       				if(lcc.children["bateau"].position.x > 540){
				       					verif(gauche);
				       					passager= undefined;
								        ev.target.position.x= 750;
	
								        paper.view.detach('frame');
								        lcc.children["goDroite"].onClick= deplacerBateauDroite;
										lcc.children["goGauche"].onClick= deplacerBateauGauche;
				       				}
				       			}//fin paperFrame
				       			
		       				}else{
		       					ev.target.onMouseDrag = deplacerAnimal;
		       				}
			        	}
			        		
			        }

			       console.log(gauche+"    ***********  "+droite);

			    }
		    }

		}//fin deplacerAnimal

		function deplacerBateauDroite(ev) {
			
        		console.log("click droite");
        		paper.view.onFrame= function(){
					lcc.children["bateau"].position.x +=3;
				   	if(lcc.children["bateau"].position.x > 540){
				   		gauche[3]= null;
		       			droite[3]= lcc.children["bateau"];
				    	verif(gauche);
						paper.view.detach('frame');
				    }
				}//fin paperFrame

	       	
	       	ev.stop();
		}//fin deplacerBateau


		function deplacerBateauGauche(ev) {
			
        		console.log("click gauche");
        		paper.view.onFrame= function(){
					lcc.children["bateau"].position.x -=3;
				   	if(lcc.children["bateau"].position.x < 200){
				   		gauche[3]= lcc.children["bateau"];;
		       			droite[3]= null;
				    	verif(droite);
						paper.view.detach('frame');
				    }
				}//fin paperFrame

	       	
	       	ev.stop();
		}//fin deplacerBateau

		
	}