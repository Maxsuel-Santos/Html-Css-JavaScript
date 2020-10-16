console.log()

let valoresss = [6, 5, 9, 8, 7, 4, 3]
for (let pos=0; pos<valoresss.length; pos++) {
    console.log(`No índece ${pos} temos o número ${valoresss[pos]}`)
}

console.log()
console.log()

let valores = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']
for (let alfabeto = 0;alfabeto<valores.length;alfabeto++) {
    console.log(`No índice ${alfabeto} temos a letra ${valores[alfabeto]}`)
}

console.log()
console.log()

let valoress = [7,8,9,6,5,4,1,2,3]
valoress.sort()
for (let pos in valoress) {
    console.log(`ìndice ${pos} Tem o valor ${valoress[pos]}`)
}
