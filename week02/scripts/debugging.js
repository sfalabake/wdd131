// References to HTML elements
const radius1Output = document.getElementById('radius1');
const area1Output = document.getElementById('area1');

const radius2Output = document.getElementById('radius2');
const area2Output = document.getElementById('area2');

const PI = 3.14159;

// First radius
let radius = 10;
area = PI * radius * radius;

radius1Output.textContent = radius;
area1Output.textContent = area;

// Second radius
radius = 20;
area = PI * radius * radius;

radius2Output.textContent = radius;
area2Output.textContent = area;
