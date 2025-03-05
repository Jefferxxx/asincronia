// 18. Crea tres Promises que se resuelvan después de diferentes intervalos de tiempo y luego
// utilice Promise.all() para mostrar un mensaje cuando todas se hayan resuelto.

const promesa1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promesa 1 resuelta");
  }, 1000);
});

const promesa2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promesa 2 resuelta");
  }, 2000);
})

const promesa3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promesa 3 resuelta");
  }, 3000);
})

Promise.all([promesa1, promesa2, promesa3])
  .then((resultados) => {
    console.log(resultados);
  })