// let BMI = Number(prompt("enter your weight"))
// let weight = BMI

// if (weight < 18.5) {
//   console.log(`underweight`)
// }
//   else if (weight > 24.9) {
//     console.log (`Normal weight`)
//   } else if (weight < 29.9) {
//     console.log(`Overweight`)
//   } else if (weight > 30){
//     console.log (`Obesity`)
//   }

//   var a = prompt('enter a')
// var b = prompt('enter b')
// var c = prompt('enter c')


// 	 if(a == 0) {
         
//         if(b == 0) {
//             if (c == 0) {
//             	alert('no equations')
                 
//             } else {
//                 alert('no equations')
//             }
//         } else {
//             alert('one equation: '+(-c/b))
//         }
//     } else {
//         var delta = b*b - 4*a*c;
//         if(delta > 0) {
//             var x1 = (-b+Math.sqrt(delta))/(2*a);
//             var x2 = (-b-Math.sqrt(delta))/(2*a);
//             alert('first equation x1 = '+x1+'\n second equation x2 = '+x2)
//         } else if ( delta == 0) {
//         	var sum = -b/2*a
//             alert('two equations founded: x1 = x2 = '+sum)
//         } else {
//             alert('no equation')
//         }
//     }

// const aX = Number(prompt(`enter aX`))
// const aY = Number(prompt(`enter aY`))
// const width = Number(prompt(`enter width`))
// const height = Number(prompt(`enter height`))

// const bX = Number(prompt(`Enter bX`))
// const bY = Number(prompt(`Enter bY`))

// const isPointInsideHorizontally = bX < (aX +width && bX > aX
// let isPointInsideVertically = bY > (aY - height) && bY < aY

// const isPointInReactangle = isPointInsideHorizontally && isPointInsideVertically
// // const isPointInReactangle = (bX < (aX +width) && bx > ax) && (bY > (aY - height) && bY)

// if (isPointInReactangle ===true) {
//   console.log(`inside`)
// } else {
//   console.log(`outside`)

// } 


for (let i = 10; i < 50; i++ ) {
  const devidedBy3 = i % 3 === 0
  const devidedBy5 = i % 5 === 0
  const devidedBy2 = i % 2 === 0
  if (devidedBy3 && devidedBy5 && !devidedBy2) {
  console.log(i)
  }
}

for (let i = 10; i < 50; i+= 2) {
  console.log(i)
  
}








// 1. i = 0 => i < 10 => true => console.log(0) => i++ => i = 1 => i < 10 => true => console.log(1) => i++
//  console.log(9) => i++ => i = 10 => i < 10 => false => stop

// initial => check condition => run code in block if condition is true => step handle => check condition => run code...

// let i = 0 : intitial
// i < 10: stop condition
// i++: step handle