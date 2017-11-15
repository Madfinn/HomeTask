// Task 1
var str = prompt('Введите строку','abcenglishdef');
var result = /english/i;
console.log(result.test(str));

// Task 2
var outStr = prompt('Введите строку','abcenglishdef');
var inStr = new RegExp('english','i');
escape(inStr);
console.log(inStr.test(outStr));

// Task 3
var outStr = 'RegExp это интересно :) Не смотря на 100500 вещей, которые мне непонятны.';
  function wordCounter(str) {
    var result = str.match(/[Ё-ёA-z\b]+/g).length;
  return result;
  }
console.log(wordCounter(outStr));

// Task 4
var re = new RegExp (/\s+/g);
var someStr = 'Hello \t  world\n!';
var newStr = someStr.replace(re,' ');
console.log(newStr);

//Task5
var someStr = 'Привет   \n\t    мир! Один, два, \n \t три.';
var re = new RegExp (/\s{1,}/g);
var stringArr = someStr.split(re);
console.log(stringArr);