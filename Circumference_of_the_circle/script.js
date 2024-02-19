// Circumference of the circle
const submitbutton = document.getElementById("submitbutton");
const result = document.getElementById("result");
const PI = 3.14;
let radius, circumference;
submitbutton.onclick = function () {
  radius = document.getElementById("radiusinput").value;
  if (radius == "") {
    result.textContent = "RADIUS CAN'T BE EMPTY!!!";
    return;
  }
  if (isNaN(radius)) {
    result.textContent = "NO LETTERS ONLY NUMBERS!!!";
    return;
  }
  if(radius<=0){
    result.textContent ="radius can't be zero or negative";
    return;
  } else {
    circumference = 2 * PI * radius;
    result.textContent = "circumference =" + circumference.toFixed(2) + "cm";
  }
};
