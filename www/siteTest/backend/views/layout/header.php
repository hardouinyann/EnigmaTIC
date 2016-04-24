<!-- Elements de navigation fixe (menu, réseaux sociaux, son, plein écran, etc...) -->
<div class="menu">
		<a><i class="fa fa-bars open-menu"></i></a>
		<a href="https://www.facebook.com/projetenigmatic/" target="_blank"><i class="fa fa-facebook"></i></a>
		<a href="https://twitter.com/ThomasEnigmaTIC" target="_blank"><i class="fa fa-twitter"></i></a>
</div>
<div id="options">
	<i class="fa fa-arrows-alt" aria-hidden="true"></i>
	<i class="fa fa-user"></i><?php if(!empty($_SESSION['user'])) echo $_SESSION['user']->login ?>
	<i class="fa fa-question-circle"></i>
	<i class="fa fa-volume-up"></i>
	<i class="fa fa-volume-off"></i>
</div>