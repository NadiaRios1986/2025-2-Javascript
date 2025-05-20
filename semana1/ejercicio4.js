const { ask } = require('../helpers/input');

function obtenerPromedio(numeros) {
    let suma = 0;
    for(let i =0; i< numeros.length; i++){
        suma = suma+numeros[i];
    }
const promedio =suma/numeros.length;
return promedio;
    }

    function nombresConVocal(nombres){
        //retornar los nombres que solo tienen una vocal

        
    }

    function obtenerMayor(numeros){
        let mayor = numeros[0];
        for (let i =0; i<numeros.length; i++) {
            if(numeros[i]>mayor){
                mayor = numeros [i];

            }
        }

        return mayor;

    }

    function resumenEstadistico(numeros){
        const promedio = obtenerPromedio(numeros);
     let minimo = numeros[0]
     let maximo = obtenerMayor(numeros);

     for(let i = 0; i < numeros.length; i++){
        if(numeros[i]<minimo){
       minimo = numeros [i];

        }

     }
     return {promedio,minimo,maximo}
   
    }



async function main() {
    const edades = [20,18,25,30,22];
    console.log(`Promedio= ${obtenerPromedio(edades)}`);

    const lista = [5,20,8,99,3];
    console.log(`El numero mayor de: ${lista} es: ${obtenerMayor(lista)}`);

    const datos = [70,80,90,100,85];
    console.log(resumenEstadistico(datos));
    console.log('promedio' )

}



main();