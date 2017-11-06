/*Создайте пустой массив, заполните его целыми числами от N до N + 100, где N число, которое необходимо ввести с клавиатуры. Вывести в консоль все четные и нечетные элементы массива.*/

var num = [];
var odd = [];
var even = [];
var n = prompt('Enter the number, please','1');
var size = Math.abs(+n) +100;

for (var i = n; i < size; i++) {
 num.push(i);

  if (i % 2 == 0) {
 	odd.push(i);
  } else {
   even.push(i);  }
}

console.log('Array: ' + num);
console.log('Odd: ' + odd);
console.log('Even: ' + even);

/*Дан ассоциативный массив (объект):
{
  Minsk: ‘Belarus’,
  Kiev: ‘Ukraine’,
  London: ‘United Kingdom’,
  Pyongyang: ‘North Korea’,
  Brasilia: ‘Brazil’
}
Вывести в консоль, для каждого ключа в объекте сообщение следующего формата:
“%key% is the capital of %value%”
*/

var capital = {
  Minsk: 'Belarus',
  Kiev: 'Ukraine',
  London: 'United Kingdom',
  Pyongyang: 'North Korea',
  Brasilia: 'Brazil'
};


 for (var key in capital) {
  console.log(key + ' is the capital of ' + capital[key]);
 }

/*Напишите свою реализацию функции для перебора массивов forEach.
Пример использования:
var arr = [1, 2, 3];
forEach(arr, console.log);
// Вывод в консоль:
// 1 0 (3) [1, 2, 3]
// 2 1 (3) [1, 2, 3]
// 3 2 (3) [1, 2, 3] */

var num = [1, 4, 3, 7, 5, 9];

 function forEach(arr, someFunc) {

  for (var index = 0; index < arr.length; index++) {
  someFunc(arr[index], index, arr);
  }  
 }

forEach(num, console.log);

/*Напишите свою реализацию функции map, которая создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.
Пример использования:
var arr = [1, 4, 9];
var sqrtArr =  map(arr, Math.sqrt);
console.log(sqrtArr);
// Вывод в консоль:
// [1, 2, 3]*/

var num = [1, 4, 3, 7, 5, 9];

 function map(digitArray, mathFunc) {
  var resultArray = [];

   for (var index = 0; index < digitArray.length; index++) {
    resultArray.push(mathFunc(digitArray[index], index, digitArray));
   }
  console.log(resultArray);
 }

map(num, Math.sqrt);