// Minitmute fullpage.js
// 제이쿼리

$(function () {
    $('#wrap').fullpage({
        menu: '#yo_nav',
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
        sectionsColor: ['#fff', '#fff', '#fff', '#fff'],
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
        pik1()
    };
    btn2.onclick = function () {
        resetF();
        cont2.classList.add('on');
        pik2()
        
    };
    btn3.onclick = function () {
        resetF();
        cont3.classList.add('on');
        pik3()
    };

    function resetF() {
        cont1.classList.remove('on');
        cont2.classList.remove('on');
        cont3.classList.remove('on');
    }

    function pik1() {
        btn1.style.color = "#000";
        btn1.style.fontWeight = "600";
        btn1.style.fontSize = "2.4rem";
        btn2.style.color = "#8E8C8D";
        btn2.style.fontWeight = "100";
        btn2.style.fontSize = "1.8rem";
        btn3.style.color = "#8E8C8D";
        btn3.style.fontWeight = "100";
        btn3.style.fontSize = "1.8rem";
    }
    function pik2() {
        btn1.style.color = "#8E8C8D";
        btn1.style.fontWeight = "100";
        btn1.style.fontSize = "1.8rem";
        btn3.style.color = "#8E8C8D";
        btn3.style.fontWeight = "100";
        btn3.style.fontSize = "1.8rem";
        btn2.style.color = "#000";
        btn2.style.fontWeight = "600";
        btn2.style.fontSize = "2.4rem";
    }
    function pik3() {
        btn1.style.color = "#8E8C8D";
        btn1.style.fontWeight = "100";
        btn1.style.fontSize = "1.8rem";
        btn2.style.color = "#8E8C8D";
        btn2.style.fontWeight = "100";
        btn2.style.fontSize = "1.8rem";
        btn3.style.color = "#000";
        btn3.style.fontWeight = "600";
        btn3.style.fontSize = "2.4rem";
    }

});

// S3
// 로드 이벤트
window.addEventListener("DOMContentLoaded", function () {
    // 요소 찾기
    let p = document.querySelector("#s3 h2");
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