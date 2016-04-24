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

        if(!empty($id)){
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
        $this->render('v_bureau');
    }

    public function preambule(){
        $this->render('v_preambule');
    }


}
?>