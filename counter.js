// Counter JS
let countElement = document.getElementById("count-element");
let previousElement = document.getElementById("previous-element");
let count = 0;

function increaseCounter() {
    count++;
    countElement.textContent = count;
}

function decreaseCounter() {
    count--;
    countElement.textContent = count;
}

function save() {
    let prev = count + " - ";
    previousElement.textContent += prev;
    count = 0;
    countElement.textContent = count;
}