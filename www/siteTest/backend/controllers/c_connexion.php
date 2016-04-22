<?php

class c_connexion extends Controller {

    protected $models = array('m_user');
    protected $layout = 'default';
    protected $usedModels = array();

    // Cryptage / Decryptage
    private static $cipher  = MCRYPT_RIJNDAEL_256;
    private static $key     = 'comment est votre blanquette';
    private static $mode    = 'cbc';


    public function connexion($datas){

        $login = $datas['login'];
        $mdp = $this->crypt($datas['password']);

        return $this->getModel('user')->getUsers($login, $mdp);
        
    }

    public function getCrypt($datas){   
        return $this->crypt($datas);
        
    }

    // Permet de crypter les mot de passe
    protected static function crypt($data){
        $keyHash = md5(self::$key);
        $key = substr($keyHash, 0,   mcrypt_get_key_size(self::$cipher, self::$mode) );
        $iv  = substr($keyHash, 0, mcrypt_get_block_size(self::$cipher, self::$mode) );

        $data = mcrypt_encrypt(self::$cipher, $key, $data, self::$mode, $iv);
        return base64_encode($data);
    }
    // Permet de décrypter les mdp encoder par la function ci-dessus
    protected static function decrypt($data){

        $keyHash = md5(self::$key);

        $key = substr($keyHash, 0,   mcrypt_get_key_size(self::$cipher, self::$mode) );
        $iv  = substr($keyHash, 0, mcrypt_get_block_size(self::$cipher, self::$mode) );

        $data = base64_decode($data);
        $data = mcrypt_decrypt(self::$cipher, $key, $data, self::$mode, $iv);

        return rtrim($data);
    }



















    public function disconnect(){
        session_destroy();        
        header('location:'.WEBROOT);
    }

    public function reset(){
        $this->header = $this->loadHeader();
        if(empty($_POST['id']) && empty($_POST['Submit'])){
            $this->render('v_reset');
        } else if(empty($_POST['id']) && !empty($_POST['Submit'])){
            $this->render('v_reset');
            echo("<script>alert('Le login n\'a pas été renseigner');</script>");
        } else{

            $login = $_POST['id'];
            if(!empty($login)){
                $id = $this->getModel('user')->verifUser($login);
                if(!empty($id)) {
                    $newPass = $this->generatePass(8);
                    $cryptPass = $this->crypt($newPass);
                    $mail = $this->getModel('user')->getMail($id[0]->id);
                    ini_set('sendmail_from', "admin@adnfc.fr");
                    mail($mail[0]->mail,"Réinitialisation de mot de passe","Votre mot de passe à correctement été réinitialisé. Voici votre nouveau mot de passe : ".$newPass);
                    $this->getModel('user')->changePass($id[0]->id, $cryptPass);
                    header('location:'.WEBROOT.'administration/connexion');
                    //echo("<script>alert('Mot de passe réinitialisé avec succès !');</script>");
                }else{
                    $this->render('v_reset');
                    echo("<script>alert('Il n\'existe pas de compte associé à ce login.');</script>");
                }
            }
        }
    }

    private function generatePass($l){
        // initialiser la variable $mdp
        $mdp = "";

        // Définir tout les caractères possibles dans le mot de passe,
        // Il est possible de rajouter des voyelles ou bien des caractères spéciaux
        $possible = "2346789bcdfghjkmnpqrtvwxyzBCDFGHJKLMNPQRTVWXYZ@aeiouyAEIOUY";

        // obtenir le nombre de caractères dans la chaîne précédente
        // cette valeur sera utilisé plus tard
        $longueurMax = strlen($possible);

        if ($l > $longueurMax) {
            $l = $longueurMax;
        }

        // initialiser le compteur
        $i = 0;

        // ajouter un caractère aléatoire à $mdp jusqu'à ce que $longueur soit atteint
        while ($i < $l) {
            // prendre un caractère aléatoire
            $caractere = substr($possible, mt_rand(0, $longueurMax-1), 1);

            // vérifier si le caractère est déjà utilisé dans $mdp
            if (!strstr($mdp, $caractere)) {
                // Si non, ajouter le caractère à $mdp et augmenter le compteur
                $mdp .= $caractere;
                $i++;
            }
        }

        // retourner le résultat final
        return $mdp;
    }

    private function changePass(){
        if(!empty($datas['pass1']) && !empty($datas['pass2']) && ($datas['pass1'] == $datas['pass2'])){
            // Fonction qui insère dans la bdd le mdp de l'user prenant 2 params : le pass et l'id de l'user en session.
        }
    }

    

}