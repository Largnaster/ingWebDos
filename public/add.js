import fs from 'fs'

const formulario = document.getElementById("alForm");
var data = [];

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  sendData();
  fs.write('./alumnos.json', data, 'utf8', (err) => {
    if(err){
      return console.log(err);
    }
    console.log("Archivo guardado");
  })
});

function sendData() {
  cargarDatos();
  console.log("Enviando datos");

  const xhr = new XMLHttpRequest();

  var $form = $("#alForm");
  var indexData = {};
  $.map($form.serializeArray(), (n, i) => {
    indexData[n["name"]] = n["value"];
  });
  console.log(indexData);

  data.push(indexData);

  console.log(data);
  xhr.addEventListener("load", (e) => {
    console.log("Enviado");
  });
  xhr.addEventListener("error", (e) => {
    console.log("Error");
  });

  xhr.open("POST", "./alumnos.json");
  console.log("Datos cargados\n", data);
  xhr.send(indexData);
}

function cargarDatos() {
  console.log("Cargando datos");

  var Peticion = new XMLHttpRequest();
  Peticion.open("GET", "./alumnos.json");

  console.log("Conectado con json");
  Peticion.onload = () => {
    console.log("Solicitando datos");
    var datos = JSON.parse(Peticion.responseText);
    guardarDatos(datos);
  };

  console.log("Enviando peticion");
  Peticion.send();
}

function guardarDatos(datos) {
  for (i = 0; i < datos.length; i++) {
    data.push(datos[i]);
  }
  console.log("Datos guardados");
}
