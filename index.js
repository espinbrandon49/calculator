//CALCULATIONS
let num1 = ''
let num2 = ''
let operator = ''

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

const numF = function (num) {
  if (operator.length == 0) {
    num1 += num
    num1.textContent = num
    division.textContent = `${num1}`
    console.log('is num1F')
    console.log(num1)
  } else {
    num2 += num
    num2.textContent = num
    division.textContent = `${num1} ${operator} ${num2}`
    console.log('is num2F')
    console.log(num1, operator, num2)
  }
}

const operatorF = function (str) {
  operator += str
  operator.textContent = str
  division.textContent = `${num1} ${operator}` 
  console.log('is operator+')
  console.log(operator)
}

buttonC.onclick = () => {
  division.textContent = "" 
  num1 = ''
  num2 = ''
  operator = ''
}

buttonCE.onclick = () => division.textContent = ''
buttonEq.onclick = () => division.textContent = '='
buttonAdd.onclick = () => operatorF('+')
buttonSub.onclick = () => operatorF('-')
buttonDec.onclick = () => division.textContent = ('.')
buttonDiv.onclick = () => operatorF('/')
buttonMlt.onclick = () => operatorF('*')
button7.onclick = () => numF(7)
button8.onclick = () => numF(8)
button9.onclick = () => numF(9)
//button4.onclick = () => numF(4)
//button5.onclick = () => numF(5)
//button6.onclick = () => numF(6)
//button1.onclick = () => numF(1)
//button2.onclick = () => numF(2)
//button3.onclick = () => numF(3)
//button0.onclick = () => numF(0)

