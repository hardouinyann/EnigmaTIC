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

            $this->debug($this->dataForView->succes);

        }


        if(!empty($_POST['justSawDesktop'])){

            $this->debug("sdfsdfsdfkjsdhfkjsdhfkjsdhfkjshdfkjshdfjkhsdfkjhsdkjfhsdkjfhskd","sdfshdfksjdhfjks");

            $var = $this->getModel('user')->updateDejaVuBureau($_SESSION['user']->id_utilisateur);
            $this->debug($var);
            die();



        }elseif(!empty($_POST['validation_jeu'])){//bouton de redirection a la fin des jeu sera un petit form en fait



            $this->debug($_POST);



            $score = !empty($_POST['score']) ? $_POST['score'] : null;



            $datas = array( 'id_partie' =>'DEFAULT',

                    'id_utilisateur' => $_SESSION['user']->id_utilisateur,

                    'jeu_valide' => 1,

                    'date_valid' =>'now',

                    'score' => $score,

                    'id_jeu' => $_POST['id_jeu']

                );

            $tableToCall = "partie";



            $jeuValide = $this->getModel('jeu')->gameComplete($datas, $tableToCall);

            $this->dataForView = $jeuValide;

            $this->debug($this->dataForView,"data for view");

            

        }



        if(!empty($_SESSION['user'])){

            $dejaVu = $this->getModel('user')->getDejaVuBureau($_SESSION['user']->id_utilisateur);

            if(!empty($dejaVu)){

                $this->dataForView->dejaVu = ($dejaVu[0]->dial_bureau1_vu == 1) ? true : false;

                $_SESSION['bureauDejaVu'] = $this->dataForView->dejaVu; 

            }         

        }

        if(empty($_POST['justSawDesktop']))
            $this->render('v_bureau');


       

    }



    public function preambule(){

        $this->render('v_preambule');

    }





}

?>