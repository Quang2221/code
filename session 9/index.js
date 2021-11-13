
// ex1
// let numbers =["1","2","3"]
// function numbersCheck (value,array){
//     let status = 'false'
//     for (let i =0; i < numbers.length; i++ ) {
//         let name = number[i];
//         if (name == value) {
//             status = 'True'
//         } else {
//             status = 'False'
//         }
        
//     }
//     return numbersCheck
// }
// console.log(numbers) 

// ex2:
// function getUniqueChars(charracters){
//     const uniqChars = []
//     for (let i = 0; i < charraters.length; i++) {
//         if (checkExists(uniqChars, charraters [i])) {
//             if (checkExists(uniqChars, charraters[i]) === false) {
//                 uniqChars.push(charraters[i])
//             }
//         }
//     }
//     return uniqChars
// }
// console.log(UniqueChars([`h`,`e`,`l`,`l`,`o`]))


// ss7
// ex1:
// let phone = [
//     {
//         name: `Nokia 3310`,
//         found: 2000,
//         price: 51 + `$`,
//         countries:`Asia, Africa, North America`,
//         Available: 50
//     }
//     ]
//     console.log (phone)


// DOM Document Object Model

// Document: The whole website 
// Object: data type {}
// Model: mô hình

const myButton = document.getElementById(`click-me`);
// console.log(myButton)

// // do anything with element
// myButton.innerText = `hello`
// myButton.style.backgroundColor =`#0000FF`
// myButton.style.color =`#FFFFFF`
// myButton.style.fontSize = '20px'
// myButton.style.borderRadius = `5px`
// myButton.style.border = `none`
// myButton.style.width = '150px'


// Event:
let currentFontSize = 20
myButton.addEventListener('click', () => {
    console.log(`you clicked me`)
    currentFontSize += 2
if (currentFontSize < 40){
myButton.style.fontSize = `${currentFontSize}px`

}
})

