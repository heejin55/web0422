// Minitmute fullpage.js

// (document).ready 생략 가능
$(function(){

    /* 
        데이터 유형
            1. 숫자
            2. 문자열
            3. 불
            4. undefined
            5. 객체: {속성: 값, 속성: 값, ...}
                - 배열: [값, 값, 값, 값, ...]
    */

    $('#wrap').fullpage({
        menu: '#minit_nav',
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
        sectionsColor: ['#f1f1f1', '#f1f1f1', '#f1f1f1', '#f1f1f1'],
        // 오른쪽 인디케이터
        navigation: true,
        // 오른쪽 인디케이터 마우스 올렸을 때
        navigationTooltips: ['minitmute', 'best product', 'section3', 'brand story'],
        showActiveTooltip: true,
        //slidesNavigation: true,
        //loopHorizontal: false,
    });
});