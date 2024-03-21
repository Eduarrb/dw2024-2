/* ⚡⚡ ARRAYS ⚡⚡ */
/*
    CONJUNTO DE ELEMENTOS
    LISTA DE ELEMEMTOS
    ✨ TIPO DE OBJETO
*/

let numeros = [23, 45, 78, 963, 1236, 1.5];
// console.log(numeros);
// console.log(numeros[1]);
// console.log(numeros[5]);
// console.log(numeros[numeros.length - 1]);

let mixto = [256, 12.6, false, 'Jaimito', ['Mario', 'Joshi']];
// console.log(mixto);
// console.log(mixto[4][0]);

let personajes = ['Ryo', 'Mario', 'Joshy', 'Ken', 'Chun-li', 'Vega', 'Kratos'];

// 1️⃣ LOOPS -> CICLOS
// for(let contador = 0; contador < personajes.length; contador++){
//     // console.log(personajes[contador]);
//     console.log(`${contador + 1}: ${personajes[contador]}`);
// }

let bloque1 = document.querySelector(`.bloque1`);

// for(let i = 0; i < personajes.length; i++){
//     // console.log(`<h1>${personajes[i]}</h1>`);
//     let platilla = `<h1>${personajes[i]}</h1>`;
//     bloque1.innerHTML = platilla;
// }

let plantilla = '';

// console.log(plantilla);

for (let i = 0; i < personajes.length; i++) {
    plantilla = plantilla + `<h1>${personajes[i]}</h1>`;
}

// console.log(plantilla);
bloque1.innerHTML = plantilla;

personajes.forEach(function (e, i) {
    console.log(`${i}: ${e}`);
});
