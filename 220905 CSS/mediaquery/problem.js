//js 동작 채우기
const icon_menu = document.querySelector('.icon_menu');
const slide_menu = document.querySelector('.slide_menu');

icon_menu.addEventListener('click', function () {
    slide_menu.classList.toggle('d-none');
})




/*  onclick() */

// function btn_click() {
//     let click = document.getElementsByClassName('slide_menu');

//     let check = click[0].classList.contains('d-none');
//     if (check) {
//         click[0].classList.remove('d-none');
//     } else {
//         click[0].classList.add('d-none');
//     }
// }