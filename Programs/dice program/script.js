function diceRolling(){

const rollInput=document.getElementById("rollInput").value;
const diceImages=document.getElementById("diceImages");
const diceResult=document.getElementById("diceResult");
const images=[];
const values=[];   

for(let i=0;i<rollInput;i++){

    const value = Math.floor(Math.random()*6)+1;
    values.push(value);
    images.push(`<img src="diceImages/${value}.svg">`);
 }
 console.log(values);
 diceResult.textContent=`dice: ${values.join(', ')}`;
 diceImages.innerHTML=images;
}