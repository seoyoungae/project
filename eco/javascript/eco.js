const dataEco = {
    ecoTextA: ["환경오염의 원인",
        "환경오염의 원인은 크게 사회적 원인과 개인적 원인으로 나눌 수 있다.",
        "도로나 주택 건설 등에 의한 녹지공간의 감소, 생활하수에 의한 수질오염, 자동차나 난방연료 사용증가로 인한 대기오염, 쓰레기 발생량 증가 등의 환경문제가 발생한다",
        "인간이 버리는 쓰레기들과 불필요하게 소비하는 환경오염 제품들이 문제가 된다."],
    cTextLeftA: ["2050 대한민국 비전",
        "기후기술혁신을 위한 과감한 투자와 지원으로 2050년 탄소중립을 위해 노력할 것이다.",
        "기후위기 대응을 위해선 전 지구적인 노력과 참여가 중요하다.",
    ],
    cTextRightA: ["파리협정",
        "파리협정은 산업화 이전 대비 지구 평균온도의 상승을 2℃보다 아래로 유지하고 더 나아가 1.5℃로 억제하는 것을 목표로 하고 있다."],
    ecoExImg: ["ex1.jpg", "ex2.jpg", "ex3.jpg", "ex4.jpg", "ex5.jpg", "ex6.jpg"],
    at1_menu1: ["물의 소비", "먹는 음식", "버리는 음식", "자동차", "우리의 옷장"],
    at1_text1: ["항상 식품 운송 시 필요한 물과 에너지 비용을 고려하고, 가급적 가까운 지역에서 생산된 식품을 구입합니다.",
        "장을 보기 전에 냉장고를 미리 확인하여 쇼핑 리스트를 만듭니다.",
        "에너지 효율 전구와 가전제품을 사용합니다.",
        "카풀이나 대중교통을 이용하여 자동차 사용을 줄입니다.",
        "재활용품점을 애용하고, 헐거나 낡아지면 수리해서 사용합니다."],
    at1_menu2: ["대기오염", "수질오염", "토지오염", "이산화탄소"],
    at1_text2: ["자동차에서 배출되는 배기가스와 공장굴뚝에서 나오는 연기가 가장 문제가 된다",
        "자연수가 가정폐수, 공장폐수 등 사회로부터 배출된 액상폐기물에 의해서 수질 저하가 된 상태를 말한다.",
        "탄화수소나 농약과 같은 유기 화학물질 등에서 발생하는 경우가 많으며 공업단지와 도시 매연가스에 의한 산성비, 식품포장 폐기물 등 다양한 원인에 의해서 발생한다.",
        "지구가 도시화 되어가면서 나무가 없어지고 산림이 사막화 되기 때문이다."]
};
let file_name;
let ecoText2, cTextLeft, cTextRight, ExImg13;
let right, left, ExImg, num = 0, n = 0;
let timer = setInterval("show()",3000);
let list = 0;
window.onload = function () {
    file_name = document.URL.substring(document.URL.lastIndexOf('/') + 1, document.URL.length);
    // console.log(file_name)
    if (file_name === "eco1.html") {
        ecoText2 = document.querySelector(".ecoInfoText2").getElementsByTagName("p");

        for (i = 0; i < dataEco.ecoTextA.length; i++) {
            ecoText2[i].innerHTML = dataEco.ecoTextA[i];
        }

        for (i = 0; i < dataEco.at1_menu1.length; i++) {
            $(".at1_menu li:eq(" + i + ")").html(dataEco.at1_menu1[i]);

        }

        $(".at1_menu li").on("click", function () {
            if (list === 0) {
                no = $(this).index();
                $(".at_text1").html(dataEco.at1_text1[no]);
            }

        })

        $(".at1_menu li").on("click", function () {
            no = $(this).index();
            $(".at_text2").html(dataEco.at1_text2[no]);
        })




        $(".ecoInfoImg1").on("click", function () {
            list = 0;
            $(".at1_menu").show();
            $(".at1_menu li:eq(4)").show();
            for (i = 0; i < dataEco.at1_menu1.length; i++) {
                $(".at1_menu li:eq(" + i + ")").html(dataEco.at1_menu1[i]);
            }
            $(".at1").animate({
                "left": "0"
            }, 500);
        })
        $(".ecoInfoImg2").on("click", function () {
            list = 1;
            $(".at1_menu li:eq(4)").hide();
            for (i = 0; i < dataEco.at1_menu2.length; i++) {
                $(".at1_menu li:eq(" + i + ")").html(dataEco.at1_menu2[i]);
            }
            $(".at1").animate({
                "left": "0"
            }, 500);
        })

        $(".at1_menu_close").on("click", function(){
            $(".at1").animate({"left": "-100%"},500);
        })

    }
    else if (file_name === "eco2.html") {
        cTextLeft = document.querySelector(".cTextLeft").getElementsByTagName("p");
        cTextRight = document.querySelector(".cTextRight").getElementsByTagName("p");

        for (i = 0; i < dataEco.cTextLeftA.length; i++) {
            cTextLeft[i].innerHTML = dataEco.cTextLeftA[i];
        }
        for (i = 0; i < dataEco.cTextRightA.length; i++) {
            cTextRight[i].innerHTML = dataEco.cTextRightA[i];
        }
        ExImg13 = document.querySelector(".Img13").getElementsByTagName("li");
        for (i = 0; i < dataEco.ecoExImg.length; i++) {
            ExImg13[i].style.background = "url(/eco/img/" + dataEco.ecoExImg[i] + ")";
            ExImg13[i].style.backgroundSize = "100% 100%";
        }
        // left = document.querySelector(".ImgLeft");
        // right = document.querySelector(".ImgRight");

        // left.addEventListener("click", function () {
        //     if (n > 0 && n < 13) {
        //         rightSilde();
        //     }
        // })
        // right.addEventListener("click", function () {
        //     if (n < 13) {
        //         rightSilde();
        //     }
        // })
        // right.addEventListener("mouseenter", function () {
        //     clearInterval(timer);
            
        // })
        // right.addEventListener("mouseleave", function () {
        //     timer = setInterval("show()", 5000);
        // })
        for (i = 0; i < dataEco.ecoExImg.length; i++) {
            $(".swiper-slide:eq(" + i + ")").css("background-image", "url(eco/img/" + dataEco.ecoExImg[i]);
            $(".swiper-slide:eq(" + i + ")").css("backgroundSize", "100% 100%");
        }

    }

    $(".ecoInfoText1").animate({
        "marginTop":"0",
        "opacity":1
    }, 1000);

}
let y;
window.addEventListener("scroll", function(){
    y=window.scrollY;
    console.log("현재 스크롤 Y값: " + y);
    if(y>250){
        $(".ecoInfoText2").animate({
            "marginTop":"0",
            "opacity":1
        }, 1000);
    }
    
    if(y>700){
        $(".ecoLogoText").animate({
            "marginTop":"0",
            "opacity":1
        }, 1000);
    }
})


function show() {
    if (num < 13) {
        num++;
    } else if (num === 13) {
        num = 0;
    }
    // console.log(num);
    $(".Img13").animate({ "left": "-=100%" }, 300,
        function () {
            $(".Img13 li:first").appendTo(".Img13");
            $(".Img13").css("left", "+=100%");
        });
}

function rightSilde() {

    n++;
    count = n * 100;
    $(".Img13").css("left", count+"%");
    console.log(n);
    console.log(count);
}

