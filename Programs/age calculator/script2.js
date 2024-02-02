const ageInput = document.getElementById("ageInput");
const result = document.getElementById("result");
const calculateBtn = document.getElementById("calculateBtn");

function calculateAge() {
  let birthdateValue = ageInput.value;

  if (!birthdateValue) {
    result.textContent = "Please Select Date of Birth";
    return;
  }

  const currentDate = new Date();
  const birthdate = new Date(birthdateValue);

  if (isNaN(birthdate.getTime())) {
    result.textContent = "Invalid Date";
    return;
  }

  if (currentDate < birthdate) {
    result.textContent = "Please Enter your Correct DOB";
    return;
  }

  let ageInMilliseconds = currentDate - birthdate;
  let years = Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));
  let months = Math.floor((ageInMilliseconds % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000));
  let days = Math.floor((ageInMilliseconds % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));
   let hours = Math.floor((ageInMilliseconds % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  result.textContent = `You are ${years} years, ${months} months, ${days} days and ${hours} hours old`;
}

calculateBtn.addEventListener("click", calculateAge);
