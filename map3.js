//essa função simula a funcionalidade do map
Array.prototype.map2 = function (callback) {
  const newArray = []
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this)) //percorrendo o array usando o this
  }
  return newArray
}

const carrinho = [
  '{"nome":"borracha" , "preco":3.54}',
  '{"nome":"caderno","preco":11.00}',
  '{"nome":"kit de lapis", "preco": 41.00}',
  '{"nome":"caneta","preco":7.50}'
]

const paraObject = Json => JSON.parse(Json) //passando o JSON para objeto
const apenasPreco = produto => produto.preco // selecionamdo o preço dos produtos

const resultado = carrinho.map2(paraObject).map2(apenasPreco) // aplicando a funçao função falsa map (map2)

console.log(resultado) ///[ 3.54, 11, 41, 7.5 ]
