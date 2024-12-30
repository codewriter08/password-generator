let password=document.querySelector("#password");
function passGen(){
    let str="0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()?ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let passLength=8;
    let password="";
    for(let i=0;i<passLength;i++){
        let randNumber=Math.floor(Math.random()*str.length);
        password+=str.substring(randNumber,randNumber+1);

    }
    document.querySelector("#password").value=password;
}


function copyPass(){
    let copyPassword=document.querySelector("#password");
    copyPassword.select();
    document.execCommand("copy");
}