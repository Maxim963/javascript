'use strict';

// es5 

function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
};

Post.prototype.edit = function() {
    this.text = prompt('Input text:');
};

function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
};
AttachedPost.prototype.makeTextHighlighted = function() {
    this.highlighted = true;
    alert(this.highlighted);
};

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

const book = new AttachedPost('Statham', 'make be change', '2020-05-26');

// es6 _________________________________________________________________________________

class Post1 {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    edit1() {
        this.text = prompt('Input text:');
    }
};

class AttachedPost1 extends Post1 {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }
    makeTextHighlighted1() {
        this.highlighted = true;
        alert(this.highlighted);
    }
};


const book1 = new AttachedPost1('Diesel', 'Win', '2019-03-18');
book1.edit1();
alert(book1.text);