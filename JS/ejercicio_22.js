//22. Crear un objeto proxy usando la clase Proxy

const persona = {
    nombre: "Jefferson",
    apellido: "cadavid",
    edad: 18,
    ciudad: "Bucaramanga",
  };
  
  const proxy = new Proxy(persona, {
    get: (target, prop) => {
      if (prop in target) {
        return target[prop];
      } else {
        return "Propiedad no encontrada";
      }
    },
  });
  
  console.log(proxy.nombre); // "Jefferson"
  console.log(proxy.apellido); // "cadavid"
  console.log(proxy.edad); // 18
  console.log(proxy.ciudad); // "bucaramanga"
  console.log(proxy.direccion); // "Propiedad no encontrada"

