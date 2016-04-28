<?php

    class m_user extends Model{

        protected $table = 'utilisateur';

        public function getUsers($mail, $password){
            return $this->find(array(
                'condition' => "mail='$mail' AND password='$password'"
            ));
        }

        public function checkForMatch($nomChamp, $valeur){
            return $this->find(array(
                'condition' => "$nomChamp='$valeur'"
            ));
        }

        public function createUser($post){
            return $this->insert($post);
        }

        public function updateDejaVuBureau($id){
            return $this->update(array(
                'dial_bureau1_vu' => '1'
            ),array(
                'condition' => 'id_utilisateur=$id'
            ));
        }

        public function getDejaVuBureau($id){
            return $this->find(array(
                'infoToGet' => 'dial_bureau1_vu',            
                'condition' => "id_utilisateur=$id"
            ));
        }

    }