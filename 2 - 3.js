 'use strict';
 let a = parseInt(prompt('First number'));
 let b = parseInt(prompt('Second number'));

 function mat(num1, num2) {
     if (num1 >= 0 && num2 >= 0) {
         alert(num1 - num2);
     } else if (num1 < 0 && num2 < 0) {
         alert(num1 * num2);
     } else if ((num1 >= 0 && num2 < 0) || (num1 < 0 && num2 >= 0)) {
         alert(num1 + num2);
     } else {
         alert('Введено не число');
     }
 }

 mat(a, b)