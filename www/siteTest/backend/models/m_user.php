<?php

    class m_user extends Model{

        protected $table = 'utilisateur';

        public function getUsers($mail, $password){
            return $this->find(array(
                'condition' => "mail='$mail' AND password='$password'"
            ));
        }

        public function checkForMatch($mail, $login){
            return $this->find(array(
                'condition' => "login='$login' OR mail='$mail'"
            ));
        }

        public function createUser($post){
            return $this->insert($post);
        }

    }