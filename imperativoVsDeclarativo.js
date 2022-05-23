const alunos = [
  { noma: 'joao', nota: 7.9 },
  { nome: 'maria', nota: 9.2 }
]

// imperativo

let total1 = 0
for (let i = 0; i < alunos.length; i++) {
  total1 += alunos[i].nota
}

console.log(total1 / alunos.length) ///8.55

//declarativo

const getNota = aluno => aluno.nota //essa funcao separa as notas dos alunos para depois ser criada uma nova array com a funcao map
const soma = (total, atual) => total + atual //essa funcao determina o que o reduce ira fazer com os criterios

const total2 = alunos.map(getNota).reduce(soma) //map cria uma array apenas com as notas, e,reduce aplica os criterios sob a nova array
console.log(total2 / alunos.length) ///8.55
