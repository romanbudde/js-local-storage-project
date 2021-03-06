window.onload = function(){
    // obtener la lista de usuarios
    let listaUsuarios = getListaUsuarios();
    // obtener la table del html
    let tabla = document.getElementById("tabla");
    for(i = 1; i <= listaUsuarios.length; i++){
        let fila = tabla.insertRow(i);
        let tablaNum = fila.insertCell(0);
        let tablaUser = fila.insertCell(1);
        let tablaPass = fila.insertCell(2);
        let tablaEmail = fila.insertCell(3);
        let tablaGenero = fila.insertCell(4);
        let tablaTelefono = fila.insertCell(5);
        let tablaAdmin = fila.insertCell(6);

        tablaNum.innerHTML = i;
        tablaUser.innerHTML = listaUsuarios[i-1].user;
        tablaPass.innerHTML = listaUsuarios[i-1].pass; 
        tablaEmail.innerHTML = listaUsuarios[i-1].mail; 
        tablaGenero.innerHTML = listaUsuarios[i-1].genero; 
        tablaTelefono.innerHTML = listaUsuarios[i-1].celular;
        if(listaUsuarios[i-1].admin){
            tablaAdmin.innerHTML = "Si";  
            tablaAdmin.style.color = "blue  ";
        }
        else{
            tablaAdmin.innerHTML = "No";
        }
    }
}