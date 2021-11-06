// ex1:let dishes = [`Beef steak`, `Chicken soup`, `Russian salad`, `Orange juice`]
// console.log (dishes[0]) 
// {
//     dishes.push (`Ice Cream`)
// console.log(dishes)
// dishes.splice (1,1)
// console.log(dishes)
// }



// exe 4:


// const numbers = [1,5,4,2,7,9,5,6,12,3];
// let result = 0;

// for (let i = 0; i < 10 - 1; i++) {
//   result += numbers[i];
// }

// console.log(result)


// ex 5:

// let numbers = [1,5,4,2,7,9,5,6,12,3];
// let highest = numbers[0];

// for (var i = 0; i < 10; i++) {
//     if (highest < numbers[i] ) {
//         highest = numbers[i];
//     }
// }
// console.log(highest);


let arr = [1, `abc`, true]
// index 1: name
// index ...

// Object:
// let film = {
//     name: `maze runner`,
//     made: 2014, 
//     age: 7,
//     actors: [
//         {
//             name: `Dylan`,
//             age: 30,
//         },
//         {
//             name: `Thomas`,
//             age: 31
//         }
        
//     ]
        
    

// };

// ICRUD: Create:
//  let person = {
//      name: `Qanh`
//  }

//  Read: console.log(person.name)
//  console.log(person[fieldName])
//  const fieldName = prompt(`?`)

// create:
// person.school = {
//     Name: `LMNX`,
//     age: 30,
// }

// console.log(person)


// update:
// person.age = 31
// console.log(person)

// delete:
// delete person.age;
// console.log(person);

// for (let key in person) {
//     console.log(`Value of field ${key} is ${person[key]}`);
    
// }

// let numbers = [1,2,4,5,6,7]
// for (let number of numbers) {
//     console.log(number)
// }

let students = [
   {
       name: `Nam`,
       age: 22,
       mark: 6
   },
   {
       name: `Son`,
       age: 18,
       mark: 8
   },
   {
       name: `Q.anh`,
       age:18,
       mark: 10
   }
]
 
// for (let student of students) {
//     console.log(student.name)
// } 

// for (let student of students) {
//     if (student.age < 20) {
//         console.log(student.name)

//     }
// }


// let sum = 0
// for (let student of students) {
// sum += student.mark
// }
// console.log(sum/students.length)

// c1: let lowest = students[0].mark
// for (let student of students){
//     if ( student.mark < lowest )
//     lowest = student.mark
// }

// for (let student of students) {
//     if (student.mark === lowest) console.log(student.name)
// }

//  c2: 
// let lowestMark = students[0].mark
// let lowestStudentName = students[0].name;

// for (let student of students) {
//     if (student.mark <= lowestMark){
//         lowestStudentName = student.name
//     }
// }

// console.log( lowestStudentName)

c3:
let lowestMark = students[0].mark
let lowestStudentName = []

for (let student of students) {
    if (student.mark === lowestMark) {
        lowestStudentName.push
    }
}