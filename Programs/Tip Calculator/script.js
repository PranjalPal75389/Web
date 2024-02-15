const billAmount=document.getElementById("billAmount");
const tipPercent=document.getElementById("tipPercent");
const totalAmount=document.getElementById("totalAmount");

function tipCalculate(){
    
    Amount=Number(billAmount.value);
    Percentage=Number(tipPercent.value);
    // tip=Amount*Percentage/100;
    // total=Amount+tip; 
    total=Amount*(1+Percentage/100);
    totalAmount.textContent=`Your Total: ${total.toFixed(2)}`;
    
}