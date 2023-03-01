let inputField = document.querySelector('input')
let movieList = document.querySelector('ul')
let message = document.querySelector('#message')

const addMovie = (e) => {
    e.preventDefault()
    let movie = document.createElement('li')
    let movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener('click', crossOfMovie)
    movie.appendChild(movieTitle)
    let deleteBtn = document.createElement('button')
    movieList.appendChild(movie)
    deleteBtn.textContent = 'X'
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)
    inputField.value = ''
}

document.querySelector('form').addEventListener('submit', addMovie)

const deleteMovie = e => {
    e.target.parentNode.remove()
    message.textContent = `${e.target.parentNode.textContent} deleted!`
    revealMessage()
}

const crossOfMovie = e => {
    e.target.classList.toggle('checked')
    e.target.classList.contains('checked') ? message.textContent = `${e.target.textContent} watched!` : message.textContent = `${e.target.textContent} added back!`
    revealMessage()
}

const revealMessage = () => {
    message.classList.remove('hide')
    setTimeout(() => {
        message.classList.add('hide')
    }, 1000)
}