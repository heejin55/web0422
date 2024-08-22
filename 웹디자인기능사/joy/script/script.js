(() => {
    // 내비게이션
    const nav = $('.gnb>ul')
    const sub = $('.sub>li>a')

    // 슬라이드
    $('.slide li a:gt(0)').hide();

    setInterval(() => {
        $('.slide li a:first-child').fadeOut(1000).next('a').fadeIn(1000);
    })
    

    // 탭
    const btn1 = $('.tabs>li').eq(0);
    const btn2 = $('.tabs>li').eq(1);

    const tab1 = $('#tab1>table');
    const tab2 = $('#tab2>ul');
    

    btn1.click(() => {
        tab1.css({display: 'block'});
        tab2.css({display: 'none'});
    });
    btn2.click(() => {
        tab2.css({display: 'block'});
        tab1.css({display: 'none'});
    });


    //모달팝업
});