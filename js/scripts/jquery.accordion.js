/*
* jquery.accordion 0.0.1
* Copyright (c) 2015 lengziyu http://lengziyu.com/
* Date: 2015-10-10
*/
;(function($){
	$.fn.accordion = function(opts){
		//Ĭ��ֵ
		var defaults = {
				max: "609px",
				min: "129px",
				speed: "1000"
		}

		var opts = $.extend(defaults, opts);

		this.each(function(){
			var t = $(this),
					m = t.children(),
					c = m.children();

			//�����¼�
			m.find(".active a").hide();
			m.on("mouseenter","li",function(){
				$(this).addClass('active')
							.animate({width:opts.max},opts.speed)
							.find("a").fadeOut()
							.parent().siblings().removeClass('active')
							.animate({width:opts.min},opts.speed)
							.find("a").show();
			})
		})
	}

})(jQuery);