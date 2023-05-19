
const divMostrarTexto = document.querySelector(".mostrar-texto");
const divMostrarImagen = document.querySelector(".mostrar-imagen");
const oTexto = document.getElementById("oTexto");

divMostrarTexto.style.visibility = "collapse";


function ocultarCorrespondiente() {

    let Texto = document.getElementById("oTexto").value;

    if (Texto == "") {
        divMostrarTexto.style.visibility = "collapse";
        divMostrarImagen.style.visibility = "visible";
    } else {
          divMostrarImagen.style.visibility = "collapse";
          divMostrarTexto.style.visibility = "visible";
          oTexto.scrollIntoView();
    }
}



function verificarTexto() {
    let iTexto = document.getElementById("iTexto").value;
    if(/[A-ZÁÉÍÓÚáéíóú]/.test(iTexto)) {
        alert("El texto contiene mayúsculas o acentos.");
        return false; 
    }
}



function encriptarTexto() {

    let verificar = verificarTexto();
    if(verificar == false){
        return;
    }

    let iTexto = document.getElementById("iTexto").value;
    let iTextoEncriptado = iTexto.replace(/e/g, 'enter');
    iTextoEncriptado = iTextoEncriptado.replace(/i/g, 'ime');
    iTextoEncriptado = iTextoEncriptado.replace(/a/g, 'ai');
    iTextoEncriptado = iTextoEncriptado.replace(/o/g, 'ober');
    iTextoEncriptado = iTextoEncriptado.replace(/u/g, 'ufat');

    document.getElementById("oTexto").innerHTML = iTextoEncriptado;
    ocultarCorrespondiente();
}


function desencriptarTexto() {

    let verificar = verificarTexto();
    if(verificar == false){
        return;
    }

    let iTexto = document.getElementById("iTexto").value;
    let iTextoDesencriptado = iTexto.replace(/enter/g, 'e');
    iTextoDesencriptado = iTextoDesencriptado.replace(/ime/g, 'i');
    iTextoDesencriptado = iTextoDesencriptado.replace(/ai/g, 'a');
    iTextoDesencriptado = iTextoDesencriptado.replace(/ober/g, 'o');
    iTextoDesencriptado = iTextoDesencriptado.replace(/ufat/g, 'u');

    document.getElementById("oTexto").innerHTML = iTextoDesencriptado;
    ocultarCorrespondiente();
}


function copiarTexto() {

    let copiarTexto = document.getElementById("oTexto");
  
    copiarTexto.select();
    copiarTexto.setSelectionRange(0, 99999);
  
    navigator.clipboard.writeText(copiarTexto.value);
  
    alert("Se ha copiado el texto: " + copiarTexto.value);
  }