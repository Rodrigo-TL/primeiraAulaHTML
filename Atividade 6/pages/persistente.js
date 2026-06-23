function cadastrarFuncionario() {
    let valorDigitado = document.getElementById("nome-funcionario").value;
    let nomeFuncionario = valorDigitado;
    
    let objetoNome = {
        nome: nomeFuncionario
    };
    let textoJSON = JSON.stringify(objetoNome)
    localStorage.setItem("variavelNova", textoJSON)

    document.getElementById("nome-salvo").innerText = nomeFuncionario;
    document.getElementById("lista-funcionarios-ul").innerHTML += `<li>${nomeFuncionario}</li>`;
    document.getElementById("nome-funcionario").value = "";
    

}
