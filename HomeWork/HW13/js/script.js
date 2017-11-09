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
  var result = str.toLocaleLowerCase().indexOf(subStr.toLocaleLowerCase()) !== -1 ? true : false;
   return result;
}
checkSubString(outStr, inStr);

// Task 3
function generateRange(min, max, step) {
 var digitArray = [];
  if (step > 0 && min < max) {

   for (var i = min; i <= max; i += step) {
    digitArray.push(i);
   }

  } else
   console.log('Wrong condition');

return digitArray;
}

generateRange(2, 12, 2);

//Task 4
var str1 = ['abrtrt', 'fg', 'dhg', 'jfdhdfdfdf', 'aer', 'rdgdhcth'];
var str2 = ['codewars', 'java', 'javascript'];
var str3 = ['apple', 'cat', 'planet'];
 function cutIt(arr) {
  var j = 0;
  var cutsArr = [];
  var length = arr.length;
  var shortestStr = arr[0].length;

   for (var i = 0; i < length; i++) {
    shortestStr = ( shortestStr < arr[i].length) ? shortestStr : arr[i].length;
   }

   do {
    cutsArr.push(arr[j].substr(0, shortestStr));
    j++; 
   } while (j < length);

   return cutsArr;
 }

console.log(str1);
console.log(cutIt(str1));
console.log(str2);
console.log(cutIt(str2));
console.log(str3); 
console.log(cutIt(str3));

