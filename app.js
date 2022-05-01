//DEBUG
const review1 = () => {
  console.log('is1' + ' ' + num1, operator, num2, '=' + ' ' + solution)
  console.log(typeof (solution), typeof (num1), typeof (num2))
}
const review2 = () => {
  console.log('is2' + ' ' + num1, operator, num2, '=' + ' ' + solution)
  console.log(typeof (solution), typeof (num1), typeof (num2))
}

// OPERATIONS
let num1 = ''
let num2 = ''
let operator = ''
let solution;
let solved;
const operations = () => {
  num1 = ''
  num2 = ''
  operator = ''
  decimal.disabled = false
}

const add = function (num1, num2) {
  if (num1 % 1 === 0 && num2 % 1 === 0) {
    solved = parseFloat(num1 * 1) + parseFloat(num2)
    return solved
  } else {
    solved = parseFloat(num1 * 1) + parseFloat(num2)
    return parseFloat(solved.toFixed(2))
  }
};

const subtract = function (num1, num2) {
  if (num1 % 1 === 0 && num2 % 1 === 0) {
    solved = parseFloat(num1 - 0) - parseFloat(num2)
    return solved
  } else {
    solved = parseFloat(num1 - 0) - parseFloat(num2)
    return parseFloat(solved.toFixed(2))
  }
};

const multiply = function (num1, num2) {
  if (num1 % 1 === 0 && num2 % 1 === 0) {
    solved = parseFloat(num1 * 1) * parseFloat(num2)
    return solved
  } else {
    solved = parseFloat(num1 * 1) * parseFloat(num2)
    return parseFloat(solved.toFixed(2))
  }
};

const divide = function (num1, num2) {
  if (num2 != 0) {
    if (num1 % 1 === 0 && num2 % 1 === 0 && num1 % num2 === 0) {
      solved = parseFloat(num1 / 1) / parseFloat(num2)
      return solved
    } else {
      solved = parseFloat(num1 / 1) / parseFloat(0 + num2)
      return parseFloat(solved.toFixed(2))
    }
  } else {
    return `${num1} ${operator} ${num2}  /Thanos Divided by Zero`
  }
};

const operate = function (operator, num1, num2) {
  if (num2.length === 0) {
    solution = parseFloat(num1 + num2 + solution) + 0
    operations()
    console.log(num1, num2, operator, solution)
  } else {
    if (typeof (solution) != 'number') {
      if (operator == '+') {
        solution = (add(num1, num2))
        division.textContent = `${solution}`
        operations()
        console.log(num1, num2, operator, solution)
      } else if (operator == '-') {
        solution = (subtract(num1, num2))
        division.textContent = `${solution}`
        operations()
        console.log(num1, num2, operator, solution)
      } else if (operator == 'x') {
        solution = (multiply(num1, num2))
        division.textContent = `${solution}`
        operations()
        console.log(num1, num2, operator, solution)
      } else if (operator == '/') {
        solution = (divide(num1, num2))
        division.textContent = `${solution}`
        operations()
        console.log(num1, num2, operator, solution)
      } else {
        console.log('error')
      }
    } else {
      if (operator == '+') {
        solution = (add(solution, num2))
        division.textContent = `${solution}`
        operations()
        console.log(num1, num2, operator, solution)
      } else if (operator == '-') {
        solution = (subtract(solution, num2))
        division.textContent = `${solution}`
        operations()
        console.log(num1, num2, operator, solution)
      } else if (operator == 'x') {
        solution = (multiply(solution, num2))
        division.textContent = `${solution}`
        operations()
        console.log(num1, num2, operator, solution)
      } else if (operator == '/') {
        solution = (divide(solution, num2))
        division.textContent = `${solution}`
        operations()
        console.log(num1, num2, operator, solution)
      } else {
        console.log('error')
      }
    }
  }
}

//BUTTONS
const division = document.querySelector('.display');
const divCont = division.textContent;
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
const decimal = document.getElementById('decimal')
const buttonDiv = document.querySelector('.divide');
const buttonMlt = document.querySelector('.multiply');
const buttonNeg = document.querySelector('.negative');

// NUMBER BUTTONS

const numF = function (num) {
  const decF1 = () => num1.indexOf('.') != -1 ? decimal.disabled = true : decimal.disabled = false
  const decF2 = () => num2.indexOf('.') != -1 ? decimal.disabled = true : decimal.disabled = false
  if (operator.length == 0) {
    num1 += num
    num1.textContent = num
    division.textContent = `${num1}`

    decF1()
  } else {
    num2 += num
    num2.textContent = num
    division.textContent = `${num2}`

    decF2()
  }
}

// OPERATOR BUTTONS
const operatorF = function (str) {
  if (operator.length == 0) {
    operator += str
    operator.textContent = str
    decimal.disabled = false
  } else {
    operate(operator, num1, num2)
    operator += str
    operator.textContent = str
    decimal.disabled = false
  }
}

// CLEAR EVERYTHING BUTTON
buttonCE.onclick = () => {
  division.textContent = "0."
  num1 = ''
  num2 = ''
  operator = ''
  solution = ''
  decimal.disabled = false
}

// BACKSPACE BUTTON
const backspace = function (str) {
  const update1 = () => division.textContent = `${num1}`
  const update2 = () => division.textContent = `${num2}`
  const updateOp = () => division.textContent = `${num1}`
  const decFBackspace = () => decimal.disabled = false

  if (num1.indexOf(".") == num1.length - 1 || num2.indexOf(".") == num2.length - 1) {
    if (operator.length == 0) {
      str = `${num1}`
      decFBackspace()
      let newStr = str.slice(0, -1)
      num1 = newStr
      update1()
    } else if (operator.length != 0 && num1.length != 0 && num2.length == 0) {
      str = `${operator}`
      decFBackspace()
      let newStr = str.slice(0, -1)
      operator = newStr
      updateOp()
    } else {
      str = `${num2}`
      decFBackspace()
      let newStr = str.slice(0, -1)
      num2 = newStr
      update2()
    }
  } else {
    if (operator.length == 0) {
      str = `${num1}`
      let newStr = str.slice(0, -1)
      num1 = newStr
      update1()
    } else if (operator.length != 0 && num1.length != 0 && num2.length == 0) {
      str = `${operator}`
      let newStr = str.slice(0, -1)
      operator = newStr
      updateOp()
    } else {
      str = `${num2}`
      let newStr = str.slice(0, -1)
      num2 = newStr
      update2()
    }
  }
}

// ADD NEGATIVE BUTTON
const numNeg = function (str) {
  if (operator.length == 0) {
    if (typeof (num1) == 'string' && num1.length == 0) {
      division.textContent = `${num1}`
    } else {
      num1 *= -1
      division.textContent = `${num1}`
    }
  } else {
    if (typeof (num2) == 'string' && num2.length == 0) {
      division.textContent = `${num2}`
    } else {
      num2 *= -1
      division.textContent = `${num2}`
    }
  }
};


const checkKeyPress7 = (key) => (key.keyCode == '55') ? numF(7) : 0
const checkKeyPress8 = (key) => (key.keyCode == '56') ? numF(8) : 0
const checkKeyPress9 = (key) => (key.keyCode == '57') ? numF(9) : 0
const checkKeyPress4 = (key) => (key.keyCode == '52') ? numF(4) : 0
const checkKeyPress5 = (key) => (key.keyCode == '53') ? numF(5) : 0
const checkKeyPress6 = (key) => (key.keyCode == '54') ? numF(6) : 0
const checkKeyPress1 = (key) => (key.keyCode == '49') ? numF(1) : 0
const checkKeyPress2 = (key) => (key.keyCode == '50') ? numF(2) : 0
const checkKeyPress3 = (key) => (key.keyCode == '51') ? numF(3) : 0
const checkKeyPress0 = (key) => (key.keyCode == '48') ? numF(0) : 0
const checkKeyPressS = (key) => (key.keyCode == '109') ? numF(0) : 0

function keyAdd (e) {
  let x = e.keyCode;
  if (x == '187') {
    operatorF('+')
  }
}
window.addEventListener('keydown', keyAdd, false)

function keySubtract (e) {
  let x = e.keyCode;
  if (x == '189') {
    operatorF('-')
  }
}
window.addEventListener('keydown', keySubtract, false)

function keyMulti (e) {
  let x = e.keyCode;
  if (x == '88') {
    operatorF('x')
  }
}
window.addEventListener('keydown', keyMulti, false)

function keyDivi (e) {
  let x = e.keyCode;
  if (x == '191') {
    operatorF('/')
  }
}
window.addEventListener('keydown', keyDivi, false)

function keyEqui (e) {
  let x = e.keyCode;
  if (x == '61') {
    operate(operator, num1, num2)
  }
}
window.addEventListener('keydown', keyEqui, false)

function keyBacki (e) {
  let x = e.keyCode;
  if (x == '67') {
    backspace()
  }
}
window.addEventListener('keydown', keyBacki, false)

function keyDeleti (e) {
  let x = e.keyCode;
  if (x == '46') {
      division.textContent = "0."
      num1 = ''
      num2 = ''
      operator = ''
      solution = ''
      decimal.disabled = false
  }
}
window.addEventListener('keydown', keyDeleti, false)

buttonC.onclick = () => backspace() //67
buttonEq.onclick = () => operate(operator, num1, num2)
buttonAdd.onclick = () => operatorF('+') // 187
buttonSub.onclick = () => operatorF('-') // 189
buttonDiv.onclick = () => operatorF('/') // 191
buttonMlt.onclick = () => operatorF('x') // 56/88

button7.onclick = () => numF(7)
window.addEventListener('keydown', checkKeyPress7, false)
button8.onclick = () => numF(8)
window.addEventListener('keydown', checkKeyPress8, false)
button9.onclick = () => numF(9)
window.addEventListener('keydown', checkKeyPress9, false)
button4.onclick = () => numF(4)
window.addEventListener('keydown', checkKeyPress4, false)
button5.onclick = () => numF(5)
window.addEventListener('keydown', checkKeyPress5, false)
button6.onclick = () => numF(6)
window.addEventListener('keydown', checkKeyPress6, false)
button1.onclick = () => numF(1)
window.addEventListener('keydown', checkKeyPress1, false)
button2.onclick = () => numF(2)
window.addEventListener('keydown', checkKeyPress2, false)
button3.onclick = () => numF(3)
window.addEventListener('keydown', checkKeyPress3, false)
button0.onclick = () => numF(0)
window.addEventListener('keydown', checkKeyPress0, false)
buttonDec.onclick = () => numF('.')
//window.addEventListener('keypress', checkKeyPressDecimal, false)
buttonNeg.onclick = () => numNeg('-')
