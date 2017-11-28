(function(exports) {
  "use strict";

  /*
   1. Write a JavaScript function to check whether an `input` is an array or not.
   Test Data :
   console.log(isArray('w3resource'));
   console.log(isArray([1, 2, 4, 0]));
   false
   true
   */
  function isArray(item) {
    return item instanceof Array;
  }

  /*
   2. Write a JavaScript function to clone an array.
   Test Data :
   console.log(cloneArray([1, 2, 4, 0]));
   console.log(cloneArray([1, 2, [4, 0]]));
   var newArray = cloneArray('Not an Array');
   [1, 2, 4, 0]
   [1, 2, [4, 0]]
   Error: Only Arrays allowed!
   */
  function cloneArray(array) {

    if (!isArray(array)) {
        throw new Error ('Error: Only Arrays allowed!');
    }
    var clone = array.slice();
    for (var i = 0; i < clone.length; i++) {
      clone[i] = (isArray(clone[i])) ? cloneArray(clone[i]) : clone[i];
    }
    
   return clone; 
  }

  /*
   3. Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
   Sample array : 'Not array'
   Expected result : Error: Only Arrays allowed!
   Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
   Expected result : [15, -22, 47]
   */
  function removeFalse(array) {

    if (!isArray(array)) {
        throw new Error('Error: Only Arrays allowed!');
    }
    var cleanedArray = [];
    var i = 0;
    while (i < array.length) {

        switch (array[i]) {
        case null:
            array.splice(i, 1);
            break;
        case 0:
            array.splice(i, 1);
            break;
        case '':
            array.splice(i, 1);
            break;
        case false:
            array.splice(i, 1);
            break;
        case undefined:
            array.splice(i, 1);
            break;
        case NaN:
            array.splice(i, 1);
            break;
        }
        cleanedArray.push(array[i]);
        i++;

    }

    return cleanedArray;
  }



  exports.arrays = {
    isArray              : isArray,
    cloneArray           : cloneArray,
    removeFalse          : removeFalse
  };
})(this);
