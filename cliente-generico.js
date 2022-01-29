function Cliente(nome,cpf,email,saldo){

    this.nome = nome
    this.cpf  = cpf,
    this.email = email,
    this.saldo = saldo

    this.depositar = function(valor){

        this.saldo += valor

         }



}


const thiago = new Cliente("Thiago","700.700.700-70","thiago@email.com",100)

console.log(thiago)

