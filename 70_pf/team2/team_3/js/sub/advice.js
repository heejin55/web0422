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
  $('.ad_slide').slick({
    infinite: true,
    slidesToShow: 3, /* 현재 보이는 슬라이드 수 */
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '53px',
    arrows: true,

    responsive: [ // 반응형 웹 구현 옵션
      {
        breakpoint: 769, //화면 사이즈 768px
        settings: {
          //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
          slidesToShow: 1,
          centerPadding: '150px'
        }
      },
      {
        breakpoint: 361,
        settings: {
          width: 270

        }
      }
    ]
  });
});