window.onload = function () {
    
}
$(function () {
    $(".page_left").on("click", function () {
        $(".page p").css("background", "white");
        $(".page p a").css("color", "black");
        $(".page_left").css("background", "#41826e");
        $(".page_left a").css("color", "white");
    })
    $(".page_middle").on("click", function () {
        $(".page p").css("background", "white");
        $(".page p a").css("color", "black");
        $(".page_middle").css("background", "#41826e");
        $(".page_middle a").css("color", "white");
    })
    $(".page_right").on("click", function () {
        $(".page p").css("background", "white");
        $(".page p a").css("color", "black");
        $(".page_right").css("background", "#41826e");
        $(".page_right a").css("color", "white");
    })

    $(".whyText1").animate({
        "opacity": "1"
    },1000)
    $(".whyText2").delay(1000).animate({
        "opacity": "1"
    },1000)
    
    $(".whyText3").delay(2000).animate({
        "opacity": "1"
    },1000)
})