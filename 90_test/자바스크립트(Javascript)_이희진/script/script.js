// 요소찾기

const tab1 = document.querySelectorAll('#tabs a').item(0);
const tab2 = document.querySelectorAll('#tabs a').item(1);
const tab3 = document.querySelectorAll('#tabs a').item(2);
const tab4 = document.querySelectorAll('#tabs a').item(3);
const tab5 = document.querySelectorAll('#tabs a').item(4);

const c1 = document.querySelector('#cont_mood');
const c2 = document.querySelector('#cont_twin');
const c3 = document.querySelector('#cont_remood');
const c4 = document.querySelector('#cont_clo');
const c5 = document.querySelector('#cont_shoes');

// 이벤트 처리
tab1.onclick = function () {
    removE();
    c1.classList.add('on');
};
tab2.onclick = function () {
    removE();
    c2.classList.add('on');
};
tab3.onclick = function () {
    removE();
    c3.classList.add('on');
};
tab4.onclick = function () {
    removE();
    c4.classList.add('on');
};
tab5.onclick = function () {
    removE();
    c5.classList.add('on');
};

function removE() {
    c1.classList.remove('on');
    c2.classList.remove('on');
    c3.classList.remove('on');
    c4.classList.remove('on');
    c5.classList.remove('on');
};