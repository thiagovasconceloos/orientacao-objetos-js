class Cliente {
    constructor(nome, email, cpf, saldo){
      this.nome = nome
      this.email = email
      this.cpf = cpf
      this.saldo = saldo
    }
   
    depositar(valor){
      this.saldo += valor
    }
   
    exibirSaldo(){
      console.log(this.saldo)
    }
   }
  // cliente poupança herda cliente.
   class ClientePoupanca extends Cliente {
    constructor(nome, email, cpf, saldo, saldoPoupanca){
      super(nome, email, cpf, saldo)
      this.saldoPoupanca = saldoPoupanca
    }
   
    depositarPoupanca(valor){
      this.saldoPoupanca += valor
    }
   }

   const thiago = new ClientePoupanca("Thiago", "thiago@mail.com", "12312312312", 100, 200)



   thiago.depositar(50)
   thiago.depositarPoupanca(50)