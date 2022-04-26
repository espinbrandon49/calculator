//CALCULATIONS
let num1 = ''
let num2 = ''
let operator = '+';
const add = function (num1, num2) {
  return num1 + num2
};

const subtract = function (num1, num2) {
  return num1 - num2
};

const multiply = function (num1, num2) {
  return num1 * num2
};

const divide = function (num1, num2) {
  return num1 / num2
};

const operate = function (operator, num1, num2) {
  if (operator == '+') {
    return add(num1, num2)
  } else if (operator == '-') {
    return subtract(num1, num2)
  } else if (operator == '*') {
    return multiply(num1, num2)
  } else if (operator == '/'){
    return divide(num1, num2)
  } else {
    return "Error"
  }
}

//DISPLAY
const division = document.querySelector('.display')

const buttonC = document.querySelector('.clear');
const buttonCE = document.querySelector('.clear-everything');
const buttonEq = document.querySelector('.equal');
const button7 = document.querySelector('.seven');
const button8 = document.querySelector('.eight');
const button9 = document.querySelector('.nine');
const buttonAdd = document.querySelector('.addition');
const button4 = document.querySelector('.four');
const button5 = document.querySelector('.five');
const button6 = document.querySelector('.six');
const button1 = document.querySelector('.one');
const button2 = document.querySelector('.two');
const button3 = document.querySelector('.three');
const buttonSub = document.querySelector('.subtract');
const button0 = document.querySelector('.zero');
const buttonDec = document.querySelector('.decimal');
const buttonDiv = document.querySelector('.divide');
const buttonMlt = document.querySelector('.multiply');

division.textContent = `${num1} ${num2}`
const numF = function (num) {
  if (num1 == typeof('number')){
    num2 += num
    division.innerText = `${num2}`
  } else {
    num1 += num
    division.innerText = `${num1}`
  }
}

buttonC.onclick = () => {
  division.textContent = "" 
  num1 = ''
  num2 = ''
}

//buttonC.onclick = () => division.textContent = "" 
buttonCE.onclick = () => division.textContent = ''
buttonEq.onclick = () => division.innerText = '='
button7.onclick = () => numF(7)
button8.onclick = () => numF(8)
button9.onclick = () => numF(9)
buttonAdd.onclick = () => division.innerText = '+'
button4.onclick = () => division.innerText = 4
button5.onclick = () => division.innerText = 5
button6.onclick = () => division.innerText = 6
button1.onclick = () => division.innerText = 1
button2.onclick = () => division.innerText = 2
button3.onclick = () => division.innerText = 3
buttonSub.onclick = () => division.innerText = '-'
button0.onclick = () => division.innerText = 0
buttonDec.onclick = () => division.innerText = '.'
buttonDiv.onclick = () => division.innerText = '/'
buttonMlt.onclick = () => division.innerText = 'x'



console.log(num1)
console.log(num2)