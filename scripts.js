let input = '';
let result = '';

function handleButtonClick(value) {
  input += value;
  document.getElementById('input').innerText = input;
}

function calculateResult() {
  try {
    result = eval(input).toString();
    document.getElementById('result').innerText = result;
  } catch (error) {
    document.getElementById('result').innerText = 'Error';
  }
}

function clearInput() {
  input = '';
  result = '';
  document.getElementById('input').innerText = '';
  document.getElementById('result').innerText = '';
}
