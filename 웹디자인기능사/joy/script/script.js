$(() => {
    // 내비게이션
    // const nav = $('.gnb>ul>li')
    // const sub = $('.sub li>a')

    // nav.mouseenter(() => {
    //     $(this).find('.sub').slideDownn()
    // });
    

    // 탭
    const tab1 = $('.tabs li').eq(0);
    const tab2 = $('.tabs li').eq(1);

    const tabcont1 = $('#tab1');
    const tabcont2 = $('#tab2');

    tab1.click(()=>{
        tabcont1.css({display: 'block'});
        tabcont2.css({display: 'none'});
    });
    tab2.click(()=>{
        tabcont1.css({display: 'none'});
        tabcont2.css({display: 'block'});
    });


    //모달팝업
    const fi = $('#tab1 tr:first-child');
    const pop = $('.pop');
    const btn = $('.pop button');

    fi.click(() => {
        pop.css({display: 'block'});
    });
    btn.click(()=>{
        pop.css({display: 'none'});
    });
});