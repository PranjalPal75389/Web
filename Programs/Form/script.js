let Name=document.getElementById("name");
let Mob=document.getElementById("mobno.");
const last=document.getElementById("last");
function run(){
    
    Name=Name.value;
    Mob=Number(Mob.value);
    if(Name==""){
        last.textContent="Please write name and mobNo. atleast";
        return 0;
    }
    else
    last.textContent=`
    thanks for giving me your details 
    your name is ${Name} and 
    your mob no. is ${Mob}`;
}