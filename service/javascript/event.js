const eventA={
   "eventImgA": ["evnet3.jpg", "evnet1.jpg", "evnet2.jpg"],
   "eventTitleA": ["2022년 연말 할인",
      "멤버십 등급별 증정품", "캠페인 공모전"],
   "eventDataA": ["2022.12.15-2022.12.31",
      "2022.07.10-2022.11.26",
      "2022.03.04-2022.04.05"],
   "eventInfoA": ["연말 대할인 축제가 열립니다. 최대 30% 할인!!",
      "멤버십의 특권을 누려보세요~",
      "공모전 참가도 하고 상품도 받고 일석이조!!"]
}

window.onload = function () { 
   $(".event").on("click", function () {
      no = $(this).index();
      no--;
      console.log(no);
      $(".eventPopup").show();
      $(".popupImg img").attr("src", "./service/img/" + eventA.eventImgA[no]);
      $(".eventTitle").html(eventA.eventTitleA[no]);
      $(".eventData").html(eventA.eventDataA[no]);
      $(".eventInfo").html(eventA.eventInfoA[no]);
   })
   $(".close").on("click", function () {
      $(".eventPopup").hide();
   })
}