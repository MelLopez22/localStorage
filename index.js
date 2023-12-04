const form = document.querySelector('form');
const nombreInput = document.querySelector('#nombre');
const guardarButton = document.querySelector('#guardar');
const obtenerButton = document.querySelector('#obtener');
const eliminarButton = document.querySelector('#eliminar');
const resultadoP = document.querySelector('#resultado');

let nombres = JSON.parse(localStorage.getItem('nombres')) || [];

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const nombre = nombreInput.value.trim(); // Eliminar espacios en blanco al inicio y al final
    if (nombre !== '') {
        nombres.push(nombre);
        localStorage.setItem('nombres', JSON.stringify(nombres));
        nombreInput.value = ''; // Limpiar el input después de guardar el nombre
        Swal.fire('Guardado con éxito', '', 'success'); // Mostrar SweetAlert de éxito
    } else {
        Swal.fire('Error', 'Por favor, ingresa un nombre válido', 'error'); // Mostrar SweetAlert de error si el nombre está vacío
    }
});

obtenerButton.addEventListener('click', () => {
    nombres = JSON.parse(localStorage.getItem('nombres')) || [];
    if (nombres.length === 0) {
        resultadoP.textContent = 'No hay localStorage';
    } else {
        resultadoP.textContent = `Nombres: ${nombres.join(', ')}`;
    }
});

eliminarButton.addEventListener('click', () => {
  if (nombres.length === 0 || localStorage.getItem('nombres') === null) {
    Swal.fire('LocalStorage está vacío', '', 'warning'); // Mostrar SweetAlert si el LocalStorage ya está vacío
  } else {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Se eliminarán todos los nombres del LocalStorage',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('nombres');
        nombres = [];
        resultadoP.innerHTML = '';
        Swal.fire('LocalStorage eliminado', '', 'success');
      }
    });
  }
});


function crearListaNombres() {
  resultadoP.innerHTML = '';

  if (nombres.length === 0) {
    resultadoP.textContent = 'No hay nombres en localStorage';
    return;
  }

  const lista = document.createElement('ul');

  nombres.forEach((nombre, index) => {
    const listItem = document.createElement('li');
    listItem.classList.add('nombre-item');

    const nombreContainer = document.createElement('div');
    nombreContainer.textContent = nombre;
    nombreContainer.classList.add('div-nombre');


    const buttonsContainer = document.createElement('div');

    const editarButton = document.createElement('button');
    editarButton.textContent = 'Editar';
    editarButton.addEventListener('click', () => editarNombre(index));

    const eliminarButton = document.createElement('button');
    eliminarButton.textContent = 'Eliminar';
    eliminarButton.classList.add('eliminar-button');
    eliminarButton.addEventListener('click', () => eliminarNombre(index));

    buttonsContainer.appendChild(editarButton);
    buttonsContainer.appendChild(eliminarButton);

    listItem.appendChild(nombreContainer);
    listItem.appendChild(buttonsContainer);

    lista.appendChild(listItem);
  });

  resultadoP.appendChild(lista);
}


// Resto del código igual que antes...


function editarNombre(index) {
  const nuevoNombre = prompt('Ingrese el nuevo nombre');
  if (nuevoNombre !== null && nuevoNombre.trim() !== '') {
    nombres[index] = nuevoNombre.trim();
    localStorage.setItem('nombres', JSON.stringify(nombres));
    crearListaNombres();
  }
}

function eliminarNombre(index) {
  nombres.splice(index, 1);
  localStorage.setItem('nombres', JSON.stringify(nombres));
  crearListaNombres();
}

obtenerButton.addEventListener('click', () => {
  nombres = JSON.parse(localStorage.getItem('nombres')) || [];
  nombres.length > 0 ? crearListaNombres() : (resultadoP.textContent = 'No hay nombres en localStorage');
});
