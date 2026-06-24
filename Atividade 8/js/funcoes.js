function soma(){
    let primeiroNumero = document.getElementById("primeiro-numero").value;
    let segundoNumero = document.getElementById("segundo-numero").value;

    let resultado = Number(primeiroNumero) + Number(segundoNumero);

    document.getElementById("resultado").innerText = resultado;
    salvarHistorico("soma", primeiroNumero, segundoNumero, resultado);
}

function subtracao(){
    let primeiroNumero = document.getElementById("primeiro-numero").value;
    let segundoNumero = document.getElementById("segundo-numero").value;

    let resultado = Number(primeiroNumero) - Number(segundoNumero);

    document.getElementById("resultado").innerText = resultado;
    salvarHistorico("subtração", primeiroNumero, segundoNumero, resultado);
}

function multiplicacao(){
    let primeiroNumero = document.getElementById("primeiro-numero").value;
    let segundoNumero = document.getElementById("segundo-numero").value;

    let resultado = Number(primeiroNumero) * Number(segundoNumero);
    
    document.getElementById("resultado").innerText = resultado;
    salvarHistorico("multiplicação", primeiroNumero, segundoNumero, resultado);
}   

function divisao(){
    let primeiroNumero = document.getElementById("primeiro-numero").value;
    let segundoNumero = document.getElementById("segundo-numero").value;

    let resultado = Number(primeiroNumero) / Number(segundoNumero);

    document.getElementById("resultado").innerText = resultado;
    salvarHistorico("divisão", primeiroNumero, segundoNumero, resultado);
}   


function salvarHistorico(funcao, primeiroNumero, segundoNumero, resultado) {
    console.log(`nomeFunção: ${funcao}`);
    console.log(`Primeiro numero: ${primeiroNumero}, SegundoNumero: ${segundoNumero}`);
    console.log(`Resultado: ${resultado}`);
    console.log("--------------------------------------------------");
}


 /*
        Hisórico de função utilizada
        Ex -> Função: soma

        Histórico de números digitados
        Ex -> Primeiro numero: 10, SegundoNumero: 10

        Histórico de resultados obtidos:
        Ex -> 20

        apresentado num console.log
    */