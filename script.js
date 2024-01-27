document.addEventListener('DOMContentLoaded', () => {
    alert('¡BIENVENIDO A MI PRIMER CHALLENGE!');
});

const inputText = document.getElementById('inputText');

inputText.addEventListener('input', () => inputText.value = inputText.value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''));

document.getElementById('encryptBtn').addEventListener('click', () => {
    const inputTextValue = document.getElementById('inputText').value;
    const outputText = document.getElementById('outputText');
    if (outputText.value.trim() === "") {
        outputText.value = encryptText(inputTextValue);
    } else {
        alert('Por favor, borra el texto en el cuadro de salida antes de encriptar nuevamente.');
    }
});

document.getElementById('decryptBtn').addEventListener('click', () => {
    const inputTextValue = document.getElementById('outputText').value.trim();
    if (inputTextValue === "") {
        document.getElementById('outputText').value = decryptText(document.getElementById('inputText').value.trim());
    } else {
        document.getElementById('outputText').value = decryptText(inputTextValue);
    }
});

document.getElementById('copyBtn').addEventListener('click', () => {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
    alert('¡Texto copiado con éxito!');
    document.getElementById('inputText').value = '';
    outputText.value = '';
});

function encryptText(text) {
    const replacements = { 'e': 'enter', 'i': 'imes', 'a': 'ai', 'o': 'ober', 'u': 'ufat' };
    return text.replace(/[eioua]/g, match => replacements[match]);
}

function decryptText(text) {
    const replacements = { 'enter': 'e', 'imes': 'i', 'ai': 'a', 'ober': 'o', 'ufat': 'u' };
    return text.replace(/(enter|imes|ai|ober|ufat)/g, match => replacements[match]);
}
