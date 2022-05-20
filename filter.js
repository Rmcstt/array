const produtos = [
  // mdn webdocs
  { nome: 'notebook', preco: 2499, fragil: true },
  { nome: 'ipad pro', preco: 4199, fragil: true },
  { nome: 'copo de vidro', preco: 12.49, fragil: true },
  { nome: 'copo de plastico', preco: 5, fragil: false }
]

const caro = produto => produto.preco >= 500

const fragil = produto => produto.fragil //arrow function co 1 parametro nap precisa de chaves

///
console.log(produtos.filter(fragil).filter(caro)) /*[
  { nome: 'notebook', preco: 2499, fragil: true },
  { nome: 'ipad pro', preco: 4199, fragil: true }
]*/
