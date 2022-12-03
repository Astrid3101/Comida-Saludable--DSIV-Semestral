let baseUrl = "http://localhost:8080";
let registros = [];

function GuardarRegistro(){
    let data ={
        Nombre: document.getElementById("Nombre").value,
        Apellido: document.getElementById("Appellido").value,
        Correo: document.getElementById("Correo").value,
        Direccion: document.getElementById("Dirrecion").value,
        Contraseña: document.getElementById("Contraseña").value,
        alidar: document.getElementById("Validar").value
    };

    fetch(baseUrl + "/registro", {
        method: "POST",
        body: JSON.stringify(data),
        headers:{
            "Content-type":'application/json; charset=UTF-8'
        }
    }).then(res=>{
        ObtenerRegistros();
    });
}