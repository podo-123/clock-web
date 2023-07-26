const clock = document.querySelector('.clock');
const h1 = clock.querySelector('h1')

function getTime() {
    const date = new Date();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    h1.innerText = `${hour}:${minutes}:${seconds}`; 
}

function init() {
    getTime();
    setInterval(getTime, 1000)
}

init();

//자바스크립트는 요소를 불러오는 방식과 함수를 가져오는 것 등등 모르는게 너무 많아 더욱 열심히 공부해야할 것 같다.
//innerText, textContent, innerHTML 의 차이점과 사용법을 숙지