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


        let relatorio = "";
        
        //percorre todo o objeto de forma dinamica

        for (let info in cliente){
            // valida se a info é um objeto ou uma function e então continua sem fazer nada, caso não seja exibe na tela
          if(typeof cliente[info]==="object" || typeof cliente[info]==="function")
          { 
              continue
          } else {
          relatorio += `${info.toUpperCase()} :  ${cliente[info]} \n`
          }
        }


        console.log(relatorio)