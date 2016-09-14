"use strict";

// 1. Напишите функцию arrayToList, которая строит список, 
// получая в качестве аргумента [1, 2, 3], 
// а также функцию listToArray, которая создаёт массив из списка. 
// Также напишите вспомогательную функцию prepend, 
// которая получает элемент и создаёт новый список, 
// где этот элемент добавлен спереди к первоначальному списку, 
// и функцию nth, которая в качестве аргументов принимает список и число, 
// а возвращает элемент на заданной позиции в списке, 
// или же undefined в случае отсутствия такого элемента.
var a = [1, 2, 3];
console.log("Array:");
console.log(a);
function arrayToList(arr) { 
  return list = arr.length > 1 ? {value: arr.shift(), rest: arrayToList(arr)} : {value: arr.shift(), rest: null}; 
} 
var l = arrayToList(a);
console.log("Array to list:");
console.log(l);

function listToArray(list) { 
  return arr = list.rest === null ? [list.value] : [list.value].concat(listToArray(list.rest)); 
} 
var al = listToArray(l);
console.log("List to array:");
console.log(al);

function prepend(el, list) { 
  return ellist = {value: el, rest: list};
} 
var el = prepend(100, l);
console.log("List from element + list:");
console.log(el);

function nth(list, num) { 
  list = listToArray(list); 
  return el = num < list.length ? list[num] : undefined; 
}
var nl = nth(l, 2);
console.log("Element from list:");
console.log(nl);

// 2. Напишите две функции, reverseArray и reverseArrayInPlace. 
// Первая получает массив как аргумент и выдаёт новый массив, 
// с обратным порядком элементов. 
// Вторая работает как оригинальный метод reverse – 
// она меняет порядок элементов на обратный в том массиве, 
// который был ей передан в качестве аргумента. 
// Не используйте стандартный метод reverse.
var a = [1, 2, 3]; 
console.log("Array:")
console.log(a);
function reverseArray(arr) {
  var arrcopy = arr.slice();
  var l = arrcopy.length;
  var newarr = [];
  for ( var i = 0; i < l; i++ ) {
    newarr.unshift(arrcopy.shift());
  }
  return newarr;
}
var ar = reverseArray(a);
console.log("Reverse array:");
console.log(ar);

var a = [1, 2, 3]; 
console.log("Array:")
console.log(a);
function reverseArrayInPlace (arr) {
  var l = arr.length;
  var newarr = [];
  for ( var i = 0; i < l; i++ ) {
    newarr.unshift(arr.shift());
  }
  return newarr;
}
a = reverseArrayInPlace(a);
console.log("Reverse array in place:");
console.log(a);

// 3.* Реализовать функцию pick(obj, keys), 
// которая принимает аргументами объект и массив строк (названия ключей). 
// Возвращает новый объект, куда вошли все ключи, указанные в массиве keys, 
// и соответствующие значения из объекта obj. Если в объекте obj, нет ключа, 
// указанного в массиве keys, в результирующем объекте этот ключ не должен присутствовать.
function pick(obj, keys) { 
  var newobj={}; 
  var k;
  for ( k in obj ) {
    if ( keys.indexOf(k) != -1 ) newobj[k] = obj[k];
  }
  return newobj;
} 
var user = {
  name: 'Sergey',
  age: 30,
  email: 'sergey@gmail.com',
  friends: ['Sveta', 'Artem']
}; 
console.log( pick(user, ['name']) );
console.log( pick(user, ['name', 'second-name']) );
console.log( pick(user, ['name', 'friends']) );
