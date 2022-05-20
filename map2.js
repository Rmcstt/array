const carrinho = [
  //formato JSON
  '{"nome":"borracha" , "preco":3.54}',
  '{"nome":"caderno","preco":11.00}',
  '{"nome":"kit de lapis", "preco": 41.00}',
  '{"nome":"caneta","preco":7.50}'
]

//retornar array apenas com preco

const paraObject = Json => JSON.parse(Json) //passa o JSON para objeto
const apenasPreco = produto => produto.preco // seleciona apenas o preco do objeto

const resultado = carrinho.map(paraObject).map(apenasPreco) //junta o map do "para objeto " com o map do" seletoor de preco

console.log(resultado) ///[ 3.54, 11, 41, 7.5 ]
