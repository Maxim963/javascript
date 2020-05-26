'use strict';

// es5

function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function() {
    alert(this.price * 0.75);
};

const phone1 = new Product('Galaxy s10', 1000);
const phone2 = new Product('Iphone 11', 1500);

phone1.make25PercentDiscount();

// es6_______________________________________________________________________

class Product1 {
    constructor(name, price, diagonal, model) {
        Product.call(this, name, price);
        this.diagonal = diagonal;
        this.model = model;
    }
    make15Percent() {
        return (this.price * 0.85);
    }
};

const tv1 = new Product1('LG', 1500, 55, 'Oled B9');
const tv2 = new Product1('Samsung', 1000, 50, 'Nanocell 5');

tv2.make15Percent();
alert(`телевизор ${tv1.name} ${tv1.model} диагональю ${tv1.diagonal} дюймов стоит по скидке ${tv1.make15Percent()} долларов`);