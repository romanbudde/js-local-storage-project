window.onload = function(){
    // obtener la lista de usuarios
    let listaUsuarios = getListaUsuarios();
    // obtener la table del html
    let tabla = document.getElementById("tabla");

    for(i = 1; i <= listaUsuarios.length; i++){
        if(listaUsuarios[i-1] != null){
            let botonModificar = document.createElement("button");
            botonModificar.innerHTML = "Modificar";
            botonModificar.addEventListener("click", function(e){
                console.log(e.target.parentElement.parentElement.firstElementChild.nextElementSibling.innerText);
                let nombreUser = e.target.parentElement.parentElement.firstElementChild.nextElementSibling.innerText;
                guardarUserAModificar(nombreUser, listaUsuarios);
            });
            
            let botonEliminar = document.createElement("button");
            botonEliminar.innerHTML = "Eliminar";
            botonEliminar.addEventListener("click", function(e){
                console.log(e.target.parentElement.parentElement.firstElementChild.nextElementSibling.innerText);
                let nombreUser = e.target.parentElement.parentElement.firstElementChild.nextElementSibling.innerText;
                console.log(e.target.parentElement.parentElement);
                e.target.parentElement.parentElement.remove();
                eliminarUser(nombreUser, listaUsuarios);
            })
            let esAdmin;
            if (listaUsuarios[i-1].admin){
                esAdmin = "Si";
            }
            else{
                esAdmin = "No";
            }
            tabla.innerHTML += `
                <tr class="fila">
                    <td>${i}</td>
                    <td>${listaUsuarios[i-1].user}</td>
                    <td>${listaUsuarios[i-1].pass}</td>
                    <td>${listaUsuarios[i-1].mail}</td>
                    <td>${listaUsuarios[i-1].genero}</td>
                    <td>${listaUsuarios[i-1].celular}</td>
                    <td>${esAdmin}</td>
                </tr>
            `;
            let celdaModificar = document.getElementsByClassName("fila")[i-1].insertCell(7);
            celdaModificar.appendChild(botonModificar);
            let celdaEliminar = document.getElementsByClassName("fila")[i-1].insertCell(8);
            celdaEliminar.appendChild(botonEliminar);
            debugger;
        }
        else{
            console.log("lugar vacio");
        }
    }

}

function guardarUserAModificar(nombreUser, listaUsuarios){
    i = 0;
    listaUsuarios.forEach(user => {
        if(user.user === nombreUser){
            debugger;
            user.indice = i;
            localStorage.setItem("usuarioAModificar", JSON.stringify(user));
            console.log(user);
            window.location.href = "./modificar-usuario.html";
        }
        else{
            i++;
        }
    });
}

function eliminarUser(nombreUser, listaUsuarios){
    for(i = 0; i < listaUsuarios.length; i++){
        if(listaUsuarios[i].user === nombreUser){
            listaUsuarios.splice(i, 1)
            localStorage.setItem("listaUsuarios", JSON.stringify(listaUsuarios));
            return;
        }
    }
}