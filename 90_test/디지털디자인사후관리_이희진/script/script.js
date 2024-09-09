// Minitmute fullpage.js
// 제이쿼리

$(function () {
    $('#wrap').fullpage({
        menu: '#yo_nav',
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
        sectionsColor: ['#fff', '#FBF7E5', '#FBF7E5', '#fff'],
        // 오른쪽 인디케이터
        navigation: true,
        // 오른쪽 인디케이터 마우스 올렸을 때
        // navigationTooltips: ['minitmute', 'best product', 'in tokyo', 'brand story'],
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
        pager: false,
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
    // console.log(btn1,btn2,btn3,btn4);

    const cont1 = document.querySelector('#tab1');
    const cont2 = document.querySelector('#tab2');
    const cont3 = document.querySelector('#tab3');


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

    function resetF() {
        cont1.classList.remove('on');
        cont2.classList.remove('on');
        cont3.classList.remove('on');
    }

});

$(function () {
    const bt1 = $('#tabs a').eq(0)
    const bt2 = $('#tabs a').eq(1)
    const bt3 = $('#tabs a').eq(2)
    bt1.click(()=>{
        bt1.css({color: '#000', fontSize: '2.4rem'});
        bt2.css({color: '#8E8C8D', fontSize: '1.8rem'});
        bt3.css({color: '#8E8C8D', fontSize: '1.8rem'});
    });

    bt2.click(()=>{
        bt1.css({color: '#8E8C8D', fontSize: '1.8rem'});
        bt2.css({color: '#000', fontSize: '2.4rem'});
    });

    bt3.click(()=>{
        bt1.css({color: '#8E8C8D', fontSize: '1.8rem'});
        bt2.css({color: '#8E8C8D', fontSize: '1.8rem'});
        bt3.css({color: '#000', fontSize: '2.4rem'});
    });
        

}); // document.ready() 

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