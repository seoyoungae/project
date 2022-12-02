const dataA = {
   "pcImgA": ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png", "10.png", "11.png", "12.png", "13.png", "14.png", "15.png", "16.png", "17.png", "18.png", "19.png", "20.png", "21.png", "22.png", "23.png", "24.png", "25.png", "26.png", "27.png", "28.png", "29.png", "30.png"],
   "moblieImgA": ["1m.png", "2m.png", "3m.png", "4m.png", "5m.png", "6m.png", "7m.png", "8m.png", "9m.png", "10m.png", "11m.png", "12m.png", "13m.png", "14m.png", "15m.png", "16m.png", "17m.png", "18m.png", "19m.png", "20m.png", "21m.png", "22m.png", "23m.png", "24m.png", "25m.png", "26m.png", "27m.png", "28m.png"]
}
let menu_m_close, menu_sub_m_home, menu_bar, menu_m;;
window.onload = function () {
   for (i = 0; i < dataA.pcImgA.length; i++) {
      $(".img" + (i + 1) + " img").attr("src", "/info/img/" + dataA.pcImgA[i]);
      // console.log(dataA.pcImgA[i]);
   }
   for (i = 1; i < 31; i++) {
      $(".img" + i + " p").html(i);
   }

   $(".imgs li").hover(function () {
      $(this).css("opacity", "1");
   }, function () {
      $(this).css("opacity", "0.7");
   })

   $(".imgs li").on("click", function () {
      no = $(this).index();
      $(".pc").css("background", "url(/info/img/" + dataA.pcImgA[no] + ") no-repeat");
      $(".pc").css("backgroundSize", "100% 100%");
      $(".mobile").css("background", "url(/info/img/" + dataA.moblieImgA[no] + ") no-repeat");
      $(".mobile").css("backgroundSize", "100%");

      $(".imgs li").css({
         "outline": "0"
         , "opacity": "0.7"
      });
      $(".img" + (no + 1)).css({
         "outline": " 10px solid rgb(199, 255, 179)"
         , "opacity": "1"
      });

      $(".pageNum").html(no + 1);

   });

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
   menu_sub_m_home = document.querySelector(".sub_m_home");
   menu_sub_m_home.addEventListener("click", function () {
      window.location.href = "index.html"
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

}