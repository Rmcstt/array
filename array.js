// array em js e um objeto, mas que trabalha com indices,ou seja um objeto com estrutura diferente

console.log(typeof Array, typeof new Array(), typeof []) ///function object object

let aprovados = new Array('bia', 'carlos', 'ana')
console.log(aprovados) /// ['bia','carlos','ana']

aprovados = ['bia', 'carlos', 'ana']
console.log(aprovados[0]) ///bia
console.log(aprovados[1]) ///carlos
console.log(aprovados[2]) ///ana
console.log(aprovados[3]) ///undefined

aprovados[3] = 'paulo'
aprovados.push('fulana')
console.log(aprovados.length) ///5

aprovados[9] = 'rafael'
console.log(aprovados.length) ///10
console.log(aprovados[8] === undefined) /// true

console.log(aprovados)
/// [
/// 'bia',
///   'carlos',
///   'ana',
///   'paulo',
///   'fulana',
///   <4 empty items>,
///   'rafael'
/// ]

aprovados.sort() //organiza ou ordena...
console.log(aprovados)
/*[
  'ana',
  'bia',
  'carlos',
  'fulana',
  'paulo',
  'rafael',
  <4 empty items>
]
*/

delete aprovados[1]
console.log(aprovados[1]) /// undefined
console.log(aprovados[2]) /// carlos
aprovados = ['bia', 'carlos', 'ana']
aprovados.splice(1, 1) // deleta ou adiciona dependendo de como colocar deentro dos parenteses(indice,quantidade para excusao,adc,adc)
console.log(aprovados) ///[ 'bia', 'fulano', 'ciclano' ]
