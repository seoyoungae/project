const menuA = {
    "homeMenuA": ["Eco Friend", "캠페인", "제품", "멤버십", "고객센터"],
    "TitleA": ["친환경", "탄소중립"],
};
let menu, main_menu, sub_menu, menu_bar, menu_m;
let menu_m_close, menu_home, menu_sub_m_home;
// let menu_m_home
let w;

$(function () {
    
    main_menu = document.querySelector(".menu");


    menu = document.querySelector(".menu").getElementsByTagName("div");
    for (i = 0; i < menuA.homeMenuA.length; i++) {
        menu[i].innerHTML = menuA.homeMenuA[i];
    }

    menu[2].addEventListener("click", function () {
        window.location.href = "product.html"
    })

    main_menu = document.querySelector(".menu");
    sub_menu = document.querySelector(".sub_menu");
    w = window.innerWidth;

    menu_bar = document.querySelector(".menu_bar_m");
    menu_m = document.querySelector(".side_menu_m");
    menu_bar.addEventListener("click", function () {
        menu_m.style.left = "0px"
        $(".side_user_m").css("right", "-70%");

    })
    menu_m_close = document.querySelector(".menu_m_close");
    menu_m_close.addEventListener("click", function () {
        menu_m.style.left = "-70%";
    })

    $(".user_m").on("click", function () {
        $(".side_user_m").css("right", "0px");
        menu_m.style.left = "-70%";

    })
    $(".user_close").on("click", function(){
        $(".side_user_m").css("right", "-70%");
    })

    menu_home = document.querySelector(".home");
    menu_home.addEventListener("click", function () {
        window.location.href = "index.html"
    })

    menu_sub_m_home = document.querySelector(".sub_m_home");
    menu_sub_m_home.addEventListener("click", function () {
        window.location.href = "index.html"
    })

    $(".sub").on("mouseover", function () {
        n = $(this).index();
        console.log(n);
        $($(".menu div")[n]).css("border-bottom", "4px solid black")
    })
    $(".sub").on("mouseout", function () {
        n = $(this).index();
        console.log(n);
        $($(".menu div")[n]).css("border-bottom", "0px solid black")
    })

    $(".main_menu").on("mouseover", function () {
        $(this).css("border-bottom", "4px solid black")
    })
    $(".main_menu").on("mouseout", function () {
        $(this).css("border-bottom", "0px solid black")
    })
    $(".sub_m").hide();
    $(".menu_title").on("click", function () {
        // m=($(this).index())-1;
        // $(".sub_m:eq("+m+")").slideDown();
        if ($(this).next().css("display") == "none") {
            $(".sub_m").slideUp();
        }
        $(this).next().slideDown();
    })

    $(".up").on("click", function () {
        window.scrollTo(0, 0);
    })

})