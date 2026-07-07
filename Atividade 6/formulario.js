// Cadastro de Funcionário

function cadastrarFuncionario() {

let nome = document.getElementById("nome").value;
let idade = Number(document.getElementById("idade").value);
let cargo = document.getElementById("cargo").value;
let departamento = document.getElementById("departamento").value;
let temAcessoRestrito = document.getElementById("acesso-restrito").checked;

// Alerta de finalização

alert(
    "Cadastro do funcionário realizado com sucesso!\n\n" +
    "Dados do funcionário:\n" +
    "Nome: " + nome + "\n" +
    "Idade: " + idade + "\n" +
    "Cargo: " + cargo + "\n" +
    "Departamento: " + departamento + "\n" +
    "Tem acesso restrito? " + temAcessoRestrito
);

// Exibição no console

console.log("=== CADASTRO DE FUNCIONÁRIO ===");
console.log("Nome (String):", nome);
console.log("Idade (Number):", idade);
console.log("Cargo (String):", cargo);
console.log("Departamento (String):", departamento);
console.log("Tem acesso restrito? (Boolean):", temAcessoRestrito);
console.log("================================");
}

// Função para imprimir o nome do funcionário no console

function imprimirNome() {
const nome = document.getElementById("nome").value;
console.log("Nome do funcionário (String):", nome);
}   

// Função para imprimir a idade do funcionário no console

function imprimirIdade() {
const idade = Number(document.getElementById("idade").value);
console.log("Idade do funcionário (Number):", idade);
}

// Função para imprimir o cargo do funcionário no console

function imprimirCargo() {
const cargo = document.getElementById("cargo").value;
console.log("Cargo do funcionário (String):", cargo);
}

// Função para imprimir a departamento do funcionário no console

function imprimirDepartamento() {
const departamento = document.getElementById("departamento").value;
console.log("Departamento do funcionário (String):", departamento);
}

// Disponibiliza as funções para uso no arquivo crachá virtual.html
window.cadastrarFuncionario = cadastrarFuncionario;
window.imprimirNome = imprimirNome;
window.imprimirIdade = imprimirIdade;
window.imprimirCargo = imprimirCargo;
window.imprimirDepartamento = imprimirDepartamento;
