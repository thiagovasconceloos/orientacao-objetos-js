class Cliente {

   constructor(nome,cpf,email,saldo){
     this.nome = nome,
     this.cpf = cpf,
     this.email= email,
     this.saldo = saldo


   }

    depositar(valor){

        this.saldo =+ valor



    }
    
    exibirSaldo(){


         console.log(this.saldo);
    }

}


const thiago = new Cliente("Thiago","700.700.700-70","thiago@email.com",100)

thiago.exibirSaldo()
