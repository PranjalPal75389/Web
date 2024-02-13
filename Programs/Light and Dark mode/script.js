const image=document.getElementById("image")
let mode="white";
function modeChange(){
    if(mode=="white"){
        image.src='img/NightMode1.png';
    document.body.style.backgroundColor="grey";
    document.body.style.color="white";
    mode="black";
    document.getElementById("modeName").textContent="Night mode";
  
    }
    else{
         image.src="img/DayMode.png";
        document.body.style.backgroundColor="white";
    document.body.style.color="black";
    mode="white";
document.getElementById("modeName").textContent="Day mode";
    }
   
}