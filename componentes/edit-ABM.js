function renderizarHTML_edit(container, lista, arrayAtributos, atributosType, itemAModificar, redirect,guardarCambios) {
    debugger;
    //container.insertAdjacentHTML("afterbegin", getTemplate(container, lista, arrayAtributos, atributosType, itemAModificar, redirect));
    container.innerHTML = getTemplate_edit(container, lista, arrayAtributos, atributosType, itemAModificar, redirect);
    //bindeo eventos
    const btnGuardar = document.getElementById('btnGuardar');
    btnGuardar.addEventListener('click',()=>{
        debugger
        //ejectulo logica propia del componente
        let datosModificados ={
            atributo:"valor",
            atributo1:"valor 1",
            atributo2:"valor 2",
        };

        //llamo a la funcion pasada como argumento
        guardarCambios(datosModificados);
    });

}

function getTemplate_edit(container, lista, arrayAtributos, atributosType, itemAModificar, redirect){
    debugger;
    let texto = '<form>';
    for (let i = 0; i < arrayAtributos.length; i++){
        texto += `
            <label for="${arrayAtributos[i]}">${arrayAtributos[i]}:</label>
            <span>${itemAModificar[arrayAtributos[i]]}</span>
            <input type="${atributosType[i]}" id="${arrayAtributos[i]}">
        `;
    }
    // <button class="btn-guardar-cambios">Guardar cambios</button>
    //  <button onclick = "volverAlMenu(event, redirect)">Volver atras</button>
    // console.log();
    // debugger;
    
    texto += `
        <button type="button" id="btnGuardar">Guardar cambios</button>
        <button type="button" onclick="volverAlMenu(event, redirect)">Volver atras</button>
    `;
    texto += '</form>';
    return texto;
}