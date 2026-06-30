function buscarCep() {
    let cepDigitado = document.getElementById("cep").value;

    // IMPLEMENTAÇÃO 1: Remoção automática do hífen
    // O método .replace('-', '') localiza o hífen e o substitui por nada (remove)
    // O método .trim() remove espaços em branco extras que o usuário possa digitar sem querer
    let cepLimpo = cepDigitado.replace('-', '').trim();

    // Verificação inicial se o campo não está vazio
    if (cepLimpo === "") {
        alert("Por favor, digite um CEP.");
        return;
    }

    // IMPLEMENTAÇÃO 2 e 3: Verificação de tamanho e validação de números
    // O .length checa se possui exatamente 8 caracteres
    // O isNaN (is Not a Number) garante que todos os 8 caracteres restantes sejam de fato números
    if (cepLimpo.length !== 8 || isNaN(cepLimpo)) {
        // Exibe mensagem de erro caso o CEP seja inválido
        alert("CEP inválido! O CEP deve conter exatamente 8 números.");
        // O 'return' interrompe a execução aqui, impedindo que a requisição à API seja feita
        return; 
    }

    // IMPLEMENTAÇÃO 4: Caso seja válido, realiza a consulta à API normalmente
    // Utilizamos a variável 'cepLimpo' (sem o hífen) para garantir o envio correto para a URL
    fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`)
    .then(function (resposta) {
        return resposta.json();
    })
    .then(function(dados) {
        // Caso a API da ViaCEP retorne que o CEP não existe no banco de dados deles
        if (dados.erro) {
            alert("CEP não encontrado.");
            return;
        }
        
        // Preenche os campos do formulário mapeando os IDs corretos do seu arquivo HTML
        document.getElementById("Rua").value = dados.logradouro;
        document.getElementById("Bairro").value = dados.bairro;
        document.getElementById("Cidade").value = dados.localidade;
        document.getElementById("Estado").value = dados.uf;
    })
    .catch(function(erro) {
        // Trata possíveis erros de conexão com a API
        console.error("Erro ao buscar o CEP:", erro);
        alert("Ocorreu um erro ao conectar com o serviço de CEP.");
    });
}

// Vincula a função ao botão "Buscar" do seu HTML quando ele for clicado
document.getElementById("buscar").addEventListener("click", buscarCep);
