/* ⚡⚡ FUCTIONS ⚡⚡ */
// FUNCIONES DE EXPRESION REGULAR

// LAS EJECUCIONES SON SINCRONAS

function saludar() {
    console.log('Hola a todo el mundo');
}

// saludar();

// VARIABLES GLOBALES
let suma = 25 + 36;
// console.log(suma); // 61

// AMBITO DE LA FUNCION, SCOPE, CONTEXTO
function sumarNums() {
    // let suma = 0
    suma = 10 + 5;
    console.log(suma);
}

// sumarNums();
// console.log(suma);

// 1️⃣ PARAMETROS Y ARGUMENTOS

function calcEdad(fechaNac) {
    // PARAMETRO
    const edad = 2024 - fechaNac;
    console.log(edad);
}

// calcEdad(1990); // ARGUMENTO
// calcEdad(1975);

function saludar2 (nombre, ciudad, estadoCivil){
    let saludo = `Hola, mi nombre es ${nombre}, soy de la ciudad de ${ciudad} y estoy ${estadoCivil}`;
    console.log(saludo);
}

// saludar2('Juan', 'Iquitos', 'Divorsiado');


// 2️⃣ RETURN
function sumar (num1, num2) {
    const res = num1 + num2;
    return res;
}

// sumar(2, 4); // 6
// console.log(sumar(2, 4));
const resultado = sumar(2, 4);

const bloque1 = document.querySelector('.bloque1');
// bloque1.textContent = resultado;
bloque1.textContent = sumar(6,5);
