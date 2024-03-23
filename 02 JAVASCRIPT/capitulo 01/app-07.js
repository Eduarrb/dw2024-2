/* OBJECTS */

// propiedades - caracteristicas
// key - value pairs

const celular = {
    marca: 'Apple',
    modelo: 'Iphone 20',
    precio: 50000,
    size: "6.5'",
    accesorios: ['cargador', 'audifonos', 'cable usb-c'],
    bateria: {
        capacidad: '5000w',
        tipoCarga: '30w',
    },
};

// console.log(celular.marca);
// console.log(celular.accesorios[1]);
// console.log(celular.bateria.tipoCarga);

// 1️⃣ METODOS
const usuario = {
    dni: '12345678',
    nombre: 'Eder',
    correo: 'eder@continental.edu.pe',
    fechaNac: 1996,
    iniciarSesion: function () {
        console.log('Bienvenido, Iniciaste sesión');
    },
    cerrarSesion: () => {
        console.log('Hasta la proxima oportunidad');
    },
};

// console.log(usuario);
// usuario.iniciarSesion();
// usuario.cerrarSesion();

const personaje = {
    nombre: 'Joshi',
    correo: 'joshi@nintendo.com',
    skills: [
        'saltar',
        'comer tortugas',
        ' sacar la lengua',
        'correr rapido',
        'muere por mario',
    ],
    saltar: function () {
        // console.log('joshi puede saltar alto');
        // console.log(`${usuario.nombre} puede saltar muy alto`);
        // console.log(this.nombre);
        // ✨✨ LA PALABRA RESERVADA "THIS"
        // LA PALABRA RESERVADA THIS HACE REFERENCIA AL OBJETO EN EL CUAL SE ESTE EJECUTANDO
        console.log(`${this.nombre} puede saltar muy alto`);
    },
    // Con arrow funtion no funciona la palabra reservada this
    // printCorreo: () => {
    //     console.log(`${this.correo}`);
    // },
    plantilla: '',
    crearPlantilla: function () {
        // this.skills.forEach(el => {
        //     this.plantilla += `<h1>${el}</h1>`;
        // });
        // this.skills.forEach(function (el) {
        //     console.log(personaje);
        //     // this.plantilla += `<h1>${el}</h1>`;
        // });
        // this.skills.forEach(el => {
        //     console.log(this);
        // });
        for (let i = 0; i < this.skills.length; i++) {
            this.plantilla += `<h1>${this.skills[i]}</h1>`;
        }
    },
    printHtml: function (etiqueta) {
        etiqueta.innerHTML = this.plantilla;
    },
};

// console.log(this);
// personaje.saltar();
// personaje.printCorreo();
// console.log(personaje.plantilla);
personaje.crearPlantilla();
console.log(personaje.plantilla);
const bloque1 = document.querySelector('.bloque1');
personaje.printHtml(bloque1);



