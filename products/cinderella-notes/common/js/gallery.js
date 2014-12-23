jQuery(function($){
	$("#content_charactor_image img").bind("load",function(){
		var ImgHeight = $(this).height();
		$('#photo').css('height',ImgHeight);
	});
	
	$('#content_charactor_image_navigation a').click(function(){
		if($(this).hasClass('over') == false){
			$('#content_charactor_image_navigation a').removeClass('over');
			$(this).addClass('over');
			$('#content_charactor_image img').hide().attr('src',$(this).attr('href')).fadeIn();
		};
		return false;
	}).filter(':eq(0)').click();
});
