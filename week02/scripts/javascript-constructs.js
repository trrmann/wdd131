const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

studentReport.filter(grade => grade < 30).forEach(grade => { console.log(`${grade}`) });
//Write a for loop that will iterate through the studentReport array
//      and print to the console the current array value if it is below 30.
for (let index = 0; index < studentReport.length; index++) {
    if (studentReport[index] < 30) {
        console.log(`${studentReport[index]}`);
    }
}
//Repeat the previous programming snippet by using a while loop.
let count = 0;
while (count < studentReport.length) {
    if (studentReport[count] < 30) {
        console.log(`${studentReport[count]}`);
    }
    count++;
}
//Repeat the previous programming snippet by using a forEach loop.
studentReport.forEach(grade => {
    if (grade < 30) {
        console.log(`${grade}`)    
    }
});
//Repeat the previous programming snippet by using a for...in loop.
for ((index) in studentReport) {
    if (studentReport[index] < 30) {
        console.log(`${studentReport[index]}`);
    }    
}
//Use any type of loop to dynamically produce the day names (Monday, Tuesday, Wednesday, etc.)
//      for the next DAYS days starting today.
function dowStringFromDate(date, days) {
    date.setDate(date.getDate() + days);
    return date.toLocaleDateString(undefined, { weekday: 'long' });    
}
Array.from({ length: DAYS + 1 }, (_, index) => index).map(days => {return dowStringFromDate(new Date(), days);}).forEach(dow => { console.log(`${dow}`) });


const numberOfDays = 6; // variable days in future setting
const options = { weekday: "long" }; // Intl.DateTimeFormat vs. short, etc.
                                
// BEGIN
const today = new Date();
// TODAY test output
let todaystring = new Intl.DateTimeFormat("en-US", options).format(today);
document.getElementById("today").innerHTML = `Today is <strong>${todaystring}</strong>`;
                                
// next n days
for (let i = 1; i <= numberOfDays; i++) {
    const nextday = new Date();
    nextday.setDate(today.getDate() + i);
    let nextdaystring = new Intl.DateTimeFormat("en-US", options).format(nextday);
    const item = document.createElement("li");
    // list item
    item.textContent = nextdaystring;
    document.querySelector("ul").appendChild(item);
}