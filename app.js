let tg = window.Telegram.WebApp;

tg.expand();

let btn = document.getElementById("sb");

btn.addEventListener("click", function(){
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let file = document.getElementById("myfile").files[0];
    let data = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        file: file.name
    };
    tg.sendData(JSON.stringify(data));
    tg.close();
});
