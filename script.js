function getJoke(cb) {
    req = new XMLHttpRequest()
    req.addEventListener('load', event => cb(event.target.response.joke))
    req.open('GET', 'https://icanhazdadjoke.com/')
    req.setRequestHeader('Accept', 'application/json')
    req.responseType = 'json'
    req.send()
}

const jokes = []

getJoke(joke => {
    jokes.push(joke)
    getJoke(joke => {
        jokes.push(joke)
        getJoke(joke => {
            jokes.push(joke)
            console.log(jokes)
        })
    })
})
