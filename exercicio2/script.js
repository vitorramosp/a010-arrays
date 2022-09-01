const arrayNum01 = [2, 16, 7, 90, 23, 14]
const arrayString01 = ["Cachorro", "Gato", "Papagaio", "Elefante"]
const arrayVariado01 = [3, 5, "Banana", "tomate", true, false]

console.log(`${arrayNum01} 
Quantidade de itens: ${arrayNum01.length}
Primeiro item: ${arrayNum01[0]}
Tem o numero 7 nestes itens? ${arrayNum01.includes(7)}
`)
console.log(`${arrayString01} 
Quantidade de itens: ${arrayString01.length}
Segundo item: ${arrayString01[1]}
`)
console.log(`${arrayVariado01} 
Quantidade de itens: ${arrayVariado01.length}
Terceiro item: ${arrayVariado01[2]}
Tem o Cenoura nestes itens? ${arrayVariado01.includes("Cenoura")}`)