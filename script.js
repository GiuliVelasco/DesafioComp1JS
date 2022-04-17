let numeroIngresado = parseInt(prompt("Ingrese un número entero y le mostraremos su tabla de muliplicar."))
//Funcion
function multiplicacion(numero, factor){
    return (numero * factor)
}
/*funcion flecha
multiplicacion(numero, factor) => numero * factor
*/
//Ciclo for
if(!isNaN(numeroIngresado)){
    for (let i=0 ; i<=10 ; i++){
        console.log (multiplicacion(numeroIngresado,i))
        alert(numeroIngresado + " X " + i + "=" + multiplicacion(numeroIngresado,i))
    }
}else{
    alert("Ingrese un número válido.")
}