window.onload = cargarDatos();
alumnDisplay = document.getElementById("alumnDisplay");

document.addEventListener("click", (e) => {
  if (e.srcElement.id == "agregar") {
    actionAgregar();
  } else if (e.srcElement.id == "eliminar") {
    actionEliminar();
  } else {
    return;
  }
});

function actionAgregar() {
  window.location = './agregar.html'
}

function actionEliminar() {
  alert("Eliminar");
}

function cargarDatos(){
  console.log("Cargando datos");

  var Peticion = new XMLHttpRequest();
  Peticion.open('GET', './alumnos.json');

  console.log("Conectado con json")
  Peticion.onload = () => {
    console.log("Solicitando datos");
    var datos = JSON.parse(Peticion.responseText);
    renderData(datos);
  }

  console.log("Enviando peticion")
  Peticion.send();
}

function renderData(data){
  var htmlString = "";
  console.log(data)

  for (i=0; i<data.length; i++){
    htmlString += `<tr>
      <th scope="row">${data[i].codigo}</th>
      <th>${data[i].nombre}</th>
      <th>${data[i].apellido}</th>
      <th>${data[i].notas}</th>
      <th>${data[i].edad}</th>
      <th>
        <button id="eliminar" class="btn btn-danger">Eliminar</button>
      </th>
    </tr>`
  }

  alumnDisplay.insertAdjacentHTML('beforeend', htmlString);
}