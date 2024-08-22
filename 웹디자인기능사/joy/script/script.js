$(() => {
    // 내비게이션
    const nav = $('.gnb>ul')
    const sub = $('.sub>li>a')

    // 슬라이드
    $('.slide li a:gt(0)').hide();

    setInterval(() => {
        $('.slide li a:first-child').fadeOut(1000).next('a').fadeIn(1000);
    });
    

    // 탭
    const btn1 = $('.tabs>li>a').eq(0);
    const btn2 = $('.tabs>li>a').eq(1);

    const tab1 = $('.tabs>#tab1>table');
    const tab2 = $('.tabs>#tab2>ul');
    

    btn1.click(() => {
        tab1.addClass('on');
        tab2.removeClass('on');
    });
    btn2.click(() => {
        tab2.addclass('on');
        tab1.removeClass('on');
    });


    //모달팝업
});