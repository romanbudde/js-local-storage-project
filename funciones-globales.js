function getLista(key){
    let txtLista = localStorage.getItem(key);
    let lista;
    if(txtLista){
        lista = JSON.parse(txtLista);
    }
    else{
        lista = [];
        localStorage.setItem(key, JSON.stringify(lista));
    }
    return lista;
}

function getItem(key){
    let txtItem = localStorage.getItem(key);
    let item = JSON.parse(txtItem);
    return item;
}

function guardarEnLS(texto, item){
    localStorage.setItem(texto, JSON.stringify(item));
}

function eliminarDeLS(lista){
    for(i = 0; i < lista.length; i++){
        if(listaUsuarios[i].user === nombreUser){
            listaUsuarios.splice(i, 1)
            localStorage.setItem("listaUsuarios", JSON.stringify(listaUsuarios));
            return;
        }
    }
}

function hardcodearUsers(listaUsuarios){
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
    ]
    guardarEnLS("listaUsuarios", listaUsuarios);
}

function crearBotonModificar(){
    let botonModificar = document.createElement("button");
    botonModificar.innerHTML = "Modificar";
    botonModificar.className += "btn-modificar";
    return botonModificar;
}

function crearBotonEliminar(){
    let botonEliminar = document.createElement("button");
    botonEliminar.innerHTML = "Eliminar";
    botonEliminar.className += "btn-eliminar";
    return botonEliminar;
}

function crearBotonGuardarCambios(){
    let botonGuardarCambios = document.createElement("button");
    botonGuardarCambios.innerHTML = "Guardar cambios";
    botonGuardarCambios.className += "btn-guardar-cambios";
    return botonGuardarCambios;
}

function agregarEventListenerABotones(lista, itemAModificarText, listaText, objListaClave, redirect){
    document.addEventListener('click', function (e) {
        if (e.target.matches('.btn-modificar')) {
            console.log("matches");
            console.log(e.target.parentElement.parentElement.firstElementChild.nextElementSibling.innerText);
            let key = e.target.parentElement.parentElement.firstElementChild.nextElementSibling.innerText;
            guardarItemAModificar(key, lista, objListaClave, itemAModificarText, redirect);
        }
    
        if (e.target.matches('.btn-eliminar')) {
            console.log("matches");
            console.log(e.target.parentElement.parentElement.firstElementChild.nextElementSibling.innerText);
            let key = e.target.parentElement.parentElement.firstElementChild.nextElementSibling.innerText;
            e.target.parentElement.parentElement.remove();
            eliminarItem(key, lista, objListaClave, listaText);
        }
        // if(e.target.matches('.btn-guardar-cambios')){
        //     debugger;
        //     console.log("matches");
        //     console.log(e.target.parentElement.parentElement.firstElementChild.nextElementSibling.innerText);
        //     let key = e.target.parentElement.parentElement.firstElementChild.nextElementSibling.innerText;
        // }
    
    }, false);
}

function guardarItemAModificar(key, lista, objListaClave, itemAModificarText, redirect){
    i = 0;
    lista.forEach(item => {
        console.log(item[objListaClave]);
        if(item[objListaClave] === key){
            item.indice = i;
            localStorage.setItem(itemAModificarText, JSON.stringify(item));
            console.log(item);
            window.location.href = redirect;
        }
        else{
            i++;
        }
    });
}

function eliminarItem(key, lista, objListaClave, listaText){
    for(i = 0; i < lista.length; i++){
        if(lista[i][objListaClave] === key){
            lista.splice(i, 1)
            localStorage.setItem(listaText, JSON.stringify(lista));
            return;
        }
    }
}