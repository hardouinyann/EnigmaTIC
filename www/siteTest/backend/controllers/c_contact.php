<?php

class c_contact extends Controller{

        protected $layout = 'contact';
        protected $usedModels = array('config');
        protected $TITRE = 'Contact';

        public function index($fixedObject = false){

            $desc = $this->getModel('config')->get('Description-contact');
            $this->desc = (!empty($desc)) ? $desc[0]->value : "";

            $this->header = $this->loadHeader();
            $this->menuCategories = $this->getModel('categories')->getAll();
            $this->objects = $this->getModel('config')->get('contact_form%');

            if($fixedObject){
                if($fixedObject=='newsletter'){
                    $this->fixed = true;
                }else{
                    $this->fixed = false; // Evite une notice sur la page contact
                }
                foreach($this->objects as $oneMailObject){
                    if(strtolower($oneMailObject->others)==strtolower($fixedObject)) $this->objects = array($oneMailObject);
                }
            }

            $this->render('v_contact');
            if(!empty($this->datas) && $fixedObject != 'newsletter'){

                $datas = $this->datas;

                $destinataire = $this->getModel('config')->get('contact-mail')[0]->value; //email de la bdd dans config
                $titre = $datas['object'];
                $titre .= (!empty($datas['object_label'])) ? " : ".$datas['object_label'] : "";
                if(!empty($datas['content'])) $message = $datas['content'];
                //$this->debug($datas);
                //if(!empty($datas['mail'])) ini_set('sendmail_from',$datas['mail']);
                //$this->debug(ini_get_all());
                $message = "Adresse e-mail de l'emetteur : ".$datas['mail']." \n ".$message;
                if(!empty($datas['mail']) && !empty($datas['content'])){
                    mail($destinataire, $titre, $message);
                    mail("contact@adnfc.fr", $titre,$message);
                }

            }

            if(!empty($this->datas) && !empty($fixedObject) && $fixedObject == 'newsletter'){
	            //$this->contactID = null;
                include("mailjet/mailjetapi.php");

                $this->contactID = $this->createContact($this->datas['mail'])->Data[0]->ID;
                $this->addContactToList($this->contactID, $listID = 2);
                mail("jonathan.maurice7@gmail.com","test newsletter","Test de la newsletter : ".$this->datas['mail'].".");
                

            }
        }

        private function addContactToList($contactID, $listID) {

            $mj = new Mailjet();
            $params = array(
                "method" => "POST",
                "ContactID" => $contactID,
                "ListID" => $listID,
                "IsActive" => "True"
            );

            $result = $mj->listrecipient($params);

            /*if ($mj->_response_code == 201)
                echo "success - contact ".$contactID." added to the list ".$listID;
            else
                echo "error - ".$mj->_response_code;
*/
            return $result;
        }

        private function getList($listID = 2) {


            $mj = new Mailjet();
            $params = array(
                "method" => "VIEW",
                "ID" => $listID
            );

            $result = $mj->contactslist($params);
            //if(!empty($_SESSION['id'])) $this->debug($result,"getlist");

           /* if ($mj->_response_code == 200)
                echo "success - got list ".$listID;
            else
                echo "error - ".$mj->_response_code;
*/
            return $result;

        }

        private function createContact($Cemail) {

            $mj = new Mailjet();

            $params = array(
                "method" => "POST",
                "Email" => $Cemail
            );

            $result = $mj->contact($params);
/*
            if ($mj->_response_code == 201)
                echo "success - created contact ".$Cemail;
            else
                echo "error - ".$mj->_response_code;
*/
            return $result;
        }

        private function listContacts(){
            $mj = new Mailjet();
            $result = $mj->contact();
/*
            if ($mj->_response_code == 200)
                echo "success - listed contacts";
            else
                echo "error - ".$mj->_response_code;
*/
            return $result;
        }


        private function loadHeader(){
            return $this->getModel('categories')->getCategorieTitleCatch(5);
        }
    }

?>