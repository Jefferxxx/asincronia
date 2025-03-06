//21. Realiza una llamada a un archivo local en formato json y maneja posibles errores utilizando
//try/catch para mostrar un mensaje de error en caso de fallo.

async function getCuadernos() {
    try {
      const response = await fetch('../JSON/ejercicio_21.json'); 
  
      if (!response.ok) {//si la respuesta no es correcta se lanza un error
        throw new Error(`HTTP error! status: ${response.status}`);//se lanza un error con el mensaje de error para mostrar en la consola
      }
  
      const data = await response.json();//
  
      // Filtra los cuadernos cuyo nombre comience con "C"
      const result = data.filter(cuaderno => cuaderno.nombre[0].toUpperCase() === "C");//use toUpperCase para convertir la primera letra en mayuscula aunque sea en minuscula
  
      console.log("Cuadernos cuyo nombre empieza con 'C':", result);
    } catch (error) {
      console.error("Error al obtener la información de los cuadernos:", error);
    }
  }
  
  getCuadernos();