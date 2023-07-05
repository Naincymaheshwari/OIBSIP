function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function calculateResult() {
    const displayValue = document.getElementById('display').value;
    const result = eval(displayValue);
    document.getElementById('display').value = result;
  }

  function del() {
    document.getElementById('display').value = value(0,value.length-1)
  }
  