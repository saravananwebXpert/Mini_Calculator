// var heading = document.getElementById("heading");
// heading.innerText = "Hello there!";
// console.log(heading);

const num1 = document.getElementById("input-num1").value;
const num2 = document.getElementById("input-num2").value;
const add = document.getElementById("add");
const sub = document.getElementById("sub");
const mul = document.getElementById("mul");
const div = document.getElementById("div");
let response = document.getElementById("response");

add.addEventListener("click", () => {
  response.innerText = Number(num1) + Number(num2);
});
sub.addEventListener("click", () => {
  response.innerText = Number(num1) - Number(num2);
});
mul.addEventListener("click", () => {
  response.innerText = Number(num1) * Number(num2);
});
div.addEventListener("click", () => {
  response.innerText = Number(num1) / Number(num2);
});

//document.getElementById()
let first = document.getElementById("first");
first.style.color = "orange";

let fourth = document.getElementById("fourth");
fourth.style.color = "red";

//getElementsByClassName()
let para = document.getElementsByClassName("para");
para.style.color = "red";

//getElementsByTagName()

//querySelector()
document.querySelector("h1").style.backgroundColor = "red";

//querySelectorAll()
document.querySelectorAll("h2").style.backgroundColor = "blue";
