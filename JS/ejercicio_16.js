// Después de realizar una llamada a un archivo local en formato json, utiliza el método then()
// para filtrar los datos y mostrar solo los elementos que cumplan ciertos criterios(por ejemplo,
//   mostrar solo los nombres que comiencen con "A").

const getJSON = async () => {
  const reponse = await fetch('../JSON/ejercicio_16.json');
  const data = await reponse.json();

  const nombresConA = data.filter( elemento => elemento.nombre[0] === 'A' );

  console.log(nombresConA);
}

getJSON();