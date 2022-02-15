// 'use strict'
const {User} = require('./User');
const {MyMath} = require('./MyMath'); //без деструкризации прилетает объект exports
const {Component} = require('./Component')

console.log(2+2);
console.log('Hello Node js')

const c = new Component();
const res = MyMath.sum(3,3);
const user = new User( 23, 'John');
console.log(res);
console.log(c);
console.log(user)

