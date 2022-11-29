// 1.

let user = {
    firstname: "giorgi",
    lastname: "smith",
    age: 25,
    studentstatus: "active"
  };
console.log(user.studentstatus)  

// 2.

let elements = ["nika", "tamazi", 15, 20]

for (let i = 0; i < elements.length; i++) {
    console.log(elements[i]);
}

let surnames = ["Jhonson", "Walker", "Charles", "Brown"]

let index = 0;
while (index < surnames.length) {
    console.log(surnames[index]);
    index++;
}

// 3.

let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 5){
        console.log(numbers[i]); 
    }
}

// 4.

let person = {
    name: 'giorgi',
    age:  20,
    studentstatus: 'active'
}

if (person.age < 18 && person.studentstatus == 'active') {
    console.log('hello')
}
else if (person.name == 'levan') {
    console.log("hello levani")
}
else if(person.studentstatus == 'active' || person.age < 25) {
    console.log("hello world")
}
else console.log("error")

// 5.

let array = [ 'watermelon', 'pear', 10, 45, 50, 'apple', 'ananas' ];

for (let i in array) {
    if (typeof array[i] === "string") {
        console.log(array[i])
    }
 }

 // 6.

// ინსტრუქციაში მასივი არარის.

// 7.
let isOdd = (n) => (n & 1) === 1
let numbersTwo = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ]

// // even numbers

console.log( `Odd numbers are ${ numbersTwo.filter( n => isOdd(n))}` );

// // odd numbers

console.log( `Even numbers are ${ numbersTwo.filter( n => !isOdd(n))}`);

// 8.

let users = [
    {username: 'giorgi', status: false},
    {username: 'levani', status: false},
    {username: 'anna', status: true}
]

for (let i = 0; i < users.length; i++) {
}

// ???



