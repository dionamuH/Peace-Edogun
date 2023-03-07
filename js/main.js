/*
	Directive by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			wide:      [ '1281px',  '1680px' ],
			normal:    [ '981px',   '1280px' ],
			narrow:    [ '841px',   '980px'  ],
			narrower:  [ '737px',   '840px'  ],
			mobile:    [ '481px',   '736px'  ],
			mobilep:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

		var typing = new Typed (".typing", {

			strings : ["Data Scientist","Data Analyst","Machine Learning Engineer", "AI and Robotics Design Enthusiast", "Human"],
			typeSpeed:200,
			backSpeed: 90,
			loop: true
		}); 
		
		window.onscroll = function(){
		
			var navbar = document.getElementById("navbar");
			
			if(window.scrollY > 55){
				navbar.classList.add("sticky");
			}
			else{
				navbar.classList.remove("sticky");
			}
		};

})(jQuery);