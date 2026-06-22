function cadastrarFuncionario() {
    let nome = document.getElementById("nome-funcionario").value;
    let horas = document.getElementById("horas-funcionario").value;
    let cargo = document.getElementById("cargo-funcionario").value;

    console.log(nome)
    console.log(horas)
    console.log(cargo)

    /*
        Registre os funcionários cadastrados e mostre cada funcionário cadastrado na
        sua página HTML

        Pode inseri-los dentro de uma sessão, tabela, paragrafo... A sua escolha.
    */
    
    // RESOLUÇÃO DA ATIVIDADE:
    // 1. Captura a div do HTML onde vamos listar os dados
    let container = document.getElementById("lista-funcionarios");

    // 2. Cria um novo elemento de parágrafo (<p>)
    let novoParagrafo = document.createElement("p");

    // 3. Define o texto estruturado que vai aparecer na página
    novoParagrafo.innerHTML = `<strong>Nome:</strong> ${nome} | <strong>Horas:</strong> ${horas} | <strong>Cargo:</strong> ${cargo}`;

    // 4. Adiciona esse parágrafo no final da lista
    container.appendChild(novoParagrafo);

    // 5. Limpa os campos para o próximo cadastro
    document.getElementById("nome-funcionario").value = "";
    document.getElementById("horas-funcionario").value = "";
    document.getElementById("cargo-funcionario").value = "";
}
