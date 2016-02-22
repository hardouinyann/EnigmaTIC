<?php if ( !function_exists('dynamic_sidebar') || !dynamic_sidebar() ) : ?>
	<img src="<?php echo home_url( '/wp-content/themes/blog-wprd/images/grand-pere.png' ); ?>" alt="Portrait du Grand-père" />

	<p>Je m'appelle Léopold, et je suis un scientifique passionné à la retraite. Depuis tout jeune, le domaine de l'informatique me fascine, et j'y ai consacré ma vie.<br/><br/>Ce carnet de bord a pour objectif de vous présenter plusieurs articles sur mon sujet de recherche : l'évolution des interfaces graphiques au cours de ces dernières années. J'espère ainsi vous permettre d'enrichir vos connaissances, et d'éveiller votre curiosité !<br/><br/></p>
	<p style="text-align: center;"><strong><?php if (function_exists('users_online')): ?><?php users_online(); ?><?php endif; ?></strong></p>

<?php endif; ?>