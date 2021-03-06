window.onload = function(){
    let usuarioAModificar = getUsuarioAModificar();

    document.getElementById("usuario").innerHTML = usuarioAModificar.user;
    document.getElementById("pass").innerHTML = usuarioAModificar.pass;
    document.getElementById("mail").innerHTML = usuarioAModificar.mail;
    document.getElementById("genero").innerHTML = usuarioAModificar.genero;
    document.getElementById("celular").innerHTML = usuarioAModificar.celular;
    if(usuarioAModificar.admin){
        document.getElementById("admin").innerHTML = "Si";
    }
    else{
        document.getElementById("admin").innerHTML = "No";
    }
}

function guardarCambios(e){
    debugger;
    let listaUsuarios = getListaUsuarios();
    let usuarioAModificar = getUsuarioAModificar();
    let nuevoUsuario = document.getElementById("nuevoUsuario").value;
    let nuevaContrasena = document.getElementById("nuevaContrasena").value;
    let nuevoMail = document.getElementById("nuevoMail").value;
    let nuevoGenero = document.getElementById("nuevoGenero").value;
    let nuevoCelular = document.getElementById("nuevoCelular").value;
    let nuevoAdmin = document.getElementById("nuevoAdmin").checked;

    let b = 0;
    let i = 0;
    while(b === 0){
        if(listaUsuarios[i].usuario === nuevoUsuario ){
            if(nuevoUsuario != usuarioAModificar.user){
                alert("El nombre de usuario ya existe, utilice otro.");
                b = 1;
            }
            else{
                alert("mismo nombre de usuario (ok)");
                usuarioAModificar.user = nuevoUsuario;
                usuarioAModificar.pass = nuevaContrasena;
                usuarioAModificar.mail = nuevoMail;
                if(nuevoMasculino){
                    usuarioAModificar.genero = "masculino";
                }
                if(nuevoFemenino){
                    usuarioAModificar.genero = "femenino";
                }
                else{
                    usuarioAModificar.genero = "otro";
                }
                usuarioAModificar.celular = nuevoCelular;
                usuarioAModificar.admin = nuevoAdmin;
                listaUsuarios[usuarioAModificar.indice] = usuarioAModificar;
                localStorage.setItem("listaUsuarios", JSON.stringify(listaUsuarios));
                alert("Usuario guardado con exito.");
                window.location.href = "./lista-usuarios-a-modificar.html";
                b = 1;
            }
        }
        else{
            alert("disponible");
            usuarioAModificar.user = nuevoUsuario;
            usuarioAModificar.pass = nuevaContrasena;
            usuarioAModificar.mail = nuevoMail;
            usuarioAModificar.genero = nuevoGenero;
            usuarioAModificar.celular = nuevoCelular;
            usuarioAModificar.admin = nuevoAdmin;
            listaUsuarios[usuarioAModificar.indice] = usuarioAModificar;
            localStorage.setItem("listaUsuarios", JSON.stringify(listaUsuarios));
            window.location.href = "./lista-usuarios-a-modificar.html";
            b = 1;
        }
        i++;
    }
    e.preventDefault();
}

function getUsuarioAModificar(){
    let txtUsuarioAModificar = localStorage.getItem("usuarioAModificar");
    let usuarioAModificar = JSON.parse(txtUsuarioAModificar);
    return usuarioAModificar;
}

function volverAListaUsuariosAModificar(e){
    window.location.href = "./lista-usuarios-a-modificar.html";
    e.preventDefault();
}