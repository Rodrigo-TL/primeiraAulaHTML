// Cadastro de Funcionário

function cadastrarFuncionario() {

const nome = document.getElementById("nome").value;
const idade = document.getElementById("idade").value;
const cargo = document.getElementById("cargo").value;
const departamento = document.getElementById("departamento").value;
const temAcessoRestrito = document.getElementById("acesso-restrito").checked;

// Alerta de finalização

alert("Cadastro do funcionário realizado com sucesso!");

// Exibição no console

console.log("=== CADASTRO DE FUNCIONÁRIO ===");
console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("Cargo:", cargo);
console.log("Departamento:", departamento);
console.log("Tem acesso restrito?", temAcessoRestrito);
}

// Função para imprimir o nome do funcionário no console

function imprimirNome() {
const nome = document.getElementById("nome").value;
console.log("Nome do funcionário:", nome);
}   

// Função para imprimir a idade do funcionário no console

function imprimirIdade() {
const idade = document.getElementById("idade").value;
console.log("Idade do funcionário:", idade);
}

