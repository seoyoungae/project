const productA = {
    "title": ["스킨케어", "클렌징", "생활용품", "음식"],
    "imgs": [
        {
            "img": ["1.jpg", "2.jpg", "3.jpg"]
        }, {
            "img": ["4.jpg", "5.jpg", "6.jpg"]
        }, {
            "img": ["7.jpg", "8.jpg", "9.jpg"]
        }, {
            "img": ["10.jpg", "11.jpg", "12.jpg"]
        }
    ],
    "names": [
        {
            "name": ["어성초 카밍 토너", "리밸런싱 에멀전", "어성초 페이셜 미스트"]
        }, {
            "name": ["아크네 폼 클렌저", "카밍 페이셜 솝", "페이셜 솝 블루"]
        }, {
            "name": ["스테인레스 빨대", "고체 치약", "순면 손수건"]
        }, {
            "name": ["비건 곤약 김밥", "비건 마요네즈", "비건 양념갈비살"]
        }
    ],
    "texts": [
        {
            "text": ["스킨 부스터", "스킨 부스터", "카밍 스프레이"]
        }, {
            "text": ["어성초 폼", "어성초 스톤", "브릭"]
        }, {
            "text": ["스테인레스", "브릭", "순면"]
        }, {
            "text": ["식물성 재료로 만든 부담없는 한 끼", "깨끗하게 만든 비건 소스", "달콤한 비건 양념갈비살!"]
        }
    ],
    "volumes": [
        {
            "volume": ["200ml", "200ml", "150ml"]
        }, {
            "volume": ["150ml", "100g", "100g"]
        }, {
            "volume": ["20cm", "10g/10개", "30x30(cm)"]
        }, {
            "volume": ["220g", "270ml", "300g"]
        }
    ],
    "prices": [
        {
            "price": ["23000", "32000", "20000"]
        }, {
            "price": ["16000", "14000", "20000"]
        }, {
            "price": ["3000", "5000", "2000"]
        }, {
            "price": ["3800", "5280", "7180"]
        }
    ]
}
let side_menu, pd_img, pd_text, pd_name, title, pd_price, pd_volume;
let gnb = 0, snb, b=0, m=0;
let timer = setInterval(side_btn, 1000);
let wi;
window.onload = function () {


    pd_img = document.getElementsByClassName("pd_img");
    pd_text = document.getElementsByClassName("pd_text");
    pd_name = document.getElementsByClassName("pd_name");
    pd_volume = document.getElementsByClassName("pd_volume");
    pd_price = document.getElementsByClassName("pd_price");

    for (i = 0; i < 3; i++) {
        pd_img[i].style.background = "url(/product/img/" + productA.imgs[0].img[i] + ")";
        pd_img[i].style.backgroundSize = "100% 100%";

        pd_name[i].innerHTML = productA.names[0].name[i];
        pd_text[i].innerHTML = productA.texts[0].text[i];
        pd_volume[i].innerHTML = productA.volumes[0].volume[i];
        pd_price[i].innerHTML = comma(productA.prices[0].price[i]) + " won";
    }

    $(".side_menu").on("click", function () {
        $(".wrap1").hide();
        $(".wrap0").show();
        $(".all").html(" ");
        $(".num").val(" ");
        no = $(this).index();
        gnb = no;
        for (i = 0; i < 3; i++) {
            $(".gnb").html(productA.title[gnb]);
            $(".snb").html(" ");

            pd_img[i].style.background = "url(/product/img/" + productA.imgs[gnb].img[i] + ")";
            pd_img[i].style.backgroundSize = "100% 100%";

            pd_name[i].innerHTML = productA.names[gnb].name[i];
            pd_text[i].innerHTML = productA.texts[gnb].text[i];
            pd_volume[i].innerHTML = productA.volumes[gnb].volume[i];
            pd_price[i].innerHTML = productA.prices[gnb].price[i] + " won";
        }
    })

    $(".pd").on("click", function () {
        no = $(this).index();
        snb = no;
        console.log(gnb, snb);
        $(".gnb").html(productA.title[gnb]);
        $(".snb").html(productA.names[gnb].name[snb]);
        $(".wrap0").hide();
        $(".wrap1").show();
        $(".infoImg>img").attr("src", "/product/img/" + productA.imgs[gnb].img[snb]);
        $(".infoName").html(productA.names[gnb].name[snb]);
        $(".infoText").html(productA.texts[gnb].text[snb]);
        $(".infoVolume").html(productA.volumes[gnb].volume[snb]);
        p = Number(productA.prices[gnb].price[snb]);
        $(".infoPrice").html(comma(productA.prices[gnb].price[snb]) + " won");
    })

    $(".buyBtn").on("click", sell_func);
    $(".cartBtn").on("click", cart_func);
    $(".sideBtn").on("click", function () {
        if (b === 0) {
            $(".at1").css("left", "-50px");
            b = 1
            $(".rightBtn").hide();
            $(".leftBtn").show();
        } else {
            $(".at1").css("left", "-150px");
            b = 0;
            $(".leftBtn").hide();
            $(".rightBtn").show();
            
        }
    })

    $(".more").on("click", function(){
        if(m===0){
            $(".at1").css("left","17%");
            m=1;
        }
        else if(m===1){
            $(".at1").css("left","90%");
            m=0;
        }
        
    })

    // $(".at1_more").on("click", function() {
    //     $(".at1_menu").show();
    // });
}


function sell_func() {
    num = Number($(".num").val());
    pNum = Number(productA.prices[gnb].price[snb]);
    all = (num * pNum) + 3000;
    all = comma(all);
    $(".all").html(all + " won");
}

function cart_func() {
    num = Number($(".num").val());
    pNum = Number(productA.prices[gnb].price[snb]);
    all = (num * pNum) + 3000;
    all = comma(all);
    alert("총 " + all + " 원의 상품이 장바구니에 상품이 담겼습니다.");
    $(".num").val(" ");
}

function comma(str) {
    str = String(str);
    return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
}

function side_btn() {
    $(".sideBtn").animate({fontSize:"1.2rem"}, 300).animate({fontSize:"2rem"}, 300);
}
