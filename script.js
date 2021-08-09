const empty = "";
const uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*=-_";

const pLength = document.getElementById('plength');
const upperCase = document.getElementById('puppercase');
const lowerCase = document.getElementById('plowercase');
const pNumber = document.getElementById('pnumber');
const pSymbol = document.getElementById('psymbol');
const submit = document.getElementById('submit');
const password = document.getElementById('pwd');

submit.addEventListener('click', ()=>{
    let initPwd = empty;
    (upperCase.checked) ? initPwd += uCase : "";
    (lowerCase.checked) ? initPwd += lCase : "";
    (pNumber.checked) ? initPwd += number : "";
    (pSymbol.checked) ? initPwd += symbol : "";

    password.value = generatePwd(pLength.value,initPwd);
});

$("#pwdcopy").hide();

$("#puppercase").click(function(){
    if($(this).prop("checked") == true){
        $("#uppertxt").css("color", "darkgreen").css("font-weight", "bolder").css("font-size", "19px");
    }
    else if($(this).prop("checked") == false){
        $("#uppertxt").css("color", "black").css("font-weight", "500").css("font-size", "16px");
    }
});

$("#plowercase").click(function(){
    if($(this).prop("checked") == true){
        $("#lowertxt").css("color", "darkgreen").css("font-weight", "bolder").css("font-size", "19px");
    }
    else if($(this).prop("checked") == false){
        $("#lowertxt").css("color", "black").css("font-weight", "500").css("font-size", "16px");
    }
});

$("#pnumber").click(function(){
    if($(this).prop("checked") == true){
        $("#numtxt").css("color", "darkgreen").css("font-weight", "bolder").css("font-size", "19px");
    }
    else if($(this).prop("checked") == false){
        $("#numtxt").css("color", "black").css("font-weight", "500").css("font-size", "16px");
    }
});

$("#psymbol").click(function(){
    if($(this).prop("checked") == true){
        $("#spltxt").css("color", "darkgreen").css("font-weight", "bolder").css("font-size", "19px");
    }
    else if($(this).prop("checked") == false){
        $("#spltxt").css("color", "black").css("font-weight", "500").css("font-size", "16px");
    }
});

function generatePwd(l, initPwd){
    let pass = "";
    for (let i=0;i<l;i++){
        pass += initPwd.charAt(Math.floor(Math.random() * initPwd.length));
    }
    return pass;
}

const copy = document.getElementById('copy');
copy.addEventListener('click', ()=> {
    if(password.value == ""){
        alert("Please generate a password!");
    }else{
        password.select();
        document.execCommand("copy");
        $("#pwdcopy").show();
        setTimeout(function(){
            $("#pwdcopy").hide();
        },7000);
        alert("Password copied to the clipboard 👍 ");
    }
});
