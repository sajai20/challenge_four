'use strict';

let textEl = document.getElementById('text');
let paraEl = document.getElementById('para');


function init() {
    paraEl.innerHTML = null;
    textEl.value = null;
}
function red() {
    paraEl.classList.add('red')
    paraEl.innerHTML = `<h4>${textEl.value}</h4>`;
}
function green() {
    paraEl.classList.add('green')
    paraEl.innerHTML = `<h4>${textEl.value}</h4>`;
}
function blue() {
    paraEl.classList.add('blue')
    paraEl.innerHTML = `<h4>${textEl.value}</h4>`;
}

clear.addEventListener('click', () => {
    init();
})