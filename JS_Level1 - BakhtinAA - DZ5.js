"use strict";

// Написать функцию преобразования цвета из 10-ного представления в 16-ный. 
// Функция должна принимать 3 числа от 0 до 255 и возвращать строковый хеш.
var red, green, blue;
function color2hex (r, g, b) {
  r = r < 16 ? "0" + r.toString(16) : r.toString(16);
  g = g < 16 ? "0" + g.toString(16) : g.toString(16);
  b = b < 16 ? "0" + b.toString(16) : b.toString(16);
  var hex = "#" + r + g + b;
  return hex;
}
red = +prompt("Red:");
while (red < 0 || red > 255 || isNaN(red) == true) {
  red = +prompt("Red is number in [0..255]. Repeat input:")
}
green = +prompt("Green:");
while (green < 0 || green > 255 || isNaN(green) == true) {
  green = +prompt("Green is number in [0..255]. Repeat input:")
}
blue = +prompt("Blue:");
while (blue < 0 || blue > 255 || isNaN(blue) == true) {
  blue = +prompt("Blue is number in [0..255]. Repeat input:")
}
console.log(color2hex(red, green, blue));

// Написать функцию, преобразующую число в объект. 
// Передавая на вход число от 0 до 999, мы должны получить на выходе объект, 
// в котором в соответствующих свойствах описаны единицы, десятки и сотни. 
// Например для числа 245 мы должны получить следующий объект: 
// {‘единицы’: 5, ‘десятки’: 4, 'сотни’: 2}. 
// Если число превышает 999, необходимо выдать соответствующее сообщение 
// с помощью console.log и вернуть пустой объект.
var num = +prompt("Enter your number [0..999]:");
function str2obj (str) {
  var obj = {};
  var names = ["ones", "tens", "hundreds"];
  if (str < 0 || str > 999 || isNaN(str) == true) {
    console.log("Out of range");
    obj = {};
  }
  else {
    str = str.toString();
    for (var i = str.length - 1; i >= 0; i--) {
      obj[names[str.length - 1 - i]] = str[i];
    }
  }
  return obj;
}
console.log("Your number: " + num);
console.log(str2obj(num));


// * Реализовать функцию objectToQueryString(object), 
// которая принимает аргументом объект, возвращает строку.
var obj = {
  property1: "Alex",
  property2: "222",
  property3: 333,
  property4: 1+3
};
function objectToQueryString (object) {
  return Object.keys(object).map(function(key) { return key + "=" + object[key]; }).join("&");
}
console.log(objectToQueryString(obj));