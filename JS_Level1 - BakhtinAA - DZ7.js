"use strict";

// Создать функцию, генерирующую шахматную доску. 
// При этом можно использовать любые html-тэги по своему желанию. 
// Доска должна быть разленована соответствующим образом, т.е. чередовать черные и белые ячейки. 
// Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.
function chessboard() {
  for (var i = 0; i < 9; i++) {
    if (i == 0) {
      var p = document.createElement('p');
      document.body.appendChild(p);
      var section = document.createElement('section');
      section.className = "txt";
      section.innerText = " ";
      p.appendChild(section);
      for (var k = 65; k < 73; k++) {
        var section = document.createElement('section');
        section.className = "txt";
        section.innerText = String.fromCharCode(k);
        p.appendChild(section);
      }
    }
    else {
      var p = document.createElement('p');
      document.body.appendChild(p);
      var section = document.createElement('section');
      section.className = "txt";
      section.innerText = i;
      p.appendChild(section);
      for (var j = 0; j < 8; j++) {
        var section = document.createElement('section');
        if (i == 1) section.className = "whitefigures ";
        if (i == 2) section.className = "whitepawns ";
        if (i == 7) section.className = "blackpawns ";
        if (i == 8) section.className = "blackfigures ";
        section.className += (i + j) % 2 == 0 ? "txt black": "txt white";
        p.appendChild(section);
      }
    }
  }
}

chessboard();

// Заполнить созданную таблицу буквами, отвечающими за шахматную фигуру, 
// например К-король, Ф – ферзь и тп., 
// причем все фигуры должны стоять на своих местах и быть соответственно черными и белыми.
function addFiguresLetters() {
  var whitefigures = document.getElementsByClassName("whitefigures");
  var letters = ["R", "N", "B", "Q", "K", "B", "N", "R"];
  for (var i = 0; i < 8; i++) {
    whitefigures[i].innerText = letters[i];
  }
  var whitepawns = document.getElementsByClassName("whitepawns");
  for (var i = 0; i < whitepawns.length; i++) {
    whitepawns[i].innerText = "p";
  }
  var blackpawns = document.getElementsByClassName("blackpawns");
  for (var i = 0; i < blackpawns.length; i++) {
    blackpawns[i].innerText = "p";
  }
  var blackfigures = document.getElementsByClassName("blackfigures");
  for (var i = 0; i < 8; i++) {
    blackfigures[i].innerText = letters[i];
  }
}

addFiguresLetters();

// Заменить буквы, обозначающие фигуры картинками.
function addFigures() {
  var whitefigures = document.getElementsByClassName("whitefigures");
  var whitepics = ['\u2656', '\u2658', '\u2657', '\u2655', '\u2654', '\u2657', '\u2658', '\u2656'];
  for (var i = 0; i < 8; i++) {
    whitefigures[i].innerText = whitepics[i];
  }
  var whitepawns = document.getElementsByClassName("whitepawns");
  for (var i = 0; i < whitepawns.length; i++) {
    whitepawns[i].innerText = '\u2659';
  }
  var blackpawns = document.getElementsByClassName("blackpawns");
  for (var i = 0; i < blackpawns.length; i++) {
    blackpawns[i].innerText = '\u265F';
  }
  var blackfigures = document.getElementsByClassName("blackfigures");
  var blackpics = ['\u265C', '\u265E', '\u265D', '\u265B', '\u265A', '\u265D', '\u265E', '\u265C'];
  for (var i = 0; i < 8; i++) {
    blackfigures[i].innerText = blackpics[i];
  }
}

addFigures();