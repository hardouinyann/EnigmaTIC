var soda;
	var canvas;
	function finChargementPage(){
    	console.log("chargé");
    	
		canvas= document.getElementById("mycanvas");

		paper.setup(canvas);
		paper.install(window);
		soda= paper.project.importSVG("sodastream.svg", finChargementSoda);

	}
		document.addEventListener("DOMContentLoaded", finChargementPage);
		

		var mousePosX;
		var mousePosY;
		var etat= 0;
		var nbClick=0;
		var note= "faible";
        
        function finChargementSoda(item){

        	//var canvas = document.getElementById('mycanvas');
        	soda = item;
        	console.log(soda);
        	//soda.children["tuyau"].position.x = 600;
        	soda.children["bouteille"].children["eau"].visible= false;
        	soda.children["bouteille"].children["molecules"].visible= false;
        	soda.children["bouteille"].children["eauSirop"].visible= false;
        	soda.children["bouteille"].children["debordement"].visible= false;
        	soda.children["explosion"].visible = false;

        	soda.children["bon"].visible = false;
        	soda.children["fort"].visible = false;
        	soda.children["faible"].visible = false;

       				

        	soda.children["chargement"].children[2].visible= false;
        	soda.children["bouteille"].children["messAgiter"].visible= false;

        	soda.children["sirop"].visible= false;
        	soda.children["sirop"].children["bouchon"].visible= false;
        	soda.children["sirop"].children["bouchonVide"].children["goutteSirop"].visible= false;
        	
     
        	soda.children["gouttes"].visible= false;
        	soda.children["erreur"].visible= false;
        	soda.children["fleche"].visible=false;
        	soda.children["warning"].visible=false;

        	soda.children["chargement"].children[0].visible= false;
        	soda.children["chargement"].children[1].visible= false;
        	soda.children["chargement"].children[2].visible= false;
        	soda.children["chargement"].children[3].visible= false;
        	soda.children["chargement"].children[4].visible= false;

        	soda.children["gazage"].visible=false;
        	soda.children["gazage"].children["index"].children[0].visible=false;
        	soda.children["gazage"].children["index"].children[1].visible=false;
        	soda.children["gazage"].children["index"].children[2].visible=false;
        	soda.children["gazage"].children["index"].children[3].visible=false;
        	soda.children["gazage"].children["index"].children[4].visible=false;
        	soda.children["gazage"].children["index"].children[5].visible=false;


        	/*for(var i=0; i< 10 ; i++){
        		soda.children["bouteille"].children[2].children[i].visible= false;
        	}*/

        	soda.children["robinet"].onClick= function(){
        		if(soda.children["gouttes"].visible== true){
        			soda.children["gouttes"].visible= false;	
        		} else {
        			soda.children["gouttes"].visible= true;	
        		}		
        	}


        	soda.children["pression"].onClick= function(){
       			soda.children["pression"].position.y+=2;
       			var timer=1;
       			

       			soda.children["pression"].onDoubleClick= function(){
       				alert("Appuyer doucement pour laisser le gaz pénétrer dans la bouteille");
       			}
       			paper.view.onFrame= function(){
       				timer+=1;
       				if(etat == "pret"){
       					soda.children["fleche"].visible=true;
       				}
       				if(timer > 20){
       					soda.children["fleche"].visible=false;
       					
       					soda.children["pression"].position.y-=2;
       					paper.view.detach('frame');
       				}
       			}

       			if(etat == "pret"){
       				if(soda.children["bouteille"].children[1].visible == true){
	       				nbClick++;
	       				console.log(nbClick);
	       				soda.children["chargement"].children[0].visible= true;
	       				soda.children["chargement"].children[nbClick].visible= true;
	       				var bulle1= soda.children["co2"].children[1];
	       				//soda.children["bouteille"].addChild(bulle1);
	       				//bulle1.insertBelow(soda.children["bouteille"]);

	       				soda.children["bouteille"].insertChild(2, bulle1);
	       				var goutteX= Math.random()*(255-200)+200;
	       				var goutteY= Math.random()*(560-430)+430;

	       				bulle1.position.x = goutteX;
	       				bulle1.position.y = goutteY
	       				console.log(soda.children["bouteille"]);

	       				if(nbClick == 4){
	       					etat= "gazage";
	       					nbClick=0;
       					}
	       			} 
       			}//etat pret
       			if(etat != "pret" && etat != "gazage"){
	       				soda.children["erreur"].visible= true;	
	       		}
       			

       			if(etat == "gazage"){
       				
       				var son= document.getElementById("audio");
       				son.play();
       				
       				soda.children["chargement"].visible= false;
       				soda.children["gazage"].visible=true;
       				if(soda.children["gazage"].children["index"].children[nbClick] != undefined){
       					soda.children["gazage"].children["index"].children[nbClick].visible = true;
       				}

       				var bulle1= soda.children["co2"].children[1];
	       			soda.children["bouteille"].insertChild(2, bulle1);
	       			var goutteX= Math.random()*(255-200)+200;
	       			var goutteY= Math.random()*(560-430)+430;
	       			bulle1.position.x = goutteX;
	       			bulle1.position.y = goutteY;

       				soda.children["gazage"].children["pointer"].position.x += 52;
       				nbClick++;
       				soda.children["bouteille"].onMouseDrag = deplacerBouteille2;

       				if(nbClick ==  3){
       					note = "bon";
       				}

       				if(nbClick == 5){
       					note = "fort";
       				}
       				if(nbClick ==  6){
       					soda.children["gazage"].children["pointer"].visible= false;
       					soda.children["bouteille"].children["debordement"].visible= true;
       					soda.children["warning"].visible = true;
       				}
       				if(nbClick >= 8){
       					soda.children["explosion"].visible = true;
       					console.log("arriver sup 8");
       					
       					timer = 0;
       					paper.view.onFrame= function(){
			       			timer+=1;
			       			if(timer > 100){
			       				window.location.reload();
			       			}
		       			}
       				}

       			}//etat gazage
        	}//fin fonction click pression
        	
        	
        	soda.children["sirop"].onClick= function(){
        		soda.children["sirop"].children["bouchonVide"].visible = false;
        		soda.children["sirop"].children["bouchon"].visible= true;
        		soda.children["sirop"].children["bouchon"].onMouseDrag = deplacerBouteille2;
        	}//fin fonction click bouchon

        	/*soda.children["bouteille"].bounds.onMouseDrag= */
        	//deplacerBouteille(soda.children["bouteille"]);
        	/*soda.children["co2"].bounds.onMouseDrag= */
        	//deplacerCo2(soda.children["co2"]);
        	
        	soda.children["bouteille"].onMouseDrag = deplacerBouteille2;
        	soda.children["co2"].onMouseDrag = deplacerBouteille2;
        	
        	


        	var bouteilleEnDeplacement = false;

        	function deplacerBouteille2(ev) {
        		mousePosX= ev.point.x;
	        	mousePosY=ev.point.y;
	        	ev.target.position.x= mousePosX;
	        	ev.target.position.y= mousePosY;

				if(soda.children["bouteille"].children["debordement"].visible == true){
					soda.children["bouteille"].children["debordement"].visible= false;
				}

				if(soda.children["bouteille"].bounds.intersects(soda.children["gouttes"].bounds)){
					if(soda.children["gouttes"].visible== true){
								
						soda.children["bouteille"].children[1].visible= true;
					}
				}

				if(soda.children["erreur"].visible ==  true){
					soda.children["erreur"].visible= false;
				}

				if(etat == "gazage"){	
					etat = "dosage";
					soda.children["sirop"].visible= true;

					soda.children["tuyau"].visible= false;
					soda.children["robinet"].visible= false;
					soda.children["gouttes"].visible= false;
					soda.children["co2"].visible= false;
					soda.children["pression"].visible= false;
					soda.children["placeCo2"].visible= false;
					soda.children["interieurSodastream"].visible= false;
					soda.children["sodastream"].visible= false;
					soda.children["gazage"].visible= false;
					if(soda.children["warning"].visible ==  true){
						soda.children["warning"].visible= false;
					}
				} else {		

					if(soda.children["bouteille"].bounds.intersects(soda.children["tuyau"].bounds) && etat != "bouteille" && etat != "dosage"){
								console.log("accrocher la bouteille");

								
								if(soda.children["bouteille"].children[1].visible == true){
									soda.children["bouteille"].position.x = 356;
									soda.children["bouteille"].position.y = 304;
								
									if(etat == "co2"){
										etat = "pret";
									} else {
										etat = "bouteille";
									}
									
									soda.children["bouteille"].onMouseDrag= null;
								} else {
									soda.children["bouteille"].position.x = 356;
									soda.children["bouteille"].position.y = 304;
								}
								

					}

					if(soda.children["co2"].bounds.intersects(soda.children["placeCo2"].bounds) && etat != "dosage"){
							//paper.view.off('frame');
							//item.detach('frame');
							soda.children["co2"].position.x = 462;
							soda.children["co2"].position.y = 278;
							soda.children["co2"].onMouseDrag= null;
							if(etat == "bouteille"){
								etat = "pret";
							} else if(etat != "pret") {
								etat = "co2";
							}
					} 	
				} //fin else

				if(/*etat == "dosage" && soda.children["sirop"].children["bouchon"].visible == true && */soda.children["sirop"].children["bouchon"].bounds.intersects(soda.children["bouteille"].bounds)){
					var bPosX= soda.children["bouteille"].position.x + 60;
					var bPosY= soda.children["bouteille"].position.y;
					bPosY -= (soda.children["bouteille"].bounds.height) /2;	
					soda.children["sirop"].children["bouchon"].position.x= bPosX;
					soda.children["sirop"].children["bouchon"].position.y= bPosY;
					soda.children["sirop"].children["bouchon"].onMouseDrag= null;
					soda.children["bouteille"].onMouseDrag= null;
					animationSirop();
				}
					
				        	
	        }


	        function animationSirop(){
	        	soda.children["sirop"].children["bouchon"].rotate(225);
	        	soda.children["bouteille"].rotate(30);
	        	soda.children["sirop"].children["bouchon"].visible = false ;
	        	soda.children["sirop"].children["bouchonVide"].visible = true ;
	        	soda.children["sirop"].children["bouchonVide"].rotate(45);
	        	soda.children["sirop"].children["bouchonVide"].position.x= soda.children["sirop"].children["bouchon"].position.x;
				soda.children["sirop"].children["bouchonVide"].position.y = soda.children["sirop"].children["bouchon"].position.y;
				soda.children["sirop"].children["bouchonVide"].children["goutteSirop"].visible= true;
				timer = 0;
	        	paper.view.onFrame= function(){
	        		timer+=1;
	        		soda.children["sirop"].children["bouchonVide"].children["goutteSirop"].position.x += 0.3;
	        		soda.children["sirop"].children["bouchonVide"].children["goutteSirop"].position.y += 0.8;
       				if(timer > 100){	
       					etat = "agiter";
       					soda.children["bouteille"].children["molecules"].visible= true;
       					soda.children["bouteille"].rotate(-30);
		       			soda.children["sirop"].visible= false;
		       			timer=0;
       					soda.children["bouteille"].onMouseDrag = agiter;
       					soda.children["bouteille"].children["messAgiter"].visible= true;
       					paper.view.detach('frame');
       				}
	        	}
	        }


	      

			

		    function agiter(ev){
		        console.log("agitatin");
		        if(etat == "agiter"){
		      		timer+=1;
		      		if(timer == 50){
		      			soda.children["bouteille"].children["molecules"].visible= false;
		      			soda.children["bouteille"].children["eauSirop"].visible= true;
		      			soda.children["bouteille"].children["messAgiter"].visible= false;
		      			ev.target.onMouseDrag= null;
	        			notation();
		      		}
		        	mousePosX= ev.point.x;
			        mousePosY=ev.point.y;
			       	ev.target.position.x= mousePosX;
	        		ev.target.position.y= mousePosY;
	        		
		        }   
			}

			function notation(){
				if(note == "faible"){
					soda.children["faible"].visible = true;

				}
				if(note == "bon"){
					soda.children["bon"].visible = true;
				}
				if(note == "fort"){
					soda.children["fort"].visible = true;
				}

				timer = 0;
       			paper.view.onFrame= function(){
			        timer+=1;
			       	if(timer > 250){
			       		window.location.reload();
			       	}
		       	}
			}
        
        }// fin fonction chargementPage