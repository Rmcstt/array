const filhas = ['maria', 'joana']
const filhos = ['joao', 'paulo']
const todos = filhas.concat(filhos)
console.log(todos, filhas, filhos) ///[ 'maria', 'joana', 'joao', 'paulo' ] [ 'maria', 'joana' ] [ 'joao', 'paulo' ]

console.log([].concat([1, 2], [3, 4], 5, [[6, 7]]))
