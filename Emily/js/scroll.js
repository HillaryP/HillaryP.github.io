$(document).ready(function() {
	$('.travel_pic').css('height',$('.travel_pic').innerWidth());
	$('#nav_main').hide();
	$( "#nav_main").slideUp( 300 ).delay( 800 ).fadeIn( 1500 );
	$('#nav_bar').hide();

	$('a[href*=#]').each(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
			&& location.hostname == this.hostname
			&& this.hash.replace(/#/,'') ) {
			var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
			var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
			if ($target) {
				var targetOffset = $target.offset().top;
				$(this).click(function() {
					$("#nav li a").removeClass("active");
					$(this).addClass('active');
					$('html, body').animate({scrollTop: targetOffset + 20}, 1000);
					return false;
				});
			}
		}
		var my_div = $("#page2");
		var div_three = $("#page3");
		var div_top = my_div.offset().top;
		var div_three_top = div_three.offset().top;
		var hasPie = false;
		var hasMarkers = false;

		$(document).scroll(function() {
            if (div_top <= $(document).scrollTop() && !hasPie) {
            	hasPie = true;
                createPie();
            } else if (div_three_top <= $(document).scrollTop() && !hasMarkers) {
            	hasMarkers = true;
            	addMarkers();
            }
        });
	});
});