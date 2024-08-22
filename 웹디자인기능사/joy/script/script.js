$(() => {
    // 내비게이션
    const nav = $('.gnb>ul')
    const sub = $('.sub>li>a')
    

    // 탭



    //모달팝업
    const fi = $('#tab1 tr:first-child');
    const pop = $('.pop');
    const btn = $('.pop button');

    fi.click(()=>{
        pop.css({display: 'block'});
    });
    btn.click(()=>{
        pop.css({display: 'none'});
    });
});