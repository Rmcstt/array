const pilotos = ['vettel', 'alonso', 'schumacker', 'massa']
pilotos.pop() //retira o ultimo elemento da array
console.log(pilotos) ///[ 'vettel', 'alonso', 'schumacker' ]

pilotos.push('verstapen')
console.log(pilotos) ///[ 'vettel', 'alonso', 'schumacker', 'verstapen' ]

pilotos.shift() //retira o primeiro elemento da array
console.log(pilotos) ///[ 'alonso', 'schumacker', 'verstapen' ]

pilotos.unshift('hamilton')
console.log(pilotos) ///[ 'hamilton', 'alonso', 'schumacker', 'verstapen' ]

//adicionar com o metodo splice

pilotos.splice(2, 0, 'botas', 'massa')
console.log(pilotos)

//removendo usando o metodo splice

pilotos.splice(3, 1)
console.log(pilotos)

//slice = pedaço ......cria uma nova array a partir da original
const algunsPilotos = pilotos.slice(2)
console.log(algunsPilotos) ///[ 'botas', 'schumacker', 'verstapen' ]

const algunsPilotos2 = pilotos.slice(1, 4) // ele pega a partir do primeiro indice, ate antes do quarto!!!
console.log(algunsPilotos2) ///[ 'alonso', 'botas', 'schumacker' ]
