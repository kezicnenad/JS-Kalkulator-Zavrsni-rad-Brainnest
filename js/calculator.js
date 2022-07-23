function handleDisplay(val) {
  document.getElementById("result").value += val;
  return val;
}

function sum() {
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