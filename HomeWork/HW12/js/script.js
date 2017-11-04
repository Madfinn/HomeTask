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

console.log('Minsk is the capital of capital['Minsk']);
console.log('Kiev is the capital of capital['Kiev']);
console.log('London is the capital of capital['London']);
console.log('Pyongyang is the capital of capital['Pyongyang']);
console.log('Brasilia is the capital of capital['Brasilia']);
