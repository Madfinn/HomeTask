// Task 1
var userInput = prompt("Type the date (Year-Month-Date Hours:Minutes)", "1970-01-01 01:00");
function dateNow(date) {
    var dateInMs = Date.parse(date);
    var currentDate = Date.now();
    var diff;
    if ((dateInMs >= (currentDate - 7200000)) && (dateInMs <= (currentDate + 7200000))) {
        console.log("Сейчас");
        return;
    } else if (currentDate < dateInMs) {
        diff = Math.round((dateInMs - currentDate) / 3600000);
        console.log("Осталось " + diff + " часов");
        return;
    } else if (currentDate > dateInMs) {
        diff = Math.round((currentDate - dateInMs) / 3600000);
        console.log("Прошло " + diff + " часов");
        return;
    }
}
dateNow(userInput);

//Task 2
var monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var i = +prompt("Type number from 1 to 12");
var monthName;
function monthNumber(userInput) {
    var result = monthArray[userInput - 1];
    return result;
}

try {
    if (i > 0 && i <= 12) {
        monthName = monthNumber(i);
    } else {
        throw "Wrong range! Number must be from 1 to 12!";
    }
} catch (err) {
    monthName = undefined;
    console.log("ERROR: " + err);
}
console.log("Month is " + monthName);
