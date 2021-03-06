function validar(e){
    let listaUsuarios = getListaUsuarios();
    
    let inputUsuario = document.getElementById("usuario").value;
    let inputPass = document.getElementById("pass").value;
    let correcto = false;
    listaUsuarios.forEach(usuario => {
        if(usuario.user === inputUsuario && usuario.pass === inputPass){
            guardarUser(usuario);
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