'use strict';
const products = [{
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.forEach(def => console.log(def['price'] *= 0.85)); // получилось изменить и вывести 
// только цифры без самого массива