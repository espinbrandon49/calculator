// OPERATIONS
let num1 = ''
let num2 = ''
let operator = ''
let solution;
let solved;

const add = function (num1, num2) {
  if (num1 % 1 === 0 && num2 % 1 === 0) {
    solved = parseFloat(num1) + parseFloat(num2)
    return solved
  } else {
    solved = parseFloat(num1) + parseFloat(num2)
    return parseFloat(solved.toFixed(2))
  }
};
const subtract = function (num1, num2) {
  if (num1 % 1 === 0 && num2 % 1 === 0) {
    solved = parseFloat(num1) - parseFloat(num2)
    return solved
  } else {
    solved = parseFloat(num1) - parseFloat(num2)
    return parseFloat(solved.toFixed(2))
  }
};

const multiply = function (num1, num2) {
  if (num1 % 1 === 0 && num2 % 1 === 0) {
    solved = parseFloat(num1) * parseFloat(num2)
    return solved
  } else {
    solved = parseFloat(num1) * parseFloat(num2)
    return parseFloat(solved.toFixed(2))
  }
};

const divide = function (num1, num2) {
  if (num2 != 0) {
    if (num1 % 1 === 0 && num2 % 1 === 0 && num1 % num2 === 0) {
      solved = parseFloat(num1) / parseFloat(num2)
      return solved
    } else {
      solved = parseFloat(num1) / parseFloat(0 + num2)
      return parseFloat(solved.toFixed(2))
    }
  } else {
    return `${num1} ${operator} ${num2} = Thanos Divided by Zero` 
  }
};

const operations = () => {
  num1 = ''
  num2 = ''
  operator = ''
} 

const operate = function (operator, num1, num2) {
  if (num2.length === 0) {
      solution = parseFloat(num1 + num2 + solution) + 0
      operations()
  } else {
    if (typeof(solution) != 'number') {
      if (operator == '+') {
        solution = (add(num1, num2))
        division.textContent = `${solution}`
        operations()
      } else if (operator == '-') {
        solution = (subtract(num1, num2))
        division.textContent = `${solution}`
        operations()
      } else if (operator == '*') {
        solution = (multiply(num1, num2))
        division.textContent = `${solution}`
        operations()
      } else if (operator == '/') {
        solution = (divide(num1, num2))
        division.textContent = `${solution}`
        operations()
      } else {
        console.log('error')
      }
    } else {
      if (operator == '+') {
        solution = (add(solution, num2))
        division.textContent = `${solution}`
        operations()
      } else if (operator == '-') {
        solution = (subtract(solution, num2))
        division.textContent = `${solution}`
        operations()
      } else if (operator == '*') {
        solution = (multiply(solution, num2))
        division.textContent = `${solution}`
        operations()
      } else if (operator == '/') {
        solution = (divide(solution, num2))
        division.textContent = `${solution}`
        operations()
      } else {
        console.log('error')
      }
    }
  }
}

//BUTTONS
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
const buttonNeg = document.querySelector('.negative');

// NUMBER BUTTONS
const numF = function (num) {
  if (operator.length == 0) {
    num1 += num
    num1.textContent = num
    division.textContent = `${num1}`
  } else {
    num2 += num
    num2.textContent = num
    division.textContent = `${num2}`
  }
}
// OPERATOR BUTTONS
const operatorF = function (str) {
  if (operator.length == 0) {
    operator += str
    operator.textContent = str
  } else {
    operate(operator, num1, num2)
    operator += str
    operator.textContent = str
  }
}

// CLEAR EVERYTHING BUTTON
buttonCE.onclick = () => {
  division.textContent = ""
  num1 = ''
  num2 = ''
  operator = ''
  solution = ''
}

//BACKSPACE BUTTON
function update1() {
  division.textContent = `${num1}`
}
function update2() {
  division.textContent = `${num2}`
}
function updateOp() {
  division.textContent = `${num1}`
}
const backspace = function (str) {
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
// ADD NEGATIVE BUTTON
const numNeg = function (str) {
  if (operator.length == 0) {
    if (typeof (num1) == 'string' && num1.length == 0) {
      num1 += str
      num1.textContent = str
      division.textContent = `${num1}`
    } else {
      num1 *= -1
      num1.textContent = str
      division.textContent = `${num1}`
    }
  } else {
    if (typeof (num2) == 'string' && num2.length == 0) {
      num2 += str
      num2.textContent = str
      division.textContent = `${num2}`
    } else {
      num2 *= -1
      num2.textContent = str
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

//DEBUG
const review1 = () => {
  console.log('is1' + ' ' + num1, operator, num2, '=' + ' ' + solution)
  console.log(typeof(solution), typeof(num1), typeof(num2))
} 

const review2 = () => {
  console.log('is2' + ' ' + num1, operator, num2, '=' + ' ' + solution)
  console.log(typeof(solution), typeof(num1), typeof(num2))
}



// don't allow multiple decimals
// handle operator pressed first ('+' num = NaN)
// add keyboard support
// style display 
// make a placeholder 0
// refactor, esp remove some functions and logics no longer needed

// handle multiple '=' (6+3 == crash) DONE 
// handle if equal is used with only 1 operand and an operator DONE
// handle if equal is used with only an operator DONE
// handle if equal is used with multiple operators DONE
// handle more than 2 operands  DONE 
// Negator Bug DONE
// Backspace bug DONE
// handle consecutive operations DONE
// handle if equal is used with only 1 operand DONE
// input negatives DONE
// handle if equal is used only DONE
// backspace DONE
// decimal DONE
// divide by zero 'Thanos Divided by Zero' DONE
// if float only has 1 or less decimals DONE

const decimal = document.getElementById('decimal') 
const decimalOff = decimal.addEventListener("click", () => {decimal.  disabled = true })
const decimalOn = decimal.addEventListener("click", () => {decimal.  disabled = false })
  
console.log(document.getElementById('decimal').attribute)
