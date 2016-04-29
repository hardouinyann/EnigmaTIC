.<?php

/**
 * Class c_histoire
 */
class c_histoire extends Controller{

    //variables à utiliser : categories, blocks, calendar, partners
    /**
     * @var array
     */
    protected $layout = 'jeu';
    /**
     *
     */
    public function jeu($id){

        if(empty($_SESSION['user'])){
            header('Location: '.WEBROOT);
        }else if(!empty($id)){
            $res = $this->getModel('jeu')->getFic($id);
            if(!empty($res[0]->nom_fic)){
                $this->render('v_'.$res[0]->nom_fic);
            }else{
                header('Location: histoire/bureau');
            }

        }else{
            header('Location: histoire/bureau');
        }                
    }

    public function bureau(){

        if(!empty($_SESSION['user'])){
            $id_jeux = $this->getModel('jeu')->getIdJeux();
            $succes = $this->getModel('jeu')->getSucces($_SESSION['user']->id_utilisateur);  
            $this->dataForView->succes = array();
            foreach($succes as $s){
                if($s->id_jeu) array_push($this->dataForView->succes, array("date"=>$s->id_jeu, "nom"=>$s->nom)  );
            }
            
        }
            

        if(!empty($this->datasFromPost['justSawDesktop'])){

            $this->getModel('user')->updateDejaVuBureau($_SESSION['user']->id_utilisateur);

        }elseif(!empty($_POST['validation_jeu'])){//bouton de redirection a la fin des jeu sera un petit form en fait

            $tableToCall = $this->getModel('jeu')->getGameName($_POST['id_jeu']);
            if(!empty($tabletocall)){

                $datas = array( 'id_partie' =>'DEFAULT',
                        'id_utilisateur' => $_SESSION['user']->id_utilisateur,
                        'jeu_valide' => 1,
                        'date_valid' =>'now'
                    );
                $tableToCall = "jeu_".$tableToCall[0]->nom;

                $jeuValide = $this->getModel('jeu')->gameComplete($datas, $tableToCall);
                $this->dataForView = $jeuValide;
            }
        }

        if(!empty($_SESSION['user'])){
            $dejaVu = $this->getModel('user')->getDejaVuBureau($_SESSION['user']->id_utilisateur);
            if(!empty($dejaVu)){
                $this->dataForView->dejaVu = ($dejaVu[0]->dial_bureau1_vu == 1) ? true : false;
                $_SESSION['bureauDejaVu'] = $this->dataForView->dejaVu; 
            }         
        }

        $this->render('v_bureau');
       
    }

    public function preambule(){
        $this->render('v_preambule');
    }


}
?>