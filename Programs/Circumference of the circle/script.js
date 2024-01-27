// Circumference of the circle
const submitbutton=document.getElementById("submitbutton");
    const PI=3.14;
    let radius,circumference;
submitbutton.onclick=function(){
    radius=document.getElementById("radiusinput").value
    circumference=2*PI*radius;
    document.getElementById("ans").textContent=("circumference ="+circumference.toFixed(2)+"cm")
}