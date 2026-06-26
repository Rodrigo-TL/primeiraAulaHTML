function soma() {
    let primeiroNumero = Number(document.getElementById("primeiro-numero").value);
    let segundoNumero = Number(document.getElementById("segundo-numero").value);

    let resultado = primeiroNumero + segundoNumero;

    document.getElementById("resultado").innerText = resultado;

    salvarHistorico("Soma", primeiroNumero, segundoNumero, resultado);
}

function subtracao() {
    let primeiroNumero = Number(document.getElementById("primeiro-numero").value);
    let segundoNumero = Number(document.getElementById("segundo-numero").value);

    let resultado = primeiroNumero - segundoNumero;

    document.getElementById("resultado").innerText = resultado;

    salvarHistorico("Subtração", primeiroNumero, segundoNumero, resultado);
}

function multiplicacao() {
    let primeiroNumero = Number(document.getElementById("primeiro-numero").value);
    let segundoNumero = Number(document.getElementById("segundo-numero").value);

    let resultado = primeiroNumero * segundoNumero;

    document.getElementById("resultado").innerText = resultado;

    salvarHistorico("Multiplicação", primeiroNumero, segundoNumero, resultado);
}

function divisao() {
    let primeiroNumero = Number(document.getElementById("primeiro-numero").value);
    let segundoNumero = Number(document.getElementById("segundo-numero").value);

    let resultado = primeiroNumero / segundoNumero;

    document.getElementById("resultado").innerText = resultado;

    salvarHistorico("Divisão", primeiroNumero, segundoNumero, resultado);
}

function salvarHistorico(nomeDaFuncao, num1, num2, resultado) {
    console.log("Função: " + nomeDaFuncao);
    console.log("Primeiro numero: " + num1 + ", Segundo numero: " + num2);
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

function apagarLocalStorage(){

    let confirmaApagar = window.confirm("Você deseja apagar seu histórico?")
    
    if(confirmaApagar){
        localStorage.clear();
    }
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

function calcularImposto() {
    let valorProduto = Number(document.getElementById("valor-produto").value);

    let resultado;

    if (valorProduto < 50) {
        resultado = valorProduto + (valorProduto * 0.20);
    } else {
        resultado = valorProduto + (valorProduto * 0.20);
        resultado = resultado + (resultado * 0.90);
        resultado = resultado - valorProduto; // Subtrai o valor do produto para obter apenas o imposto
        resultado = resultado.toFixed(2);
    }

    document.getElementById("resultado-imposto").innerText = resultado;
    document.getElementById("valor-produto").value = ""; // Limpa o campo de valor do produto
    

    salvarHistoricoImposto(valorProduto, resultado);
}

function salvarHistoricoImposto(valorProduto, resultado) {
    console.log("Valor do produto: " + valorProduto);
    console.log("Resultado do imposto: " + resultado);
    console.log("--------------------------------------");

    let operacao = {
        tipo: "Imposto de importação",
        valorProduto: valorProduto,
        resultadoImposto: resultado
    };

    let historicoLocal = JSON.parse(localStorage.getItem("historicoImpostos")) || [];
    historicoLocal.push(operacao);

    localStorage.setItem("historicoImpostos", JSON.stringify(historicoLocal));
}
