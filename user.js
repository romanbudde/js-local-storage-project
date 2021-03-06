window.onload = function() {
    //recupero el string
    let txtUsuario = localStorage.getItem("usuario");
    //lo paso a obj
    let usuario = JSON.parse(txtUsuario);


    //Inserto los valores en HTML
    document.getElementById("usuario").innerHTML = usuario.user;
    document.getElementById("mail").innerHTML = usuario.mail;
    document.getElementById("genero").innerHTML = usuario.genero;
    document.getElementById("celular").innerHTML = usuario.celular;
};