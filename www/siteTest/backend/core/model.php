<?php


    class Model{

        protected $table;

        private static $connexion;

        public function __construct(){
            if(empty(self::$connexion)){
                try{
                    self::$connexion = new PDO(
                        "mysql:host=".MYSQL_HOST.";port=".MYSQL_PORT.";dbname=".MYSQL_DB,
                        MYSQL_LOGIN,
                        MYSQL_PWD,
                        array(
                            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                            PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8",
                            PDO::ATTR_DEFAULT_FETCH_MODE =>PDO::FETCH_OBJ
                        )
                    );
                }
                catch(Exception $error){
                    die('FAILED TO CONNECT TO DATABASE : '.$error->getMessage());
                }
            }
        }

        protected function request($sql,$update=false){
            //echo $sql.'<br>';
            //echo "<pre>";print_r(debug_backtrace()/*[count(debug_backtrace())-1]['file']*/);echo"</pre>";
            try{
                $request = self::$connexion->prepare($sql);
                $request->execute();

                if(empty($update)) return $request->fetchAll();
            }
            catch(Exception $error){
                die('REQUEST FAILED : '.$error->getMessage());
            }
        }

        protected function find($info = array()){

            $condition = isset($info["condition"]) ? $info["condition"] : "1=1";
            $infoToGet = isset($info["infoToGet"]) ? $info["infoToGet"] : "*";
            $limit = isset($info["limit"]) ? 'LIMIT '. $info["limit"] : "";
            $order = isset($info["order"]) ?  $info["order"] : $this->table.".id_".$this->table." DESC";
            $group = isset($info["group"]) ?  " GROUP BY ".$info["group"] : "";

            //echo "<pre>";print_r(debug_backtrace());echo"</pre>";
            //echo "<meta charset='UTF-8'><pre>";print_r("SELECT ".$infoToGet." FROM ".$this->table.$otherTable.$join." WHERE ".$condition.$group." ORDER BY ".$order." ".$limit);echo "</pre>";
            return $this->request("SELECT ".$infoToGet." FROM ".$this->table." WHERE ".$condition.$group." ORDER BY ".$order." ".$limit);
        }

        protected function insert($data = array()){
            $fields = '';
            $values = '';
            foreach($data as $field=>$value){
                $fields .= '`'.$field.'`,';
                if(strtolower($value)=='null'){
                    $values .= 'DEFAULT,';
                }elseif(strtolower($value)=='now') {
                    $values .= 'NOW(),';
                }
                else{
                    $values .= '"'.addslashes($value).'",';
                }

            }

            $sql = "INSERT INTO ".$this->table."(".substr($fields,0,-1).") VALUES (".substr($values,0,-1).");";
            //echo $sql.'<br>';
            try{
                $request = self::$connexion->prepare($sql);
                $request->execute();
                return self::$connexion->lastInsertId();
            }
            catch(Exception $error){
                die('FAILED INSERT : '.$error->getMessage());
            }

        }

        protected function update($data = array(),$params = array(),$otherTables = false){

            $tables ="";
            if(!empty($otherTables)){

                foreach($otherTables as $table){
                    $tables .= ",".$table." ";
                }
            }

            $values = '';
           
            $condition = (!empty($params['condition'])) ? $params['condition'] : 'id='.$params['id'];

            $sql = "UPDATE ".$this->table.$tables." SET ".substr($values,0,-1)." WHERE ".$condition;
            //echo "<meta charset='UTF-8'>UPDATE ".$this->table.$tables." SET ".substr($values,0,-1)." WHERE ".$condition.'<br>'.'<br>';
            try{
                $request = self::$connexion->prepare($sql);
                $request->execute();
            }
            catch(Exception $error){
                die('FAILED UPDATE : '.$error->getMessage());
            }

        }

        public function deleteRow($params = array()){

            $condition = '' ;
            foreach($params as $f=>$v){
                $condition .= $f.'='.$v.' AND ';
            }
            try{
                //echo "DELETE FROM ".$this->table." WHERE ".substr($condition,0,-4)."<br>";
                $request = self::$connexion->prepare("DELETE FROM ".$this->table." WHERE ".substr($condition,0,-4));
                $request->execute();
            }
            catch(Exception $error){
                die('FAILED DELETE ROW : '.$error->getMessage());
            }
        }

        protected function emptyTable(){
            try{
                $request = self::$connexion->prepare("TRUNCATE ".$this->table);
                $request->execute();
            }
            catch(Exception $error){
                die('FAILED EMPTY TABLE : '.$error->getMessage());
            }
        }

        protected function alterTable(){
            /*
             *
             */
        }

        protected function debug($arrayToDebug = array(),$array_name= false){
            $title = (!empty($array_name)) ? $array_name:"" ;
            if(getType($arrayToDebug)=="array") ksort($arrayToDebug);
            echo "<meta charset='UTF-8'><h1 style='margin-bottom:-35px;'>".$title."</h1><pre style='margin:50px;background-color:#AEAEAE;border:solid 2px red'>";print_r($arrayToDebug);echo"</pre><br>";
        }
    }

?>