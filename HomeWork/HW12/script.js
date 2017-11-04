/*Создайте пустой массив, заполните его целыми числами от N до N + 100, где N число, которое необходимо ввести с клавиатуры. Вывести в консоль все четные и нечетные элементы массива.*/

var num = [];
var odd = [];
var even = [];
var n = prompt('Enter the number, please','1');
var size = +n +100;
var j = 0;
var k = 0;

for (var i = 0; i < size; i++) {
 num[i] = n++;

  if (num[i] % 2 == 0) {
   odd[j] = num[i];
   j++;
  } else {
   even[k] = num[i];
   k++;
  }
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

console.log('Minsk is the capital of ' + capital['Minsk']);
console.log('Kiev is the capital of ' + capital['Kiev']);
console.log('London is the capital of ' + capital['London']);
console.log('Pyongyang is the capital of ' + capital['Pyongyang']);
console.log('Brasilia is the capital of ' + capital['Brasilia']);

/*Напишите свою реализацию функции для перебора массивов forEach.
Пример использования:
var arr = [1, 2, 3];
forEach(arr, console.log);
// Вывод в консоль:
// 1 0 (3) [1, 2, 3]
// 2 1 (3) [1, 2, 3]
// 3 2 (3) [1, 2, 3] */

var num = [1, 4, 3, 7, 5, 9];

 function sortOut(arr) {
  var element;

   for (var index = 0; index < arr.length; index++) {
    element = arr[index];
    console.log(element + '[' + index + ']' + ' (' + arr.length + ') ' + '[' + arr + ']');
   }
 }

sortOut(num);

/*Напишите свою реализацию функции map, которая создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.
Пример использования:
var arr = [1, 4, 9];
var sqrtArr =  map(arr, Math.sqrt);
console.log(sqrtArr);
// Вывод в консоль:
// [1, 2, 3]*/

var num = [1, 4, 3, 7, 5, 9];

 function calcArray(digitArray, mathFunc) {
   for (var index = 0; index < digitArray.length; index++) {
   console.log('[' + mathFunc(digitArray [index] ) + ']');
   }
 }

calcArray(num, Math.sqrt);