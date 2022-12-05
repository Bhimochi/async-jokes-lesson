// function getJoke() {
//     return new Promise((resolve, reject) => {
//         req = new XMLHttpRequest()
//         req.addEventListener('load', event => cb(event.target.response.joke))
//         req.open('GET', 'https://icanhazdadjoke.com/')
//         req.setRequestHeader('Accept', 'application/json')
//         req.responseType = 'json'
//         req.send()
//     })
// }

// function fetchJoke() {
//     return new Promise((resolve, reject) => { 
//         fetch('https://icanhazdadjoke.com/', {
//             headers: { 'Accept': 'application/json'}
//         })
//         .then(res => res.json())
//         .then(data => resolve(data.joke))
//     })
// }

async function fetchJoke() {
    try {
        const res = await fetch('https://icanhazdadjoke.com/', {
            headers: { 'Accept': 'application/json'}
        })
        const data = await res.json()
        return data.joke
    }
    catch {
        throw new Error('Could not retrieve joke!')
    }
}

// Load and display jokes from localStorage
// Concats the jokes parameter also
function loadJokes(jokes) {
    jokes = JSON.parse(localStorage.jokes || '[]').concat(jokes)
    localStorage.jokes = JSON.stringify(jokes)
    document.querySelector('ul').innerHTML = jokes.map(joke => `<li>${joke}</li>`).join('')
}

function get5jokes() {
    const jokePromises = []
    for (let i=0; i < 5; i++) {
    jokePromises.push(fetchJoke())
    }

    Promise.all(jokePromises)
    .then(jokes => loadJokes(jokes))
    .catch(err => console.error(err))
}

document.querySelector('button').addEventListener('click', get5jokes)

loadJokes([])

// async function asyncGetJoke() {
//     const result = await fetchJoke()
//     return result
// }

// asyncGetJoke().then (x => console.log)

// console.log('End of main')