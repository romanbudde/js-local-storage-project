function renderizarHTML(container, lista, arrayAtributos, atributosType, itemAModificar, redirect) {
    container.innerHTML += getTemplate(container, lista, arrayAtributos, atributosType, 
                                       itemAModificar, redirect);    
}

function getTemplate(container, lista, arrayAtributos, atributosType, itemAModificar, redirect){
    let texto = '<form>';
    for (let i = 0; i < arrayAtributos.length; i++){
        texto += `
            <label for="${arrayAtributos[i]}">${arrayAtributos[i]}:</label>
            <span>${autoAModificar[arrayAtributos[i]]}</span>
            <input type="${atributosType[i]}" id="${arrayAtributos[i]}">
        `;
    }
    // <button class="btn-guardar-cambios">Guardar cambios</button>
    //  <button onclick = "volverAlMenu(event, redirect)">Volver atras</button>
    // console.log();
    // debugger;
    const guardarCambios1 = () => {
        for (i = 0; i < arrayAtributos.length; i++){
        console.log("a");
        itemAModificar[arrayAtributos[i]] = document.getElementById(arrayAtributos[i].value);
    }
    lista[itemAModificar[0]] = itemAModificar;
    guardarEnLS("listaAutos", lista);
    console.log(itemAModificar);
    // e.preventDefault();
    }
    texto += `
        <button type="button" onclick="guardarCambios1">Guardar cambios</button>
        <button type="button" onclick="volverAlMenu(event, redirect)">Volver atras</button>
    `;
    texto += '</form>';
    return texto;
}

// pasarle a guardarCambios los parametros necesarios para poder guardar el item(itemAModificar,
// lista, arrayAtributos, atributosType).
function guardarCambios(lista){
    // crear un nuevo item con los datos de los inputs
    debugger;
    for (i = 0; i < arrayAtributos.length; i++){
        console.log("a");
        itemAModificar[arrayAtributos[i]] = document.getElementById(arrayAtributos[i].value);
    }
    lista[itemAModificar[indice]] = itemAModificar;
    guardarEnLS("listaAutos", lista);
    console.log(itemAModificar);
    e.preventDefault();
}

function volverAlMenu(e, redirect){
    window.location.href = redirect;
    e.preventDefault();
}