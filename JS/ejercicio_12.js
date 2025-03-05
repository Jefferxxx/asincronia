// 12. Define una función asincrónica que espere 1 segundo y luego devuelva una cadena que
// diga "Operación completada".Utiliza async / await.

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Operación completada");
    }, ms);
  });
}

delay(1000).then((result) => {
  console.log(result);
});