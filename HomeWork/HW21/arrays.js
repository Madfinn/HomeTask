(function(exports) {
  "use strict";

  /*
   1. Write a simple JavaScript program to join all elements of the following array into a string.
   Set second argument as choisen separator (e.g. - ";" , "," , "+"). By default must be ",".
   Sample array : myColor = ["Red", "Green", "White", "Black"];
   Expected Output :
   "Red,Green,White,Black"
   "Red,Green,White,Black"
   "Red+Green+White+Black"
   */
  function join(array, separator) {

    if (separator === undefined) {
      separator = ',';
     }

     var index = 0;
     var currentElement = array[index];
     var str=''; 
     var result = array.reduce(function(str, currentElement, index) {
      currentElement = (currentElement === undefined || currentElement === null) ? '' : currentElement;
      return (index === 0) ? currentElement : str + separator + currentElement;
      }, ',');  

   return result;   
  } 

  /*
   2. Write a JavaScript program to sort the items of an array.
   Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
   Sample Output : -4,-3,1,2,3,5,6,7,8
   */
  function sort(array) {
    for (var i =0; i < array.length - 1;i++){
      for (var j = 0; j < array.length - 1 - i; j++) {
        if (array[j + 1] < array [j]) {
          var x = array[j + 1];
          array[j + 1] = array[j];
          array[j] = x;
        }
      }
    }
     return array;
  } 
  
  /*
   3. Write a JavaScript program which accept a string as input and swap the case of each character.
   For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
   */
  function swapLetter(string) {
    if (typeof string !== "string") {
      throw new Error ('Error: Only strings allowed!');
    }

    var swapString = "";
    for (var i = 0; i < string.length; i++) {
      swapString = (string[i]===string[i].toUpperCase()) ? swapString + string[i].toLowerCase() : swapString + string[i].toUpperCase();
    }
   return swapString;
  }

  exports.arrays = {
    join              : join,
    sort              : sort,
    swapLetter        : swapLetter
  };
})(this);
