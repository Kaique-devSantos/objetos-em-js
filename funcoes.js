const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
    saldo: 200,
    efetuaPagamento: function (valor){
        // this em ingles significa esse ou isso foi utilizado nesta parte pois 
        // é deste objeto q sera feita a verificacao 
        if (valor > this.saldo) {
            console.log("Saldo insuficiente");
          } else {
            this.saldo -= valor;
            console.log(`Pagamento realizado. Novo saldo: ${this.saldo}`);
          }
    }
  };

  cliente.efetuaPagamento(170);