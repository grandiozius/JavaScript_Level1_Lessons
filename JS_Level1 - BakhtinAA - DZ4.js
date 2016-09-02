"use strict";

// Напишите функцию min, принимающую два аргумента, и возвращающую минимальный из них.
var x, y;
function min( x, y ) {
  if ( x < y ) {
    return x;
  }
  else return y;
}
x = +prompt("1st number:", x);
y = +prompt("2nd number:", y);
console.log("Comparing " + x + " and " + y + ": " + min( x, y ) + " - is minimum");

// Напишите функцию countBs, которая принимает строку в качестве аргумента, 
// и возвращает количество символов “B”, содержащихся в строке. 
var str="", i=0, counter=0;
function countBs(str) {
  for ( i = 0; i < str.length ; i++ ) {
    if ( str.charAt(i) == 'B' ) counter++;
  }
  return counter;
}
str = prompt("String:", str);
console.log(countBs( str ) + " 'B' simbols in string: " + str);

// Затем напишите функцию countChar, которая работает примерно как countBs, 
// только принимает второй параметр — символ, который мы будем искать в строке 
// (вместо того, чтобы просто считать количество символов “B”). Для этого переделайте функцию countBs. 
var str="", i=0, counter=0, char='';
function countChar(str, char) {
  for ( i = 0; i < str.length ; i++ ) {
    if ( str.charAt(i) == char ) counter++;
  }
  return counter;
}
str = prompt("String:", str);
char = prompt("Char:", char);
console.log(countChar( str, char ) + " '" + char + "' simbols in string: " + str);

// * Ноль чётный. Единица нечётная. 
// У любого числа N чётность такая же, как у N-2.
// Напишите рекурсивную функцию isEven согласно этим правилам. 
// Она должна принимать число и возвращать булевское значение. 
function isEven(N) {
  if ( N == 0 ) return true;
  else if ( N == 1 ) return false;
  else return isEven(N - 2);
}
// Потестируйте её на 50 и 75.  
console.log(isEven(50)); // true
console.log(isEven(75)); // false
// Попробуйте задать ей -1.
console.log(isEven(-1)); // Uncaught RangeError: Maximum call stack size exceeded
// Почему она ведёт себя таким образом? // N never stay 0 or 1
// Можно ли её как-то исправить?
function isEven(N) {
  if ( N < 0 ) N = -N;
  if ( N == 0 ) return true;
  else if ( N == 1 ) return false;
  else return isEven(N - 2);
}
console.log(isEven(-1));
