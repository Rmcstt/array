const quaseArray = { 0: 'rafael', 1: 'ana', 2: 'bia' }
console.log(quaseArray) ///{ '0': 'rafael', '1': 'ana', '2': 'bia' }

Object.defineProperty(quaseArray, 'toString', {
  value: function () {
    return Object.values(this)
  },
  enumerable: false
})
console.log(quaseArray[0]) //rafael

const meuArray = ['rafael', 'ana', 'bia']
console.log(quaseArray.toString(), meuArray) ///[ 'rafael', 'ana', 'bia' ] [ 'rafael', 'ana', 'bia' ]
