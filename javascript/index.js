const dataA = {
    "bgImgA": ["environmental.jpg", "avenue.jpg"],
    "mainCamTextA": ["1회용 컵 사용하지 않기!!",
        "1회용 컵을 사용하지 않고 텀블러를 사용하여 환경을 보호하는 캠페인이다.",
        "한국에서도 11월부터 카페에서 1회용 컵을 사용하지 않고 텀블러를 사용 하는 것을 권장할 수 있도록 1회용 컵 사용 시에 300원을 지불하도록 지침을 바꿀 것으로 예상된다.",
        "플라스틱 컵은 사용하지 않고 굳이 1회용 컵을 사용한다면 차라리 종이컵을 사용하는게 낫다는 의견이 나오고 있다.",
        "1회용 컵을 사용하지 않음으로서 줄어드는 플라스틱 쓰레기의 양은 어마어마하기 때문에 이 캠페인에 동참하고 모두 지구를 지키기를 추천한다."],
    "pdImgA": ["1.jpg", "2.jpg", "3.jpg", "4.jpg"],
    "pdNameA": ["어성초 카밍 토너", "리밸런싱 에멀전", "어성초 페이셜 미스트", "아크네 폼 클렌저"],
    "pdTextA": ["스킨 부스터", "스킨 부스터", "카밍 스프레이", "어성초 폼"],
    "pdPriceA": ["23000", "32000", "20000", "16000"],
    "pdVolumeA": ["200ml", "200ml", "150ml", "150ml"],
    "reviewTextA": ["피부가 촉촉해졌어요bb", "수분이 가득한게 좋네요!!", "저는 그저 그런듯...", "재구매 했습니다 믿고 쓰는 아비브!", "처음 써보는데 기대되네요~"],
    "reviewDataA": ["2022.10.25", "2022.10.25", "2022.10.18", "2022.10.15", "2022.8.25"],
    "noticeTextA": ["설날 연휴 배송 공지 입니다.",
        "리뷰 이벤트 당첨자 발표",
        "환불/교환/반품 안내사항 안내",
        "홈페이지 신규가입 이벤트 안내",
        "홈페이지 임시 점검 일자 안내"],
    "noticeDataA": ["2022.11.01", "2022.10.15", "2022.07.10", "2022.03.04", "2022.02.19"]
};
let mainImg, mainCamText, pdImgs, pdName, pdText, pdPrice;
let reText, reData, noticeText, notictData;
window.onload = function () {
    mainImg = document.getElementsByClassName("main_img");

    mainCamText = document.querySelector(".mainCamText").getElementsByTagName("p");
    for (i = 0; i < dataA.mainCamTextA.length; i++) {
        mainCamText[i].innerHTML = dataA.mainCamTextA[i];
    }

    pdImgs = document.querySelector(".pdImg").getElementsByTagName("div");
    for (i = 0; i < dataA.pdImgA.length; i++) {
        pdImgs[i].style.background = "url(img/" + dataA.pdImgA[i] + ")";
        pdImgs[i].style.backgroundSize = "100% 100%";
    }

    pdName = document.querySelector(".pdName").getElementsByTagName("p");
    for (i = 0; i < dataA.pdNameA.length; i++) {
        pdName[i].innerHTML = dataA.pdNameA[i];
    }
    pdText = document.querySelector(".pdText").getElementsByTagName("p");
    for (i = 0; i < dataA.pdTextA.length; i++) {
        pdText[i].innerHTML = dataA.pdTextA[i];
    }
    pdPrice = document.querySelector(".pdPrice").getElementsByTagName("p");
    for (i = 0; i < dataA.pdPriceA.length; i++) {
        pdPrice[i].innerHTML = comma(dataA.pdPriceA[i])+"won";
    }

    let reText0, reText1, reText2, reText3, reText4
    for (i = 0; i < dataA.reviewTextA.length; i++) {
        this["reText" + i] = document.getElementById("reText" + i);
        this["reText" + i].innerHTML = dataA.reviewTextA[i];
    }
    let reData0, reData1, reData2, reData3, reData4
    for (i = 0; i < dataA.reviewTextA.length; i++) {
        this["reData" + i] = document.getElementById("reData" + i);
        this["reData" + i].innerHTML = dataA.reviewDataA[i];
    }

    let noText0, noText1, noText2, noText3, noText4
    for (i = 0; i < dataA.noticeTextA.length; i++) {
        this["noText" + i] = document.getElementById("noText" + i);
        this["noText" + i].innerHTML = dataA.noticeTextA[i];
    }

    let noData0, noData1, noData2, noData3, noData4
    for (i = 0; i < dataA.noticeDataA.length; i++) {
        this["noData" + i] = document.getElementById("noData" + i);
        this["noData" + i].innerHTML = dataA.noticeDataA[i];
    }


    $(".main_text p:eq(0)").animate({
        top: "17%",
        opacity: 1
    }, 900);

    $(".main_text p:eq(1)").animate({
        top: "55%",
        opacity: 1
    }, 900);
}


$(function () {

    $(".pdImg div").on("click", function () {

        $(".popup").show();
        no = $(this).index();
        console.log(no);
        // alert(no);

        $(".pic").attr("src", "product/img/" + dataA.pdImgA[no]);
        console.log(dataA.pdTextA[no]);
        $(".infoName").text(dataA.pdNameA[no]);
        $(".infoText").html(dataA.pdTextA[no]);
        $(".infoVolume").html(dataA.pdVolumeA[no]);
        $(".infoPrice").html(comma(dataA.pdPriceA[no]) + " won");
    })

    $(".close_popup").on("click", function () {
        $(".popup").hide();
    })

    $(".buyBtn").on("click", sell_func);
    $(".cartBtn").on("click", cart_func);

})

function sell_func() {
    num = Number($(".num").val());
    pNum = Number(dataA.pdPriceA[no]);
    all = (num * pNum) + 3000;
    all = comma(all);
    $(".all").html(all + " won");
}

function comma(str) {
    str = String(str);
    return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
}

function cart_func() {
    num = Number($(".num").val());
    pNum = Number(dataA.pdPriceA[no]);
    all = (num * pNum) + 3000;
    all = comma(all);
    alert("총 " + all + " 원의 상품이 장바구니에 상품이 담겼습니다.");
    $(".num").val(" ");
}