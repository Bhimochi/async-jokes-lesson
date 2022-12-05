function getJoke() {
    return new Promise((resolve, reject) => {
        req = new XMLHttpRequest()
        req.addEventListener('load', event => cb(event.target.response.joke))
        req.open('GET', 'https://icanhazdadjoke.com/')
        req.setRequestHeader('Accept', 'application/json')
        req.responseType = 'json'
        req.send()
    })
}

function fetchJoke() {
    return new Promise((resolve, reject) => { 
    fetch('https://icanhazdadjoke.com/', {
        headers: { 'Accept': 'application/json'}
    })
    .then(res => res.json())
    .then(data => resolve(data.joke))
})
}
// fetchJoke()

const jokePromises = []
for (let i=0; i < 5; i++) {
    jokePromises.push(fetchJoke())
}

Promise.all(jokePromises)
    .then(jokes => console.log(jokes))
    .catch(err => console.error(err))


