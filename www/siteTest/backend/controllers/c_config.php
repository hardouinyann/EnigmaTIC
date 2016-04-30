getPublicationPics<?php
	
	class c_config extends Controller{
		        
		private function admin(){
			
			$this->layout = 'admin';
            $this->render('v_config');
            
        }
        
        
	}