const escola = [
  {
    nome: 'turma m1',
    alunos: [
      {
        nome: 'gustavo',
        nota: 8.1
      },
      {
        nome: 'ana',
        nota: 9.3
      }
    ]
  },
  {
    nome: 'turma m2',
    alunos: [
      {
        nome: 'rebeca',
        nota: 8.9
      },
      {
        nome: 'roberto',
        nota: 7.3
      }
    ]
  }
]

const getNotaAluno = aluno => aluno.nota //prepara o criterio para o map getalunos
const getNotaTurma = turma => turma.alunos.map(getNotaAluno) //faz as arrays apenas com as notas dos alunos

const notas1 = escola.map(getNotaTurma) //atribui a copia array das notas a "notas1"
console.log(notas1) ///[ [ 8.1, 9.3 ], [ 8.9, 7.3 ] ]

Array.prototype.flatmap = function (callback) {
  //aqui tivemos que criar uma funcao proto que une as funcoes map e concat
  return Array.prototype.concat.apply([], this.map(callback))
}
const soma = (total, valor) => total + valor
const notas2 = escola.flatMap(getNotaTurma)
const media = escola.flatMap(getNotaTurma).reduce(soma) / notas2.length // e aqui aplicamos a nova funcao "flatmap"
console.log(notas2) ///[ 8.1, 9.3, 8.9, 7.3]
console.log(media) ///8.399999999999999
