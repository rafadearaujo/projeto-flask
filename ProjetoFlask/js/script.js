function fazerLogin(){
    var user = document.getElementById("user").value;
    var password = document.getElementById("password").value;

    if(user == "" || password == ""){
        alert("Insira os dados!");
        return;
    } else{
        if (user == "admin" && password == "admin") {
            alert("Você fez login com sucesso!")
        }
    }
}