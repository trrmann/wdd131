const activity1element = document.querySelector("#activity1");
const activity2element = document.querySelector("#activity2");

function calculate(a, b, callback) {
    callback(a + b);
}
function displayResult(result) {
    console.log(`the result is: ${result}`);
    activity1element.textContent = `the result is: ${result}`;
}
calculate(2, 3, displayResult);

function fetchData(callback) {
    setTimeout(() => {
        callback('Data has been mock fetched!');
    }, 2000);
}
function processData(data) {
    console.log("Data received:", data);
    activity2element.textContent = `Data received: ${data}`;
}
fetchData(processData);