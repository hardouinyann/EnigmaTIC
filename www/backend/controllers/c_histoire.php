<?php
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
                 header('Location: '.WEBROOT.'histoire/bureau');
            }
        }else{
           header('Location: '.WEBROOT.'histoire/bureau');
        }                
    }


    public function bureau(){

        if(!empty($_SESSION['user'])){
            // Bloc Note Utilisateur
            $blocNote = $this->getModel('user')->getUserBlocNote($_SESSION['user']->id_utilisateur);
            $this->dataForView = new stdClass();
            $this->dataForView->blocNote = $blocNote[0]->bloc_note; 
            $_SESSION['blocNote'] = $this->dataForView->blocNote;

            // ON RECUPERE LE NOMBRE DE MESSAGE RECUPERE
            $nbMessageRecupere = $this->getModel('user')->getNbMessageRecup($_SESSION['user']->id_utilisateur);

            if(!empty($nbMessageRecupere)){
                $this->dataForView->nbMessageRecupere = ($nbMessageRecupere[0]->nb_message_recup);
                $_SESSION['nbMessageRecupere'] = $this->dataForView->nbMessageRecupere;
            }

            switch($this->dataForView->nbMessageRecupere) {
                case '0':
                    $message = "Thomas, c'est Léopold, ton grand-père. Si tu lis ce message, c'est que j'ai des ennuis, et que je me suis perdu dans les couloirs du temps, lors de l'un de mes...";
                break;
                case '1':
                    $message = "Il faut que tu viennes me chercher, pour me ramener en notre temps...";
                break;
                case '2':
                    $message = "...avec la machine à voyager dans le temps que j'ai construite, et que tu as du découvrir ! Je suis...";
                break;
                case '3':
                    $message = "...resté bloqué dans la dernière date que j'ai visité avec la machine, qui est...";
                break;
                case '4':
                    $message = "...voyages temporels ! J'ai besoin de ton aide, et je sais que tu es le seul à pouvoir le faire...";
                break; 
                case '5':
                    $message = "...en 2050 ! J'ai besoin de toi pour retourner en notre temps ! Viens me chercher!";
                break; 
                }

            $_SESSION['messageAAfficher'] = $message;

            $id_jeux = $this->getModel('jeu')->getIdJeux();

            $succes = $this->getModel('jeu')->getSucces($_SESSION['user']->id_utilisateur);  

            $this->dataForView = new stdClass();
            $this->dataForView->succes = array();

            foreach($succes as $s){
                if($s->id_jeu) array_push($this->dataForView->succes, array("date"=>$s->id_jeu, "nom"=>$s->nom)  );
            }

            // POUR AFFICHER LES SUCCES
            if(sizeof($this->dataForView->succes) != 0) {
                for($i=0 ; $i <sizeof($this->dataForView->succes) ; $i++){
                    $_SESSION['succes'][$i] = $this->dataForView->succes[$i]['date']; 
                }
            }
        }


        if(!empty($_POST['justSawDesktop'])){
            $var = $this->getModel('user')->updateDejaVuBureau($_SESSION['user']->id_utilisateur);
            // $this->debug($var);
            die();
        }elseif(!empty($_POST['validation_jeu'])){

            //bouton de redirection a la fin des jeu sera un petit form en fait
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
            if(!empty($_POST['nouveauMessage'])) {
                $var = $this->getModel('user')->updateNbMessageRecup($_SESSION['user']->id_utilisateur);
            }
            
            if(!empty($_POST['progression'])) {
                $var = $this->getModel('user')->updateProgression($_SESSION['user']->id_utilisateur);
            }
            header('Location: '.WEBROOT);
        }


        if(!empty($_POST['finShellVu'])){
            $var = $this->getModel('user')->updateShellFini($_SESSION['user']->id_utilisateur);
            die();
        }


        if(!empty($_POST['finShell'])){
            $var = $this->getModel('user')->updateShellCinematique($_SESSION['user']->id_utilisateur);
            die();
        }



        if(!empty($_SESSION['user'])){
            $dejaVu = $this->getModel('user')->getDejaVuBureau($_SESSION['user']->id_utilisateur);
            $shellFinDialogue = $this->getModel('user')->getShellFini($_SESSION['user']->id_utilisateur);

            $this->dataForView = new stdClass();
            if(!empty($dejaVu)){
                $this->dataForView->dejaVu = ($dejaVu[0]->dial_bureau1_vu == 1) ? true : false;
                $_SESSION['bureauDejaVu'] = $this->dataForView->dejaVu; 
            }   


            if(!empty($shellFinDialogue)){
                $this->dataForView->shellFinDialogue = ($shellFinDialogue[0]->dial_shell_fin == 1) ? true : false;

                $_SESSION['shellFinDialogue'] = $this->dataForView->shellFinDialogue; 
            }       
        }


        if(empty($_POST['justSawDesktop']))
            $this->render('v_bureau');
    }


    public function preambule(){
       $this->render('v_preambule');
    }

    public function updateBlocNote(){
        if(!empty($_POST) && !empty($_SESSION['user'])){
            $update = $this->getModel('user')->updateBlocNote($_SESSION['user']->id_utilisateur, $_POST['text']);
            echo json_decode($update);
        }
    }
}

?>