// objetos são feitos por chave e valor (tipo um dicionario no python)


const cliente = {
    nome: "Thiago",
    idade: 26,
    cpf : "1234567891011",
    email: "andre@email.com"
   
   
   
   }
   

 console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos`)

 // o metodo substring permite extrair uma substring  usando 
 //como parametro a posição de inicial e quantidade de caracteres
 console.log(cliente.cpf.substring(0,3))