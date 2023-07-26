let tg = window.Telegram.WebApp;

tg.expand()

let firstname = "";
let lastname = "";
let email = "";

let btn = document.getElementById("sb");

btn.addEventListener("click", function(){
    firstname = document.getElementById("firstname");
    lastname = document.getElementById("lastname");
    email = document.getElementById("email");
});

Telegram.WebApp.onEvent("mainButtonClicked", function(){
    tg.sendData(firstname, lastname, email);
});