var botonEn = document.querySelector(".button_encriptar");
var botonDe = document.querySelector(".button_desencriptar");
var person = document.querySelector(".conteiner_person");
var conteiner = document.querySelector(".conteiner_parrafo");
var result = document.querySelector(".texto_convert");

function encriptarText() {
    hideSeccion2();
    var cajatexto = reestablecerTexto();
    result.textContent = encriptarTextReal(cajatexto);
}

function desencriptarText() {
    hideSeccion2();
    var cajatexto = reestablecerTexto();
    result.textContent = desencriptarTexto(cajatexto);
}

function reestablecerTexto() {
    var BoxText = document.querySelector(".TextBox");
    return BoxText.value;
}

function hideSeccion2() {
    person.classList.add("hideeeee");
    conteiner.classList.add("hideeeee");
}

function encriptarTextReal(mensaje) {
    var texto = mensaje;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textoFinal = textoFinal + "ai";
        }
        else if (texto[i] == "e") {
            textoFinal = textoFinal + "enter";
        }
        else if (texto[i] == "i") {
            textoFinal = textoFinal + "imes";
        }
        else if (texto[i] == "o") {
            textoFinal = textoFinal + "ober";
        }
        else if (texto[i] == "u") {
            textoFinal = textoFinal + "ufat";
        }
        else {
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}

function desencriptarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textoFinal = textoFinal + "a";
            i = i + 1;
        }
        else if (texto[i] == "e") {
            textoFinal = textoFinal + "e";
            i = i + 4;
        }
        else if (texto[i] == "i") {
            textoFinal = textoFinal + "i";
            i = i + 3;
        }
        else if (texto[i] == "o") {
            textoFinal = textoFinal + "o";
            i = i + 3;
        }
        else if (texto[i] == "u") {
            textoFinal = textoFinal + "u";
            i = i + 3;
        }
        else {
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}

const btnCopy = document.querySelector(".button_copiar");
btnCopy.addEventListener("click", copiar = () => {
    var contenid = document.querySelector(".texto_convert").textContent;
    navigator.clipboard.writeText(contenid);
});
botonEn.onclick = encriptarText;
botonDe.onclick = desencriptarText;