//isso tudo pra criar um map
Array.prototype.map2 = function (callback) {
  const newArray = []
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this)) //percorri o array usando o this
  }
  return newArray
}

const carrinho = [
  '{"nome":"borracha" , "preco":3.54}',
  '{"nome":"caderno","preco":11.00}',
  '{"nome":"kit de lapis", "preco": 41.00}',
  '{"nome":"caneta","preco":7.50}'
]

const paraObject = Json => JSON.parse(Json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObject).map2(apenasPreco)

console.log(resultado)
