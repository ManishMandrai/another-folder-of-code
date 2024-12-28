// // const numbers = [1,2,3,4,5];
// // const squaredNumber = numbers.map(num => num ** 2);
// // console.log(squaredNumber);


// const ages = [12, 45, 75, 32, 65];
// const adults = ages.filter(age => age >= 18);
// console.log(adults);


// const numbers = [1, 2, 3, 4, 5, 30]
// const sum = numbers.reduce((accumalator, current) => accumalator + current, 0)
// console.log(sum);


// //closures
// function outer() {
//     let count = 0;
//     return function inner() {
//         count++;
//         console.log(`Count: ${count}`)
//     }
// }
// const incremment = outer()
// incremment()
// incremment()
// incremment()
// incremment()
// incremment()
// incremment()
// incremment()


// // function createMultiplier(multiplier) {
// //     return function (num) {
// //         return num * multiplier
// //     };
// // };
// // const double = createMultiplier(2)
// // console.log(double(4));
// // const triple = createMultiplier(3)
// // console.log(triple(6));


// function add(a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c;
//         }
//     }
// }
// console.log(add(1)(2)(5));


// function multiply (a,b,c){
//     return a * b * c;
// }
// const partialMultily = multiply.bind(null, 3,5)
// console.log(partialMultily(4));


// const numberrs = [1,2,3,4,5]

// const doubled = numberrs.map(num => num*2)
// console.log(doubled);

// const filtered = numberrs.filter(num => num > 4)
// console.log(filtered);

// const product = numberrs.reduce((acc, num) => acc * num ,1)
// console.log(product);



// function counter(){
//     let count = 0;
//     return function(){
//         count++;
//         return count;
//     }
// }

// const increment = counter()
// console.log(increment());
// console.log(increment());
// console.log(increment());
// console.log(increment());
// console.log(increment());
// console.log(increment());
// console.log(increment());


// function multiply(a){
//     return function(b){
//         return a * b;
//     }
// }
// const double = multiply(2)
// console.log(double(4));

// const triple = multiply(3)
// console.log(triple(4));

function add (a, b, c){
    return a + b + c;
}
const addWithTwoFixes = add.bind(null, 3,5)
console.log(addWithTwoFixes(2));
