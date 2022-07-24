function putThisOnDisplay(val) {
  document.getElementById("result").value += val;
  return val;
}

function operation() {
  let inputValue = document.getElementById("result").value;

  let outputValue = eval(inputValue);
  document.getElementById("result").value = outputValue;

  if (outputValue === undefined){
    document.getElementById("result").value = "Error!";
  }
  
  return outputValue;
}

function clearScreen() {
  document.getElementById("result").value = "";
}

function removeLastEntry() {
  let val = document.getElementById("result").value;
  document.getElementById("result").value = val.slice(0, -1);

  if (val === ""){
    alert('Cannot be empty entry');
  }
}