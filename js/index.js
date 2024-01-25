function newInput() {
    const section = document.getElementById('sectionText');
    section.insertAdjacentHTML('beforeend', '<textarea class="w3-input w3-padding w3-left w3-border-0 w3-cell-row" cols="30" rows="12" id="texto" type="text" required pattern="[a-z]"></textarea><br>');
    const titulo = document.getElementById('textTitle');
    titulo.remove();
}

function crypt() {
    let texto = document.querySelector('#texto').value;
    if (texto === "")
        alert('Por favor indique el texto que desea encryptar o desencryptar');
    let cadena = texto.split('');
    //console.log(cadena);
    const vocales = ['a', 'e', 'i', 'o', 'u'];
    //console.log(vocales);
    let crypt = [];
    for (let index = 0; index < cadena.length; index++) {
        let element = cadena[index];
        //console.log(element);
        if (vocales.includes(element)) {
            if (element === 'a') {
                crypt.push('a');
                crypt.push('i');
            }
            if (element === 'e') {
                crypt.push('e');
                crypt.push('n');
                crypt.push('t');
                crypt.push('e');
                crypt.push('r');
            }
            if (element === 'i') {
                crypt.push('i');
                crypt.push('m');
                crypt.push('e');
                crypt.push('s');
            }
            if (element === 'o') {
                crypt.push('o');
                crypt.push('b');
                crypt.push('e');
                crypt.push('r');
            }
            if (element === 'u') {
                crypt.push('u');
                crypt.push('f');
                crypt.push('a');
                crypt.push('t');
            }
            //console.log(crypt);
        } else {
            crypt.push(element);
            continue;
        }
    }
    texto = crypt.join('');
    newResult();
    document.querySelector('#resultado').value = texto;
}

function decrypt() {
    let texto = document.querySelector('#texto').value;
    if (texto === "") {
        alert('Por favor indique el texto que desea encryptar o desencryptar');
    }
    let cadena = texto.split('');
    //console.log(cadena);
    const vocales = ['a', 'e', 'i', 'o', 'u'];
    //console.log(vocales);
    let decrypt = [];
    let i = cadena.length;
    let j = 0;
    while (i > 0) {
        let element = cadena[j];
        if (vocales.includes(element)) {
            if (element === 'a') {
                decrypt.push('a');
                i -= 2; j += 2; continue;
            }
            if (element === 'e') {
                decrypt.push('e');
                i -= 5; j += 5; continue;
            }
            if (element === 'i') {
                decrypt.push('i');
                i -= 4; j += 4; continue;
            }
            if (element === 'o') {
                decrypt.push('o');
                i -= 4; j += 4; continue;
            }
            if (element === 'u') {
                decrypt.push('u');
                i -= 4; j += 4; continue;
            }
        } else {
            decrypt.push(element);
            i--;
            j++;
        }
        //console.log(decrypt);
    }
    texto = decrypt.join('');
    newResult();
    document.querySelector('#resultado').value = texto;
}

function newResult() {
    const botonCrypt = document.getElementById('encriptar');
    botonCrypt.classList.toggle('w3-disable');
    const section = document.getElementById('sectionResult');
    section.insertAdjacentHTML('afterbegin', '<textarea class="w3-input w3-padding w3-margin-top w3-left w3-border-0 w3-row" cols="30" rows="5" id="resultado" type="text">');
    section.insertAdjacentHTML('beforeend', '<p id="parrafoCopy">Presione Copiar para mover el texto al cuadro principal</p>');
    section.insertAdjacentHTML('beforeend', '<button onclick="copy();" id="copy" class="w3-button w3-center w3-padding w3-round-xlarge w3-text-white w3-indigo w3-hover-white w3-hover-text-indigo w3-cell-row">Copiar</button>');
    const titulo = document.getElementById('resultTitle');
    titulo.remove();
    const parrafo = document.getElementById('messageResult');
    parrafo.remove();
}

function copy() {
    const resultado = document.querySelector('#resultado');
    document.querySelector('#texto').value = resultado.value;
    document.querySelector('#resultado').value = '';
    resultado.remove();
    const parrafo = document.getElementById('parrafoCopy');
    parrafo.remove();
    const boton = document.getElementById('copy');
    boton.remove();
    const section = document.getElementById('sectionResult');
    section.insertAdjacentHTML('afterbegin', '<h3 id="resultTitle">Ningun mensaje fue encontrado</h3><p id="messageResult" class="w3-center">Ingresa el texto que desees encriptar o desencriptar</p>');
}

