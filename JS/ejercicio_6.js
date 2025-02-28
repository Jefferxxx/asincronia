// 6. Crear una función some que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva true si al menos una de las llamadas al callback devolvió true

const some = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return true;
    }
  }
  return false;
}

console.log(some([1, 2, 3, -4, 5], function (p) {
  if (p > 0) {
    return true;
  }
}));

console.log(result);