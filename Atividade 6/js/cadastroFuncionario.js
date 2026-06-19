function cadastrarFuncionario() {

    let nome = document.getElementById("nome-funcionario").value;
    let horas = document.getElementById("horario").value;
    let cargo = document.getElementById("cargo-funcionario").value;

    console.log(nome)
    console.log(horas)
    console.log(cargo)
}

// mostrar na página o nome de cada funcionário cadastrado, o horário de trabalho e o cargo.

/*
        Registre os funcionários cadastrados e mostre cada funcionário cadastrado na
        sua página HTML

        Pode inseri-los dentro de uma sessão, tabela, paragrafo... A sua escolha.
    */

function mostrarFuncionario() {
    let nome = document.getElementById("nome-funcionario").value;
    let horas = document.getElementById("horario").value;
    let cargo = document.getElementById("cargo-funcionario").value;

    let funcionarioInfo = "Nome: " + nome + "\n" +
        "Horário de trabalho: " + horas + "\n" +
        "Cargo: " + cargo;

    alert(funcionarioInfo);
}   