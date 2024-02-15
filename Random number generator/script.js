// random number
const randomlabel=document.getElementById("randlabel");
const randombtn=document.getElementById("randombtn");
randombtn.onclick=function(){
    randomnumber=Math.floor(Math.random()*6)+1;
    
    randomlabel.textContent=randomnumber;
    randombtn.style.backgroundColor="lightblue"
}