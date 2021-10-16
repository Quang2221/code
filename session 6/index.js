// let fibonacci_number = function (n) 
// {
//   if (n===1) 
//   {
//     return [0, 1];
//   } 
//   else 
//   {
//     let s = fibonacci_number(n - 1);
//     s.number(s[s.length - 1] + s[s.length - 2]);
//     return s;
//   }
// };

//  console.log(fibonacci_number(8));
 
//  ex6

// for (let j = 1; 1 <= 5; j++) {
//     let oneLine = ``
//     for (let i = 0; i < j; i++) {
//         oneLine += j

//     }

//     console.log(oneLine)
// }

// array
// let students = [`Q.Anh`, `Son`, `Nam`]

// console.log (students[0])

// // add new array
// students.push (`New student`)
// console.log(students)

// remove array
// students.splice (0,1)
// console.log(students)


// students[2] = `NaN1`
// console.log (students)

// ICRUD iInit: create Read   update delete

// for (let i = 0; i < 3; i++) {
//     console.log(`Student ${i + 1} is ${students [i]}`)
// }

let numbers = [1,3,2,6,4,56,43,56,98]
// for (let i = 0; i < 9; i++) {
//     const isEven = numbers[i] % 2 === 0
//     if (isEven) {
//         console.log(numbers[i])
//     }
// }

for (let num of numbers) {
    const isEven = num % 2 === 0
    if (isEven) {
        console.log(num)
    }
}