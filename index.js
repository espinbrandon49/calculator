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
    return `${num1} ${operator} ${num2} = Thanos Divided by Zero` 
  }
};

//DEBUG
const review1 = () => {
  console.log('is1' + ' ' + num1, operator, num2, '=' + ' ' + solution)
  console.log(typeof(solution), typeof(num1), typeof(num2))
} 
const review2 = () => {
  console.log('is2' + ' ' + num1, operator, num2, '=' + ' ' + solution)
  console.log(typeof(solution), typeof(num1), typeof(num2))
}

const operate = function (operator, num1, num2) {
  if (num2.length === 0) {
      solution = parseFloat(num1 + num2 + solution) + 0
      operations()
      console.log(num1, num2, operator, solution)
  } else {
    if (typeof(solution) != 'number') {
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
      } else if (operator == '*') {
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
      } else if (operator == '*') {
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
  division.textContent = "0"
  num1 = ''
  num2 = ''
  operator = ''
  solution = ''
  decimal.disabled = false
}

//BACKSPACE BUTTON
const backspace = function (str) {
  const update1 = () => division.textContent = `${num1}`
  const update2 = () => division.textContent = `${num2}`
  const updateOp = () => division.textContent = `${num1}`
  const decFBackspace = () =>  decimal.disabled = false

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

//const numNeg = function (str) {
//  if (operator.length == 0) {
//    num1 *= -1
//    division.textContent = `${num1}`
//  } else {
//    num2 *= -1
//    division.textContent = `${num2}`
//  }
//}

const numNeg = function (str) {
  if (operator.length == 0) {
    if (typeof (num1) == 'string' && num1.length == 0) {
      num1 += str
      //num1.textContent = str
      division.textContent = `${num1}`
    } else {
      num1 *= -1
      //num1.textContent = str
      division.textContent = `${num1}`
    }
  } else {
    if (typeof (num2) == 'string' && num2.length == 0) {
      num2 += str
      //num2.textContent = str
      division.textContent = `${num2}`
    } else {
      num2 *= -1
      //num2.textContent = str
      division.textContent = `${num2}`
    }
  }
};

//BUTTON CLICKS
buttonC.onclick = () => backspace()
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
buttonNeg.onclick = () => numNeg('-')

// add keypress
//THERE ARE NO MORE BUGS
//ONLY WORK ON KEYPRESS THAN FINISHED

