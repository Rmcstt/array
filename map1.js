const nums = [1, 2, 3, 4, 5]
//map é um for com mais proposito
let resultados = nums.map(function (e) {
  return e * 2
})

console.log(resultados, nums) ///[ 2, 4, 6, 8, 10 ]   [ 1, 2, 3, 4, 5 ]
