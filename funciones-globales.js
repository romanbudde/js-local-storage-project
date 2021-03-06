function getListaUsuarios(){
    let txtListaUsuarios = localStorage.getItem("listaUsuarios");
    let listaUsuarios;
    if(txtListaUsuarios){
        listaUsuarios = JSON.parse(txtListaUsuarios);
    }
    else{
        listaUsuarios = [
            {
                "user": "seba",
                "pass": "123",
                "mail": "seba@hotmail.com",
                "celular": "1201249",
                "genero": "masculino",
                "admin": true
            },
            {
                "user": "juan",
                "pass": "123",
                "mail": "juan@hotmail.com",
                "celular": "1201249",
                "genero": "masculino",
                "admin": false
            }
        ];
        localStorage.setItem("listaUsuarios", JSON.stringify(listaUsuarios));
    }
    return listaUsuarios;
}

function guardarUser(usuario){
    localStorage.setItem("usuario", JSON.stringify(usuario));
}