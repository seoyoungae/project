const dataA = {
    "qnaTextA": ["생일에는 어떤 혜택이 있나요?",
        "회원정보 변경은 어떻게 하나요?",
        "배송이 어느정도 걸리나요?",
        "현금 영수증은 어떻게 받나요?",
        "주문한 상품을 취소하고 싶어요"],
    "qnaTextB": ["결제 방법에 따른 환불 절차가 어떻게 되나요?",
        "선물 포장이 가능한가요?",
        "회원 탈퇴는 어떻게 하나요?",
        "회원 아이디는 변경할 수 있나요?",
        "적립금 신청은 어떻게 하나요?"],
    "qnaDataA": ["2022.11.01", "2022.10.15", "2022.07.10", "2022.03.04", "2022.02.19"],
    "qnaDataB": ["2022.01.18", "2021.11.07", "2021.11.03", "2021.04.03", "2021.03.08"],
    "qnaImgsA": ["presents.png", "profile_edit_user.png", "shipping.png", "receipt.png", "order.png"],
    "qnaImgsB": ["receipt.png", "gift.png", "account.png", "profile_edit_user.png", "cash.png"],
    "qnaInfoA": ["생일에는 생일 15% 할인 쿠폰이 지급됩니다.",
        "마이페이지-회원정보 메뉴에서 변경 가능합니다.",
        "휴일 제외 2~3일 걸립니다.",
        "주문 정보 입력시에 휴대폰 번호를 입력해주세요.",
        "마이페이지-주문조회-주문취소를 참고해주세요."],
    "qnaInfoB": ["신용카드는 영업일 내 3일 안에 취소되며, 무통장입금은 7일 안에 환불계좌로 입금됩니다.",
        "선물포장 비용 1,000원을 추가하여 선물포장을 신청할 수 있습니다.",
        "마이페이지-회원정보-회원탈퇴 탭을 이용해주세요.",
        "아이디는 변경할 수 없습니다.",
        "적립금은 상품을 구매하거나 캠페인에 참여하면 자동으로 적립됩니다."]

};

let s = 0;
window.onload = function () {

}
$(function () {
    $(".q_text2").hide();
    for (i = 0; i < dataA.qnaDataA.length; i++) {
        console.log(dataA.qnaTextA[i]);
        $(".q_Text:eq(" + i + ")").html(dataA.qnaTextA[i]);
        $(".q_Data:eq(" + i + ")").html(dataA.qnaDataA[i]);
        $(".q_Writter").html("관리자");
        // $(".q_img").css("background", "url(/img/"+dataA.qnaImgsA[i]+")");
        $(".q_img:eq(" + i + ")").css("background", "url(/service/img/" + dataA.qnaImgsA[i] + ")");
        $(".q_img").css("backgroundSize", "100% 100%");
        $(".q_info:eq(" + i + ")").html(dataA.qnaInfoA[i]);
    }

    $(".first").on("click", function () {
        for (i = 0; i < dataA.qnaDataA.length; i++) {
            console.log(dataA.qnaTextA[i]);
            $(".q_Text:eq(" + i + ")").html(dataA.qnaTextA[i]);
            $(".q_Data:eq(" + i + ")").html(dataA.qnaDataA[i]);
            $(".q_img:eq(" + i + ")").css("background", "url(/service/img/" + dataA.qnaImgsA[i] + ")");
            $(".q_img").css("backgroundSize", "100% 100%");
            $(".q_info:eq(" + i + ")").html(dataA.qnaInfoA[i]);
        }
        i = 0;
        for (j = dataA.qnaDataA.length; j > 0; j--) {
            console.log(j);

            $(".no:eq(" + i + ")").html(j + 5);
            i++;
        }

    })
    $(".page1").on("click", function () {
        for (i = 0; i < dataA.qnaDataA.length; i++) {
            $(".q_Text:eq(" + i + ")").html(dataA.qnaTextA[i]);
            $(".q_Data:eq(" + i + ")").html(dataA.qnaDataA[i]);
            $(".q_img:eq(" + i + ")").css("background", "url(/service/img/" + dataA.qnaImgsA[i] + ")");
            $(".q_img").css("backgroundSize", "100% 100%");
            $(".q_info:eq(" + i + ")").html(dataA.qnaInfoA[i]);
        }
        i = 0;
        for (j = dataA.qnaDataA.length; j > 0; j--) {
            console.log(j);

            $(".no:eq(" + i + ")").html(j + 5);
            i++;
        }
    })
    $(".last").on("click", function () {
        for (i = 0; i < dataA.qnaDataA.length; i++) {
            $(".q_Text:eq(" + i + ")").html(dataA.qnaTextB[i]);
            $(".q_Data:eq(" + i + ")").html(dataA.qnaDataB[i]);
            $(".q_img:eq(" + i + ")").css("background", "url(/service/img/" + dataA.qnaImgsB[i] + ")");
            $(".q_img").css("backgroundSize", "100% 100%");
            $(".q_info:eq(" + i + ")").html(dataA.qnaInfoB[i]);

        }
        i = 0;
        for (j = dataA.qnaDataA.length; j > 0; j--) {
            console.log(j);

            $(".no:eq(" + i + ")").html(j);
            i++;
        }

    })
    $(".page2").on("click", function () {
        for (i = 0; i < dataA.qnaDataA.length; i++) {
            console.log(dataA.qnaTextA[i]);
            $(".q_Text:eq(" + i + ")").html(dataA.qnaTextB[i]);
            $(".q_Data:eq(" + i + ")").html(dataA.qnaDataB[i]);
            $(".q_img:eq(" + i + ")").css("background", "url(/service/img/" + dataA.qnaImgsB[i] + ")");
            $(".q_img").css("backgroundSize", "100% 100%");
            $(".q_info:eq(" + i + ")").html(dataA.qnaInfoB[i]);
        }
        i = 0;
        for (j = dataA.qnaDataA.length; j > 0; j--) {
            console.log(j);

            $(".no:eq(" + i + ")").html(j);
            i++;
        }
    })
    $(".board").on("click", function () {
        if ($(this).next().css("display") == "none") {
            $(".q_text2").slideUp();
        }
        no=$(this).index();
        if (no !== 0) {
            $(this).next().slideToggle();
        }
    })
})