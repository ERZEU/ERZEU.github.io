let tg = window.Telegram.WebApp;

tg.expand();


let btn = document.getElementById("sb");

btn.addEventListener("click", function(){
    let firstname = document.getElementById("firstname");
    let lastname = document.getElementById("lastname");
    let email = document.getElementById("email");
    let data = {
        fname: firstname,
        lname: lastname,
        mail: email,
        file: file
    }
    tg.close();
});
