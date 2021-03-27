(function($){
    "use strict";
    
    $('body').scrollspy({ target: '#bs-example-navbar-collapse-1' });
    
    /* navOffset start */ 
    var nav = $('nav'),
        navOffset = nav.offset().top + nav.height() + 12,
        $window = $(window);
	   nav.height(nav.outerHeight());
    /* navOffset ends */
    
    //animation scroll js
	var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top-0
                }, 1500, 'easeInOutCubic');
                return false;
            }
        }
    });
    /* nav target ends */
    
    /* video popup start */   
    $("a.bla-1").YouTubePopUp();
    $("a.bla-2").YouTubePopUp( { autoplay: 0 } ); // Disable autoplay
    /* video popup ends */
    
    /* team slide start */  
    $('.team-slide').slick({
        slidesToShow: 4,
        arrows:false,
        dots: false,
        autoplay: true,
        responsive: [
            {
              breakpoint: 991,
              settings: {
                arrows: false,
                slidesToShow: 3
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                  arrows: true
              }
            }
        ]
    });
/* team slide ends */    
    /* client-slide start */    
    $('.client-slide').slick({
        slidesToShow: 2,
        arrows:false,
        dots: true,
        autoplay: true,
        responsive: [
            {
              breakpoint: 991,
              settings: {
                arrows: false,
                slidesToShow: 2
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1
              }
            }
        ]
    });
    /* client-slide ends */
    
    $('.sister-logo').slick({
        slidesToShow: 5,
        arrows:false,
        dots: false,
        autoplay: true,
        responsive: [
            {
              breakpoint: 991,
              settings: {
                arrows: false,
                slidesToShow: 4
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2
              }
            }
        ]
    });
    
    /* client-slide ends */
    
        $("#colorful").colorfulTab();    
        
        $("#colorful-elliptic").colorfulTab({
            theme: "elliptic"
        }); 
       
       $("#colorful-flatline").colorfulTab({
            theme: "flatline"
        });    
        
        $("#colorful-background-image").colorfulTab({
            theme: "flatline",
            backgroundImage: "true",
            overlayColor: "#002F68",
            overlayOpacity: "0.8"
        }); 
    
    /* classes day scedule/filter ends */
    var top_to_i= $('.top_to i');
    var $top_offset = 300;
    top_to_i.on('click',function(){
        html_body.animate({
            scrollTop:0
        },400);
    }); 
/* client-slide ends */     

	$window.on('scroll',function(){

		var scrollPos = $window.scrollTop();

		if( scrollPos >= navOffset ){
            setTimeout(function(){
                nav.addClass('navbar-position');
            }, 100);
			nav.addClass('navbar-top');
		} else{
			nav.removeClass('navbar-top navbar-position');
		}
        
        if( scrollPos >= $top_offset ){
            top_to_i.fadeIn();
        }else{
            top_to_i.fadeOut();
        }
        
        if( scrollPos >= 200 ){
            nav.addClass('sticky');
		} else{
			nav.removeClass('sticky');
		}
        
	});
    //parallax
    $window.stellar({
        horizontalScrolling: false,
        responsive: true,
    });
    
    var abs = { videoId: '8uXfZI5jpqA', start: 3 };
    $('#video_bg').tubular(abs);
    
})(jQuery);