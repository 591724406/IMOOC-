var detail = $(".detail");
for(i=0;i<$(".detail-text").length;i++){
	detail[i].onmouseover = function(){
		$(this).find(".detail-text").removeClass("overflow");
	}
	detail[i].onmouseout = function(){
		$(".detail").find(".detail-text").addClass("overflow");
	}
}