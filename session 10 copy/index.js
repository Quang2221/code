const myInput = document.getElementById('my-input')
myInput.addEventListener(`keyup`, () => {
    console.log(event.target.value)
})
// myInput.addEventListener(`keydown`, () => {
//     console.log('keydown')
// })
// myInput.addEventListener(`keypress`, () => {
//     console.log('keypress')
// })
const name = document.getElementById('name')
name.style.width = '100px'
name.style.height = '100px'
// myInput.style.backgroundColor = "#000000"
myInput.addEventListener(`keydown`, () => {
    console.log( event.target.value)
    name.style.backgroundColor = event.target.value
})