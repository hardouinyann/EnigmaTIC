<?php
if ( function_exists('register_sidebar') )
    register_sidebar(array(
        'before_widget' => '',
        'after_widget' => '',
        'before_title' => '<h3>',
        'after_title' => '</h3>',
    ));

$themecolors = array(
	'bg' => 'fff',
	'border' => '777',
	'text' => '1c1c1c',
	'link' => '004276',
);

/*
	 * Enable support for Post Thumbnails on posts and pages.
	 *
	 * @link http://codex.wordpress.org/Function_Reference/add_theme_support#Post_Thumbnails
	 */
	add_theme_support( 'post-thumbnails' );
	add_image_size( 'normal-post' , 785, 9999);

function wprd_wp_title( $title, $sep ) {
	global $paged, $page;

	if ( is_feed() ) {
		return $title;
	}

	// Add the site name.
	$title .= get_bloginfo( 'name', 'display' );

	// Add the site description for the home/front page.
	$site_description = get_bloginfo( 'description', 'display' );
	if ( $site_description && ( is_home() || is_front_page() ) ) {
		$title = "$title $sep $site_description";
	}

	// Add a page number if necessary.
	if ( ( $paged >= 2 || $page >= 2 ) && ! is_404() ) {
		$title = "$title $sep " . sprintf( __( 'Page %s', 'twentyfourteen' ), max( $paged, $page ) );
	}

	return $title;
}
add_filter( 'wp_title', 'wprd_wp_title', 10, 2 );

function tj_comment_class( $classname='' ) {
	global $comment, $post;

	$c = array();	
	if ($classname)
		$c[] = $classname;

	// Collects the comment type (comment, trackback),
	$c[] = $comment->comment_type;

	// If the comment author has an id (registered), then print the log in name
	if ( $comment->user_id > 0 ) {
		$user = get_userdata($comment->user_id);

		// For all registered users, 'byuser'; to specificy the registered user, 'commentauthor+[log in name]'
		$c[] = "byuser comment-author-" . sanitize_title_with_dashes(strtolower($user->user_login));
		// For comment authors who are the author of the post
		if ( $comment->user_id === $post->post_author )
			$c[] = 'bypostauthor';
	}

	// Separates classes with a single space, collates classes for comment LI
	return join(' ', apply_filters('comment_class', $c));
}

// Limiter le nombre de caractère dans le titre d'un l'article
function shortened_title() {
	$original_title = get_the_title();
	$title = html_entity_decode($original_title, ENT_QUOTES, "UTF-8");
	// indiquer le nombre de caratère
	$limit = "100";
	// fin du titre couper
	$ending="...";
	if(strlen($title) >= ($limit+3)) {
	$title = substr($title, 0, $limit) . $ending; }
	echo $title;
}

function new_excerpt_more( $excerpt ) {
	return str_replace( '[...]', '...', $excerpt );
}
add_filter( 'wp_trim_excerpt', 'new_excerpt_more' );


function clea_base_custom_wp_trim_excerpt( $text ) {
 
	$raw_excerpt = $text;
 
	if ( '' == $text ) {
		//Retrieve the post content. 
		$text = get_the_content( '' );
	 
		//Delete all shortcode tags from the content. 
		$text = strip_shortcodes( $text );
	 
		$text = apply_filters( 'the_content', $text );
		 
		$allowed_tags = '<p>,<a>,<em>,<strong>'; /*** MODIFY THIS. Add the allowed HTML tags separated by a comma.***/
		$text = strip_tags( $text, $allowed_tags );
		 
		$excerpt_word_count = 90; /*** MODIFY THIS. change the excerpt word count to any integer you like.***/
		$excerpt_length = apply_filters( 'excerpt_length', $excerpt_word_count ); 
		 
		$excerpt_end = '&#91;...&#93;'; /*** MODIFY THIS. change the excerpt endind to '[...]'.***/
		$excerpt_more = apply_filters( 'excerpt_more', ' ' . $excerpt_end );
		 
		$words = preg_split( "/[\t ]+/", $text, $excerpt_length + 1, PREG_SPLIT_NO_EMPTY );
		if ( count($words) > $excerpt_length ) {
			array_pop( $words );
			$text = implode( ' ', $words );
			$text = $text . $excerpt_more;
		} else {
			$text = implode( ' ', $words );
		}
	}
	return apply_filters( 'wp_trim_excerpt', $text, $raw_excerpt );
 
}

// remove the original WP filter, which trims all excerpts to 55 words and 0 html tags
remove_filter('get_the_excerpt', 'wp_trim_excerpt');
 
// trim excerpt but don't trim html tags
add_filter('get_the_excerpt', 'clea_base_custom_wp_trim_excerpt');

add_theme_support( 'post-thumbnails' ); 
 
?>
