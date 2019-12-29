const somar = (x, y) => x + y
const subtrair = (x, y) => somar(x, -y)
const multiplicar = (x, y) => {    
    const counter = y
    let result = 0
    for (let i = 0; i < counter; i++) { 
        result += somar(x, y = 0)
    }
    return result
}


// 4 x 3
// 4 + 4 + 4

console.log(multiplicar(5, 2))
console.log(multiplicar(2, 10))
console.log(multiplicar(7, 3))
