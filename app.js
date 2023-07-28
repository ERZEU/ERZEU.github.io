let tg = window.Telegram.WebApp;

tg.expand();

let firstname = "1";
let lastname = "2";
let email = "3";

let btn = document.getElementById("sb");

btn.addEventListener("click", function(){
    firstname = document.getElementById("firstname");
    lastname = document.getElementById("lastname");
    email = document.getElementById("email");
    tg.close();
});

let data = {
    fname: firstname,
    lname: lastname,
    mail: email
}

Telegram.WebApp.onEvent("mainButtonClicked", function(){
    tg.sendData(JSON.stringify(data));
});