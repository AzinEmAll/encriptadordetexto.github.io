function encriptar(texto) {
    let encriptado = texto.replace(/e/g, "enter")
                          .replace(/i/g, "imes")
                          .replace(/a/g, "ai")
                          .replace(/o/g, "ober")
                          .replace(/u/g, "ufat");
    return encriptado;
}

function desencriptar(texto) {
    let desencriptado = texto.replace(/enter/g, "e")
                             .replace(/imes/g, "i")
                             .replace(/ai/g, "a")
                             .replace(/ober/g, "o")
                             .replace(/ufat/g, "u");
    return desencriptado;
}

document.getElementById("encrypt-btn").onclick = function() {
    const inputText = document.getElementById("input-text").value;
    const encryptedText = encriptar(inputText);
    document.getElementById("output-text").textContent = encryptedText;
};

document.getElementById("decrypt-btn").onclick = function() {
    const inputText = document.getElementById("input-text").value;
    const decryptedText = desencriptar(inputText);
    document.getElementById("output-text").textContent = decryptedText;
};

document.getElementById("copy-btn").onclick = function() {
    const outputText = document.getElementById("output-text").textContent;
    navigator.clipboard.writeText(outputText).then(() => {
        alert("Texto copiado al portapapeles");
    });
};
