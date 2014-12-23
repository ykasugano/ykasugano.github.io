/* sample01
======================================== */
$(function() {
	var nav = $('a');
	nav.hover(
		function(){
			$(this).fadeTo(200,0.5);
		},
		function () {
			$(this).fadeTo(200,1);
		}
	);
});
