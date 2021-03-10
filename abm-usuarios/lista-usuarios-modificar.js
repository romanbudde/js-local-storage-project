window.onload = function(){
    // obtener la lista de usuarios
    let listaUsuarios = getLista("listaUsuarios");
    if (listaUsuarios.length === 0){
        hardcodearUsers(listaUsuarios);
    }
    // obtener la table del html
    let tabla = document.getElementById("tabla");
    
    agregarEventListenerABotones(listaUsuarios, "usuarioAModificar", "listaUsuarios", 
                                "user", "./modificar-usuario.html");

    let botonModificar = crearBotonModificar();
    let botonEliminar = crearBotonEliminar();

    listaUsuarios.forEach((user, i) => {
        if(user != null){
            let esAdmin;
            if (user.admin){
                esAdmin = "Si";
            }
            else{
                esAdmin = "No";
            }
            tabla.innerHTML += `
                <tr class="fila">
                    <td>${i + 1}</td>
                    <td>${user.user}</td>
                    <td>${user.pass}</td>
                    <td>${user.mail}</td>
                    <td>${user.genero}</td>
                    <td>${user.celular}</td>
                    <td>${esAdmin}</td>
                </tr>
            `;
            let celdaModificar = document.getElementsByClassName("fila")[i].insertCell(7);
            celdaModificar.appendChild(botonModificar);
            let celdaEliminar = document.getElementsByClassName("fila")[i].insertCell(8);
            celdaEliminar.appendChild(botonEliminar);
        }
        else{
            console.log("lugar vacio");
        }
    });

    // for(i = 1; i <= listaUsuarios.length; i++){
    //     if(user != null){
    //         botonModificar.addEventListener("click", function(e){
    //             console.log(e.target.parentElement.parentElement.firstElementChild.nextElementSibling.innerText);
    //             let nombreUser = e.target.parentElement.parentElement.firstElementChild.nextElementSibling.innerText;
    //             guardarUserAModificar(nombreUser, listaUsuarios);
    //         }   );
            
    //         botonEliminar.addEventListener("click", function(e){
    //             console.log(e.target.parentElement.parentElement.firstElementChild.nextElementSibling.innerText);
    //             let nombreUser = e.target.parentElement.parentElement.firstElementChild.nextElementSibling.innerText;
    //             console.log(e.target.parentElement.parentElement);
    //             // e.target.parentElement.parentElement.remove();
    //             // eliminarUser(nombreUser, listaUsuarios);
    //         })
    //         let esAdmin;
    //         if (user.admin){
    //             esAdmin = "Si";
    //         }
    //         else{
    //             esAdmin = "No";
    //         }
    //         tabla.innerHTML += `
    //             <tr class="fila">
    //                 <td>${i}</td>
    //                 <td>${user.user}</td>
    //                 <td>${user.pass}</td>
    //                 <td>${user.mail}</td>
    //                 <td>${user.genero}</td>
    //                 <td>${user.celular}</td>
    //                 <td>${esAdmin}</td>
    //             </tr>
    //         `;
    //         let celdaModificar = document.getElementsByClassName("fila")[i-1].insertCell(7);
    //         celdaModificar.appendChild(botonModificar);
    //         let celdaEliminar = document.getElementsByClassName("fila")[i-1].insertCell(8);
    //         celdaEliminar.appendChild(botonEliminar);
    //     }
    //     else{
    //         console.log("lugar vacio");
    //     }
    // }
}

// function guardarUserAModificar(nombreUser, listaUsuarios){
//     i = 0;
//     listaUsuarios.forEach(user => {
//         if(user.user === nombreUser){
//             debugger;
//             user.indice = i;
//             localStorage.setItem("usuarioAModificar", JSON.stringify(user));
//             console.log(user);
//             window.location.href = "./modificar-usuario.html";
//         }
//         else{
//             i++;
//         }
//     });
// }

// function eliminarUser(nombreUser, listaUsuarios){
//     for(i = 0; i < listaUsuarios.length; i++){
//         if(listaUsuarios[i].user === nombreUser){
//             listaUsuarios.splice(i, 1)
//             localStorage.setItem("listaUsuarios", JSON.stringify(listaUsuarios));
//             return;
//         }
//     }
// }