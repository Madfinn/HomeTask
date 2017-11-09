// Task 1
var test = prompt('Введите строку','abcenglishdef');

function checkString(str) {
 var result = str.toLocaleLowerCase().indexOf('english') !== -1 ? true : false;
  return result;
}
checkString(test);

// Task 2
var outStr = prompt('Введите строку','abcenglishdef');
var inStr = 'english';
 function checkSubString (str, subStr) {
  var result = str.toLocaleLowerCase().indexOf(subStr) !== -1 ? true : false;
   return result;
}
checkSubString(outStr, inStr);

// Task 3
function generateRange(min, max, step) {
 if (step > 0 && min < max) {

  for (var i = min; i <= max; i += step) {
   console.log( [i] );
  }

 } else
  console.log('Wrong condition');
}
generateRange(2, 12, 2);

//Task 4
var str1 = ['abrtrt', 'fg', 'dhg', 'jfdhdfdfdf', 'aer', 'rdgdhcth'];
var str2 = ['codewars', 'java', 'javascript'];
var str3 = ['apple', 'cat', 'planet'];
 function cutIt(arr) {
  console.log(arr);
  var shortestStr = arr[0].length;
   for ( var i = 0; i < arr.length; i++) {
    shortestStr = ( shortestStr < arr[i].length) ? shortestStr : arr[i].length;
    //console.log(shortestStr);
   }
   var i =0;
   do {
    var result = arr[i].substr(0, shortestStr);
    i++; 
    console.log(result);
   } while (i < arr.length);
 }
 
console.log('____START_____');
cutIt(str1);
console.log('____START_____');
cutIt(str2);
console.log('____START_____');
cutIt(str3);
