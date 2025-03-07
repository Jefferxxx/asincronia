//23. Usar un proxy para la validación de los valores de propiedades
//• Cuando declaremos que el atributo es numérico solo perimimos que ingresen
//números
//• Cuando declaremos que el atributo es alfanumérico solo permitimos que ingresen
//letras
//• Cuando declaremos que el atributo es un email, solo permitimos que ingresen
//correos
//• Cuando declaremos que el atributo es de tipo date, solo permitimos que ingresen
//fechas
//• Para todos los atributos no se puede ingresar espacios en blanco tanto al inicio como
//al final de estos y se debe mostrar el error personalizado por consola

const handler = {
    set: function(obj, prop, value) {
        const tipo = typeof value;

        function esAlfanumerico(str) {
            return /^[a-zA-Z]+$/.test(str);
        }

        switch (prop) {
            case 'numero':
                if (tipo !== 'number') {
                    console.error(`Error: La propiedad '${prop}' debe ser un número.`);
                    return;
                }
                break;
            case 'alfanumerico':
                if (tipo !== 'string' || !esAlfanumerico(value)) {
                    console.error(`Error: La propiedad '${prop}' debe ser una cadena alfanumérica (solo letras).`);
                    return;
                }
                break;
            case 'email':
                if (tipo !== 'string' || !/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(value)) {
                    console.error(`Error: La propiedad '${prop}' debe ser un email válido.`);
                    return;
                }
                break;
            case 'fecha':
                if (tipo !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
                    console.error(`Error: La propiedad '${prop}' debe ser una fecha en formato AAAA-MM-DD.`);
                    return;
                }
                break;
            default:
                console.error(`Error: No se permite la asignación a la propiedad '${prop}'.`);
                return;
        }

        // Validación de espacios en blanco al principio y al final
        if (tipo === 'string' && value.trim() !== value) {
            console.error(`Error: La propiedad '${prop}' no puede contener espacios en blanco al principio ni al final.`);
            return;
        }

        obj[prop] = value;
    }
};

const objeto = new Proxy({}, handler);

function obtenerYValidarEntrada(prop) {
    let entrada = prompt(`Ingrese un valor para la propiedad '${prop}':`);

    if (entrada === null) {
        console.log("Entrada cancelada por el usuario.");
        return;
    }

    entrada = entrada.trim(); 

    if (prop === 'numero') {
        const numero = Number(entrada);
        if (isNaN(numero)) {
            console.error("Error: No es un número válido.");
            return;
        }
        objeto[prop] = numero;
    } else {
        objeto[prop] = entrada;
    }
}

obtenerYValidarEntrada('numero');
obtenerYValidarEntrada('alfanumerico');
obtenerYValidarEntrada('email');
obtenerYValidarEntrada('fecha');

console.log(objeto);

