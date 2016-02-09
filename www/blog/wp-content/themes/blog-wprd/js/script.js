
	$(document).ready(setup);

	function setup () {
    	$('#comments h2').click(afficherCacherCommentForm);
    	$('.top').click(backToTop);
	}

	function afficherCacherCommentForm () {
		if($('#comments .add-comment').hasClass('active')) {
			$('#comments h2 .fa-chevron-down').hide();
			$('#comments h2 .fa-chevron-right').show();

			$('#comments .add-comment').removeClass('active');
			$('#comments .add-comment').slideUp();
		}else {
			$('#comments .add-comment').slideDown();
			$('#comments .add-comment').addClass('active');

			$('#comments h2 .fa-chevron-down').show();
			$('#comments h2 .fa-chevron-right').hide();
		}
	}

	function backToTop () {
		$("html, body").animate({ scrollTop: 0 }, 600);
		return false;
	}
