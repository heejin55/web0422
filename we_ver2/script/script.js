

$(() => {
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