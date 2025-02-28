// Escriba una función imprimirNumeros(desde, hasta) que genere un número cada segundo,
//   comenzando desde desde y terminando con hasta.
// Haz dos variantes de la solución describiendo el paso a paso de cada una de ellas:
// • Usando setInterval.
// • Usando setTimeout anidado.


//declaramos las variables (desde y hasta) y le agregamos valores los cuales son 1 y 10
let desde = 1;
let hasta = 10;

function imprimirNumeros(desde, hasta) {//usando setInterval y esto hace que se ejecute de manera asincrona, pero se ejecuta de manera secuencial
  let intervalo = setInterval(() => {//se ejecuta de manera asincrona pero se ejecuta de manera secuencial y no se ejecuta de manera paralela
    console.log(desde);//se ejecuta de manera secuencial agregandole la variable "desde"
    if (desde === hasta) {// aqui tenemos una sentencia if llamando a la variable "desde" y la variable "hasta" y si son iguales se detiene el intervalo
      clearInterval(intervalo);//se detiene el intervalo usando clearInterval ya que el celear es un metodo que detiene el intervalo
    } else {// con este "else" logramos que si no son iguales se aumenta la variable "desde"
      desde++;//se aumenta la variable "desde" usandpo "++"
    }
  }
    , 1000);//aqui tenemso los segundos en los que se ejecutara, lo cual "1000" equivale a 1 segundo
}

imprimirNumeros(desde, hasta);//se llama a la funcion "imprimirNumeros" pasandole las variables "desde" y "hasta"







