 'use strict';

 function plus(a, b) {
     return (a + b);
 }

 function minus(a, b) {
     return (a - b);
 }

 function delenie(a, b) {
     return (a / b);
 }

 function umnoj(a, b) {
     return (a * b);
 }

 function mathOperation(arg1, arg2, operation) {
     switch (operation) {
         case '+':
             return plus(arg1, arg2);

         case '-':
             return minus(arg1, arg2);

         case '/':
             return delenie(arg1, arg2);

         case '*':
             return umnoj(arg1, arg2);

         default:
             alert('Не правильно выбрано действие!');
     }
 }

 let num1 = parseInt(prompt('ВВЕДИТЕ ПЕРВОЕ ЧИСЛО'));
 let num2 = parseInt(prompt('ВВЕДИТЕ ВТОРОЕ ЧИСЛО'));
 let deyst = prompt('ВЫБЕРИТЕ: - ИЛИ + ИЛИ / ИЛИ *');
 let arr = [num1, num2, deyst];

 alert(mathOperation(arr[0], arr[1], arr[2]));