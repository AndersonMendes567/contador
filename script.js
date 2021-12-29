
const element = document.querySelector('span#value');

const factors = document.getElementsByTagName('input')
factors[0].checked = true

let factor = 1

function changeToFactor1() {
  factor = 1
  factors[1].checked = false
  factors[2].checked = false
}

function changeToFactor10() {
  factor = 10
  factors[0].checked = false
  factors[2].checked = false
}

function changeToFactor100() {
  factor = 100
  factors[0].checked = false
  factors[1].checked = false
}

function defineColor(value) {
  if (value > 0) {
    element.style.color = 'green'
  } else if(value < 0) {
    element.style.color = 'red'
  } else {
    element.style.color = 'black'
  }
}

function increment() {
  let value = parseInt(element.innerText);
  value += factor;
  element.innerText = `${value}`;
  defineColor(value)
}

function decrement() {
  let value = parseInt(element.innerText)
  value -= factor
  element.innerText = `${value}`
  defineColor(value)
}

function reset() {
  value = 0
  element.innerText = `${value}`
  defineColor(value)
}