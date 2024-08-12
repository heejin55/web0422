window.addEventListener("DOMContentLoaded", () => {

    // 햄버거 버튼 스크립트, 헤더 등장 모션

    // 요소찾기~
    const nav = document.querySelector('nav');
    const collapsedMenuIcon = document.querySelector('.collapsedMenuIcon');

    //이벤트 처리~
    collapsedMenuIcon.onclick = () => {
        btnMotion(event.currentTarget) // 함수호출~
    };
    function btnMotion(x) {
        x.classList.toggle("change");

        // nav 태그에 change가 추가
        nav.classList.toggle("change");

    }

});
