const passwordBox=document.getElementById("password");
const btn = document.querySelector(".btn");
const upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower="abcdefghijklmnopqrstuvwxyz";
const number="1234567890";
const symbol="@#$%&*^()!-_";
const all=upper+lower+number+symbol;
let passLength=12;
btn.addEventListener("click", () => {
    generatePass();
  });
function generatePass(){
    password="";
    password+=upper[Math.floor(Math.random()*upper.length)];
    password+=lower[Math.floor(Math.random()*lower.length)];
    password+=number[Math.floor(Math.random()*number.length)];
    password+=symbol[Math.floor(Math.random()*symbol.length)];
    
    while(password.length<12){
        password+=all[Math.floor(Math.random()*all.length)];
        console.log("in")
    }
    passwordBox.value=password;
    console.log("hello")
    password="";
}