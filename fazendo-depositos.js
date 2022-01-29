const cliente = {
    nome: "Thiago",
    idade: 26,
    cpf : "12345646548797",
    email: "thiago@email.com",
    fones: ["70707070","980808080"],
    docs: [{

        tipo: "CPF",
        numero: "700.700.700-05",
        dataValidade: "20/08/2025"
         },


         { tipo: "RG",
         numero: "500000000-0",
         dataValidade: "20/09/2030" }
        
        
        ], 
          saldo: 100,
         depositar:function(valor){

        this.saldo += valor

         }
         
        }

        console.log(cliente.saldo)
        cliente.depositar(100)
        console.log(cliente.saldo)

 
   
    