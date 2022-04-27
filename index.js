//CALCULATIONS
let num1 = ''
let num2 = ''
let operator = ''
let solved;

const add = function (num1, num2) {
  if (num1 % 1 === 0 && num2 % 1 === 0) {
    solved = parseFloat(num1) + parseFloat(num2)
    return solved
  } else {
    solved = parseFloat(num1) + parseFloat(num2)
    return solved.toFixed(2)
  }
};
const subtract = function (num1, num2) {
  if (num1 % 1 === 0 && num2 % 1 === 0) {
    solved = parseFloat(num1) - parseFloat(num2)
    return solved
  } else {
    solved = parseFloat(num1) - parseFloat(num2)
    return solved.toFixed(2)
  }
};

const multiply = function (num1, num2) {
  if (num1 % 1 === 0 && num2 % 1 === 0) {
    solved = parseFloat(num1) * parseFloat(num2)
    return solved
  } else {
    solved = parseFloat(num1) * parseFloat(num2)
    return solved.toFixed(2)
  }
};

const divide = function (num1, num2) {
  if (num2 != 0) {
    if (num1 % 1 === 0 && num2 % 1 === 0 && num1 % num2 === 0) {
      solved = parseFloat(num1) / parseFloat(num2)
      return solved
    } else {
      solved = parseFloat(num1) / parseFloat(num2)
      return solved.toFixed(2)
    }  
  } else {
    return 'Thanos Divided by Zero'
  }
};

const operate = function (operator, num1, num2) {
  if (operator == '+') {
    console.log('addition')
    const solution = (add(num1, num2))
    division.textContent = `${num1} ${operator} ${num2} = ${solution}`
    console.log(solution)
  } else if (operator == '-') {
    console.log('subtraction')
    console.log(subtract(num1, num2))
    const solution = (subtract(num1, num2))
    division.textContent = `${num1} ${operator} ${num2} = ${solution}`
  } else if (operator == '*') {
    console.log('multiplication')
    console.log(multiply(num1, num2))
    const solution = (multiply(num1, num2))
    division.textContent = `${num1} ${operator} ${num2} = ${solution}`
  } else if (operator == '/'){
    console.log('division')
    console.log(divide(num1, num2))
    const solution = (divide(num1, num2))
    division.textContent = `${num1} ${operator} ${num2} = ${solution}`
  } else {
    console.log('error')
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
  console.log('is operator')
  console.log(operator)
}

buttonCE.onclick = () => {
  division.textContent = "" 
  num1 = ''
  num2 = ''
  operator = ''
}

buttonC.onclick = () => division.textContent = ''
buttonEq.onclick = () => operate(operator, num1, num2)
buttonAdd.onclick = () => operatorF('+')
buttonSub.onclick = () => operatorF('-')
buttonDiv.onclick = () => operatorF('/')
buttonMlt.onclick = () => operatorF('*')
button7.onclick = () => numF(7)
button8.onclick = () => numF(8)
button9.onclick = () => numF(9)
button4.onclick = () => numF(4)
button5.onclick = () => numF(5)
button6.onclick = () => numF(6)
button1.onclick = () => numF(1)
button2.onclick = () => numF(2)
button3.onclick = () => numF(3)
button0.onclick = () => numF(0)
buttonDec.onclick = () => numF('.')

// input negatives
// handle consecutive operations
// backspace
// display styling

// decimal DONE
// divide by zero 'Thanos Divided by Zero' DONE
