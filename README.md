# calculator
TOP project where spelling doesn't count 
 Why isn't my decimal eventListener following the numF() like the digits are??  The decimal is repeating on keydown while it disables as expected with clicks.
 
 click ('.') = decimal displayed and decimal disabled, click ('.') again = no response b/c button is disabled [HAPPY WITH THIS]
 keydown ('.') = decimal displayed, keydown ('.') again, decimal displays :( [makes me sad]
 
 //DECIMAL KEYDOWN
 function checkKeyPressDecimal(key) {
  if (key.keyCode == '190') {
      console.log('reading')
      numF('.')
      console.log(key)
    }
  }

//DECIMAL EVENT LISTENER
window.addEventListener('keydown', checkKeyPressDecimal, false)

//NUMBER (includes decimal) FUNCTION
const numF = function (num) {
  const decF1 = () => num1.indexOf('.') != -1 ? decimal.disabled = true : decimal.disabled = false
  const decF2 = () => num2.indexOf('.') != -1 ? decimal.disabled = true : decimal.disabled = false
  if (operator.length == 0) {
    num1 += num
    num1.textContent = num
    division.textContent = `${num1}`
    review1()
    decF1()
  } else {
    num2 += num
    num2.textContent = num
    division.textContent = `${num2}`
    review2()
    decF2()
  }
}
