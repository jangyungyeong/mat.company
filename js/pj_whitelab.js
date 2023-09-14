$(document).ready(function(){
    // 메뉴 슬라이드
    $(window).scroll(function(){
      var wScroll = $(this).scrollTop();

      if(wScroll > 600){
          $("#hiddenav").addClass("on");
      } else if (wScroll == 0){ // else{}>>참이 아닐경우, else if(){}>> 참이아닐경우의 조건을 더 추가
          $("#hiddenav").removeClass("on");
      }
    });

    //클릭시 메뉴 나타나는 효과
    $(".menu li>img").click(function(){
        $(".menu li>a").fadeToggle();
      });
});