// Função que captura o valor da idade, acrescenta 50 e devolve para a página
function newIdade() {
    let nome = document.getElementById('nome').value;
    let idade = document.getElementById('idade').value;

    let idadeFutura = parseInt(idade) + 50;
    let idadeMedia = parseInt(idade) + 20;

    return document.getElementById('idade_futura').value = idadeFutura;
}

function newIdade2() {
    let nome = document.getElementById('nome').value;
    let idade = document.getElementById('idade').value;

    let idadeMedia = parseInt(idade) + 20;

    return document.getElementById('idade_media').value = idadeMedia;
}

// Função que carrega uma imagem definida pelo usuário, trata a resolução da mesma e
// insere no contexto da página
function carregaNovo() {
    let url = '../images/a.jpg';

    let img = new Image(250,250);
    img.src = url;    
    
    return document.getElementById('novo').appendChild(img);    
}

function carregaMedio() {
    let url = '../images/b.jpg';

    let img = new Image(250,250);
    img.src = url;    
    
    return document.getElementById('medio').appendChild(img);    
}

// Função que carrega uma imagem definida pelo usuário, trata a resolução da mesma e
// insere no contexto da página
function carregaIdoso() {
    let url = '../images/c.jpg';

    let img = new Image(250,250);
    img.src = url;    

    return document.getElementById('idoso').appendChild(img);
}