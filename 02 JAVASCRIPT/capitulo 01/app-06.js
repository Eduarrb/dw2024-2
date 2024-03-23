// ARROW FUNCTIONS
// sayHello();

function sayHello() {
    console.log('Hola mundo!');
}

/*********************************/

const saludar = () => {
    console.log('Hola a todos');
};

// saludar();

const sumar = (a, b) => {
    let res = a + b;
    console.log(res);
};

// sumar(2, 3);

// const calcEdad = fechaNac => {
//     let edad = 2024 - fechaNac;
//     return edad;
// };

// // console.log(calcEdad(1970));
// const res1 = calcEdad(1965);
// console.log(res1);

// const calcEdad = fechaNac => {
//     return 2024 - fechaNac;
// };

// const res1 = calcEdad(2019);
// console.log(res1);

const calcEdad = (fechaNac, anioActual) => anioActual - fechaNac;

const res1 = calcEdad(2003, 2024);
console.log(res1);
