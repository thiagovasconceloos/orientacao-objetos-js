function Cliente(nome,cpf,email,saldo){

    this.nome = nome
    this.cpf  = cpf,
    this.email = email,
    this.saldo = saldo

    this.depositar = function(valor){

        this.saldo += valor

         }



}


function ClientePoupanca(nome,cpf,email,saldo,saldoPoup){
    

    Cliente.call(this,nome,cpf,email,saldo)
    this.saldoPoup = saldoPoup

 

}

const  Alexandre = new ClientePoupanca("Alexandre","800.800.800-80","Alexandre@email.com",100,4000)

console.log(Alexandre)


ClientePoupanca.prototype.depositarPop = function(valor){

   this.saldoPoup += valor

}

Alexandre.depositarPop(500)


console.log(Alexandre)