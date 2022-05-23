Array.prototype.reduce2 = function (callback, valorInicial) {
  const indiceInicial = valorInicial ? 0 : 1 //valor inicial setado = 0,nao setado = 1............"?"
  let acumulador = valorInicial || this[0]
  for (let i = indiceInicial; i < this.length; i++) {
    acumulador = callback(acumulador, this[i], [i], this)
  }
  return acumulador
}

const soma = (total, valor) => total + valor
const nums = [1, 2, 3, 4, 5, 6]
console.log(nums.reduce2(soma, 21)) ///42

const ver = a => (a % 2 == 0 ? 'true' : 'false') //e foi nesse momento que aprendi a esses dois simbolos "?" e ";"!!!
console.log(ver(4))
