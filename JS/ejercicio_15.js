// 15. Realiza una llamada a un archivo local Muestra en formato json, luego muestre los datos
// obtenidos en la consola.

const getJSON = async () => {//DECLARAMOS UNA FUNCION ASINCRONICA PARA REALIZAR UNA LLAMADA A UN ARCHIVO LOCAL
  const reponse = await fetch('../JSON/ejercicio_15.json');//REALIZAMOS UNA LLAMADA A UN ARCHIVO JSON PARA OBTENER LOS DATOS Y SAMOS  AWAIT PARA ESPERAR A QUE SE RESUELVA
  const data = await reponse.json();//USAMOS AWAIT PARA ESPERAR A QUE SE RESUELVA Y USAMOS JSON PARA OBTENER LOS DATOS 
  console.log(data);//MOSTRAMOS LOS DATOS EN LA CONSOLA LLAMANDO A LA VARIABLE DATA
}

getJSON();    