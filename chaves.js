const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
  };
  
  cliente.enderecos = [
    {
      rua: "R. Joseph Climber",
      numero: 1337,
      apartamento: true,
      complemento: "ap 934",
    },
  ];

// Object.keys foi utilizado para nos retornar um array com todas as chaves do objt
 const chavesDoObjeto = Object.keys(cliente);
 console.log(chavesDoObjeto);
 
//  se chavesDoObjeto  for diferente (false)  endereço, então entre no bloco
 if (!chavesDoObjeto.includes("enderecos")) {
    console.error("Erro. É necessário ter um endereço cadastrado.");
  }