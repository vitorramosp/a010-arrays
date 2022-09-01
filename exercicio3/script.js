const arrayNum01 = [2, 16, 7, 90, 23, 14]
const arrayNum01Copia = arrayNum01.slice()
arrayNum01.push(5)
const arrayString01 = ["Cachorro", "Gato", "Papagaio", "Elefante"]
const arrayString01Copia = arrayString01.slice()
arrayString01.pop()
const arrayVariado01 = [3, 5, "Banana", "tomate", true, false]
const arrayVariado01Copia=arrayVariado01.slice()
arrayVariado01.splice(1,1)

console.log(`${arrayNum01} 
${arrayNum01Copia}`)

console.log(`${arrayString01} 
${arrayString01Copia}`)

console.log(`${arrayVariado01} 
${arrayVariado01Copia}`)