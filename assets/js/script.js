let listaNombreGastos = [];
let listaDescription = [];
let listaValorGastos = [];
let gastoEditar = null;

function clickBoton(){

    let nombreGasto = document.getElementById('gasto').value;
    let descrp_gasto = document.getElementById('description_gasto').value;
    let valorGasto = document.getElementById('valor').value;

    console.log(listaNombreGastos);

    if(nombreGasto !== "" && valorGasto !== "" ){
        
         //verificar si se esta editano
        if(gastoEditar !== null){

            listaNombreGastos[gastoEditar] = nombreGasto;
            listaDescription[gastoEditar] = descrp_gasto;
            listaValorGastos[gastoEditar] = valorGasto;
            console.log(listaNombreGastos);
            gastoEditar = null;

        }else{

            listaNombreGastos.push(nombreGasto);
            listaDescription.push(descrp_gasto)
            listaValorGastos.push(valorGasto);
        }
       
    }else{
        alert("Digita tus gastos mensuales!")
    }
    actualizarListaGastos();
    limpiar();
}

function actualizarListaGastos(){

    let gastoLimite = 1000000;
    const listaElementos = document.getElementById('listaDeGastos');
    const totalGastos = document.getElementById('totalGastos');
    
    let htmlLista = '';
    let valorTotalGastos = 0;

    listaNombreGastos.forEach((elemento, posicion)=> {
        const drescipGasto = (listaDescription[posicion]);
        const valorGasto = Number(listaValorGastos[posicion]);

        htmlLista += `<li>${elemento}    -${drescipGasto} -    $ ${valorGasto.toFixed(2)}
                        <button class="botonE" onclick="eliminarGasto(${posicion})">Eliminar</button>
                        <button class="botonE" onclick="editarGasto(${posicion})">Actualizar</button>
                    </li>`;
        
        //calcular el total de gastos
        valorTotalGastos += Number(valorGasto); 
    });

    listaElementos.innerHTML = htmlLista;

    totalGastos.innerHTML = valorTotalGastos.toFixed(2);

    if(valorTotalGastos>gastoLimite){
        alert("Tus gastos de este mes sobrepasaron los gastos limites!")
    }
}

function limpiar(){
    document.getElementById('gasto').value = '';
    document.getElementById('description_gasto').value = '';
    document.getElementById('valor').value = '';
}

function eliminarGasto(posicion){

    listaNombreGastos.splice(posicion,1);
    listaValorGastos.splice(posicion,1);
    listaDescription.splice(posicion,1);
    actualizarListaGastos();
}
function editarGasto(posicion){

   /* const gastoNombre = listaNombreGastos[posicion];
    const gastoDescrp= listaDescription[posicion];
    const gastoValor= listaValorGastos[posicion];*/

    //rellenar los campos con los datos del gasto a editar
    document.getElementById('gasto').value = listaNombreGastos[posicion];
    document.getElementById('description_gasto').value = listaDescription[posicion];
    document.getElementById('valor').value = listaValorGastos[posicion];

    //guardar posición del gasto editado
    gastoEditar = posicion;
}

