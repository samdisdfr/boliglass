const url="http://localhost:5000/api/clientes"

function enviar() {
    const datos = JSON.stringify({
        nombre:nombre.value,
        correo:correo.value,
        numero:numero.value,
        mensaje:mensaje.value,
    });

    axios.post(url, datos, {
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(function (response) {
        alert(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });
}

//ver clientes
// Utiliza el evento 'DOMContentLoaded' para asegurarte de que el DOM se haya cargado completamente
document.addEventListener('DOMContentLoaded', async () => {
    // Llama a la función de obtención y visualización de datos al inicio
    await fetchDataAndDisplay();
  
    // Agrega un evento de clic al botón con ID 'actualizarBtn'
    const btnActualizar = document.getElementById('actualizarBtn');
    if (btnActualizar) {
      btnActualizar.addEventListener('click', fetchDataAndDisplay);
    }
  });
  
  // Función para obtener y mostrar los datos
  async function fetchDataAndDisplay() {
    try {
      const productList = await (await fetch("http://localhost:5000/api/clientes")).json();
      display(productList);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  }
  
  // Función para mostrar los datos en el HTML
  function display(productList) {
    let productoHTML = '';
  
    productList.forEach(element => {
      productoHTML += `
        <div class="data-container">
          <div class="data-field">
            <span id="nombre">${element.nombre}</span>
          </div>
  
          <div class="data-field">
            <span id="correo">${element.correo}</span>
          </div>
  
          <div class="data-field">
            <span id="numero">${element.numero}</span>
          </div>
  
          <div class="data-field">
            <span id="mensaje">${element.mensaje}</span>
          </div>
        </div>
      `;
    });
  
    // Agregar el HTML generado al contenedor deseado
    const container = document.getElementById('todo');
    if (container) {
      container.innerHTML = productoHTML;
    } else {
      console.error('Contenedor no encontrado');
    }
  }
  