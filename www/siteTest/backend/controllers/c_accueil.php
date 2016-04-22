<?php

/**
 * Class c_infos
 */
class c_accueil extends Controller{

    protected $layout = 'home';

    public function index(){

        if(!empty($this->datasFromPost)){

            require_once('/c_connexion.php');
            $c = new c_connexion();

            $connecte = $c->connexion($this->datasFromPost);// true ou false
            if(count($connecte) == 1) {
                $_SESSION['user'] = $connecte[0];
                header('Location: accueil/bureau/'.$connecte[0]->id_utilisateur);
            }
        }

        $this->render('v_index');
    }

    public function inscription(){

        if(!empty($this->datasFromPost)){

            array_splice($this->datasFromPost, -1, 1);//on retire le password verif
            $this->datasFromPost['ip'] = $_SERVER['HTTP_REMOTE_IP'];//ip du visiteur, a vérifier si on a des spam d'inscription

            if(count($this->getModel('user')->checkForMatch($this->datasFromPost['mail'],$this->datasFromPost['pseudo']))==0){//si ce login/mail n'est pas déja pris

                require_once('/c_connexion.php');//module permettant l'encodage du mdp
                $c = new c_connexion();
                $this->datasFromPost['password'] = $c->getCrypt($this->datasFromPost['password']);//on encode le mdp
                if($this->getModel('user')->createUser($this->datasFromPost)!=null){
                    $this->dataForView->created = true;
                }
            }else{
                $this->dataForView->created = false;
                $this->dataForView->alreadyExist = true;
            }
        }
        $this->render('v_inscription');
    }
}
?>