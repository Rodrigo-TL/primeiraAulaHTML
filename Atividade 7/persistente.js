function salvarNome() {
    let valorDigitado = document.getElementById("texto-inserido").value;
    let idadeDigitada = 48;
    
    let objetoNome = {
        nome: valorDigitado,
        idade: idadeDigitada
    };
    let textoJSON = JSON.stringify(objetoNome)
    localStorage.setItem("variavelNova", textoJSON)

    document.getElementById("nome-salvo").innerText = valorDigitado;


}
