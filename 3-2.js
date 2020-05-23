'use strict';

let inp = +prompt("inter number");

for (let i = 0; i < inp; i++) {
    if (i % 2 == 0 && i != 0) {
        console.log(i + " Chetnoe");
    } else if (i % 2 == 1) {
        console.log(i + " Ne chetnoe");
    } else if (i == 0) {
        console.log(i + " Thero");
    } else {
        alert("Error!");
    }
}