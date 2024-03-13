// requred e uma function que o node nos permite utilizar para buscar um code externo
const dados = require("./cliente.json");

// console.log(dados);

console.log(dados.nome);

// console.log(typeof dados);

// const cliente transoforma oque recebe de dados para string
const clienteEmString = JSON.stringify(dados);

// console.log(clienteEmString);

// console.log(typeof clienteEmString);

const objetoCliente = JSON.parse(clienteEmString);

console.log(objetoCliente);