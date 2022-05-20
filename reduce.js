const alunos = [
  { nome: 'joao', nota: 7.3, bolsista: false },
  { nome: 'maria', nota: 9.2, bolsista: true },
  { nome: 'pedro', nota: 9.8, bolsista: false },
  { nome: 'ana', nota: 8.7, bolsista: true }
]
console.log(alunos.map(a => a.nota))
const resultados = alunos
  .map(a => a.nota)
  .reduce(function (acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
  })

console.log(resultados)

// o reduce vai criar uma array acumulando o elemento de cada array
///[ 7.3, 9.2, 9.8, 8.7 ]
///7.3 9.2
///16.5 9.8
///26.3 8.7
///35
