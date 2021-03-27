var input1 = document.getElementById("number1");
var input2 = document.getElementById("number2");
var button = document.getElementById("btn");
button.addEventListener("click", function () {
    console.log(addNumbers(+input1.value, +input2.value));
});
function addNumbers(num1, num2) {
    return num1 + num2;
}
