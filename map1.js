const nums = [1, 2, 3, 4, 5]
//map é um for com mais proposito
let resultados = nums.map(function (e) {
  return e * 2
})

console.log(resultados, nums) ///[ 2, 4, 6, 8, 10 ]   [ 1, 2, 3, 4, 5 ]

const soma10 = e => e + 10
const triplo = e => e * 3
const praDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultados = nums.map(soma10).map(triplo).map(praDinheiro)

console.log(resultados) ///[ 'R$ 33,00', 'R$ 36,00', 'R$ 39,00', 'R$ 42,00', 'R$ 45,00' ]
