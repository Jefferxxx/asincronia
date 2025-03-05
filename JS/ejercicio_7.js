//7. Crear una función find que acepte un array y un callback y que:
//• por cada elemento del array ejecute el callback pasándole dicho elemento como
//argumento
//• devuelva el elemento pasado como argumento del primer callback que devuelva true
//• sí ningún callback devuelve true, devuelva undefined

function find(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            return array[i];
        }
    }
    return undefined;
}

const array = [1, 2, 3, 4, 5];

const resultado = find(array, (element) => element % 2 === 0);

console.log(resultado); 
