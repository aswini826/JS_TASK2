
const buttons = document.querySelectorAll('.button')
const textarea = document.querySelector('textarea')

const delete_button = document.querySelector('.delete')
const shift_button = document.querySelector('.shift')
const space_button = document.querySelector('.space')

let characters = []

buttons.forEach(button => {
    button.addEventListener('click', () => {
        textarea.value += button.innerText
        characters = textarea.value.split('')
    })
})

delete_button.addEventListener('click', () => {
    characters.pop()
    textarea.value = characters.join('')
})

space_button.addEventListener('click', () => {
    characters.push(' ')
    textarea.value = characters.join('')
})

shift_button.addEventListener('click', () => {
    buttons.forEach(button => {
        button.classList.toggle('upper')
    })
})