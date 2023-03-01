let inputField = document.querySelector('input')
let movieList = document.querySelector('ul')
let message = document.querySelector('#message')

const addMovie = (e) => {
    e.preventDefault()
    let movie = document.createElement('li')
    let movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value
    movie.appendChild(movieTitle)
    movieList.appendChild(movie)
    movieTitle.addEventListener('click', crossOfMovie)
    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'X'
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)
    inputField = []
}

document.querySelector('form').addEventListener('submit', addMovie)

const deleteMovie = e => {
    e.target.parentNode.remove()
    message.textContent = 'Movie deleted!'
}

const crossOfMovie = e => {
    e.target.classList.toggle('checked')
    e.target.classList.contains('checked') ? message.textContent = 'Movie watched!' : message.textContent = 'Movie added back!'
}
