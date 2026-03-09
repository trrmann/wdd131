const radius1Output = document.getElementById('radius1');
const area1Output = document.querySelector('#area1');
const radius2Output = document.getElementById('radius2');
const area2Output = document.querySelector('#area2');

let area = 0;
//const PI == 3.14159;
const PI = 3.14159;

//const radius = 10;
let radius = 10;
area = PI * radius * radius;
radius1Output.textContent = radius;
area1Output.textContent = area;

radius = 20;
area = PI * radius * radius;
radius2Output.textContent = radius;
area2Output.textContent = area;