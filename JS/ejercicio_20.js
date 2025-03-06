//20. Crea un bucle que realice llamadas asincrónicas utilizando async/await para procesar una
//lista de elementos uno por uno.


// Definición de las tareas asíncronas
async function tarea1() {
    // Esta función representa una tarea asíncrona que devuelve una promesa.
    return new Promise((resolve) => {
      // Simula una operación asíncrona utilizando setTimeout, que espera 2000 milisegundos (2 segundos).
      setTimeout(() => {
        // Imprime un mensaje en la consola indicando que la tarea 1 ha sido completada.
        console.log("Tarea 1 completada");
        // Resuelve la promesa con un mensaje indicando que la tarea 1 ha finalizado.
        resolve("Tarea 1 finalizada");
      }, 2000); // Tiempo de espera en milisegundos.
    });
  }
  
  async function tarea2() {
    // Esta función representa otra tarea asíncrona que devuelve una promesa.
    return new Promise((resolve) => {
      // Simula una operación asíncrona utilizando setTimeout, que espera 1500 milisegundos (1.5 segundos).
      setTimeout(() => {
        // Imprime un mensaje en la consola indicando que la tarea 2 ha sido completada.
        console.log("Tarea 2 completada");
        // Resuelve la promesa con un mensaje indicando que la tarea 2 ha finalizado.
        resolve("Tarea 2 finalizada");
      }, 1500); // Tiempo de espera en milisegundos.
    });
  }
  
  async function tarea3() {
    // Esta función representa una tarea asíncrona que simula un error y devuelve una promesa.
    return new Promise((resolve, reject) => {
      // Simula una operación asíncrona utilizando setTimeout, que espera 1000 milisegundos (1 segundo).
      setTimeout(() => {
        // Imprime un mensaje en la consola indicando que la tarea 3 ha fallado.
        console.log("Tarea 3 falló");
        // Rechaza la promesa con un mensaje de error indicando que la tarea 3 falló.
        reject("Error en la tarea 3");
      }, 1000); // Tiempo de espera en milisegundos.
    });
  }
  
  // Función para procesar las tareas secuencialmente
  async function procesarTareasSecuencialmente(tareas) {
    // Utiliza un bucle for...of para iterar sobre cada tarea en la lista.
    for (const tarea of tareas) {
      try {
        // Espera a que la tarea actual termine antes de continuar con la siguiente.
        // La palabra clave 'await' se utiliza para esperar la resolución de la promesa devuelta por la tarea.
        const resultado = await tarea();
        // Imprime el resultado de la tarea en la consola.
        console.log(resultado);
      } catch (error) {
        // Maneja cualquier error que pueda ocurrir durante la ejecución de una tarea.
        // Imprime un mensaje de error en la consola con el mensaje de error específico.
        console.error(`Error en la tarea: ${error}`);
      }
    }
    // Imprime un mensaje final en la consola indicando que todas las tareas han sido completadas.
    console.log("Todas las tareas han sido completadas.");
  }
  
  // Ejemplo de uso
  // Crea una lista de tareas que se van a procesar secuencialmente.
  const misTareas = [tarea1, tarea2, tarea3];
  // Llama a la función para procesar las tareas secuencialmente.
  procesarTareasSecuencialmente(misTareas);