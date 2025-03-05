// 19. Realiza tres Promises, algunas de las cuales se resuelvan y otras se rechacen.Utiliza
// Promise.allSettled() para obtener información sobre el estado de todas las Promises.

const promesa1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promesa 1 resuelta");
  }, 1000);
});

const promesa2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promesa 2 no resuelta");
  }, 2000);
})

const promesa3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promesa 3 resuelta");
  }, 3000);
})

const promesa4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promesa 4 no resuelta");
  }, 4000);
})

Promise.allSettled([promesa1, promesa2, promesa3, promesa4])
  .then((resultados) => {
    console.log(resultados);
  })
  