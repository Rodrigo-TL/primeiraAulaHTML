function soma() {
    let primeiroNumero = document.getElementById("primeiro-numero").value;
    let segundoNumero = document.getElementById("segundo-numero").value;

    let resultado = Number(primeiroNumero) + Number(segundoNumero);

    document.getElementById("resultado").innerText = resultado;

    salvarHistorico("Soma", primeiroNumero, segundoNumero, resultado);
}

function subtracao() {
    let primeiroNumero = document.getElementById("primeiro-numero").value;
    let segundoNumero = document.getElementById("segundo-numero").value;

    let resultado = Number(primeiroNumero) - Number(segundoNumero);

    document.getElementById("resultado").innerText = resultado;

    salvarHistorico("Subtração", primeiroNumero, segundoNumero, resultado);
}

function multiplicacao() {
    let primeiroNumero = document.getElementById("primeiro-numero").value;
    let segundoNumero = document.getElementById("segundo-numero").value;

    let resultado = Number(primeiroNumero) * Number(segundoNumero);

    document.getElementById("resultado").innerText = resultado;

    salvarHistorico("Multiplicação", primeiroNumero, segundoNumero, resultado);
}

function divisao() {
    let primeiroNumero = document.getElementById("primeiro-numero").value;
    let segundoNumero = document.getElementById("segundo-numero").value;

    let resultado = Number(primeiroNumero) / Number(segundoNumero);

    document.getElementById("resultado").innerText = resultado;

    salvarHistorico("Divisão", primeiroNumero, segundoNumero, resultado);
}

function salvarHistorico(nomeDaFuncao, num1, num2, resultado) {
    console.log("Função: " + nomeDaFuncao);
    console.log("Primeiro numero: " + num1 + ", SegundoNumero: " + num2);
    console.log("Resultado: " + resultado);
    console.log("--------------------------------------");

    let operacao = {
        funcao: nomeDaFuncao,
        numero1: num1,
        numero2: num2,
        resultado: resultado
    };

    let historicoLocal = JSON.parse(localStorage.getItem("historicoCalculos")) || [];
    historicoLocal.push(operacao);

    localStorage.setItem("historicoCalculos", JSON.stringify(historicoLocal));
}

function apagarLocalStorage() {

    let confirmaApagar = window.confirm("Você deseja apagar seu histórico?")

    if (confirmaApagar) {
        localStorage.clear();
    }
}

function calculoImposto() {
    let valorInicial = document.getElementById("valor-inicial").value;
    let valorComImposto;

    let valorNum = Number(valorInicial);

    if(valorNum <= 50) {
        valorComImposto = valorNum + (valorNum * 0.20);
    } else {
        let primeiraTaxa = valorNum + (valorNum * 0.20);
        valorComImposto = primeiraTaxa + (primeiraTaxa * 0.90);
    }

    valorComImposto = Number(valorComImposto);

    salvarHistoricoImposto(valorInicial, valorComImposto);

    document.getElementById("resultado-imposto").innerText = valorComImposto;
}

function salvarHistoricoImposto(valorInicial, valorComImposto) {
    console.log("Valor inicial: " + valorInicial);
    console.log("valor com imposto: " + valorComImposto);
    console.log("--------------------------------------");

    let operacao = {
        valorInicial,
        valorComImposto
    };

    let historicoLocal = JSON.parse(localStorage.getItem("historicoImposto")) || [];
    historicoLocal.push(operacao);

    localStorage.setItem("historicoImposto", JSON.stringify(historicoLocal));
}
/*
    Nova função de calculo de imposto de importação

    Se o produto custar menos que $50 (cinquenta dolares)
    Você vai ter que pagar o valor produto, mais 20%

    Se o produto custar mais do que $50
    Você vai ter que pagar o valor do produto +20%, depois mais 90% sobre o resultado

    Seja salvo num novo objeto, dentro do local storage, seu hitórico de coversão.

    Ex: histórico de calculos matemáticos, e histórico de conversões

 */
