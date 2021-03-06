// Obtener la lista actual de usuarios.

// Obtener los datos del usuario que se registra

function obtenerDatos(){
    // let inputUsuario = {
    //     "user": "roman",
    //     "pass": "123"
    // }
    let user = document.getElementById("usuario").value;
    let pass = document.getElementById("pass").value;
    let mail = document.getElementById("mail").value;
    let genero = document.getElementById("genero").value;
    let celular = document.getElementById("celular").value;
    let admin = document.getElementById("admin").checked;

    console.log(admin);

    let inputUsuario = {
        "user": user,
        "pass": pass,
        "mail": mail,
        "genero": genero,
        "celular": celular,
        "admin": admin
    }
    return inputUsuario;    // obj usuario
}



// Verificar que el usuario que se quiere registrar no exista.

function usuarioExiste(listaUsuarios, inputUsuario){
    existe = false;
    listaUsuarios.forEach(user => {
        if(user.user === inputUsuario.user){
            existe = true;
        }
    });
    return existe;
}

// Si existe, dar msj de error, si no existe, continuar.

function registrarUsuario(inputUsuario, listaUsuarios){
    // agregar el obj a la lista del localStorage.
    listaUsuarios.push(inputUsuario);
    localStorage.setItem("listaUsuarios", JSON.stringify(listaUsuarios));
    return registroOk = true;
}

function registrarme(e){
    let listaUsuarios = getListaUsuarios();
    console.log(listaUsuarios);
    let inputUsuario = obtenerDatos();
    let siExiste = usuarioExiste(listaUsuarios, inputUsuario);
    if (siExiste){
        alert("El usuario ya existe");
    }
    else{
        if(registrarUsuario(inputUsuario, listaUsuarios)){
            guardarUser(inputUsuario);
            alert("Registrado.");
            if(inputUsuario.admin){
                window.location.href = "./perfil-admin.html";
            }
            else{
                window.location.href = "./perfil.html";
            }
        }
        else{
            alert("Error.");
        }
        // Se agrega el nuevo objeto a la lista (array) de usuarios.
    }

    e.preventDefault();
}