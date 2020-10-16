var idade = 15
if (idade < 16) {
    console.log('Não vota!')
} if (idade < 18 || idade >= 60) {
    console.log('Voto opcional!')
} else{
    console.log('Pode votar!')
}

// OUTRA MANEIRA //

var idades = 17
if (idades < 16) {
    console.log('Não vota!')
} else {
    if (idades < 18 || idades >= 60) {
        console.log('Voto opcional!')
    } else {
        console.log('Voto obrigatório!')
    }
}

// USANDO ELSE IF //


var idadess = 60
if (idadess < 16) {
    console.log('Não vota!')
} else if (idadess < 18 || idadess >= 60) {
    console.log('Voto opcional!')
} else {
    console.log('Voto obrigatório!')
}
