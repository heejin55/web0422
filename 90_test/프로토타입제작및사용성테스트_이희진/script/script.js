// Minitmute fullpage.js
// 제이쿼리

$(function () {
    $('#wrap').fullpage({
        menu: '#minit_nav',
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
        sectionsColor: ['#f1f1f1', '#f8f8f8', '#ffffff', '#f8f8f8'],
        // 오른쪽 인디케이터
        navigation: true,
        // 오른쪽 인디케이터 마우스 올렸을 때
        navigationTooltips: ['minitmute', 'best product', 'in tokyo', 'brand story'],
        showActiveTooltip: true,
        //slidesNavigation: true,
        //loopHorizontal: false,
    });
});

// slide
$(function () {
    $('.slider').bxSlider({
        auto: true,
        autoControls: false,
        stopAutoOnClick: true,
        pager: true,
        autoStart: true,
        autoHover: true,
        autoDelay: 4000
    });

}); // document.ready() 

// tabs
window.addEventListener("DOMContentLoaded", function () {

    // 요소 찾기
    const btn1 = document.querySelectorAll('#tabs a').item(0);
    const btn2 = document.querySelectorAll('#tabs a').item(1);
    const btn3 = document.querySelectorAll('#tabs a').item(2);
    const btn4 = document.querySelectorAll('#tabs a').item(3);
    // console.log(btn1,btn2,btn3,btn4);

    const cont1 = document.querySelector('#tab1');
    const cont2 = document.querySelector('#tab2');
    const cont3 = document.querySelector('#tab3');
    const cont4 = document.querySelector('#tab4');


    // 이벤트 처리
    btn1.onclick = function () {
        resetF();
        cont1.classList.add('on');
    };
    btn2.onclick = function () {
        resetF();
        cont2.classList.add('on');
    };
    btn3.onclick = function () {
        resetF();
        cont3.classList.add('on');
    };
    btn4.onclick = function () {
        resetF();
        cont4.classList.add('on');
    };

    function resetF() {
        cont1.classList.remove('on');
        cont2.classList.remove('on');
        cont3.classList.remove('on');
        cont4.classList.remove('on');
    }

});

// S3
// 로드 이벤트
window.addEventListener("DOMContentLoaded", function () {
    // 요소 찾기
    const p = document.querySelector("#s3 h2");
    const mbx = document.querySelector(".mbx");

    // 스크롤 이벤트
    window.addEventListener("scroll", function () {

        p.innerHTML = Math.floor(pageYOffset);
        console.log(p);

        if (p.innerHTML >= 1300) {
            //.active 클래스를 추가
            mbx.classList.add("active");
        } else {
            //.active 클래스를 제거
            mbx.classList.remove("active");
        }
    });
});