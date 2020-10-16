let amigo = {nome: 'José', 
sexo: 'M',
peso: 85.4, 
engordar(p=0){
    // Função JS
    this.peso += p
}}

console.log(amigo)
console.log(amigo.nome)
console.log(`${amigo.nome} pesa ${amigo.peso} KG.`)
