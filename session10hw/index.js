// ex1
// const input = document.getElementById('input')
// const oddEven = document.getElementById('oddEven')
// input.addEventListener('keyup', () =>{
//     console.log(event.target.value);
    // letodd = event.target.value % 2 !== 0
//     if (odd) {
//         oddEven.innerText = 'odd'
//     } if else (odd === false) {
//         oddEven.innerText = 'even'
//     }
   
// })

// ex2

const text = document.getElementById('text')
text.addEventListener('keyup', () =>{
    change.innerText = event.target.value
})
const size = document.getElementById('font size')
size.addEventListener('keyup', () =>{
    change.style.fontSize = `${event.target.value}px`
})
const color = document.getElementById('color')
color.addEventListener('keyup', () =>{
    change.style.color = event.target.value
})
const backgroundColor = document.getElementById('background color')

backgroundColor.addEventListener('keyup', () =>{
    change.style.backgroundColor = event.target.value
})
