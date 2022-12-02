const dataA = {
    "bgImgA": ["environmental.jpg", "avenue.jpg"],
    "homeMenuA": ["친환경이란", "캠페인", "제품", "멤버십", "", "고객센터"]
}

window.onload = function () {
    main_menu = document.querySelector(".menu");
    sub_menu = document.querySelector(".sub_menu");
    w = window.innerWidth;

    menu = document.querySelector(".menu").getElementsByTagName("div");
    for (i = 0; i < dataA.homeMenuA.length; i++) {
        menu[i].innerHTML = dataA.homeMenuA[i];
    }

    menu_bar = document.querySelector(".menu_bar_m");
    menu_m = document.querySelector(".side_menu_m");
    menu_bar.addEventListener("click", function () {
        menu_m.style.height = "100%"
    })
    menu_m_close = document.querySelector(".menu_m_close");
    menu_m_close.addEventListener("click", function () {
        menu_m.style.height = "0";
    })
}
