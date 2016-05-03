<?php
    session_start();
    require('./backend/core/constantes.php');
    require(CORE_PATH.'model.php');
    require(CORE_PATH.'controller.php');

    //Exception du cas ou on ne mettrais pas le / à la fin de administration --> apparamment c'est que pour le local
    /*if ($_GET['p'] == 'administration' && empty($_SESSION['id'])){
        header('location:'.WEBROOT.'administration/connexion');
    }*/

    $params = (!empty($_GET['p'])) ? explode('/',$_GET['p']) : array('accueil','index');
    //session_start();

    if($params[0] == 'administration' && empty($_SESSION['id']) && $params[1]!='reset'){

        //if (!empty($params[1]))
        //print_r($params[1]);
        if($params[1]!='connexion' || empty($params[1])){
            header('location:'.WEBROOT.'administration/connexion');
        }
        //header('location:'.WEBROOT.'administration/connexion');
    }
    
    if(!empty($params[0])){

        $controller = array_shift($params);

    }
    else{
        $controller = DEFAULT_CONTROLLER;
    }

    if(!empty($params[0])){

        $action = array_shift($params);
    }
    else{
        $action = DEFAULT_ACTION;
    }


    if(file_exists(CONTROLLERS_PATH.'c_'.$controller.'.php')){

	    define('CONTROLLER', $controller);
	    define('ACTION', $action);

        $controller  = 'c_'.$controller;
        require(CONTROLLERS_PATH.$controller.'.php');
        $controller = new $controller();

    }
    else{
        $controller = 'c_'.DEFAULT_CONTROLLER;
        //header('location:http://localhost/adnfc/');
        header('location:'.WEBROOT);
    }



    if(method_exists($controller, $action)){
        call_user_func_array(array($controller,$action),$params);
    }else{
        header('location:'.WEBROOT);
        header('location:'.WEBROOT);
    }
?>