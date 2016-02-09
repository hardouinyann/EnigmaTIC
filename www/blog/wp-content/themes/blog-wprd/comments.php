<?php // Do not delete these lines
	if ('comments.php' == basename($_SERVER['SCRIPT_FILENAME']))
		die ('Please do not load this page directly. Thanks!');

	if (!empty($post->post_password)) { // if there's a password
		if ($_COOKIE['wp-postpass_' . COOKIEHASH] != $post->post_password) {  // and it doesn't match the cookie
			?>

			<p>Ce post est protégé par un mot de passe. Entrez le mot de passe pour voir les commentaires.</p>

			<?php
			return;
		}
	}
?>

<!-- You can start editing here. -->
<div id="comments">
<h1><?php comments_number('Aucunes réponses', 'Une réponse', '% réponses' );?> sur l'article &#8220;<strong><?php the_title(); ?></strong>&#8221;</h1>
<?php if ($comments) : ?>
	<?php foreach ($comments as $comment) : ?>

		<div id="comment-<?php comment_ID() ?>">
			<div class="content-comment">
				<div class="comment-author"><strong><?php comment_author_link() ?></strong> 
					<date> a posté le <?php comment_date('j F Y') ?> <?php edit_comment_link('editer','&nbsp;&nbsp;',''); ?></date>
				</div>

				<p>
					<?php if ($comment->comment_approved == '0') : ?>
					<em>Votre commentaire est en cours de modération.</em>
					<?php endif; ?>

					<?php comment_text() ?>
			    </p>
			</div>
		</div>

	<?php endforeach; /* end for each comment */ ?>

 <?php else : // this is displayed if there are no comments so far ?>

	<?php if ('open' == $post->comment_status) : ?>
		<!-- If comments are open, but there are no comments. -->

	 <?php else : // comments are closed ?>
		<!-- If comments are closed. -->
		<p class="nocomments">Comments are closed.</p>


	<?php endif; ?>
<?php endif; ?>


<?php if ('open' == $post->comment_status) : ?>

<h2>Ajouter un commentaire <i class="fa fa-chevron-right"></i><i class="fa fa-chevron-down"></i></h2>

<div class="add-comment">

<?php if ( get_option('comment_registration') && !$user_ID ) : ?>
<p>You must be <a href="<?php echo get_option('siteurl'); ?>/wp-login.php?redirect_to=<?php echo urlencode(get_permalink()); ?>">logged in</a> to post a comment.</p>
<?php else : ?>

<form action="<?php echo get_option('siteurl'); ?>/wp-comments-post.php" method="post" id="commentform">
<?php if ( $user_ID ) : ?>
<p>Connecté en tant que <a href="<?php echo get_option('siteurl'); ?>/wp-admin/profile.php"><?php echo $user_identity; ?></a>. <a href="<?php echo get_option('siteurl'); ?>/wp-login.php?action=logout" title="Log out of this account">Se déconnecter &raquo;</a></p>

<?php else : ?>

<textarea name="comment" id="comment" cols="80%" rows="5" tabindex="4" placeholder="Tapez votre commentaire ici..."></textarea>
<div class="input-comment">
	<input type="text" name="email" id="email" placeholder="Email <?php if ($req) echo "(requis)"; ?>"value="<?php echo $comment_author_email; ?>" size="22" tabindex="2" />
	<input type="text" name="author" id="author" placeholder="Nom <?php if ($req) echo "(requis)"; ?>" value="<?php echo $comment_author; ?>" size="22" tabindex="1" />
	<input type="text" name="url" id="url" placeholder="Site web" value="<?php echo $comment_author_url; ?>" size="22" tabindex="3" />
	<input name="submit" type="submit" id="submit" tabindex="5" value="Envoyer le commentaire" />
<input type="hidden" name="comment_post_ID" value="<?php echo $id; ?>" />
</div>
<?php endif; ?>

<?php do_action('comment_form', $post->ID); ?>

</form>
</div>

<?php endif; // If registration required and not logged in ?>

<?php endif; // if you delete this the sky will fall on your head ?>
</div>