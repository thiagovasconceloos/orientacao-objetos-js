const cliente = {
    nome: "Thiago",
    idade: 26,
    cpf : "12345646548797",
    email: "andre@email.com",
    fones: ["70707070","980808080"]
   
   
   }
   
 //criando outro objeto dentro do objeto cliente
 // é um tipo de herença 
 
   cliente.dependentes = {

         nome: "Maria",
         parentesco: "Filha",
         dataNasc:"20/03/2011"




   }


    console.log(cliente)

    cliente.dependentes.nome = "Maria Eduarda"

    console.log(cliente.dependentes)