function newInputSmall() {
    if (document.getElementById('texto') !== null)
        document.getElementById('texto').remove();
    const section = document.getElementById('sectionTextSmall');
    section.insertAdjacentHTML('beforeend', '<textarea id="texto" class="w3-input w3-margin-bottom w3-border-0 w3-center w3-text-indigo w3-xlarge" name="" cols="30" rows="4" onfocus="true"></textarea>');
    document.getElementById("texto").focus();
    document.getElementById('textTitleSmall').remove();
}

function newInputMedium() {
    if (document.getElementById('texto') !== null)
        document.getElementById('texto').remove();
    const section = document.getElementById('sectionTextMedium');
    section.insertAdjacentHTML('beforeend', '<textarea id="texto" class="w3-input w3-margin-bottom w3-border-0 w3-center w3-text-indigo w3-xlarge" name="" cols="30" rows="5" onfocus="true"></textarea>');
    document.getElementById("texto").focus();
    document.getElementById('textTitleMedium').remove();
}

function newInputLarge() {
    if (document.getElementById('texto') !== null)
        document.getElementById('texto').remove();
    const section = document.getElementById('sectionTextLarge');
    section.insertAdjacentHTML('beforeend', '<textarea id="texto" class="w3-input w3-margin-bottom w3-border-0 w3-center w3-text-indigo w3-xlarge" name="" cols="30" rows="7" onfocus="true"></textarea>');
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
        let regex = /^[a-z .,\/#!?$%\^&\*;:{}=\-_`~()”“"…]+$/g;
        if (document.querySelector('#texto').value.match(regex) == null) {
            alert('Por favor ingrese solo letras minusculas y sin acentos');
            location.reload();
        }
    }
    let texto = document.querySelector('#texto').value;
    let cadena = texto.split('');
    //console.log(cadena);
    const vocales = ['a', 'e', 'i', 'o', 'u', ' '];
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
            if (element === ' ') {
                crypt.push(' ');
            }
            //console.log(crypt);
        } else {
            crypt.push(element);
            continue;
        }
    }
    texto = crypt.join('');
    newResult();
    if(document.querySelector('#resultadoSmallMedium') !== null)
        document.querySelector('#resultadoSmallMedium').value = texto;
    if(document.querySelector('#resultadoLarge') !== null)
        document.querySelector('#resultadoLarge').value = texto;
    document.querySelector('#texto').value = "";
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
        let regex = /^[a-z .,\/#!?$%\^&\*;:{}=\-_`~()”“"…]+$/g;
        if (document.querySelector('#texto').value.match(regex) == null) {
            alert('Por favor ingrese solo letras minusculas y sin acentos');
            location.reload();
        }
    }
    let texto = document.querySelector('#texto').value;
    let cadena = texto.split('');
    //console.log(cadena);
    const vocales = ['a', 'e', 'i', 'o', 'u', ' '];
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
            if (element === ' ') {
                decrypt.push(' ');
                i -= 1; j += 1; continue;
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
    if(document.querySelector('#resultadoSmallMedium') !== null)
        document.querySelector('#resultadoSmallMedium').value = texto;
    if(document.querySelector('#resultadoLarge') !== null)
        document.querySelector('#resultadoLarge').value = texto;
    document.querySelector('#texto').value = "";
}

function newResult() {
    const botonCrypt = document.getElementById('encriptar');
    botonCrypt.classList.toggle('w3-disable');

    if(document.getElementById('SinResultadoSmallMedium') !== null)
        document.getElementById('SinResultadoSmallMedium').style.display = "none";
    if (document.getElementById('resultadoSmallMedium') !== null)
        document.getElementById('resultadoSmallMedium').remove();
    if (document.getElementById('parrafoCopySmallMedium') !== null)
        document.getElementById('parrafoCopySmallMedium').remove();
    if (document.getElementById('copySmallMedium') !== null)
        document.getElementById('copySmallMedium').remove();
    if(document.getElementById('ConResultadoSmallMedium') !== null)
        (document.getElementById('ConResultadoSmallMedium')).insertAdjacentHTML('afterbegin', '<textarea id="resultadoSmallMedium" class="w3-input w3-padding w3-margin-bottom w3-left w3-border-0 w3-row" cols="30" rows="4" type="text">');
        (document.getElementById('ConResultadoSmallMedium')).insertAdjacentHTML('beforeend', '<p id="parrafoCopySmallMedium">Presione Copiar para mover el texto al cuadro principal</p>');
        (document.getElementById('ConResultadoSmallMedium')).insertAdjacentHTML('beforeend', '<button onclick="copy();" id="copySmallMedium" class="w3-button w3-center w3-margin-bottom w3-padding w3-round-large w3-text-white w3-indigo w3-hover-white w3-hover-text-indigo w3-cell-row">Copiar</button>');
        
    if(document.getElementById('SinResultadoLarge') !== null)
        document.getElementById('SinResultadoLarge').style.display = "none";
    if (document.getElementById('resultadoLarge') !== null)
        document.getElementById('resultadoLarge').remove();
    if (document.getElementById('parrafoCopyLarge') !== null)
        document.getElementById('parrafoCopyLarge').remove();
    if (document.getElementById('copyLarge') !== null)
        document.getElementById('copyLarge').remove();
    if(document.getElementById('ConResultadoLarge') !== null)
        (document.getElementById('ConResultadoLarge')).insertAdjacentHTML('afterbegin', '<textarea id="resultadoLarge" class="w3-input w3-padding w3-margin-bottom w3-left w3-border-0 w3-row" cols="30" rows="12" type="text">');
        (document.getElementById('ConResultadoLarge')).insertAdjacentHTML('beforeend', '<p id="parrafoCopyLarge">Presione Copiar para mover el texto al cuadro principal</p>');
        (document.getElementById('ConResultadoLarge')).insertAdjacentHTML('beforeend', '<button onclick="copy();" id="copyLarge" class="w3-button w3-center w3-margin-bottom w3-padding w3-round-large w3-text-white w3-indigo w3-hover-white w3-hover-text-indigo w3-cell-row">Copiar</button>');
}

function copy() {
    if(document.querySelector('#resultadoSmallMedium') !== null){
        document.querySelector('#texto').value = document.querySelector('#resultadoSmallMedium').value;
        document.querySelector('#resultadoSmallMedium').value = '';
        document.querySelector('#resultadoSmallMedium').remove();
    }
    if(document.getElementById('parrafoCopySmallMedium') !== null)
        document.getElementById('parrafoCopySmallMedium').remove();
    if(document.getElementById('copySmallMedium') !== null)
        document.getElementById('copySmallMedium').remove();
    if(document.getElementById('SinResultadoSmallMedium') !== null)
        document.getElementById('SinResultadoSmallMedium').style.display = "block";

    if(document.querySelector('#resultadoLarge') !== null){
        document.querySelector('#texto').value = document.querySelector('#resultadoLarge').value;
        document.querySelector('#resultadoLarge').value = '';
        document.querySelector('#resultadoLarge').remove();
    }
    if(document.getElementById('parrafoCopyLarge') !== null)
        document.getElementById('parrafoCopyLarge').remove();
    if(document.getElementById('copyLarge') !== null)
        document.getElementById('copyLarge').remove();
    if(document.getElementById('SinResultadoLarge') !== null)
        document.getElementById('SinResultadoLarge').style.display = "block";
}

