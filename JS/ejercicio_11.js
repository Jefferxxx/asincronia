//11. Crea una Promisa que se resuelva después de 3 segundos y luego imprima "Promisa
  //  resuelta" cuando se cumpla.

  const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promisa resuelta");
    }, 3000);
  });
  
  promesa.then((result) => {
    console.log(result);
  });