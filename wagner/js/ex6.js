let Homens = 0;
let Mulheres = 0;
let destro = 0;
let canhoto = 0;

for (let i = 1; i <= 5; i++) {
  let altura = parseFloat(prompt("Digite a altura da pessoa " + i + " (em metros):"));
  let sexo = prompt("Digite o sexo da pessoa " + i + " (M ou F):");
  let mao = prompt("Digite a mão que a pessoa " + i + " usa:");

  document.write("Pessoa " + i);

  if (sexo === "M") {
    Homens++;
    document.write(" (masculino)<br>");
  } else if (sexo === "F") {
    Mulheres++;
    document.write(" (feminino)<br>");
  } else {
    document.write(" (sexo inválido)<br>");
  }

  if (mao === "direita") {
    destro++;
    document.write(" (destro)<br>");
  } else if (mao === "esquerda") {
    canhoto++;
    document.write(" (canhoto)<br>");
  } else {
    document.write(" (informação inválida)<br>");
  }
}

document.write("<br>Quantidade de homens: " + Homens + "<br>");
document.write("Quantidade de mulheres: " + Mulheres + "<br>");