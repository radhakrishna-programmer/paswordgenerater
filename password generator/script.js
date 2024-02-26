const box=document.getElementById("box");
const length=12;
const num="0123456789";
const symbols="!@#$%^&*()_+{}|:/";
const upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower="abcdefghijklmnopqrstuvwxyz";
const rem=num+symbols+upper+lower;

function createPassword(){
    let password="";
    
    password+=upper[Math.floor(Math.random()*upper.length)];
    password+=lower[Math.floor(Math.random()*lower.length)];
    password+=num[Math.floor(Math.random()*num.length)];
    password+=symbols[Math.floor(Math.random()*symbols.length)];
    while(password.length<length){
        password+=rem[Math.floor(Math.random()*rem.length)];
    }
    box.value=password;
}

function copypassword(){
    navigator.clipboard.writeText(box.value);
}

