////////////////////////////////////////////////////////////////////////////////////
//
// Jeu de Block 10X10
// Version: 1.34 
// Prog: HTML 5
//
////////////////////////////////////////////////////////////////////////////////////


// Variable Globale au jeu.
var game = null;
var pointage = 0;
var dernierPointageAffiche = 0;
var versionJeu=1.23;


var jeuAudio = {};

var infoJoueur = {
    pointageRecord: 0,
    preferenceBackgroundJeu: 0
};




////////////////////////////////////////////////////////////////////////////////////
//
// Description: Initialise le Menu du jeu 
//
////////////////////////////////////////////////////////////////////////////////////
var JeuMenu = {

    ///////////////////////////////////////////////////////////////////////////////////
    //
    // Description: Creation des boutons pour le jeu.
    //
    ////////////////////////////////////////////////////////////////////////////////////
    create: function() {
        game.add.sprite(0, 0, 'bg_home', infoJoueur.preferenceBackgroundJeu);
         
        gui.createBigPlayButton(329, 425, game.world, this.debutPartie, this);
    },


    ///////////////////////////////////////////////////////////////////////////////////
    //
    // Description: Bouton de debut de partie.
    //
    ////////////////////////////////////////////////////////////////////////////////////
    debutPartie: function() {
        game.state.start('play');
    },


};


                                        

///////////////////////////////////////////////////////////////////////////////////
//
// Description: Traite le jeu de block 10X10
//
////////////////////////////////////////////////////////////////////////////////////
var processusJeu = {    
    
    tabFormesAPlacer: [],
    nbFormNonPlace: 0,    
    formSelectionne: null,
    
    champPointagePartie: null,
    champPointageRecord: null,
    champVersionPartie: null,

    menuPartieNonTermine: null,
    fenetreFinPartie: null,
    fenetreAide: null,

    
    
    //Tableau du jeu 10X10
    tableauDuJeu: [], 
    nbLigne: 10,
    nbColonne: 10,
    nbCarreTableau: 100,
    invSizeW: 0,
    invSizeH: 0,
    grid: null,
    
    inputPountOffset: null,
    tweenDragOffset: null,
    

    ///////////////////////////////////////////////////////////////////////////////////
    //
    // Description: Creation du jeu (Forme, menu, fenetre ect..
    //
    ////////////////////////////////////////////////////////////////////////////////////
    create: function() {        
         game.add.sprite(0, 0, 'bg_play', infoJoueur.preferenceBackgroundJeu);

        
         /************************************ BEGIN NEW CODE PAT ***************************/
         this.tableauDuJeu= new Array(this.nbLigne);
         this.grid = game.add.group();
         this.grid.createMultiple(this.nbCarreTableau, 'quads', 0, false);


         var x = 0;
         var y = 132 + 58 * 0.5;
         var c = 0;
         var size = this.grid.getAt(0).width + 2;


         for(var j = 0; j < this.nbLigne; j++)  {
             this.tableauDuJeu[j] = new Array(this.nbColonne);
             var colonneJeu = this.tableauDuJeu[j];
             x = 21 + (58 * 0.5);
             
             for(var i = 0; i < 10; i++) {
                 var q = this.grid.getAt(c++);
                 q.anchor.setTo(0.5, 0.5);
                 q.x = x;
                 q.y = y;
                 q.exists=false;
                 q.frame=0;
                 
                 colonneJeu[i] = q;
                 x += size;
             }
             y += size;    
         }
         /************************************ END NEW CODE PAT ***************************/

        this.tabFormesAPlacer[0] = new Forme(9, 120, 830); 
        this.tabFormesAPlacer[0].initialiseForme(blockDefinition[game.rnd.integerInRange(0, 18)]);
        
        this.tabFormesAPlacer[1] = new Forme(9, (game.width / 2), 830);
        this.tabFormesAPlacer[1].initialiseForme(blockDefinition[game.rnd.integerInRange(0, 18)]);

        this.tabFormesAPlacer[2] = new Forme(9, (game.width - 120), 830);
        this.tabFormesAPlacer[2].initialiseForme(blockDefinition[game.rnd.integerInRange(0, 18)]);


        //
        this.inputPountOffset = new Phaser.Point(0, 0);
        this.nbFormNonPlace = 3;

       


        //Affiche le pointage record du jeu
        var label = game.add.text(330, 84, "Record:"+infoJoueur.pointageRecord.toString());
        label.anchor.set(0, 0.5);
        label.font = LoadState.fontName;
        label.align = 'left';        
        label.fontSize = 50;        
        label.fill = '#010101';
        this.champPointageRecord = label;
        dernierPointageAffiche = 0;
        pointage = 0;

        //Affiche le pointage de la partie.
        label = game.add.text(240, 84, "Point:"+pointage.toString());
        label.anchor.set(1.0, 0.5);
        label.font = LoadState.fontName;
        label.align = 'right';
        label.fontSize = 50;
        label.fill = '#14b05d';
        this.champPointagePartie = label;


        //Affiche le pointage de la partie.
        label = game.add.text(614, 920, "V"+versionJeu.toString());
        label.anchor.set(1.0, 0.5);
        label.font = LoadState.fontName;
        label.align = 'right';
        label.fontSize = 30;
        label.fill = '#010101';
        this.champVersionPartie = label;
        //alert("3");
        
        //Fenetre du menu pendant la partie.
        var group = game.add.group();
        gui.createSoundButton(230, 543, group);
        if (!isStock()){
            gui.createAideButton(320, 364, group, this.boutonAfficheAide, this);
        }else {
            gui.createAideButton(230, 543, group, this.boutonAfficheAide, this);
        }
        gui.createSmallPlayButton(410, 543, group, this.boutonContinuerPartie, this);
        this.menuPartieNonTermine = group;
        this.menuPartieNonTermine.visible = false;
        //alert("4");

        //Fenetre lorsque la partie est termine.
        group = game.add.group();
        label = game.add.text(320, 200, "Aucun deplacement possible");
        label.anchor.set(0.5);
        label.font = LoadState.fontName;
        label.align = 'center';
        label.fontSize = 30;
        label.fill = '#ffffff';
        group.add(label);
        gui.createBigPlayButton(322, 520, group, this.boutonJouerPartie, this);
        this.fenetreFinPartie = group;
        this.fenetreFinPartie.visible = false;


        //Fenetre d'aide.
        group = game.add.group();
        gui.createAideInfoButton(322, 520, group, this.enleverFenetreAide, this);
        this.fenetreAide = group;
        this.fenetreAide.visible = false;




       // Message evenement de input (Click/Appuie avec doigh etc)
        game.input.onDown.add(this.inputOnDown, this);
        game.input.onUp.add(this.inputOnUp, this);


        // Affiche le pointage sur l'ecran.
        game.time.events.loop(10, this.refreshPointageEcran, this);
//$(document).trigger('initAudio');
   //    $.mbAudio.play('effectSprite', 'great');
        //$(document).trigger('initAudio');

        window.scrollTo(10, 282);
      
      
        // Song Nouvelle Partie.
        if(jeuAudio.new_game) {
            jeuAudio.new_game.play();
        } else {
             //$.mbAudio.play('newGame', 'normal');
            //alert("no song...);
             // $.mbAudio.play('effectSprite', 'great');
        }

    },


    ////////////////////////////////////////////////////////////////////////////////////
    //
    // Description: Action lorsqu'on clique avec la souris ou le doigt.
    //
    ////////////////////////////////////////////////////////////////////////////////////
    inputOnDown: function(e) {        
        var input = game.input.activePointer;
        
        if(this.menuPartieNonTermine.visible || this.fenetreFinPartie.visible) {
            return;
        }

        // Affiche le Menu Pendant la partie si le user click sur le bouton Menu
        if (input.y < 70 && input.x <120) {
            
            //$.mbAudio.play('effectSprite', 'great');
            //$.mbAudio.play('newGame', 'normal');


            this.afficheMenuSecondaire(); 
            return;
        }
        
        // Verifie quel des 3 formes le user a choisi au bas du jeu.
        if(input.y >720) {
        
            if(input.x < 214){
                if(this.tabFormesAPlacer[0].flagPretDeplacement) {
                    this.formSelectionne = this.tabFormesAPlacer[0];
                }
            } else if(input.x < 428) {
                if(this.tabFormesAPlacer[1].flagPretDeplacement) {
                    this.formSelectionne = this.tabFormesAPlacer[1];
                }
            } else if(this.tabFormesAPlacer[2].flagPretDeplacement) {
                this.formSelectionne = this.tabFormesAPlacer[2];
            }
         }


        //
        if(this.formSelectionne) {
            this.inputPountOffset.x = this.formSelectionne.parent.x - input.x;
            this.inputPountOffset.y = this.formSelectionne.parent.y - input.y;            
            this.formSelectionne.debutDeplacement();
            var dragOffsetY = -this.formSelectionne.hh;
           // if(!game.device.desktop) {
            //    dragOffsetY -= 70;
            //}
            this.tweenDragOffset = game.add.tween(this.inputPountOffset).to({ x: 0, y: dragOffsetY }, 100, Phaser.Easing.Linear.None, true);
            game.world.bringToTop(this.formSelectionne.parent);
        }
    },

    ////////////////////////////////////////////////////////////////////////////////////
    //
    // Description: Action lorsqu'on relache la selection avec la souris ou le doigt.
    //
    ////////////////////////////////////////////////////////////////////////////////////
    inputOnUp: function(e) {
        if(!this.formSelectionne) {
            return;
        }


        if(this.tweenDragOffset && this.tweenDragOffset.isRunning) {
            this.tweenDragOffset.stop();
        }


        /************************************************************PAT NEW CODE********************/
         var n = this.formSelectionne.existsQuads;
        var wx = 0;
        var wy = 0;   



        /*
       var w = grid.getAt(0).width;
  var h = grid.getAt(0).height;

  var width = (cells[0][cols - 1].x + w) - cells[0][0].x;
  var height = (cells[rows - 1][0].y + h) - cells[0][0].y;

  var sizeW = width / cols;
  var sizeH = height / rows;

  this.invSizeW = 1.0 / sizeW;
  this.invSizeH = 1.0 / sizeH;

                 */
        this.invSizeW = 1;//1.0 / sizeW;
        this.invSizeH = 1;//1.0 / sizeH;
        var nbCarreValide=0;
        for(var i = 0; i < n; ++i) {
            wx = Math.floor(((this.formSelectionne.getQuadWorldX(i) - 21) * this.invSizeW)/60);
            wy = Math.floor(((this.formSelectionne.getQuadWorldY(i) - 132) * this.invSizeH)/60);
            //alert("x:"+wx);
            //alert(this.tableauDuJeu[1][1].exists);
            if((wx < 0 || wx >= this.nbLigne) || 
               (wy < 0 || wy >= this.nbColonne)) {
                //alert("out tableau");
                break;
            }
            // Verifie si la case est deja occupe par un autre block.
            if (this.tableauDuJeu[wy][wx].exists) {
                break;
            }
            ++nbCarreValide;
                      
        }     
        //alert("nbValid:"+nbCarreValide);

        if (nbCarreValide===n) {

            pointage += n;
            /////REFRESH LE TABLEAU
            this.formSelectionne.parent.exists = false;
            //// END REFRESH

            //alert(this.nbFormNonPlace);


            //Ajoute la forme dans le tableau.
            for(var i = 0; i < n; ++i) {
                wx = Math.floor(((this.formSelectionne.getQuadWorldX(i) - 21) * this.invSizeW)/60);
                wy = Math.floor(((this.formSelectionne.getQuadWorldY(i) - 132) * this.invSizeH)/60);
                this.tableauDuJeu[wy][wx].exists=true;
                //alert(this.formSelectionne.frame);
                this.tableauDuJeu[wy][wx].frame = this.formSelectionne.frame;

            }
            
            ///////////////////////////////////////////////////
            // Verifie si on efface une ligne.
            ///////////////////////////////////////////////////
            var i = 0;
            var j = this.nbLigne;
            var row = null;
    
    
            while(j--) {
                row = this.tableauDuJeu[j];
                i = this.nbColonne;
                while(i--) {
                    if(!row[i].exists) {
                        break;
                    }
                }
                if(i === -1) {
                    //alert("enleve ligne");

                    this.enleveLigne(j);

                    
                }
            }
    
            ///////////////////////////////////////////////////
            // Verifie si on efface une Colonne.
            ///////////////////////////////////////////////////
            j = this.nbColonne;
            while(j--) {
                i = this.nbLigne;
                while(i--) {
                    if(!this.tableauDuJeu[i][j].exists) {
                       break;
                    }
                }
                if(i === -1) {
                   // alert("enleve colonne");
                    this.enleveColonne(j);
                }
            } 

             
            
            --this.nbFormNonPlace;
            
            if(jeuAudio.put_shape) {
                jeuAudio.put_shape.play();
               
            } else {
               // $.mbAudio.play('put_shape', 'normal');
            }

            


        } else {
            this.formSelectionne.finDeplacement();
            
            if(jeuAudio.error) {
                jeuAudio.error.play();
            } else {
               // $.mbAudio.play('error', 'normal');
            }
        }

        if (this.nbFormNonPlace==0) {
            this.creationFormeSuivante();
        } else {
            this.verifieSiPlaceDisp();
        }
        
        this.formSelectionne = null;        
    },

    
    ////////////////////////////////////////////////////////////////////////////////////
    //
    // Description: Enleve une ligne de carre dans le tableau.
    //
    ////////////////////////////////////////////////////////////////////////////////////
    enleveLigne: function(j) {

        var row = this.tableauDuJeu[j];
        var i = this.nbLigne;
        var tween = null;
        while(i--)  {
            row[i].exists = false; 
            tween = game.add.tween(row[i].scale).to(this.scaleRemove, 250, Phaser.Easing.Back.In, true, i * 50);
            tween.onComplete.add(onQuadScaleDown, row[i]);
            if(i === this.nbLigne - 1) {
                //tween.onComplete.add(this.onComleteRemoveLine, this);
            }
        }        
        /////++this.waitLines;
        pointage += this.nbLigne;

        if(jeuAudio.line_removed) {
            jeuAudio.line_removed.play();
        }
    },


    ////////////////////////////////////////////////////////////////////////////////////
    //
    // Description: Enleve une colonne de carre dans le tableau.
    //
    ////////////////////////////////////////////////////////////////////////////////////
    enleveColonne: function(j) {
        var tween = null;
        var i = this.nbColonne;        
        while(i--) {
            this.tableauDuJeu[i][j].exists = false; 
            tween = game.add.tween(this.tableauDuJeu[i][j].scale).to(this.scaleRemove, 250, Phaser.Easing.Back.In, true, i * 50);
            tween.onComplete.add(onQuadScaleDown, this.tableauDuJeu[i][j]);
            if(i === this.nbColonne - 1) {
               // tween.onComplete.add(this.onComleteRemoveLine, this);
            }
        }        
        //++this.waitLines;
        pointage += this.nbColonne;
        if(jeuAudio.line_removed) {
            jeuAudio.line_removed.play();    
        }
    },


    ////////////////////////////////////////////////////////////////////////////////////
    //
    // Description: Creer les 3 formes Suivant.
    //
    ////////////////////////////////////////////////////////////////////////////////////
    creationFormeSuivante: function() {        
        this.tabFormesAPlacer[0].effaceForme(blockDefinition[game.rnd.integerInRange(0, 18)]);
        this.tabFormesAPlacer[1].effaceForme(blockDefinition[game.rnd.integerInRange(0, 18)]);
        this.tabFormesAPlacer[2].effaceForme(blockDefinition[game.rnd.integerInRange(0, 18)]);
        this.nbFormNonPlace = 3;
        this.verifieSiPlaceDisp();

             

        if(jeuAudio.new_shapes) {
            jeuAudio.new_shapes.play();
        }
    },



    ////////////////////////////////////////////////////////////////////////////////////
    //
    // Description: Verifie si il y a une place disponible pour les formes a ajouter.
    //
    ////////////////////////////////////////////////////////////////////////////////////
    verifieSiPlaceDisp: function()   {
        //alert("verif place");
        var n = 0;
        var i = 3;
        while(i--) {
            if(this.tabFormesAPlacer[i].isExists()) {
                
                ////alert("Verif form num:"+i);

                if (!this.recherchePlace(this.tabFormesAPlacer[i].state)) {
                   // alert("place non dispo");
                    //break;
                } else {
                    ++n;
                }
                ///////alert("place dispo");


                   
                
            }
        }
        ////alert("NBPLACENONPLACE:"+this.nbFormNonPlace);
        if (pointage>50) {
          // alert("NBPLACENONPLACE_V:"+n);
        }

        if(n === 0 && this.nbFormNonPlace>0) {     
            //this.grid.forEach(function(item) { item.exists = false; });

            this.afficheMenuFinPartie(); 
        }
        
    },



    ////////////////////////////////////////////////////////////////////////////////////
    //
    // Description: Recherche une place dans la grille du jeu.
    //
    ////////////////////////////////////////////////////////////////////////////////////
    recherchePlace: function(state) {   
        var ci = 0;
        var si = 0;
        var sj = 0;
        var ci2 = 0;
        var cj2 = 0;

          
        var lj = this.nbColonne - state.length + 1;
        var li = this.nbLigne - state[0].length + 1;        

        var isNextCells = false;
        var countCarreEspace=0;

        // Compte le nombre de carre dans la forme.
        var countCarre=0;
        for(sj = 0, cj2 = cj; sj < state.length; ++sj, ++cj2) {                    
            for(si = 0, ci2 = ci; si < state[sj].length; ++si, ++ci2) {
                if(state[sj][si] === 1) {
                    countCarre++;

                }
            }
        }


        if (pointage>47) {
           /// alert("Start space carre:"+state+" Carre:"+countCarre);
        }

        for(var cj = 0; cj < lj; ++cj) {    //ligne
        
            for(ci = 0; ci < li; ++ci) {   //col
                        
                var flagAnotherCarreTableau=false;
                countCarreEspace=0;
                //alert(state.length);
                // alert(state[0].length);
                if (pointage>47) {
                   // alert("x:"+cj+" y:"+ci);
                }
                for(sj = 0, cj2 = cj; sj < state.length; ++sj, ++cj2) {                    
                    for(si = 0, ci2 = ci; si < state[sj].length; ++si, ++ci2) {
                        if(state[sj][si] === 1 && this.tableauDuJeu[cj+sj][ci+si].exists) {
                            if (pointage>47) {// && (cj+sj)>5) {
                               // alert("No space 1");
                            }
                            //Pas espace disponible.
                            flagAnotherCarreTableau=true;
                            break;  
                        }
                        if(state[sj][si] === 1) {

                            countCarreEspace++;
                            if (pointage>47) { // && (cj+sj)>5) {
                            /// alert("space carre"+countCarreEspace);
                            }
                            // isNextCells = true;
                           // break;
                        }                        
                    }
                    if (flagAnotherCarreTableau) {
                        break;
                    }
                   // if(isNextCells) break;
                   // alert("found cel2");
                }
                if (countCarreEspace>=countCarre) {
                    //Espace a ete trouve pour placer la forme.
                    if (pointage>47) {
                      //  alert("End existspaceAAA");
                      ///  alert("-----------EXIST FORM ESPACELEN x:"+cj+" y:"+ci+ " S:" +state);

                    }
                    return true;

                }
                
            }
        }   

        // Return false car aucun espace disponible dans le tableau pour la forme.
        ///alert("----------->NOT FOUND ESPACELEN"+state);
        return false;   
    },


    ////////////////////////////////////////////////////////////////////////////////////
    //
    // Description: Recommence une nouvelle partie.
    //
    ////////////////////////////////////////////////////////////////////////////////////
    recommencePartie: function() {
        this.inputOnUp();
        //Efface le tableau.
        this.grid.forEach(function(item) { item.exists = false; });

        this.creationFormeSuivante();

        dernierPointageAffiche = 0;
        pointage = 0;
        this.champPointagePartie.text = "Point:"+pointage.toString();        
        this.champPointageRecord.text = "Record:"+infoJoueur.pointageRecord.toString();

        if(jeuAudio.new_game) { 
            jeuAudio.new_game.play();
        }
    },

    ////////////////////////////////////////////////////////////////////////////////////
    //
    // Description: Refresh la piece selectionner en mouvement.
    //
    ////////////////////////////////////////////////////////////////////////////////////
    update: function() {

        if(this.formSelectionne) {
            var input = game.input.activePointer;
            this.formSelectionne.setPositionForme(this.inputPountOffset.x + input.x, this.inputPountOffset.y + input.y);            
        }        
    },

    
    ////////////////////////////////////////////////////////////////////////////////////
    //
    // Description: Mise a jour du pointage dans le jeu a l'ecran.
    //
    ////////////////////////////////////////////////////////////////////////////////////
    refreshPointageEcran: function() {        
        if(dernierPointageAffiche < pointage) {
            ++dernierPointageAffiche;            
            this.champPointagePartie.text = "Point:"+dernierPointageAffiche.toString();            
        }
    },

    
    ////////////////////////////////////////////////////////////////////////////////////
    //
    // Description: Execute le bouton Jouer pendant la partie (continuer la partie).
    //
    ////////////////////////////////////////////////////////////////////////////////////
    afficheMenuSecondaire: function() {

        game.world.bringToTop(this.menuPartieNonTermine);
        this.menuPartieNonTermine.visible = true;

        this.menuPartieNonTermine.y = 600;
        game.add.tween(this.menuPartieNonTermine).to({ y: 0 }, 400, Phaser.Easing.Back.Out, true);
    },

    ////////////////////////////////////////////////////////////////////////////////////
    //
    // Description: Enleve le menu pendant le jeu.
    //
    ////////////////////////////////////////////////////////////////////////////////////
    enleverMenuSecondaire: function(){
        this.menuPartieNonTermine.visible = false;
    },



    ////////////////////////////////////////////////////////////////////////////////////
    //
    // Description: Execute le bouton Jouer pendant la partie (continuer la partie).
    //
    ////////////////////////////////////////////////////////////////////////////////////
    boutonContinuerPartie: function()  {
         this.fenetreAide.visible = false;


        game.add.tween(this.menuPartieNonTermine).to({ y: 600 }, 400, Phaser.Easing.Back.In, true).onComplete.add(this.enleverMenuSecondaire, this);        
    },

    ////////////////////////////////////////////////////////////////////////////////////
    //
    // Description: Affiche le menu de fin de partie.
    //
    ////////////////////////////////////////////////////////////////////////////////////
    boutonAfficheAide: function() {

         game.add.tween(this.menuPartieNonTermine).to({ y: 600 }, 400, Phaser.Easing.Back.In, true).onComplete.add(this.afficheAideB, this);
    },
    afficheAideB: function() {


        // alert("1");
            this.menuPartieNonTermine.visible = false;

            this.fenetreAide.visible = true;
            this.fenetreAide.y = 800;

            game.world.bringToTop(this.fenetreAide);
            game.add.tween(this.fenetreAide).to({ y: 0 }, 600, Phaser.Easing.Back.Out, true);

    },

    ///////////////////////////////////////////////////////////////////////////////////
    //
    // Description: Execute le bouton Jouer pendant la partie (continuer la partie).
    //
    ////////////////////////////////////////////////////////////////////////////////////
    enleverFenetreAide: function()  {
         this.fenetreAide.visible = false;
         this.afficheMenuSecondaire();
         //this.menuPartieNonTermine.visible = true;
  },


    ////////////////////////////////////////////////////////////////////////////////////
    //
    // Description: Affiche le menu de fin de partie.
    //
    ////////////////////////////////////////////////////////////////////////////////////
    afficheMenuFinPartie: function(){
        
        // Sauvegarge le pointage si c'est un record.
        if(infoJoueur.pointageRecord < pointage) {
            infoJoueur.pointageRecord = pointage;
            if(game.device.localStorage) localStorage.setItem('01annonce10x10sauve', JSON.stringify(infoJoueur));
        }

        this.fenetreFinPartie.visible = true;
        this.fenetreFinPartie.y = 800;

        game.world.bringToTop(this.fenetreFinPartie);
        game.add.tween(this.fenetreFinPartie).to({ y: 0 }, 600, Phaser.Easing.Back.Out, true);
        
        if(jeuAudio.new_game) {
            jeuAudio.new_game.play();
        } else {
            //alert("no song...");
        }
    },

    
    ////////////////////////////////////////////////////////////////////////////////////
    //
    // Description: Action lorsqu'on appuie sur le boutton jouer..
    //
    ////////////////////////////////////////////////////////////////////////////////////
    boutonJouerPartie: function() {
         
         //game.add.tween(this.curtain).to({ alpha: 0.0 }, 200, Phaser.Easing.Linear.None, true);
         game.add.tween(this.fenetreFinPartie).to({ y: 800 }, 600, Phaser.Easing.Back.In, true).onComplete.add(this.enleverFenetreFinPartie, this);
      },


    ////////////////////////////////////////////////////////////////////////////////////
    //
    // Description: Enleve la fenetre de fin partie.
    //
    ////////////////////////////////////////////////////////////////////////////////////
    enleverFenetreFinPartie: function() {
        this.fenetreFinPartie.visible = false;
        _sysblog("http://www.01annoncesclassees.com/jeu-gratuit/jeu_1010_recommencer.html");

        this.recommencePartie();
    }
};






////////////////////////////////////////////////////////////////////////////////////
//
// Description: Gui interraction.
//
////////////////////////////////////////////////////////////////////////////////////
function isStock() {

    var matches = window.navigator.userAgent.match(/Android.*AppleWebKit\/([\d.]+)/);
    return matches && matches[1] < 537;
};




var gui = {

    btnTheme: null,
    btnSound: null,

    
    createSoundButton: function(x, y, group) {

        if (!isStock()){
            var btn = game.add.button(x, y, 'gui', this.onSoundButton, this, 'btn_son_ouvert', 'btn_son_ouvert', 'btn_son_ouvert_appuyer', 'btn_son_ouvert');
            btn.anchor.set(0.5);
            if(group) {
                group.add(btn);
            }
            this.btnSound = btn;
        }
    },

    onSoundButton: function() {

        game.sound.mute = !game.sound.mute;

        var frameNormal = game.sound.mute ? 'btn_son_fermer' : 'btn_son_ouvert';
        var framePressed = game.sound.mute ? 'btn_son_fermer_appuyer' : 'btn_son_ouvert_appuyer';

        this.btnSound.setFrames(frameNormal, frameNormal, framePressed, frameNormal);
    },

    createSmallPlayButton: function(x, y, group, callback, context) {

        var btn = game.add.button(x, y, 'gui', callback, context, 'btn_jouer2', 'btn_jouer2', 'btn_jouer2_appuyer', 'btn_jouer2');
        btn.anchor.set(0.5);
        if(group) {
            group.add(btn); 
        }
    },

     createAideButton: function(x, y, group, callback, context) {
    
        var btn = game.add.button(x, y, 'gui', callback, context, 'btn_aide', 'btn_aide', 'btn_aide', 'btn_aide');
        btn.anchor.set(0.5);
        if(group) group.add(btn);
    },

     createAideInfoButton: function(x, y, group, callback, context) {
    
        var btn = game.add.button(x, y, 'gui', callback, context, 'btn_aide_info', 'btn_aide_info', 'btn_aide_info', 'btn_aide_info');
        btn.anchor.set(0.5);
        if(group) group.add(btn);
    },

    createBigPlayButton: function(x, y, group, callback, context){

        var btn = game.add.button(x, y, 'gui', callback, context, 'btn_jouer1', 'btn_jouer1', 'btn_jouer1_appuyer', 'btn_jouer1');
        btn.anchor.set(0.5);
        if(group) {
            group.add(btn);
        }
    },

};




  








////////////////////////////////////////////////////////////////////////////////////
//
// Description: Forme a deplacer.
//
////////////////////////////////////////////////////////////////////////////////////
var Forme = function(nQuads, posDebutX, posDebutY)
{    
    this.state = null;
    this.posDebutX = posDebutX;
    this.posDebutY = posDebutY;
    this.padding = new Phaser.Point(0, 0);
    this.hh = 0;

    this.parent = game.add.sprite(posDebutX, posDebutY, null);

    this.quads = new Array(nQuads);


    
    for(var i = 0; i < nQuads; i++) {        
        this.quads[i] = game.add.sprite(0, 0, 'quads', 0);
        this.quads[i].anchor.setTo(0.5, 0.5);
        this.parent.addChild(this.quads[i]);
    }

    this.existsQuads = nQuads;
    this.frame = 0;
    

    //
    this.deplacementEchelle = null;
    this.finDeplacementEchelle = null;

    this.deplacementColore = null;
    this.finDeplacementPosition = null;
    
    this.flagPretDeplacement = true;
};

////////////////////////////////////////////////////////////////////////////////////
//
// Description: Fonction concernant les formes.
//
////////////////////////////////////////////////////////////////////////////////////
Forme.prototype = {
    
    isExists: function() {
        return this.parent.exists;
    },

    ////////////////////////////////////////////////////////////////////////////////////
    //
    // Description: Initialise la forme.
    //
    ////////////////////////////////////////////////////////////////////////////////////
    initialiseForme: function(state) {
        this.state = state;

        // Choisi le couleur de la forme.
        this.frame = game.rnd.integerInRange(0, 4);

        
        // Met la meme couleur pour toute la forme.
        var nbCarreForme = this.quads.length;
        for(var posCarre = 0; posCarre < nbCarreForme; posCarre++) {
            this.quads[posCarre].exists = false;
            this.quads[posCarre].frame = this.frame;
        }
        
        // Construit la forme.
        this.constructionForme(2);      
        this.parent.exists = true;
        this.parent.scale.set(0.6);
        this.padding.x = 2;
       
        var nbCarreForme = this.quads.length;
        for(var posCarre = 0; posCarre < nbCarreForme; posCarre++) {
            if(this.quads[posCarre].exists) {
                //alert("2" + posCarre);
                this.hh = (this.quads[posCarre].y + this.quads[posCarre].height - this.quads[0].y) * 0.5;
                break;
            }
        }  

        
    },

    ////////////////////////////////////////////////////////////////////////////////////
    //
    // Description: Set la position de la forme.
    //
    ////////////////////////////////////////////////////////////////////////////////////
    setPositionForme: function(x, y) {
        this.parent.x = x;
        this.parent.y = y;        
    },

    ////////////////////////////////////////////////////////////////////////////////////
    //
    // Description: Construction de la forme.
    //
    ////////////////////////////////////////////////////////////////////////////////////
    constructionForme: function(padding) {
        var row = null;
        var i = 0;
        var idxQuad = 0;
        var size = 58 + padding;
        var x = 0;
        var y = 0;
        var q = null;
        var maxX = 0;
        var maxY = 0;

        this.existsQuads = 0;

        for(var j = 0; j < this.state.length; ++j) {
            row = this.state[j];
            x = 0;
            for(i = 0; i < row.length; ++i) {
                if(row[i] === 1)  {
                    q = this.quads[idxQuad];
                    q.x = x;
                    q.y = y;
                    q.exists = true;
                    if(maxX < x) {
                        maxX = x;
                    }
                    if(maxY < y) {
                        maxY = y;
                    }
                    ++idxQuad;
                }                
                x += size;
            }
            y += size;
        }

        this.existsQuads = idxQuad;

        //
        maxX *= 0.5;//(maxX + size - padding) * 0.5;
        maxY *= 0.5;//(maxY + size - padding) * 0.5;
        i = this.quads.length;

        while(i--) {
            if(this.quads[i].exists){
                this.quads[i].x -= maxX;
                this.quads[i].y -= maxY;
            }
        }
    },

    ////////////////////////////////////////////////////////////////////////////////////
    //
    // Description: ReAffiche la forme apres un deplacement.
    //
    ////////////////////////////////////////////////////////////////////////////////////
    reAfficheForme: function() {
        this.constructionForme(this.padding.x);
    },


    ////////////////////////////////////////////////////////////////////////////////////
    //
    // Description: Debut de deplacment de la forme
    //
    ////////////////////////////////////////////////////////////////////////////////////
    debutDeplacement: function() {
        if(this.finDeplacementPosition && this.finDeplacementPosition.isRunning) {
            this.finDeplacementPosition.stop();
        }

        if(this.finDeplacementEchelle && this.finDeplacementEchelle.isRunning) {
            this.finDeplacementEchelle.stop(); 
        }

        this.deplacementEchelle = game.add.tween(this.parent.scale).to({ x: 0.85, y: 0.85 }, 100, Phaser.Easing.Linear.None, true);
        this.deplacementColore = game.add.tween(this.padding).to({ x: 14.5 }, 100, Phaser.Easing.Linear.None, true);
        this.deplacementColore.onUpdateCallback(this.reAfficheForme, this);             
    },

    
    ////////////////////////////////////////////////////////////////////////////////////
    //
    // Description: Fin de deplacment de la forme
    //
    ////////////////////////////////////////////////////////////////////////////////////
    finDeplacement: function() {
        if(this.deplacementEchelle && this.deplacementEchelle.isRunning) {
            this.deplacementEchelle.stop();
        }
        if(this.deplacementColore && this.deplacementColore.isRunning) {
            this.deplacementColore.stop(); 
        }

        this.deplacementColore = game.add.tween(this.padding).to({ x: 2 }, 160, Phaser.Easing.Linear.None, true);
        this.deplacementColore.onUpdateCallback(this.reAfficheForme, this);

        this.finDeplacementPosition = game.add.tween(this.parent).to({ x: this.posDebutX, y: this.posDebutY }, 160, Phaser.Easing.Linear.None, true);
        this.finDeplacementEchelle = game.add.tween(this.parent.scale).to({ x: 0.6, y: 0.6 }, 160, Phaser.Easing.Linear.None, true);        
    },

    getQuadWorldX: function(i) {
        return this.parent.x + this.quads[i].x * this.parent.scale.x;
    },

    getQuadWorldY: function(i) {
        return this.parent.y + this.quads[i].y * this.parent.scale.x;
    },

    

    

    ////////////////////////////////////////////////////////////////////////////////////
    //
    // Description: Efface la forme.
    //
    ////////////////////////////////////////////////////////////////////////////////////
    effaceForme: function(state) {        
        this.setPositionForme(this.posDebutX + game.width, this.posDebutY);
        this.initialiseForme(state);

        var tween = game.add.tween(this.parent).to({ x: this.posDebutX }, 300, Phaser.Easing.Quadratic.Out, true);
        tween.onComplete.add(this.setFlagPretDeplacement, this);
    },

    setFlagPretDeplacement: function() {
        this.flagPretDeplacement = true;
    }
};



//
function onQuadScaleDown() {
    this.exists = false;
    this.scale.set(1);
}



////////////////////////////////////////////////////////////////////////////////////
//
// Description: Chargement des ressources.
//
////////////////////////////////////////////////////////////////////////////////////
var LoadState = {

    infoPourcentCharge: null,
    ressourceCharge: false,
    fontName: 'Arvo',

    ////////////////////////////////////////////////////////////////////////////////////
    //
    // Description: Charge les ressources.
    //
    ////////////////////////////////////////////////////////////////////////////////////
    init: function() {
        game.input.maxPointers = 1;
        game.stage.disableVisibilityChange = true;        

        if(!game.device.desktop) {
            game.scale.forceOrientation(false, true);
            //game.scale.enterIncorrectOrientation.add(this.onEnterIncorrectOrientation, this);
            //game.scale.leaveIncorrectOrientation.add(this.onLeaveIncorrectOrientation, this);
        }               

        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;       
        game.scale.setResizeCallback(this.changeDimensionJeu, this);
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.setScreenSize(true);        

        
        this.infoPourcentCharge = game.add.text(game.world.centerX, game.world.centerY, '', { fill: '#a2efff' });
        this.infoPourcentCharge.anchor.setTo(0.5, 0.5);

        game.load.onFileComplete.add(this.affichePourcentLoad, this);
        game.load.onLoadComplete.add(this.chargementTermine, this);        
    },

    ////////////////////////////////////////////////////////////////////////////////////
    //
    // Description: Change les dimensions du jeu pour l'ecran.
    //
    ////////////////////////////////////////////////////////////////////////////////////
    changeDimensionJeu: function()  {
        ajusteDimension(game.parent, game.width, game.height);
    },

    
    ////////////////////////////////////////////////////////////////////////////////////
    //
    // Description: Action avant de charger.
    //
    ////////////////////////////////////////////////////////////////////////////////////
    preload: function() {
    },

    ////////////////////////////////////////////////////////////////////////////////////
    //
    // Description: Charge les ressources.
    //
    ////////////////////////////////////////////////////////////////////////////////////
    create: function() {        
              
       
        //alert("4");
        game.load.spritesheet('bg_home', 'assets/bg_home.png', 640, 940, 1);
        game.load.spritesheet('bg_play', 'assets/bg_play.png', 640, 940, 1);        
        game.load.spritesheet('quads', 'assets/quads.png', 58, 58, 5);
        game.load.atlas('gui', 'assets/gui.png', 'assets/gui.json');
        game.load.json('strings', 'text/en.json');             

        if(game.device.webAudio) {
        

            game.load.audio('Error', ['assets/sfx/Error.mp3', 'assets/sfx/Error.ogg']);
            game.load.audio('New_Shapes', ['assets/sfx/New_Shapes.mp3', 'assets/sfx/New_Shapes.ogg']);
            game.load.audio('NewGame', ['assets/sfx/NewGame.mp3', 'assets/sfx/NewGame.ogg']);
            game.load.audio('Put_stone', ['assets/sfx/Put_stone.mp3', 'assets/sfx/Put_stone.ogg']);
            game.load.audio('Row_Removed', ['assets/sfx/Row_Removed.mp3', 'assets/sfx/Row_Removed.ogg']);

                    
            jeuAudio.error = game.add.audio('Error');
            jeuAudio.new_shapes = game.add.audio('New_Shapes');
            jeuAudio.new_game = game.add.audio('NewGame');
            jeuAudio.put_shape = game.add.audio('Put_stone');
            jeuAudio.line_removed = game.add.audio('Row_Removed');
        }

         if(game.device.localStorage) {
           // alert("12");
            var saveData = localStorage.getItem('01annonce10x10sauve');
         //   alert("13");
            if(saveData) infoJoueur = JSON.parse(saveData);
         //   alert("14.0a");
        }

         //alert("6");
        game.load.start();
    },  

    

    

    ////////////////////////////////////////////////////////////////////////////////////
    //
    // Description: Affiche le pourcentage de chargement.
    //
    ////////////////////////////////////////////////////////////////////////////////////
    affichePourcentLoad: function(progress, cacheKey, success, totalLoaded, totalFiles) {
        this.infoPourcentCharge.setText(progress + "%");
    },

    ////////////////////////////////////////////////////////////////////////////////////
    //
    // Description: Action losque les ressources sont charge.
    //
    ////////////////////////////////////////////////////////////////////////////////////
    chargementTermine: function() {
         this.ressourceCharge = true;
         
         
    },

    ////////////////////////////////////////////////////////////////////////////////////
    //
    // Description: Affiche le menu apres le chargement des ressources.
    //
    ////////////////////////////////////////////////////////////////////////////////////
    update: function() {
        if(this.ressourceCharge) {
             game.state.start('menu');
        }
    }
};





////////////////////////////////////////////////////////////////////////////////////
//
// Description: Main du jeu.
//
////////////////////////////////////////////////////////////////////////////////////
function startGame(winid) {
    setTimeout("window.scrollTo(10, 10)", 10);


    game = new Phaser.Game(640, 940, Phaser.CANVAS, winid);

    //Charge les ressources du jeu.
    game.state.add('load', LoadState);
    game.state.add('menu', JeuMenu);

    game.state.add('play', processusJeu);


   
    game.state.start('load');
    //alert("3");
}







////////////////////////////////////////////////////////////////////////////////////
//
// Description: Ajuste la Dimension du jeu selon l'ecran.
//
////////////////////////////////////////////////////////////////////////////////////
var ajusteDimension = function(element, initialWidth, initialHeight) {

    var self = this;
    
    
    this.element = element;
    if(typeof element === "string") {
        this.element = document.getElementById(element);
    }

    
    if(window.innerWidth == 0 && window.innerHeight == 0) { 
        // Valeur par defaut pour afficher l'ecran 
        self.element.style.display = 'block';
        self.element.style.margin  = '0';
        self.element.style.padding = '0';

        return;
    }
       

    var nbPixLarge = window.innerWidth;
    var nbPixHaut  = window.innerHeight;
    var pourcentVertHoriz = initialWidth / initialHeight;    
    var pourcentWindow = window.innerWidth / window.innerHeight;


    // Determine la hauteur et largeur du jeu selon l'ecran 
    if(Math.abs(pourcentWindow - pourcentVertHoriz) > 0) {

        if(pourcentWindow < pourcentVertHoriz) {
            resultHaut = window.innerWidth / pourcentVertHoriz;
        } else {
            resultLarge = window.innerHeight * pourcentVertHoriz;
        }
    }
            
    // Valeur par defaut pour afficher l'ecran 
    self.element.style.display = 'block';
    self.element.style.width  = nbPixLarge + "px";
    self.element.style.height = nbPixHaut  + "px";
    self.element.style.margin  = '0';
    self.element.style.padding = '0';
    self.element.style.marginLeft = ((window.innerWidth - nbPixLarge) * 0.5) + "px";
    self.element.style.marginTop = ((window.innerHeight - nbPixHaut) * 0.5) + "px";
};


////////////////////////////////////////////////////////////////////////////////////
//
// Description: Action quand Quitte le jeu
//
////////////////////////////////////////////////////////////////////////////////////
window.onunload = function() {
}

