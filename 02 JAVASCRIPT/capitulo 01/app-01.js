/*
    ⚡⚡ JAVASCRIPT ⚡⚡

    DOM -> DOCUMENT OBJECT MODEL
    "KEY SENSITIVE"
    NO ES OBLIGATORIO EL USO DEL PUNTO Y COMA AL FINAL DE LA LINEA DE CODIGO, PERO ES UNA BUENA PRACTICA
*/

/*
    TIPOS DE DATOS
    - STRINGS o CADENAS DE TEXTO
    - NUMBERS
    - BOOLEANS
    - OBJECTOS (GENERAL)
*/

/* ES5 -> ES6 (JS VANILLA) + */

/*
    DECLARAR VARIABLES VAR
*/

// var nombre = 'Eduardo';

/* LET & CONST */

let nombre = 'Carlos';
console.log(nombre);
nombre = 'Roberto';
console.log(nombre);

const apellido = 'Casas';
// apellido = 'Casas';

// let nombre1 = 12;
// let bool = true;

// 1️⃣ CONCATENAR
let nombreCompleto = nombre + ' ' + apellido;

// console.log(nombreCompleto);

// 2️⃣ PROPIEDADES

console.log(nombreCompleto.length);

// 3️⃣ LOS STRING SON UN TIPO DE OBJETO MUY PARECIDOS A LOS ARRAYS
// INDICES 0, 1, 2 ..... N
console.log(apellido[0]);
console.log(apellido[4]);

// REALIZAR
// dados las variables, obtener el correo corporativo
// ejem -> jsalaverri@tucorreo.com
const nombre2 = 'Jacinto';
const apellido2 = 'Salaverri';

const correo = nombre2[0] + apellido + '@continental.edu.pe';
console.log(correo.toLowerCase());


const lorem = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic quo quod rem obcaecati voluptatum sunt doloremque alias provident vero quis, quam, expedita vel amet eius dolores. Asperiores quis nam repellat';

console.log(lorem[lorem.length - 1]);