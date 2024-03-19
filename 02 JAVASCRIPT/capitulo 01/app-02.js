// NUMBERS

let radio = 12;
let pi = 3.1416;

// console.log(radio);
// console.log('12');
// console.log(typeof(radio));
// console.log(typeof(true));

let circunferencia = pi * radio ** 2;
// console.log(circunferencia);

// 1️⃣ OPÉRACIONES MATEMATICAS
let num1 = 10;
let num2 = 5;

// console.log(num1);
let res1 = num1 + num2;
// console.log(res1);

let numExtranio = '12';
// console.log(numExtranio);

// let res2 = num1 + Number(numExtranio);
// let res2 = num1 + parseInt(numExtranio);
let res2 = num1 + +numExtranio;
// console.log(res2);
let res3 = num1 - num2;
// console.log(res3);

let res4 = num1 * num2;
// console.log(res4);

// Como saber si un numero es par
// % => residuo
let res5 = 1000 % 2;
// console.log(res5);

// 2️⃣ Reducir el codigo
// num1 = num1 + 5;
num1 += 5; // => num1 = num1 + 5
// console.log(num1);

num1 -= 2;
// console.log(num1);

num1 *= 3;
// console.log(num1); // 39

// 3️⃣ reducir o aumentar en una unidad;
num1++;
// console.log(num1);

num1--;
// console.log(num1);

// 4️⃣ OBJETO MATH
let num3 = 10.5; // 10

let res6 = Math.floor(num3);
// console.log(res6);

let res7 = Math.ceil(num3);
// console.log(res7);

let res8 = Math.round(num3);
// console.log(res8);

let num4 = 25.358558588;
// console.log(num4);
let res9 = num4.toFixed(2);
// console.log(num1);
// console.log(res9);


