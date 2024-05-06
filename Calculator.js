let userInput = document.querySelector("input")
let expression = ""

function calc(num){
    expression = expression + num
    userInput.value = expression
    console.log(expression);
}

function equal(){
    userInput.value = eval(expression)
    console.log(userInput.value);
    expression= ""
}

function erase(){
    expression = ""
    userInput.value = expression
}