Array.prototype.forEach2 = function (callback) {
  for (let i = 0; i < this.length; i++) {
    //confeso que simular um forEach nao é nada facil
    callback(this[i], i, this)
  }
}

const aprovados = ['aghata', 'aldo', 'daniel', 'raquel']

aprovados.forEach2(function (nome, indice) {
  console.log(`${indice + 1}) ${nome}`)
})

/*

1) aghata
2) aldo
3) daniel
4) raquel
*/
