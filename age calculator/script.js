const ageInput = document.getElementById("ageInput");
const result = document.getElementById("result");
const Btn = document.getElementById("Btn");
function calculateAge() {
  let birthdatevalue = ageInput.value;
  if (birthdatevalue === "") {
    window.alert("Please Select the Date of Birth");
  }
  else {
    const currentDate = new Date();
    const birthdate = new Date(birthdatevalue);
    let age = currentDate.getFullYear() - birthdate.getFullYear();
    
    if(currentDate<birthdate){
      result.textContent =`Please Enter your Correct DOB`;
     // window.alert("Please Enter your Correct DOB");
      return 0;
    }

    else if (currentDate.getMonth() < birthdate.getMonth()) {
      age -= 1;
    }
    console.log(age);
    if(age<3)
    result.textContent = `I don't think you are old enough you must be 3 years old `;
  else
    result.textContent = `You are ${age} years old`;
  }
}
