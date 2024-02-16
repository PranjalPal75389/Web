const toCelcius = document.getElementById("toCelcius");
const toFarenheit = document.getElementById("toFarenheit");
const submitBtn = document.getElementById("submitBtn");
const tempInput = document.getElementById("tempInput");
const result = document.getElementById("result");
let temp;
function convert() {
  if (toFarenheit.checked) {
    temp = Number(tempInput.value);
    temp = (temp * 9) / 5 + 32;
    result.textContent = `temperature in Ferenheit is ` + temp.toFixed(2);
  } else if (toCelcius.checked) {
    temp = Number(tempInput.value);
    temp = (temp - 32) * (5 / 9);
    result.textContent = `temperature in Ferenheit is ` + temp.toFixed(2);
  } else {
    result.textContent = "Select a conversion";
  }
}
