const pessoa = {
    nome:"Bruce Banner",
    dataNascimento:"25/01/1980",
    carteiraIdentidade:"997776-X",
    email:"profbanner@email.com",
    telefone:"+552877776666",
    cidade:"Cachoeiro de Itapemirim",
    estado:"ES"
 }





 pessoa.cpf="15346626522-65"
 pessoa.seguroSocial="854321985-9"



 

 const chaves = ["nome","dataNascimento","carteiraIdentidade","email","telefone","cidade","estado","cpf","seguroSocial"]

 chaves.forEach(info => pessoa[info]==pessoa["cpf"] ? console.log(pessoa[info].substring(0,4)) : console.log(pessoa[info]))
