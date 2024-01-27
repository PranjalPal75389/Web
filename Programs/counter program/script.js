// counter program

const increasebutton=document.getElementById("increasebtn");
const resetbutton=document.getElementById("resetbtn");
const decreasebutton=document.getElementById("decreasebtn");
const numberlabel=document.getElementById("numberlabel");

let number=0;

increasebutton.onclick=function(){
    number++;
    numberlabel.textContent=number;
}

resetbutton.onclick=function(){
    number=0;
    numberlabel.textContent=number;
}
decreasebutton.onclick=function(){
    number--;
    numberlabel.textContent=number;
}