'use strict';

let textEl = document.getElementById('text');
let paraEl = document.getElementById('para');


function init() {
    paraEl.innerHTML = null;
    textEl.value = null;
}
function red() {
    if (paraEl.classList.contains('green'))
        paraEl.classList.remove('green');
    if (paraEl.classList.contains('blue'))
        paraEl.classList.remove('blue');
    paraEl.classList.add('red')
    paraEl.innerHTML = `<h4>${textEl.value}</h4>`;
}
function green() {
    if (paraEl.classList.contains('red'))
        paraEl.classList.remove('red');
    if (paraEl.classList.contains('blue'))
        paraEl.classList.remove('blue');
    paraEl.classList.add('green')
    paraEl.innerHTML = `<h4>${textEl.value}</h4>`;
}
function blue() {
    if (paraEl.classList.contains('green'))
        paraEl.classList.remove('green');
    if (paraEl.classList.contains('red'))
        paraEl.classList.remove('red');
    paraEl.classList.add('blue')
    paraEl.innerHTML = `<h4>${textEl.value}</h4>`;
}

clear.addEventListener('click', () => {
    init();
})