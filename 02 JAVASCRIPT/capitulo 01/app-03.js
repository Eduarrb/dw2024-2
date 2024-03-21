// ⚡⚡ TEMPLATE STRINGS ⚡⚡

const nombre = 'Jaimito';
let apellido = 'Perez';
let edad = 18;

// Hola, mi nombre es Jaimito y tengo 18 años;

let resp1 = 'Hola, mi nombre es ' + nombre + ' y tengo ' + edad + ' años';

// console.log(resp1);

let resp2 = `Hola, mi nombre es ${nombre} y tengo ${edad} años`;
console.log(resp2);

// let prueba = '<div>' + nombre + '</div>';

let plantilla = `
    <div>
        <h4>Hola soy ${nombre}</h4>
        <p>Tengo ${edad} años</p>
    </div>
`;

const bloque1 = document.querySelector('.bloque1');
// console.log(bloque1);
bloque1.innerHTML = plantilla;
// bloque1.textContent = plantilla;
