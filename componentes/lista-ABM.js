function renderizarHTML(tablaABM, titulo, lista, arrayTitulos, funcionEspecifica) {
    tablaABM.innerHTML += getTemplate(titulo, arrayTitulos, lista, funcionEspecifica);    
}

function getTemplate(titulo, arrayTitulos, lista, funcionEspecifica) {
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
            <td><button class="btn-modificar">Modificar</button></td>
            <td><button class="btn-eliminar">Eliminar</button></td>
        </tr>
        `;
    });


    let info = `
        <div class="d-flex justify-content-between align-items-center mb-4 title-container">
            <button id="backToPerfil" onclick="clickB1(${funcionEspecifica});">
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

function clickB1(f1) {
    f1();
}

function clickB2() {
    alert('agregar');
}