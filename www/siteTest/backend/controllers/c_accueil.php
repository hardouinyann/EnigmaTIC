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
                $this->debug($connecte[0]->id_utilisateur);
                header('Location: accueil/bureau/'.$connecte[0]->id_utilisateur);
            }
        }

        $this->render('v_index');
    }

    public function inscription(){
        $this->render('v_inscription');
    }
}
?>