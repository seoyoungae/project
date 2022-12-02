const dataA = {
    "noticeTextA": ["설날 연휴 배송 공지 입니다.",
        "리뷰 이벤트 당첨자 발표",
        "환불/교환/반품 안내사항 안내",
        "홈페이지 신규가입 이벤트 안내",
        "홈페이지 임시 점검 일자 안내"],
    "noticeTextB": ["입고지연 안내",
        "리뷰 적립금 지급 & 소멸 안내",
        "구매금액별 사은품 안내",
        "개인정보처리약관",
        "캠페인 공모전 공지"],
    "noticeDataA": ["2022.11.01", "2022.10.15", "2022.07.10", "2022.03.04", "2022.02.19"],
    "noticeDataB": ["2022.01.18", "2021.11.07", "2021.11.03", "2021.04.03", "2021.03.08"],
    "noticeInfoA": ["연휴와 휴일을 제외하고 5~10일 정도 미뤄질 것으로 예상됩니다.",
        "개별 연락을 드리겠습니다.",
        "상품 개봉시 반드시 동영상을 촬영하여 개봉 영상을 남겨주시기 바랍니다.",
        "홈페이지 신규가입 안내 - 신규 회원은 무료배송 쿠폰을 드립니다.",
        "홈페이지 일시 점검 - 12월 04일 오전6시~오전10시 참고 바랍니다."],
    "noticeInfoB": ["입고지연 안내 문자를 보내드리오니 참고하시기 바랍니다.",
        "1만원 이상 - 샘플 세트를 증정, 3만원 이상 구매시 핸드크림 100ml를 증정합니다.",
        "개인정보처리약관은 메일로 문의 부탁드립니다.",
        "캠페인 공모전에서 입상하신 분께는 아이패드를 경품으로 드립니다. 많은 관심 부탁드립니다."]
}

window.onload = function () {

}
$(function () {
    $(".q_text2").hide();
    for (i = 0; i < dataA.noticeDataA.length; i++) {

        $(".noticeText:eq(" + i + ")").html(dataA.noticeTextA[i]);
        $(".noticeData:eq(" + i + ")").html(dataA.noticeDataA[i]);
        $(".noticeWritter").html("관리자");
        $(".q_text2:eq(" + i + ")").html(dataA.noticeInfoA[i]);
    }

    $(".first").on("click", function () {
        for (i = 0; i < dataA.noticeDataA.length; i++) {
            console.log(dataA.noticeTextA[i]);
            $(".noticeText:eq(" + i + ")").html(dataA.noticeTextA[i]);
            $(".noticeData:eq(" + i + ")").html(dataA.noticeDataA[i]);
            $(".q_text2:eq(" + i + ")").html(dataA.noticeInfoA[i]);
        }
        i = 0;
        for (j = dataA.noticeDataA.length; j > 0; j--) {
            console.log(j);

            $(".no:eq(" + i + ")").html(j + 5);
            i++;
        }
    })
    $(".page1").on("click", function () {
        for (i = 0; i < dataA.noticeDataA.length; i++) {
            $(".noticeText:eq(" + i + ")").html(dataA.noticeTextA[i]);
            $(".noticeData:eq(" + i + ")").html(dataA.noticeDataA[i]);
            $(".q_text2:eq(" + i + ")").html(dataA.noticeInfoA[i]);
        }
        i = 0;
        for (j = dataA.noticeDataA.length; j > 0; j--) {
            console.log(j);

            $(".no:eq(" + i + ")").html(j + 5);
            i++;
        }
    })

    $(".last").on("click", function () {
        for (i = 0; i < dataA.noticeDataA.length; i++) {
            $(".noticeText:eq(" + i + ")").html(dataA.noticeTextB[i]);
            $(".noticeData:eq(" + i + ")").html(dataA.noticeDataB[i]);
            $(".q_text2:eq(" + i + ")").html(dataA.noticeInfoB[i]);
        }
        i = 0;
        for (j = dataA.noticeDataA.length; j > 0; j--) {
            console.log(j);

            $(".no:eq(" + i + ")").html(j);
            i++;
        }
    })
    $(".page2").on("click", function () {
        for (i = 0; i < dataA.noticeDataA.length; i++) {
            console.log(dataA.noticeTextA[i]);
            $(".noticeText:eq(" + i + ")").html(dataA.noticeTextB[i]);
            $(".noticeData:eq(" + i + ")").html(dataA.noticeDataB[i]);
            $(".q_tex2t:eq(" + i + ")").html(dataA.noticeInfoB[i]);
        }
        i = 0;
        for (j = dataA.noticeDataA.length; j > 0; j--) {
            console.log(j);

            $(".no:eq(" + i + ")").html(j);
            i++;
        }
    })

    $(".board").on("click", function () {
        if ($(this).next().css("display") == "none") {
            $(".q_text2").slideUp();
        }
        no = $(this).index();
        if (no !== 0) {
            $(this).next().slideToggle();
        }
    })
})