//calculadora em javascript
function soma(){
    let numero1 = parseInt(document.getElementById('num1').value);
    let numero2 = parseInt(document.getElementById('num2').value);

    let soma = (numero1) + (numero2)
    return document.getElementById('resultado').value = soma
}

function sub(){
    let numero1 = parseInt(document.getElementById('num1').value);
    let numero2 = parseInt(document.getElementById('num2').value);

    let sub = (numero1) - (numero2)
    return document.getElementById('resultado').value = sub
}

function mult(){
    let numero1 = parseInt(document.getElementById('num1').value);
    let numero2 = parseInt(document.getElementById('num2').value);

    let mult = (numero1) * (numero2)
    return document.getElementById('resultado').value = mult
}

function divi(){
    let numero1 = parseInt(document.getElementById('num1').value);
    let numero2 = parseInt(document.getElementById('num2').value);

    let divi = (numero1) / (numero2)
    return document.getElementById('resultado').value = divi
}