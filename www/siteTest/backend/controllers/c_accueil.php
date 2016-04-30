<?php

/**
 * Class c_infos
 */
class c_accueil extends Controller{

    protected $layout = 'home';

    public function index(){

        if(!empty($this->datasFromPost)){

            require('c_connexion.php');
            $c = new c_connexion();

            $connecte = $c->connexion($this->datasFromPost);// true ou false
            if(count($connecte) == 1) {
                $_SESSION['user'] = $connecte[0];
                $this->dataForView->connected = true;
                header('Location: histoire/bureau/'.$connecte[0]->id_utilisateur);
            }
        }
        
        $this->render('v_index');
    }

    public function inscription(){
        if(!empty($this->datasFromPost)){

            array_splice($this->datasFromPost, -1, 1);//on retire le password verif
            $this->datasFromPost['ip'] = $_SERVER['REMOTE_ADDR'];//ip du visiteur, a vérifier si on a des spam d'inscription

            if(count($this->getModel('user')->checkForMatch("mail",$this->datasFromPost['mail']))==0){//si ce mail n'est pas déja pris

                if(count($this->getModel('user')->checkForMatch("login",$this->datasFromPost['login']))==0){//si ce login n'est pas pris

                    require('c_connexion.php');//module permettant l'encodage du mdp
                    $c = new c_connexion();
                    $this->datasFromPost['password'] = $c->getCrypt($this->datasFromPost['password']);//on encode le  mdp
                    $this->datasFromPost['date_inscription'] = 'now';
                    $res = $this->getModel('user')->createUser($this->datasFromPost);
                    if( $res !=null){
                        $this->dataForView->created = true;
                        $_SESSION['user'] = (object) $this->datasFromPost;
                        $_SESSION['user']->id_utilisateur = $res;
                    }
                }
                else{
                    $this->dataForView->created = false;
                    $this->dataForView->alreadyExist = "pseudo";
                }
                
            }else{
                $this->dataForView->created = false;
                $this->dataForView->alreadyExist = "mail";
            }
        }
        /* $this->debug($this->dataForView); */
        $this->render('v_inscription');
    }

    public function reinitialiser(){
        $this->render('v_reinitialiser');
    }

    public function deconnexion(){
        session_destroy();
        header('Location: '.WEBROOT); 
    }
}
?>