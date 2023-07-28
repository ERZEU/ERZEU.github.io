let tg = window.Telegram.WebApp;

tg.expand();

let btn = document.getElementById("sb");

btn.addEventListener("click", function(){
    let firstname = document.getElementById("firstname");
    let lastname = document.getElementById("lastname");
    let email = document.getElementById("email");
    let data = {
        firstname: firstname,
        lastname: lastname,
        email: email
    }
    tg.sendData(JSON.stringify(data));
    tg.close();
});
