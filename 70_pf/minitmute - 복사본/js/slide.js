// section1 - carousel
// bx Slider.js Plug-in

// 제이쿼리 라이브러리
// bx슬라이더 라이브러리
// 리액트 라이브러리
// 부트스크랩 프레임워크

/* 
    프레임워크는 애플리케이션의 구조 또는 틀을 제공하며, 개발을 위한 기본적인 형태와 필수 요소를 포함하고 있습니다. 프레임워크가 정한 규칙과 구조 내에서 개발을 진행해야 합니다. EX) 부트스트랩 프레임워크

    라이브러리는 특정 기능을 수행하는 코드의 집합으로, 개발자가 필요에 따라 선택적으로 사용할 수 있습니다. EX) 제이쿼리

    플러그인은 어떤 특정한 하나의 문제를 해결하기 위한 컴포넌트이다. EX) BX슬라이더
*/

// 바닐라 스크립트
/* window.addEventListener("DOMContentLoaded", function(){
    // 문서가 준비되면 실행할 코드;
}); */

// 제이쿼리
$(function(){
    // 문서가 준비되면 실행할 코드;

$('.slider').bxSlider({
    // General
    // mode: 'horizontal'(기본값), 'fade', 'vertical'
    // mode: 'fade',

    // speed: 500(=.5s 기본값)
    // speed: 1000,

    // slideMargin: 0;
    // easing: null,

    // 자동 슬라이드 모션 + play/stop 버튼 표시 -> auto
    auto: true,

    // play/stop 버튼 표시 -> autoControls
    autoControls: false,

    // 클릭 시 자동 슬라이드 정지
    stopAutoOnClick: true,

    // 페이저는 아래 동그라미 (true가 기본값)
    pager: true,
    // pagerType: 'full' (기본값), 'short'
    // pagerType: 'short',
    // pagerShortSeparator: '/'(기본값)
    // pagerShortSeparator: '|',

    // controls: true (기본값) -> next/prev 버튼
    // controls: false

    // pause: 4000 (기본값) -> 일시정지 시간
    // pause: 1000

    // autoStart: true(기본값) -> 자동 슬라이드
    autoStart: true,

    // autoDirection: 'next'(기본값) -> 슬라이드 방향
    // next이면 오른쪽에서 왼쪽 방향
    // prev이면 왼쪽에서 오른쪽 방향
    // autoDirection: 'prev',

    // autoHover: false(기본값), true이면 슬라이드에 호버시 멈춤
    autoHover: true,

    // 슬라이드 크기(단, px 단위 생략)
    // autoDelay: 0(기본값) -> 자동 슬라이드 시작 시 지연 시간
    autoDelay: 4000
    // slideWidth: 1903
  });

}); // document.ready() 
