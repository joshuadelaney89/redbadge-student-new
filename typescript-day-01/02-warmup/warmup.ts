let input1 = document.getElementById("number1") as HTMLInputElement;
let input2 = <HTMLInputElement>document.getElementById("number2");

let button = document.getElementById("btn");

button.addEventListener("click", () => {
  console.log(addNumbers(+input1.value, +input2.value));
});

function addNumbers(num1: number, num2: number) {
  return num1 + num2;
}