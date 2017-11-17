// Task 1
var userInput = prompt("Type the date (Year-Month-Date Hours:Minutes)","1970-01-01 01:00");
function dateNow(date) {
var dateInMs = Date.parse(date);
var currentDate = Date.now();
var diff;
  if ((dateInMs >= (currentDate - 7200000)) && (dateInMs <= (currentDate + 7200000))){
      console.log("Сейчас");
return;
} 	else if (currentDate < dateInMs) {
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

