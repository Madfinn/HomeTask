/*Выведите в консоль сумму чисел от 1 до 100.*/

var sum = 0;
 for (var i = 0; i < 100; i++) {
  sum += i + 1;
 }
console.log(sum);

/*Найти факториал числа, у пользователя запрашивается число, и в результате выдаётся факториал числа,(если ввести к примеру 5 то результат должен быть равен 120, потому что факториал 5 это 5 * 4 * 3 * 2 * 1)*/
var factorial = 1;
var num = prompt('Type the number, please','');

 while (num > 0) {
   factorial *= num;
   num--; 
 }

 while ( num < 0) {
   factorial *= num;
   num++; 
 }

alert("Factorial is equal to " + factorial);

/*Найти последовательность Хэеса, то есть пользователь вводит число и в результате необходимо вывести в консоль:
саму последовательность;
количество шагов которое понадобилось для нахождения этой последовательности;
вершину последовательности - это максимальное число из этой последовательности. 

Последовательность Хэеса считается так: если ввели число 9, то проверяем его, если оно чётное, делим на 2, если нечетное, умножаем на 3 и прибавляем 1, и так до тех пор пока число не будет равно 1
*/

var result;
var maxPoint = 1;
var count = 1;
var num = prompt('Type the number, please','');

  num % 2 == 0 ? result = num / 2 : result = num * 3 + 1;
    console.log(result); 
		
    
 while (result > 1) {
	maxPoint = (maxPoint > result) ?  maxPoint : result;
 	result = (result % 2 == 0) ? result / 2 : result * 3 + 1;
 	count++;
    console.log(result);
 }
 
console.log("Max point is " + maxPoint);
console.log(count + " steps");