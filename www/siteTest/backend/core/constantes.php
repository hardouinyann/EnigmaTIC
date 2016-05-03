<?php

    //CONST
    define('WEBROOT',str_replace('index.php','',$_SERVER['SCRIPT_NAME']));
    define('ROOT',str_replace('index.php','',$_SERVER['SCRIPT_FILENAME']));
    define('CONTROLLERS_PATH','./backend/controllers/');
    define('MODELS_PATH','./backend/models/');
    define('VIEWS_PATH','./backend/views/');
    define('CORE_PATH','./backend/core/');
    define('AUDIOS_PATH',WEBROOT.'./medias/audio/');
    define('VIDEOS_PATH',WEBROOT.'./medias/videos/');
    define('LAYOUT_PATH',VIEWS_PATH.'layout/');
    define('STYLE_PATH',WEBROOT.'css/');
    define('PICTURES_PATH',WEBROOT.'images/');
    define('JAVASCRIPT_PATH', WEBROOT.'js/');
    define('ICONS_PATH',PICTURES_PATH.'icons/');
    define('URL_RACINE',WEBROOT.'/');

    //DEFAULT
    define('DEFAULT_CONTROLLER','informations');
    define('DEFAULT_ACTION','index');

    //MYSQL ACCESS
   /* define('MYSQL_HOST','enigmatiqmbdd.mysql.db');
    define('MYSQL_PORT',"3306");
    define('MYSQL_DB','enigmatiqmbdd');
    define('MYSQL_LOGIN','enigmatiqmbdd');
    define('MYSQL_PWD','eNigmatic1'); */

   define('MYSQL_HOST','localhost');
    define('MYSQL_DB','rhizome');
    define('MYSQL_LOGIN','root');
    define('MYSQL_PWD','');

    //Clés
	define('CLE_GESTIONNAIRE_FICHIERS', 'dsflFWR9u2xQa');
?>
