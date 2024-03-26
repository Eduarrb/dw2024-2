// ✨✨ EJECUCIONES SINCRONAS Y ASINCRONAS  ✨✨
// 1️⃣ SINCRONAS

// setInterval(function () {
//     console.log('esta es una ejecucion asincrona');
// }, 1000)

let nombre = 'Carlos';
// console.log(nombre);

const traeLosDatos = () => {
    console.log('aqui estan los datos');
};

// traeLosDatos();

// 2️⃣ ASINCRONAS
// JSON -> JAVASCRIPT OBJECT NOTATION
fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(res =>{
        console.log(res.json());
    })
    .catch(err => {
        console.log(err);
    })
