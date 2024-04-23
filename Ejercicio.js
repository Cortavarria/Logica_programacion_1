
function encontrar_mayor (a,b,c){
let arreglo=[a,b,c]
let mayor=arreglo[0]
for (let i=1; i<3;i++){
    if (arreglo[i]>mayor){
        mayor=arreglo[i]
                     }
   }
   return mayor
}

function encontrar_menor (a,b,c){
    let arreglo=[a,b,c]
    let menor=arreglo[0]
    for (let i=1; i<3;i++){
        if (arreglo[i]<menor){
            menor=arreglo[i]
                         }
       }
       return menor
    }
function HayNumerosRepetidos (a,b,c){
    let arreglo=[a,b,c]
    for (let i=0; i<3;i++){
        for (let j=i+1; j<3;j++){ 
            if (arreglo[i]==arreglo[j]){
                return true
            }
        }
    }
    return false
}

function ordenar (a,b,c,eleccion){
    let arreglo=[a,b,c]
    let menor= encontrar_menor(a,b,c)
    let mayor= encontrar_mayor(a,b,c)
    let lista_ordenada=[0,0,0]
    switch (eleccion){
        case 1:
            if (HayNumerosRepetidos (a,b,c)){
              return "Ingresó dos o tres número iguales, por favor intentelo de nuevo e ingrese tres números diferentes"
            }
            for (let i=0; i<3;i++){
                if (arreglo[i]==menor){
                    lista_ordenada[2]=arreglo[i]

                }
                else if (arreglo[i]==mayor){
                    lista_ordenada[0]=arreglo[i]

                }
                else {
                    lista_ordenada[1]=arreglo[i]
                }

            }
            return "Aquí están los números ordenados según los pidió: "+ lista_ordenada
        break
        case 2:
            if (HayNumerosRepetidos (a,b,c)){
                return "Ingresó dos o tres número iguales, por favor intentelo de nuevo e ingrese tres números diferentes"
              } 
            for (let i=0; i<3;i++){
                if (arreglo[i]==menor){
                    lista_ordenada[0]=arreglo[i]

                }
                else if (arreglo[i]==mayor){
                    lista_ordenada[2]=arreglo[i]

                }
                else {
                    lista_ordenada[1]=arreglo[i]
                }

            }
            return "Aquí están los números ordenados según los pidió: "+ lista_ordenada  
        break
        }
    }

var numero1=parseInt(prompt("Ingrese el primer número"))
var numero2=parseInt(prompt("Ingrese el segudo número"))
var numero3=parseInt(prompt("Ingrese el tercer número"))
var opcion=parseInt(prompt("Ingrese 1 para ordenar de mayor a menor y 2 para ordenar de menor a mayor"))

var resultado= ordenar(numero1,numero2,numero3,opcion)
document.getElementById("resultado").innerText = resultado;