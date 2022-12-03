const formulario = document.getElementById("formulario");
let mail = document.getElementById("mail");
let contra = document.getElementById("contra");


async function login(){


    let respuesta = await fetch('http://localhost:8080/usuarios/all', {
        method: "GET",
        headers: {"Content-type": "application/json;charset=UTF-8"}
        
        .then(json => console.log(json))
        .catch(err => {
            console.warn(err.message);
          return false;
          }
    )})


    return false;


    
}