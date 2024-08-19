$(() => {
  //섹션4 탭
  const btn1 = $('#ad_s4 li').eq(0);
  const btn2 = $('#ad_s4 li').eq(1);
  const cont1 = $('#ad_s4 .tabs>div').eq(0);
  const cont2 = $('#ad_s4 .tabs>div').eq(1);

  btn1.click(() => {
    cont1.css({display: 'block'});
    cont2.css({display: 'none'});
  });

  btn2.click(() => {
    cont2.css({display: 'block'});
    cont1.css({display: 'none'});
  });

  
  
  // 섹션5 캐러셀
    $('.ad_slide').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
      });
});