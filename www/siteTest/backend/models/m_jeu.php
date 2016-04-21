<?php

    class m_jeu extends Model{

        protected $table = 'jeu';

        public function getFic($id_jeu){
            return $this->find(array(
                'condition' => "id_jeu='$id_jeu'"
            ));
        }

    }