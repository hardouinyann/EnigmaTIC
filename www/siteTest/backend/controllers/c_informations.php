<?php

/**
 * Class c_infos
 */
class c_informations extends Controller{

	protected $layout = 'home';

    public function mentionslegales(){
        $this->render('v_mentions_legales');
    }

    public function apropos(){
        $this->render('v_a_propos');
    }
}
?>