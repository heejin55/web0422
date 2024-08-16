

$(() => {

    // 슬라이드
    let idx = 0;
            setInterval(autoSlide, 1000);
            function autoSlide() {

                // IDX 0 -> 1 -> 2 -> 0
                (idx === 2) ? idx = 0 : idx++;

                // 1in, 0out -> 2in, 1out -> 0in, 2 out
                $("#slide li").eq(idx).animate({ opacity: 1 }, 1000, function () {
                    if (idx === 0) idx = 3;
                    $("#slide li").eq(idx - 1).animate({ opacity: 0 }, 1000);
                    if (idx === 3) idx = 0;
                });
            }


    // 모달 팝업 start

    // 요소 찾기 및 이벤트 처리
    $('.notice li').eq(0).click(() => {
        // event.preventDefault();
        $('#modal').css({display: 'block'});
    }); 
    $('button').click(() => {
        $('#modal').css({display: 'none'});
    }) ;
    // 모달 팝업 end
        
}); // 레디이벤트