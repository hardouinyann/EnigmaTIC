<!DOCTYPE html>
<html>
    <head>
        <title><?php wp_title( " - ", true, 'right' ); ?></title>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<meta name="description" content="Découvrez le carnet de Bord de Leopold, un scientifique à la retraite passioné par les interfaces graphiques et les expériences scientifiques en tout genre. Ce site fait aussi office de blog pour le projet Enigma'TIC." />
		<meta name="keywords" content="interfaces grapiques, enigmatic, enigma'tic, enigma'TIC, blog, evolution interface, evolution des interfaces graphiques, evolution interfaces numériques" />
		<meta name="generator" content="WordPress <?php bloginfo('version'); ?>" /> <!-- leave this for stats -->
		<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
		
		<link rel="alternate" type="application/rss+xml" title="<?php bloginfo('name'); ?> RSS Feed" href="<?php bloginfo('rss2_url'); ?>" />
		<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" />
		<link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>" type="text/css" media="screen" />
		<link rel="stylesheet" href="<?php echo home_url( '/wp-content/themes/blog-wprd/fonts/stylesheet.css' ); ?>" type="text/css" media="screen" />
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
		<link href='https://fonts.googleapis.com/css?family=Quicksand:400,300,700|Open+Sans:400,300,600,700|Roboto:400,300,500,700,300italic,400italic,100italic|Roboto+Condensed:400,700,300italic,300' rel='stylesheet' type='text/css'>
		<link rel="Shortcut Icon" href="<?php echo home_url( '/wp-content/themes/blog-wprd/images/vign.png' ); ?>" />
		<?php wp_head(); ?>
	</head>
<body>
<div id="fb-root"></div>
	<div id="top-bar"></div>
	<header>
		<div id="title"><span>Carnet de Bord</span>
			<a href="<?php echo home_url() ?>"><img class="logo-normal" src="<?php echo home_url( '/wp-content/themes/blog-wprd/images/logo-blog.svg' ); ?>" alt="Logo Enigma'TIC" /></a>
			<a href="<?php echo home_url() ?>"><img class="logo-resp" src="<?php echo home_url( '/wp-content/themes/blog-wprd/images/logo-resp-blog.svg' ); ?>" alt="Logo Enigma'TIC" /></a></div>
			<div id="search">
				<form method="get" action="<?php echo home_url( ); ?>"><input name="s" type="text" placeholder="Rechercher sur le blog..." size="30" /></form>
			</div>
	</header>