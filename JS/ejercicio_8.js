//Crear una función findIndex que acepte un array y un callback y que:
//• por cada elemento del array ejecute el callback pasándole dicho elemento como
//argumento
//• devuelva el índice del elemento pasado como argumento del primer callback que
//devuelva true
//• sí ningún callback devuelve true, devuelva undefined

function findIndex(array, callback) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        const result = callback(element);
        if (result) {
            return i;
        }
    }
    return undefined;
}
