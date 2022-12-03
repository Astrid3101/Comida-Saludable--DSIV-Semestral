let baseUrl = "http://localhost:8080";
let sobrenosotros = [];

function ObtenerInfor() {
  fetch(baseUrl + '/sobrenosotros').then(res => {
    res.json().then(json => {
      sobrenosotros = json;
      ImprimirNosotros();
    });
  });
}

function ImprimirNosotros() {
  let contenedor = document.getElementById("Idtabla");
  contenedor.innerHTML = "";

  sobrenosotros.forEach(Sobrenosotros => {
    contenedor.innerHTML += MapearNosotros(Sobrenosotros);
  });
}

function MapearNosotros(Sobrenosotros) {
  return `<tr>
  <td>${Sobrenosotros.nombre}</td><br>
  <td>${Sobrenosotros.correo}</td><br>
  <td>${Sobrenosotros.telefono}</td><br>
  <td>${Sobrenosotros.celular}</td><br>
</tr>`;
}