$(() => {
  //섹션4 탭
  const btn1 = $('#ad_s4 li a').eq(0);
  const btn2 = $('#ad_s4 li a').eq(1);
  const cont1 = $('#ad_s4 .tabs>div').eq(0);
  const cont2 = $('#ad_s4 .tabs>div').eq(1);

  btn1.click(() => {
    btn1.css({ color: '#0032A0' });
    cont1.css({ display: 'block' });
    btn2.css({ color: '#000' });
    cont2.css({ display: 'none' });
  });

  btn2.click(() => {
    btn2.css({ color: '#0032A0' });
    cont2.css({ display: 'block' });
    btn1.css({ color: '#000' });
    cont1.css({ display: 'none' });
  });



  // 섹션5 캐러셀
  $(function () {
    $('.ad_slide').slick({
      infinite: true,
      slidesToShow: 3, /* 현재 보이는 슬라이드 수 */
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '0',
      arrows: false,

      responsive: [ // 반응형 웹 구현 옵션
        {
          breakpoint: 769, //화면 사이즈 768px
          settings: {
            // 위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            centerPadding: '53px',
            centerMode: false
          }
        },
        {
          breakpoint: 360
        }
      ]
    });
  });

  //var $slider;

  // function buildSliderConfiguration() {

  // var deviceWidth = $(window).width();

  /* 반응형으로 설정할 옵션 정의 */
  // var slideNum;
  //var slideMargin;

  /* 화면 사이즈별 슬라이드 갯수, 마진 설정, 기타 옵션도 설정 가능 */
  // if (deviceWidth < 360) {
  //   slideNum = 1;
  //   slideMargin = 53;
  // } else if (deviceWidth < 768) {
  //   slideNum = 1;
  //   slideMargin = 53;
  // } else if (deviceWidth < 996) {
  //   slideNum = 3;
  //   slideMargin = 53;
  // }

  // return {
  //   minSlides: 1,
  //   maxSlides: 3,
  //   slideWidth: 400,
  //   slideMargin: 53,
  //   moveSlides: 1,
  //   pager: false,
  // slideMargin: slideMargin, /*반응형 옵션*/
  // minSlides: slideNum,  /*반응형 옵션*/
  // maxSlides: slideNum   /*반응형 옵션*/
  //};
  //}

  // function configureSlider() {
  //   var config = buildSliderConfiguration();

  //   if ($slider && $slider.reloadSlider) {
  //     $slider.reloadSlider(config);
  //   } else {
  //     $slider = $('.ad_slide').bxSlider(config);
  //   }
  // }

  // $('.slider-prev').click(function () {
  //   var current = $slider.getCurrentSlide();
  //   $slider.goToPrevSlide(current) - 1;
  // });

  // $('.slider-next').click(function () {
  //   var current = $slider.getCurrentSlide();
  //   $slider.goToNextSlide(current) + 1;
  // });

  // $(window).on("orientationchange resize", configureSlider);
  // configureSlider();


}); // Ready