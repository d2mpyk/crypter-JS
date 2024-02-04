function newInputSmall() {
    if (document.getElementById('texto') !== null)
        document.getElementById('texto').remove();
    const section = document.getElementById('sectionTextSmall');
    section.insertAdjacentHTML('beforeend', '<textarea id="texto" class="w3-input w3-margin-bottom w3-border-0 w3-center w3-text-indigo w3-xlarge" name="" cols="30" rows="5" onfocus="true"></textarea>');
    document.getElementById("texto").focus();
    document.getElementById('textTitleSmall').remove();
}

function newInputMedium() {
    if (document.getElementById('texto') !== null)
        document.getElementById('texto').remove();
    const section = document.getElementById('sectionTextMedium');
    section.insertAdjacentHTML('beforeend', '<textarea id="texto" class="w3-input w3-margin-bottom w3-border-0 w3-center w3-text-indigo w3-xlarge" name="" cols="30" rows="6" onfocus="true"></textarea>');
    document.getElementById("texto").focus();
    document.getElementById('textTitleMedium').remove();
}

function newInputLarge() {
    if (document.getElementById('texto') !== null)
        document.getElementById('texto').remove();
    const section = document.getElementById('sectionTextLarge');
    section.insertAdjacentHTML('beforeend', '<textarea id="texto" class="w3-input w3-margin-bottom w3-border-0 w3-center w3-text-indigo w3-xlarge" name="" cols="30" rows="10" onfocus="true"></textarea>');
    document.getElementById("texto").focus();
    document.getElementById('textTitleLarge').remove();
}

function crypt() {
    if (document.querySelector('#texto') == null) {
        alert('Por favor indique el texto que desea encriptar');
        location.reload();
    }

    if (document.querySelector('#texto').value === "") {
        alert('Por favor indique el texto que desea encriptar');
        location.reload();
    }
    else {
        let regex = /^[ a-z]+$/g;
        if (document.querySelector('#texto').value.match(regex) == null) {
            alert('Por favor ingrese solo letras minusculas y sin acentos');
            location.reload();
        }
    }
    let texto = document.querySelector('#texto').value;
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
    if (document.querySelector('#texto') == null) {
        alert('Por favor indique el texto que desea desencriptar');
        location.reload();
    }

    if (document.querySelector('#texto').value === "") {
        alert('Por favor indique el texto que desea desencriptar');
        location.reload();
    }
    else {
        let regex = /^[ a-z]+$/g;
        if (document.querySelector('#texto').value.match(regex) == null) {
            alert('Por favor ingrese solo letras minusculas y sin acentos');
            location.reload();
        }
    }
    let texto = document.querySelector('#texto').value;
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
    if(document.getElementById('SinResultado') !== null){
        console.log(document.getElementById('SinResultado'));
        document.getElementById('SinResultado').style.display = "none";}
    if (document.getElementById('resultado') !== null)
        document.getElementById('resultado').remove();
    if (document.getElementById('parrafoCopy') !== null)
        document.getElementById('parrafoCopy').remove();
    if (document.getElementById('copy') !== null)
        document.getElementById('copy').remove();
    const section = document.getElementById('ConResultado');
    section.insertAdjacentHTML('afterbegin', '<textarea class="w3-input w3-padding w3-margin-top w3-margin-bottom w3-left w3-border-0 w3-row" cols="30" rows="5" id="resultado" type="text">');
    section.insertAdjacentHTML('beforeend', '<p id="parrafoCopy">Presione Copiar para mover el texto al cuadro principal</p>');
    section.insertAdjacentHTML('beforeend', '<button onclick="copy();" id="copy" class="w3-button w3-center w3-margin-bottom w3-padding w3-round-large w3-text-white w3-indigo w3-hover-white w3-hover-text-indigo w3-cell-row">Copiar</button>');
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
    document.getElementById('SinResultado').style.display = "block";
}

