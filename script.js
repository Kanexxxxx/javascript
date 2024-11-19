//EXEMPLO:
function gerarTabuadaPar() {
  // Pega o valor do input
  const numero = parseInt(document.getElementById("inputNumero").value);

  // Seleciona o parágrafo onde o resultado será exibido
  const resultadoElemento = document.getElementById("resultadoTabuada");

  // Verifica se o número é válido
  if (isNaN(numero)) {
    resultadoElemento.innerText = "Por favor, insira um número válido.";
    return;
  }

  // Gera a tabuada apenas para os multiplicadores pares
  let tabuada = `Tabuada do ${numero} (somente multiplicadores pares):\n`;
  for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      // Apenas números pares
      tabuada += `${numero} x ${i} = ${numero * i}\n`;
    }
  }

  // Exibe o resultado no parágrafo
  resultadoElemento.innerText = tabuada;
}

// Esse evento é acionado quando o documento HTML foi completamente carregado e analisado, ou seja, o DOM (Document Object Model) está pronto para ser manipulado.
// A função passada como argumento será executada assim que o evento DOMContentLoaded for disparado. Isso é útil para garantir que o código seja executado apenas depois que os elementos da página estejam disponíveis.
document.addEventListener("DOMContentLoaded", () => {
  const botaoTabuada = document.getElementById("btnTabuada");
  botaoTabuada.addEventListener("mouseover", gerarTabuadaPar);
});

function verificarParImpar() {
  const numero = parseInt(document.getElementById("numParImpar").value);
  const resultadoElemento = document.getElementById("resultadoParImpar");

  let resultado = `O numero ${numero} `;

  if (numero % 2 === 0) {
    resultado += `é par `;
  } else {
    resultado += `é impar`;
  }

  resultadoElemento.innerText = resultado;
}

document.addEventListener("DOMContentLoaded", () => {
  const numParImpar = document.getElementById("btnnumParImpar");
  botaonumParImpar.addEventListener("mouseover", gerarnumParImpar);
});

function calcularMedia() {
  const ma = 7;
  const nota1 = parseInt(document.getElementById("nota1").value);
  const nota2 = parseInt(document.getElementById("nota2").value);
  const nota3 = parseInt(document.getElementById("nota3").value);
  const resultadoElemento = document.getElementById("resultadoMedia");

  let resultadoMedia = (nota1 + nota2 + nota3) / 3;

  if (resultadoMedia >= ma) {
    resultadoMedia = `Sua media é ${resultadoMedia.toFixed(2)}  - aprovado`;
  } else {
    resultadoMedia = `Sua media é ${resultadoMedia.toFixed(2)}  -  reprovado`;
  }

  resultadoElemento.innerText = resultadoMedia;
}

document.addEventListener("DOMContentLoaded", () => {
  const calcularMedia = document.getElementById("btncalcularMedia");
  botaocalcularMedia.addEventListener("mouseover", gerarcalcularMedia);
});

function somarPares() {
  const numero = parseInt(document.getElementById("numSomaPares").value);
  let somaPares = 0;

  if (isNaN(numero) || numero <= 0) {
    document.getElementById("resultadoSomaPares").textContent =
      "Por favor, insira um número inteiro positivo válido.";
    return;
  }

  for (let i = 1; i <= numero; i++) {
    if (i % 2 === 0) {
      somaPares += i;
    }
  }

  document.getElementById(
    "resultadoSomaPares"
  ).textContent = `A soma dos números pares até ${numero} é: ${somaPares}`;
}

function validarLogin() {
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;
  const resultadoElemento = document.getElementById("resultadoLogin");

  if (usuario === "admin" && senha === "1234") {
    resultadoElemento.innerText = "Login efetuado";
  } else {
    resultadoElemento.innerText = "usuario ou senha incorretos";
  }
}

function calcularFatorial() {
  const numero = parseInt(document.getElementById("numFatorial").value);
  let resultado = 1;

  if (isNaN(numero) || numero < 0) {
    document.getElementById("resultadoFatorial").textContent =
      "Por favor, insira um número inteiro.";
    return;
  }

  for (let i = 1; i <= numero; i++) {
    resultado *= i;
  }

  document.getElementById(
    "resultadoFatorial"
  ).textContent = `O fatorial de ${numero} é: ${resultado}`;
}
