function adder(a, b) {
    return a + b
}

function adderPromise(x, y) {
    return new Promise((resolve, reject) => {
        if (typeof x === 'number' && typeof y === 'number') {
                        const answer  = adder(x, y)
                        resolve(answer)
                    }
                    
                    reject('Operands must be numbers')
                })
}

// const resolved = value => console.log(value)
function resolved(value) {
    console.log(value)
}

const error = err => console.error(err)

adderPromise(10,30)
    .then(value => adderPromise(value, 20))
    .then(value => adderPromise(value, 50))
    .then(resolved)
    .catch(error)

console.log('Awaiting promise ...')