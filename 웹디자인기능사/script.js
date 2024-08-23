$(()=>{
    // 팝업
    const pop = $('.pop');
    const a = $('.notice a:first-child');
    const btn = $('.pop button')

    a.click(()=>{
        pop.css({display: 'block'});
    });
    btn.click(()=>{
        pop.css({display: 'none'})
    });
});