var firstInput;
var secondInput;
var result = document.getElementById("result");

function handleChange() {
  let firstInputbox = document.getElementById("first-input").value;
  let secondInputBox = document.getElementById("second-input").value;
  firstInput = firstInputbox;
  secondInput = secondInputBox;
}

function add() {
  result.innerHTML = Number(firstInput) + Number(secondInput);
}
function sub() {
  result.innerHTML = firstInput - secondInput;
}
function mul() {
  result.innerHTML = firstInput * secondInput;
}
function div() {
  result.innerHTML = firstInput / secondInput;
}
function mod() {
  result.innerHTML = firstInput % secondInput;
}
