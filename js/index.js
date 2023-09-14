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

    // 마우스 호버시 mat's missoin 1번째 보이기
    $(".msnum>li:nth-child(1)").hover(function(){
      $(".msimg02,.msimg03,.msinfo02,.msinfo03").css({display: 'none'});
      $(".msimg01,.msinfo01").css({display:'block'});
    });
    // 마우스 호버시 mat's missoin 2번째 보이기
    $(".msnum>li:nth-child(2)").hover(function(){
      $(".msimg01,.msimg03,.msinfo01,.msinfo03").css({display: 'none'});
      $(".msimg02,.msinfo02").css({display:'block'});
    },function(){
      $(".msimg02,.msinfo02").css({display:'none'});
      $(".msimg01,.msinfo01").css({display:'block'});
    });
    // 마우스 호버시 mat's missoin 3번째 보이기
    $(".msnum>li:nth-child(3)").hover(function(){
      $(".msimg01,.msimg02,.msinfo01,.msinfo02").css({display: 'none'});
      $(".msimg03,.msinfo03").css({display:'block',});
      $(".msinfo03_img>img:nth-child(1)").css({opacity:'0.1'});
    },function(){
      $(".msimg03,.msinfo03").css({display:'none'});
      $(".msimg01,.msinfo01").css({display:'block'});
    });

    // project_slide_img
    var rellax = new Rellax('.rellax', {
      speed: -5,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    });
    // banner hover시 이벤트
    $("#banner_app").hover(function(){
      $(".banner_img").stop(true).animate({opacity:'0.4', width:'52.5520vw', heigth:'33.6458vw'},400);
      $(".banner_info>p:nth-child(1)").stop(true).animate({position:'absolute',left:'50%',opacity:'0'},300);
      $(".banner_info>p:nth-child(2)").stop(true).animate({position:'absolute',left:'50%',opacity:'0'},300);
      $(".banner_info>p:nth-child(3)").stop(true).animate({position:'absolute',right:'39%',fontSize:'1.875rem',fontWeight:'900',color:'#fff'},300);
      $(".banner_info>p:nth-child(4)").stop(true).animate({position:'absolute',left:'29.5%',fontSize:'1.875rem',fontWeight:'900',color:'#fff'},300);
      $(".banner_info>p:nth-child(5)").stop(true).animate({position:'absolute',right:'50%',opacity:'0'},300);
      $(".banner_info>p:nth-child(6)").stop(true).animate({position:'absolute',right:'45%',top:'40%',fontSize:'2.5rem',fontWeight:'800',color:'#fff'},300);
      $(".banner_info>p:nth-child(7)").stop(true).animate({position:'absolute',left:'50%',opacity:'0'},300);
      $(".banner_info>p:nth-child(8)").stop(true).animate({position:'absolute',left:'50%',opacity:'0'},300);
      $(".banner_info>p:nth-child(9)").stop(true).animate({position:'absolute',right:'50%',opacity:'0'},300);
      $(".banner_info>p:nth-child(10)").stop(true).animate({position:'absolute',left:'37%'},300);
      $(".banner_info>p:nth-child(11)").stop(true).animate({position:'absolute',right:'45.5%',top:'67%',fontSize:'2.5rem'},300);
      $(".banner_info>p:nth-child(12)").stop(true).animate({position:'absolute',right:'50%',opacity:'0'},300);
      $(".banner_info>p:nth-child(13)").stop(true).animate({position:'absolute',left:'50%',opacity:'0'},300);
      $(".banner_info>p:nth-child(14)").stop(true).animate({position:'absolute',right:'50%',opacity:'0'},300);
    },function(){
      $(".banner_img").stop(true).animate({opacity:'1', width:'48.2291vw', heigth:'30.8854vw'},400);
      $(".banner_info>p:nth-child(1)").stop(true).animate({position:'absolute',left:'30%',opacity:'1'},300);
      $(".banner_info>p:nth-child(2)").stop(true).animate({position:'absolute',left:'7%',opacity:'1'},300);
      $(".banner_info>p:nth-child(3)").stop(true).animate({position:'absolute',right:'28%',fontSize:'1.125rem',fontWeight:'600',color:'#424242'},300);
      $(".banner_info>p:nth-child(4)").stop(true).animate({position:'absolute',left:'17.8%',fontSize:'1.25rem',fontWeight:'600',color:'#313131'},300);
      $(".banner_info>p:nth-child(5)").stop(true).animate({position:'absolute',right:'10.5%',opacity:'1'},300);
      $(".banner_info>p:nth-child(6)").stop(true).animate({position:'absolute',right:'37%',fontSize:'0.9375rem',fontWeight:'600',color:'#313131'},300);
      $(".banner_info>p:nth-child(7)").stop(true).animate({position:'absolute',left:'28%',opacity:'1'},300);
      $(".banner_info>p:nth-child(8)").stop(true).animate({position:'absolute',left:'9%',opacity:'1'},300);
      $(".banner_info>p:nth-child(9)").stop(true).animate({position:'absolute',right:'30.5%',opacity:'1'},300);
      $(".banner_info>p:nth-child(10)").stop(true).animate({position:'absolute',left:'-5%'},300);
      $(".banner_info>p:nth-child(11)").stop(true).animate({position:'absolute',right:'12%',top:'21vw',fontSize:'3.125rem'},300);
      $(".banner_info>p:nth-child(12)").stop(true).animate({position:'absolute',right:'39%',opacity:'1'},300);
      $(".banner_info>p:nth-child(13)").stop(true).animate({position:'absolute',left:'6%',opacity:'1'},300);
      $(".banner_info>p:nth-child(14)").stop(true).animate({position:'absolute',right:'25%',opacity:'1'},300);
    });
    //icon_box slider
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 5,
        spaceBetween: 10,
        slidesPerGroup: 5,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next>img",
          prevEl: ".swiper-button-prev>img",
        },
      });
      
     //client_slide
    
     var swiper = new Swiper("#client>.mySwiper", {
       slidesPerView: 4,
       spaceBetween: 25,
       freeMode: true,
       pagination: {
         el: "#client .swiper-pagination",
         clickable: true,
       },
     });
  
    //////////////////////////////////
});