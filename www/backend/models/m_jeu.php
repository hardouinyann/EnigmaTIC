<?php

    class m_jeu extends Model{

        protected $table = 'jeu';

        public function getFic($id_jeu){
            return $this->find(array(
                'condition' => "id_jeu='$id_jeu'"
            ));
        }

        public function getGameName($id){
        	return $this->find(array(
        		'infoToGet' => 'nom',
        		'condition' => "id_jeu='$id'"
        	));
        }

        public function gameComplete($datas,$table){
        	return $this->insert($datas,$table);            
        }

        public function getIdJeux(){
            return $this->find(array(
                'infoToGet' => 'id_jeu'
            ));
        }

        public function getSucces($id_user){
            return $this->find(array(
                'jointure' =>"NATURAL JOIN partie",
                'condition' => "id_utilisateur=$id_user AND jeu_valide=1"
            ));
        }

    }