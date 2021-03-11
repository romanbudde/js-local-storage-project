function renderizarHTML_Lista(tablaABM, titulo, lista, arrayTitulos, funcionEspecifica,funcionEliminar,funcionModificar) {
    //genero HTML
    tablaABM.innerHTML = getTemplate(titulo, arrayTitulos, lista); 
    //bindeo eventos
    
    document.getElementById('backToPerfil').addEventListener('click',(e)=>{
        //TODO: logica propia el componente

        //posibles valores devueltos a la funcion
        let dataDinamica=[1,2,"tres",4];
        funcionEspecifica(dataDinamica);

    });

    document.querySelectorAll('.btn-modificar').forEach((item) =>{
        item.addEventListener('click',(e)=>{
            //TODO: logica propia el componente
            debugger
            let btn = e.target;
    
            let id = btn.dataset.id;
            let nombre = btn.dataset.name;
            funcionModificar({id,nombre});
    
        });
    }); 

    document.querySelectorAll('.btn-eliminar').forEach((item) =>{
        item.addEventListener('click',(e)=>{
            //TODO: logica propia el componente
            debugger
            let btn = e.target;
    
            let id = btn.dataset.id;
            let nombre = btn.dataset.name;
            funcionEliminar({id,nombre});
    
        });
    });

}

function getTemplate(titulo, arrayTitulos, lista) {
    let texto = '';
    let list = '';

    for (let i = 0; i < arrayTitulos.length; i++) {
        texto += `
            <th scope="col">${arrayTitulos[i]}</th>            
        `;
    }
    texto += `
            <th scope="col">Modificar</th>       
            <th scope="col">Eliminar</th>     
        `;
    lista.forEach((item, i) => {
        list += `<tr><td>${i+1}</td>`;
        // i arranca en 1 porque en 0 tiene el valor de indice, q seria el atributo '#'
        for(i = 1; i < arrayTitulos.length; i++){
            list += `
                    <td>${item[arrayTitulos[i]]}</td>
            `;
        }
        
        list += `
            <td><button data-id="${item.id}" data-name="${item.nombre}" class="btn-modificar">Modificar</button></td>
            <td><button data-id="${item.id}" data-name="${item.nombre}" class="btn-eliminar">Eliminar</button></td>
        </tr>
        `;
    });


    let info = `
        <div class="d-flex justify-content-between align-items-center mb-4 title-container">
            <button id="backToPerfil" >
                <i class="far fa-arrow-left">Volver a mi perfil</i>
            </button>
            <h1 class="text-center">${titulo}</h1>
            <button id="addCar" onclick="clickB2()">
                +
            </button>
        </div>
        <table class="table table-striped">
            <thead>
                <tr>
                    ${texto}
                </tr>
            </thead>
            <tbody>
                ${list}
            </tbody>
        </table>
    `;

    return info;
}