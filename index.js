
//---------------------------------------LOCAL STORAGE--------------------------------------------------
  // LocalStorage

//   localStorage es una función en JavaScript que te permite almacenar datos en el navegador del usuario para que puedan acceder a ellos en su próxima visita al sitio web.

// Por ejemplo, si tienes un sitio web de notas, podrías utilizar localStorage para guardar las notas del usuario para que puedan acceder a ellas en futuras visitas.

// Aquí te dejo un ejemplo de cómo se podría utilizar localStorage en JavaScript:

// Guardar datos en localStorage
localStorage.setItem('nota', 'Recordar comprar leche');

// Obtener datos de localStorage
const nota = localStorage.getItem('nota');
console.log(nota); // muestra "Recordar comprar leche" en la consola


//------------------------------CREAMOS NUESTRO LOCALSTORAGE--------------------------------------

  // Obtener referencias a los elementos HTML
  const form = document.querySelector('form');
  const nombreInput = document.querySelector('#nombre');
  const guardarButton = document.querySelector('#guardar');
  const obtenerButton = document.querySelector('#obtener');
  const eliminarButton = document.querySelector('#eliminar');
  const resultadoP = document.querySelector('#resultado');
  
  // Obtener el array de nombres del localStorage, o inicializarlo como un array vacío si no existe
  let nombres = JSON.parse(localStorage.getItem('nombres')) || [];
  
  // Manejar el evento submit del formulario para guardar el nombre en el array y en localStorage
  form.addEventListener('submit', (event) => {
      event.preventDefault();
      const nombre = nombreInput.value;
      nombres.push(nombre);
      localStorage.setItem('nombres', JSON.stringify(nombres));
       // Limpiar el input después de guardar el nombre
  });
  
  // Manejar el evento click del botón Obtener para obtener los nombres del array de localStorage y mostrarlos en el resultado
  obtenerButton.addEventListener('click', () => {
    nombres = JSON.parse(localStorage.getItem('nombres')) || []; // Actualizar el array de nombres
    if (nombres.length === 0) {
      resultadoP.textContent = 'No hay localStorage';
    } else {
      resultadoP.textContent = `Nombres: ${nombres.join(', ')}`;
    }
  });
  
  
  // Manejar el evento click del botón Eliminar para eliminar los nombres del localStorage y borrar el resultado
  eliminarButton.addEventListener('click', () => {
    localStorage.removeItem('nombres');
    nombres = [];
    resultadoP.textContent = '';
  });
  








// Ejercicio 1

// En el archivo JavaScript, selecciona el elemento con el ID "mi-contenedor" y añade un botón que cuando se haga clic, cambie el texto del párrafo a "¡El texto ha sido cambiado!".

// Ejercicio 2

// En el archivo JavaScript, selecciona el elemento con el ID "mi-contenedor" y añade un botón que cuando se haga clic, cambie el color del texto del párrafo a rojo.

// Ejercicio 3

// En el archivo JavaScript, selecciona el elemento con el ID "mi-contenedor" y añade un botón que cuando se haga clic, cambie el color de fondo del contenedor a azul.

// Ejercicio 4

// En el archivo JavaScript, selecciona el elemento con el ID "mi-contenedor" y añade un botón que cuando se haga clic, cambie el color de fondo del contenedor a azul y el color del texto del párrafo a rojo.


