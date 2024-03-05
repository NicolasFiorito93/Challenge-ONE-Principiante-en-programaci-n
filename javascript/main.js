let input = document.querySelector(".input");
let output = document.querySelector(".output");

function encriptar(texto) {
    let vocales = {
        'a': "ai",
        'e': "enter",
        'i': "imes",
        'o': "ober",
        'u': "ufat",
    }
    return texto.replace(/[aeiou]/g, (vocal) => vocales[vocal]);
}

function btnEncriptar() {
    if (input.value != "") {
        let mensajeEncriptado = encriptar(input.value.toLowerCase());
        output.textContent = mensajeEncriptado;
        input.value = "";
    }
}

function desencriptar(texto) {
    let vocalesEncriptada = {
        "ai": 'a',
        "enter": 'e',
        "imes": 'i',
        "ober": 'o',
        "ufat": 'u',
    }
    return texto.replace(/(ai|enter|imes|ober|ufat)/g, (vocalEncriptada) => vocalesEncriptada[vocalEncriptada]);
}

function btnDesencriptar() {
    if (input.value != "") {
        let mensajeDesencriptado = desencriptar(input.value.toLowerCase());
        output.textContent = mensajeDesencriptado;
        input.value = "";
    }
}

function copiar() {
    output.select();
    document.execCommand('copy');
    window.getSelection().removeAllRanges(); // Esto deseleccionará el texto
    output.blur()
}