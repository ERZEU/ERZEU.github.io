let tg = window.Telegram.WebApp;

tg.expand();


let btn = document.getElementById("sb");

const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
});


btn.addEventListener("click", function(){
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let file = document.querySelector('#files > input[type="file"]').files[0];
    let temp = toBase64(file);
    let data = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        file: temp
    };
    tg.close();
});
