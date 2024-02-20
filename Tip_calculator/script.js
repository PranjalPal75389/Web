const totalAmount = document.getElementById("totalAmount");
const message = document.getElementById("message");
const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", tipCalculate);

function tipCalculate() {
    let Amount = document.getElementById("billAmount").value;
    let Percentage = document.getElementById("tipPercent").value;
    if (Amount == "") {
        message.textContent = "Bill CAN'T BE EMPTY!!!";
        return 0;
    }
    else if (isNaN(Amount) || isNaN(Percentage)) {
        message.textContent = "NO LETTERS ONLY NUMBERS!!!";
        return 0;
    }
    else if (Amount <= 0 || Percentage < 0) {
        message.textContent = "Bill can't be zero or negative";
        return 0;
    }
    else {
        
        total = Amount * (1 + Percentage / 100);
        // tip=Amount*Percentage/100;
        // total=Amount+tip; 

        console.log(total.toFixed(2));
        totalAmount.innerHTML = `Your Total: <b> ₹ ${total.toFixed(2)} </b> (Tip = <b>₹ ${(total - Amount).toFixed(2)} </b>)`;
	message.textContent = "";
    }
}  
