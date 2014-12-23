$(function(){
	$('#container').fadeMover();
});


(function($){
	$.fn.fadeMover = function(options) {
        var defaults = {
            'outSpeed': 400,
            'inSpeed': 400,
			'effectType': 1, // fadeIn only 2, fadeOut only 3
			'nofadeOut' : 'nonmover' //fadeOut no thx (class name)
        };
        var setting = $.extend(defaults, options);
        this.each(function() {
			var pel = this;
			if(setting.effectType == 1 || setting.effectType == 2) {
				$(pel).css("opacity", 0).animate({opacity: 1}, setting.inSpeed);
			}
			if(setting.effectType == 1 || setting.effectType == 3) {
				$('a').click(function(event) {
					var moveUrl = $(this).attr("href");
					if(!$(this).hasClass(setting.nofadeOut) && moveUrl.charAt(0) != "#"){
						event.preventDefault();
						$(pel).animate({"opacity": 0}, setting.outSpeed, function(){
							location.href = moveUrl;
						});
					}
				});
			}
		});
		return this;
	}
	window.onunload = function () {};
})(jQuery);