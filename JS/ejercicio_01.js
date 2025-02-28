// Escriba una función imprimirNumeros(desde, hasta) que genere un número cada segundo,
//   comenzando desde desde y terminando con hasta.
// Haz dos variantes de la solución describiendo el paso a paso de cada una de ellas:
// • Usando setInterval.
// • Usando setTimeout anidado.

function imprimirNumeros(desde, hasta) {
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

imprimirNumeros(1, 10);

setTimeout(() => {
    let intervalo = setInterval(() => {
      console.log(desde);
      if (desde === hasta) {
        clearInterval(intervalo);
      } else {
        desde++;
      }
    }
    , 1000);
  })



