<?php


    class Controller {

        protected $dataForView;
        protected $layout = 'default';
        protected $usedModels = array();
        
        protected $TITRE = CONTROLLER;


        public function __construct(){

            $this->TITRE = ucfirst($this->TITRE);
            $this->dataForView = new stdClass();
            if(isset($_POST)) $this->datasFromPost = $_POST;
            
        }

        protected function render($fileName){

            ob_start();
            require(VIEWS_PATH.explode('_',get_class($this))[1].'/'.$fileName.'.php');
            $content_for_layout = ob_get_clean();
            if($this->layout==false)
                echo $content_for_layout;
            else
                require(LAYOUT_PATH.$this->layout.'.php');

        }

        //automatiser la création de models a partir de $models
        protected function getModel($modelName){

            if(empty($this->usedModels[$modelName])){
                $class = 'm_'.$modelName;
                require_once(MODELS_PATH.$class.'.php');
                $this->usedModels[$modelName] = new $class();
            }

            return $this->usedModels[$modelName];
        }

        //permet de mettre en forme l'affichage d'une variable / d'un tableau
        protected function debug($arrayToDebug = array(),$array_name= false){

            $title = (!empty($array_name)) ? $array_name:"" ;
            if(getType($arrayToDebug)=="array") ksort($arrayToDebug);
            echo "<meta charset='UTF-8'>
                  <h1 style='margin-bottom:-35px!important;position:relative;z-index:9999!important;'>".$title."</h1>
                  <pre style='margin:50px!important;background-color:#AEAEAE!important;border:solid 2px red!important;z-index:9999!important;position:relative;'>";
                    print_r($arrayToDebug);
            echo"</pre><br>"; 
        }


        protected function setCookies($form, $time){

            foreach($form as $field=>$value){
                setcookie($field, $value, time() + $time, "/");
            }

        }


        protected function unsetCookies($champs){

            foreach($champs as $champ){
                setcookie($champ, '', 1);
            }

        }


        protected function getCookies($champs){

            $myCookies = array();
            foreach($champs as $champ){
                $myCookie = $_COOKIE[$champ];
                if(!empty($myCookie)){
                    array_push($myCookies,array($champ => $myCookie));
                }
            }
            return $myCookies;
        }


        protected function noSpecialChars($str){
            /** Mise en minuscules (chaîne utf-8 !) */
            $str = mb_strtolower($str, 'utf-8');
            /** Nettoyage des caractères */
            mb_regex_encoding('utf-8');
            $str = trim(preg_replace('/ +/',     ' ', mb_ereg_replace('[^0-9\p{L}]+', ' ', $str)));
            /** strtr() sait gérer le multibyte */
            $str = strtr($str, array(
                'à'=>'a', 'á'=>'a', 'â'=>'a', 'ã'=>'a', 'ä'=>'a', 'å'=>'a', 'æ'=>'a', 'a'=>'a', 'a'=>'a', 'a'=>'a', 'ç'=>'c', 'c'=>'c', 'c'=>'c', 'c'=>'c', 'c'=>'c', 'd'=>'d', 'd'=>'d', 'è'=>'e', 'é'=>'e', 'ê'=>'e', 'ë'=>'e', 'e'=>'e', 'e'=>'e', 'e'=>'e', 'e'=>'e', 'e'=>'e', 'g'=>'g', 'g'=>'g', 'g'=>'g', 'h'=>'h', 'h'=>'h', 'ì'=>'i', 'í'=>'i', 'î'=>'i', 'ï'=>'i', 'i'=>'i', 'i'=>'i', 'i'=>'i', 'i'=>'i', 'i'=>'i', '?'=>'i', 'j'=>'j', 'k'=>'k', '?'=>'k', 'l'=>'l', 'l'=>'l', 'l'=>'l', '?'=>'l', 'l'=>'l', 'ñ'=>'n', 'n'=>'n', 'n'=>'n', 'n'=>'n', '?'=>'n', '?'=>'n', 'ð'=>'o', 'ò'=>'o', 'ó'=>'o', 'ô'=>'o', 'õ'=>'o', 'ö'=>'o', 'o'=>'o', 'o'=>'o', 'o'=>'o', 'œ'=>'o', 'ø'=>'o', 'r'=>'r', 'r'=>'r', 's'=>'s', 's'=>'s', 's'=>'s', 'š'=>'s', '?'=>'s', 't'=>'t', 't'=>'t', 't'=>'t', 'ù'=>'u', 'ú'=>'u', 'û'=>'u', 'ü'=>'u', 'u'=>'u', 'u'=>'u', 'u'=>'u', 'u'=>'u', 'u'=>'u', 'u'=>'u', 'w'=>'w', 'ý'=>'y', 'ÿ'=>'y', 'y'=>'y', 'z'=>'z', 'z'=>'z', 'ž'=>'z'
            ));
            return $str;
        }       

        protected function removeAccents($str){

            $text = mb_strtolower($str, 'UTF-8');
            $text = str_replace(
                array(
                    'à', 'â', 'ä', 'á', 'ã', 'å',
                    'î', 'ï', 'ì', 'í',
                    'ô', 'ö', 'ò', 'ó', 'õ', 'ø',
                    'ù', 'û', 'ü', 'ú',
                    'é', 'è', 'ê', 'ë',
                    'ç', 'ÿ', 'ñ',
                ),
                array(
                    'a', 'a', 'a', 'a', 'a', 'a',
                    'i', 'i', 'i', 'i',
                    'o', 'o', 'o', 'o', 'o', 'o',
                    'u', 'u', 'u', 'u',
                    'e', 'e', 'e', 'e',
                    'c', 'y', 'n',
                ),
                $text
            );

            return $text;
        }

        protected function sanitize($str){
            return $this->removeAccents(str_replace(" ","_",$str));
        }

    }

?>