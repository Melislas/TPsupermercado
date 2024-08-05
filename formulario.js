"use strict";
let nombre= document.getElementById("nombre");
let apellido= document.getElementById("apellido");
let email= document.getElementById("email");
let telefono= document.getElementById("telefono");
let btn= document.getElementById("enviar");
let informacion=[];

btn.addEventListener("click",(e) => {
    e.preventDefault();


 document.getElementById("errorNombre").textContent = "";
 document.getElementById("errorApellido").textContent = "";
 document.getElementById("errorEmail").textContent = "";
 document.getElementById("errorTelefono").textContent = "";

 if (nombre.value.trim() === "") {
     document.getElementById("errorNombre").textContent = "Nombre es obligatorio";
     return;
 }
 if (apellido.value.trim() === "") {
    document.getElementById("errorApellido").textContent = "Apellido es obligatorio";
     return;
 }
 if (email.value.trim() === "") {
    document.getElementById("errorEmail").textContent = "Email es obligatorio";
     return;
 }

 if (!email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    document.getElementById("errorEmail").textContent = "Email debe tener un formato válido";
    return;
}
 if (telefono.value.trim() === "") {
    document.getElementById("errorTelefono").textContent = "Telefono es obligatorio";
     return;
 }
 if (!telefono.value.match(/^[0-9]{10}$/)) {
    document.getElementById("errorTelefono").textContent = "El telefono debe tener 10 digitos";
    return;
}

        informacion[0]=nombre.value;
        informacion[1]=apellido.value;
        informacion[2]=email.value;
        informacion[3]=telefono.value;
        informacion[4]=btn.value;

       let blob = new Blob([informacion], {type: "text/plain;charset=utf-8"});

       saveAs(blob,"contact.txt")
})

let mensaje= document.getElementById("mensaje")
let boton= document.getElementById("click")
let mensajeUsuario=[]

boton.addEventListener("click",(e)=>{
    e.preventDefault();

    mensajeUsuario[0]=mensaje.value;

    let blob =  new Blob([mensajeUsuario], {type: "text/plain;charset=utf-8"});

    saveAs(blob, "msjusuario.txt")


})



