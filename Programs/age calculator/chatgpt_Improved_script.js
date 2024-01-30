const ageInput = document.getElementById("ageInput");
const result = document.getElementById("result");
const Btn = document.getElementById("Btn");
function calculateAge() {
  let birthDateValue = ageInput.value;

  if (!birthDateValue) {
    result.textContent = "Please Select Date of Birth";
    result;
  }
  const currentDate = new Date();
  const birthDate = new Date(birthDateValue);

  if (isNaN(birthDate.getTime())) {
    result.textContent = "Please select a vaid date";
    return;
  }

  if (currentDate < birthDate) {
    result.textContent = `Please Enter your Correct DOB`;
    return 0;
  }

  let age = currentDate.getFullYear() - birthDate.getFullYear();

  if (currentDate.getMonth() < birthDate.getMonth()) {
    age -= 1;
  }
  console.log(age);
  result.textContent = `You are ${age} years old`;
}
