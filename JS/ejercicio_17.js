// 17. Crea una función asincrónica que realice una llamada a un archivo local en formato json y
// luego manipule los datos recibidos para mostrar información específica.



async function getJSON() {

  const response = await fetch('../JSON/ejercicio_17.json');
  const data = await response.json();

  const result = data.filter(elemento => elemento.pais[0] == "c");


  console.log((result));

}

getJSON();
