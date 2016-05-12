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

                'condition' => "id_utilisateur=$id"

            ));

        }



        public function getDejaVuBureau($id){

            return $this->find(array(

                'infoToGet' => 'dial_bureau1_vu',            

                'condition' => "id_utilisateur=$id"

            ));

        }

        public function getShellFini($id){
            return $this->find(array(
                'infoToGet' => 'dial_shell_fin',            
                'condition' => "id_utilisateur=$id"
            ));
        }

        public function getNbMessageRecup($id){
            return $this->find(array(
                'infoToGet' => 'nb_message_recup',            
                'condition' => "id_utilisateur=$id"
            ));
        }

        public function updateNbMessageRecup($id){
            $nbMessageRecupere = $this->find(array(
                'infoToGet' => 'nb_message_recup',            
                'condition' => "id_utilisateur=$id"
            ));
            if(!empty($nbMessageRecupere)) $nbMessage = ($nbMessageRecupere[0]->nb_message_recup);
            $updateNbMessage = $nbMessage + 1;
            return $this->update(array(
                'nb_message_recup' => $updateNbMessage
            ),array(
                'condition' => "id_utilisateur=$id"
            ));
        }

        public function updateProgression($id){
            $progression = $this->find(array(
                'infoToGet' => 'progression',            
                'condition' => "id_utilisateur=$id"
            ));
            if(!empty($progression)) $progressionUser = ($progression[0]->progression);
            $newProgression = $progressionUser + 1;
            return $this->update(array(
                'progression' => $newProgression
            ),array(
                'condition' => "id_utilisateur=$id"
            ));
        }

        public function updateShellCinematique($id){

            return $this->update(array(

                'dial_shell_fin' => '1'

            ),array(

                'condition' => "id_utilisateur=$id"

            ));

        }

        public function updateShellFini($id){

            return $this->update(array(

                'dial_shell_fin' => '0'

            ),array(

                'condition' => "id_utilisateur=$id"

            ));

        }

       public function getUserBlocNote($id_user){
            return $this->find(array(
                'infoToGet' => 'bloc_note',
                'condition' => "id_utilisateur=$id_user"
            ));
        }

        public function updateBlocNote($id, $text){
            return $this->update(array(
                'bloc_note' => '"'.$text.'"'
            ), array(
                'condition' => "id_utilisateur=$id"
            ));
        }





    }