let tg = window.Telegram.WebApp;

tg.expand();


let btn = document.getElementById("sb");

function getBase64(file) {
   var reader = new FileReader();
   reader.readAsDataURL(file);
   reader.readAsDataURL(file[0]);
   reader.onload = function () {
       return reader.result;
   };


btn.addEventListener("click", function(){
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let file = document.getElementById("file").files;
    let temp = toBase64(file[0]);
    let data = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        file: temp
    };
    tg.close();
});
