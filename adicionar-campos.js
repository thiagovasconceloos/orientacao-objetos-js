const cliente = {
    nome: "Thiago",
    idade: 26,
    cpf : "1234567891011",
    email: "thiago@email.com"
   
   
   
   }


   cliente.fone = "7070-7070"
   

   const chaves = ["nome","idade","cpf","email","fone"]

  chaves.forEach(info => console.log(cliente[info]))  

  cliente.fone = "97070-7070"
  

  chaves.forEach(info => console.log(cliente[info]))  