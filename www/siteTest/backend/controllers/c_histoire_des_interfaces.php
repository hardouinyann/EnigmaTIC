<?php

/**
 * Class c_histoire_des_interfaces
 */
class c_histoire_des_interfaces extends Controller{

    //variables à utiliser : categories, blocks, calendar, partners
    /**
     * @var array
     */
    protected $layout = 'home';
    /**
     *
     */
    public function jeu($id){

        if(!empty($id)){
            $res = $this->getModel('jeu')->getFic($id);
            if(!empty($res[0]->nom_fic)){
                $this->render('v_'.$res[0]->nom_fic);
            }else{
                header('Location: histoire_des_interfaces/bureau');
            }
        }else{
            header('Location: histoire_des_interfaces/bureau');
        }                
        
    }

    public function bureau($params){
        $this->render('v_index');
    }


}
?>