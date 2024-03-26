const tarea = document.querySelector('.tarea');
// console.log(tarea.value);
const btn = document.querySelector('button');
const tareasUl = document.querySelector('ul');
const alerta = document.querySelector('.alerta');

const tareasInsertadas = document.querySelectorAll('li');

btn.addEventListener('click', () => {
    // console.log('hiciste click');
    // console.log(tarea.value);
    // tareasUl.innerHTML = `<li>${tarea.value}</li>`;
    if (tarea.value === '') {
        alerta.textContent = 'Debes ingresar una tarea para agregarla';
    } else {
        alerta.innerHTML = '';
        const item = `<li>${tarea.value}</li>`;
        tareasUl.insertAdjacentHTML('beforeend', item);
        tarea.value = '';
    }
});

// 1️⃣💥💥 SOLUCION INCORRECTA
// console.log(tareasInsertadas);
// for (let i = 0; i < tareasInsertadas.length; i++) {
//     // console.log(tareasInsertadas[i]);
//     tareasInsertadas[i].addEventListener('click', function(){
//         tareasInsertadas[i].remove();
//     })
// }

// 2️⃣ EVENT DELEGATION
tareasUl.addEventListener('click', function(e){
    // console.log(e.target.tagName);
    if(e.target.tagName === 'LI'){
        e.target.remove();
    }
});
