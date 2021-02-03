var Login = document.getElementById("Login");
var Reg = document.getElementById("Reg");
var Indicador = document.getElementById("Indicador");

function registro(){
    Reg.style.transform ="translateX(0px)";
    Login.style.transform ="translateX(0px)";
    Indicador.style.transform ="translateX(100px)";
}

function login(){
    Reg.style.transform ="translateX(300px)";
    Login.style.transform ="translateX(300px)";
    Indicador.style.transform ="translateX(0px)";
}