const pessoa = {
    nome: "Luma",
    profissao: "Engenheira",
  };
  console.log(pessoa.nome);

  console.log(pessoa.telefone);
  pessoa.telefone = "11 2223333444";
  console.log(pessoa.telefone);

  pessoa.nome = "Luma Silva";
  console.log(pessoa);
  
  pessoa.cargo = "Dev Junior"; //adicionando nova chave com valor string 
  
  console.log(pessoa);