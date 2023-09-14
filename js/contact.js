$(document).ready(function(){
    //클릭시 메뉴 나타나는 효과
    $(".menu li>img").click(function(){
        $(".menu li>a").fadeToggle();
      });

    //상세내용 및 예산 글자수 제한
    // 상세내용
    $(".con1").on('keyup', function(){
      $(".txt_max_cnt1").html("("+$(this).val().length+" / 1000)");

      if($(this).val().length > 1000){
        $(this).val($(this).val().substring(0, 1000));
        $(".txt_max_cnt1").html("(1000 / 1000)");
      }
    });
    $(".txt_max_cnt1").css({fontSize: '13px'});
    // 예산
    $(".con2").on('keyup', function(){
      $(".txt_max_cnt2").html("("+$(this).val().length+" / 1000)");

      if($(this).val().length > 1000){
        $(this).val($(this).val().substring(0, 1000));
        $(".txt_max_cnt2").html("(1000 / 1000)");
      }
    });
    $(".txt_max_cnt2").css({fontSize: '13px'});
});