$(function() {


    $('nav').animate({
        "height": "80px",
        "opacity": "1"
    }, 1000);

    $('.top-iamge-logo').animate({
        "top": "50%",
        "opacity": "1"
    }, 1000);

    //スクロール時アクション
    $(window).scroll(function (){
            $('.fadeInUp, .fadeInRight, .fadeInLeft, .bounce, .fadeInSequence').each(function(){
                var elemPos = $(this).offset().top;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll > elemPos - windowHeight + 100){
                    $(this).addClass('scrollin');
                }
            });
        });

    // spレイアウトメニューバー
    $('.global-navigation__button').on('click',function(){
      if($(this).hasClass('active')){
        $(this).removeClass('active');
        $('.global-navigation-menu-sp').removeClass('open');
        $('.overlay').removeClass('open');
      } else {
        $(this).addClass('active');
        $('.global-navigation-menu-sp').addClass('open');
        $('.overlay').addClass('open');
      }
    });
    $('.overlay').on('click',function(){
      if($(this).hasClass('open')){
        $(this).removeClass('open');
        $('.global-navigation__button').removeClass('active');
        $('.global-navigation-menu-sp').removeClass('open');
      }
    });

    // menubar-scroll
     $('a[href^="#"]').on('click', function(){
         var headerHight = 50; //ヘッダの高さ
         var href= $(this).attr("href");
         var target = $(href == "#" || href == "" ? 'html' : href);
         var position = target.offset().top-headerHight; //ヘッダの高さ分位置をずらす
         $("html, body").animate({scrollTop:position}, 550, "swing");

         if($(".global-navigation-menu-sp").hasClass('open')){
           $(".global-navigation-menu-sp").removeClass('open');
           $('.global-navigation__button').removeClass('active');
           $('.overlay').removeClass('open');
         }
            return false;
       });

});
