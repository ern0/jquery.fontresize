// jquery.fontresize.js - 2014.02.23 - ern0 at linkbroker.hu

(function($) {
	$.fontresize = function() {
	
		$(document).ready(function(refw) {
		
			var wiw = $(window).width();
			$("body").find("*").each(function() {

				var fs = parseFloat($(this).css("font-size"));
				if (!isNaN(fs)) {
					$(this).data("font",fs);
					var factor = wiw / 800;				
					$(this).css("font-size",(fs * factor) + "px");					
				} // if not nan
				
			}); // each elm
			
		}); // ready()
		
		
		$(window).resize(function() {

			var wiw = $(window).width();
			$("body").find("*").each(function() {
			
			var fs = $(this).data("font");
				if (typeof(fs) != "undefined") {
					var factor = wiw / 800;				
					$(this).css("font-size",(fs * factor) + "px");
				} // if not undef
				
			}); // each elm
			
		}); // resize()
	
	}; // $.fontresize()
}(jQuery));
