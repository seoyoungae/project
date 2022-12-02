const cam1TextA = [
    "서울시 승용차 마일리지",
    "서울 에코마일리지",
    "온실가스 배출 ",
    "제 14회 기후변화주간 포스터",
    "온실가스감축인지 예산제도",
    "하절기 탄소중립 실천 이벤트",
    "탄소중립 캠페인송(해요)",
    "2022 기후위기적응 공모전",
    "서울 에코마일리지",
    "여름방학 챌린지",
    "시민챌린지 개최",
    "종이영수증 줄이기 캠페인",
    "제 13회 기후변화주간 프로그램 안내",
    "지구의 날 51주년 전국 소등 행사",
    "변하지 않는 어른들을 향한 16살의 외침",
    "제 13회 기후 변화주간 포스터"
]
const cam1ImgA = ["1.jpg", "2.jpg", "3.jpg", "4.png", "5.jpg", "6.png", "7.png", "8.png", "9.png", "10.png", "11.png", "12.png"];
const cam2ImgA = ["001.png", "002.png", "003.png","004.png","005.png", "006.jpg", "007.jfif","008.jfif","009.jfif","010.jfif"]

window.onload = function () {
    file_name = document.URL.substring(document.URL.lastIndexOf('/') + 1, document.URL.length);
    if (file_name === "campaign1.html"){
        for (i = 0; i < 12; i++) {
            $(".camText" + i).html(cam1TextA[i]);
            // console.log(camTextA[i], i);
            $(".cam" + i).on("click", function () {
                n = $(this).attr("class").substr(3, 2);
                // console.log(n);
                $(".wrap1").show();
                $(".big_pic").attr("src", "/campaign/img/" + cam1ImgA[n]);
                $(".big_img_text").html(cam1TextA[n]);
            })
    
        }
    
    }
    else if (file_name === "campaign2.html"){
        for (i = 0; i < 12; i++) {
            // console.log(camTextA[i], i);
            $(".cam" + (i)).on("click", function () {
                n = $(this).attr("class").substr(3, 2);
                // console.log(n);
                $(".wrap1").show();
                $(".big_pic").attr("src", "/campaign/img/" + cam2ImgA[n]);
            })
    
        }
    }
    
}
$(function () {
    
    $(".close").on("click", function () {
        $(".wrap1").hide();
    })

    $(".plus").on("click", function () {
        $(".wrap0 ul").show();
    })
})
