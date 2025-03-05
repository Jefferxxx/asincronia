// 14. Crea tres Promises consecutivas, donde cada una se resuelva después de 1 segundo y
// devuelva un número diferente.Luego, encadena las tres Promises para sumar los resultados
// y mostrar el resultado final.

const promesa1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(1);
  },  1000);
});

const promesa2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(2);
  },  1000);
});

const promesa3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(3);
  },  1000);
});

Promise.all([promesa1, promesa2, promesa3])
  .then((resultados) => {
    const suma = resultados.reduce((acumulador, valor) => acumulador + valor, 0);
    console.log(suma);  
  });