
$(() => {
  $('.new_butter_item').bxSlider({
    minSlides: 5,
    maxSlides: 6,
    slideWidth: 243,
    slideMargin: 25,
    moveSlides: 1,
    pager: false
  });

  // 햄버거버튼
  const nav = document.querySelector('nav');
  const hamburger = document.querySelector('.hamburger');

  //이벤트 처리~
  hamburger.onclick = () => {
    btnMotion(event.currentTarget) // 함수호출~
  };
  function btnMotion(x) {
    // 햄버거 버튼: 트리플바 -> x로 바뀜
    // 또 누르면 x -> 트리플바
    x.classList.toggle("change");

    // nav 태그에 change가 추가
    nav.classList.toggle("change");

  }
});
