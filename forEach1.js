const aprovados = ['aghata', 'aldo', 'daniel', 'raquel']

aprovados.forEach(function (nome, indice) {
  console.log(`${indice + 1}) ${nome}`)
})
/*
1) aghata
2) aldo
3) daniel
4) raquel
*/

aprovados.forEach(nome => console.log(nome))
/*
aghata
aldo
daniel
raquel
 */

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)
/*
aghata
aldo
daniel
raquel
 */
