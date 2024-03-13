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
  
//   no for abaixo  criamos variavel chave que vai receber cada objeto de cliente
//  utilizamos palavra reservada in que percore o elemento cliente
    
  for (let chave in cliente) {
    // console.log(chave);  desta forma verificamos o nome de cada chave
    // console.log(cliente[chave]);  acessando valor da chave que esta no objeto cliente
    let tipo = typeof cliente[chave];
    if (tipo !== "object" && tipo !== "function") {
      console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
    }
  }

