let qtdHomens = 0;
let qtdMulheres = 0;
let canhoto_destro = 0;

for (let i = 1; i <= 5; i++) {
  let altura = parseFloat(prompt("Digite a altura da pessoa " + i + " (em metros):"));
  let peso = parseFloat(prompt("Digite o peso da pessoa " + i + " (em quilos):"));
  let sexo = prompt("Digite o sexo da pessoa " + i + " (M ou F):");
  let mao = prompt("Digite a mão que a pessoa " + i + " usa:");

  let imc = peso / (altura ** 2);

  document.write("Pessoa " + i + ": IMC = " + imc.toFixed(2));

  if (sexo === "M") {
    qtdHomens++;
    document.write(" (masculino)<br>");
  } else if (sexo === "F") {
    qtdMulheres++;
    document.write(" (feminino)<br>");
  } else {
    document.write(" (sexo inválido)<br>");
  }

  if (mao === "direita") {
    canhoto_destro++;
    document.write(" (destro)<br>");
  } else if (mao === "esquerda") {
    qtdMulheres++;
    document.write(" (canhoto)<br>");
  } else {
    document.write(" (informação inválida)<br>");
  }
}

document.write("<br>Quantidade de homens: " + qtdHomens + "<br>");
document.write("Quantidade de mulheres: " + qtdMulheres + "<br>");