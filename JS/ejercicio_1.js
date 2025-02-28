// Escriba una función imprimirNumeros(desde, hasta) que genere un número cada segundo,
//   comenzando desde desde y terminando con hasta.
// Haz dos variantes de la solución describiendo el paso a paso de cada una de ellas:
// • Usando setInterval.
// • Usando setTimeout anidado.

let desde = 1;
let hasta = 10;

function imprimirNumeros(desde, hasta) {//usando setInterval y esto hace que se ejecute de manera asincrona, pero se ejecuta de manera secuencial
  let intervalo = setInterval(() => {
    console.log(desde);
    if (desde === hasta) {
      clearInterval(intervalo);
    } else {
      desde++;
    }
  }
    , 1000);
}

imprimirNumeros(desde, hasta);







