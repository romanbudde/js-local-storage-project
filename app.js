function validar(e){
    debugger;
    let listaUsuarios = getLista("listaUsuarios");
    if(listaUsuarios.length === 0){
        hardcodearUsers(listaUsuarios);
        listaUsuarios = getLista("listaUsuarios");
    }
    let inputUsuario = document.getElementById("usuario").value;
    let inputPass = document.getElementById("pass").value;
    let correcto = false;
    listaUsuarios.forEach(usuario => {
        if(usuario.user === inputUsuario && usuario.pass === inputPass){
            guardarEnLS("usuario", usuario);
            correcto = true;
            if(usuario.admin){
                window.location.href = "./perfil-admin.html";
            }
            else{
                window.location.href = "./perfil.html";
            }
        }
    });
    if (correcto === false){
        alert("Usuario incorrecto");
    }
    e.preventDefault();
}