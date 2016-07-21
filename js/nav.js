$("#search-hidden").click(function(){
    if ($("#search").css("display")=="none") {
        $("#search").fadeIn("slow");
    } else {
        $("#search").fadeOut("slow");
    }
})
$("#search").click(function(){
	$("#search").removeClass("search");
	$("#search").addClass("search-active");
});
$("#search").blur(function(){
	$("#search").removeClass("search-active");
	$("#search").addClass("search");
	$("#search").fadeOut("slow");
});
$(".userMo").mouseover(function(){
    $(".user-information").show();
});
$(".userMo").mouseout(function(){
    $(".user-information").hide();
});
