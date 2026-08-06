//------------ callbacks ---------------------
// ase function hote h jis ko ham parameter and argument m pass krte h 

//! function which can be passed in other function parameter or argument

// function greet(name, callback) {
//     console.log("Hello " + name);
//     callback(); // callback function call
// }
// function sayBye() {
//     console.log("Good Bye!");
// }
// greet("Vishal", sayBye);


// function sum(callback) {
//     console.log("the console is line" , callback);
//     callback();
// }
// function sumCallback(){
//     console.log(10+30);  
// }
// sum(sumCallback); // sum(undefined)



// function sum(x, y, callback) {
//     callback(x, y);
// }
// function sumCallback(a, b) {
//     console.log(a + b);
// }
// sum(20, 30, sumCallback);


// function sum(x, y, callback) {
//     return callback(x, y);
// }
// function sumCallback(a, b) {
//     return a + b
// }
// let addOfNumbers = sum(20, 30, sumCallback);
// console.log(addOfNumbers);


//! Q. write a funtion that takes an array of numbers and a callback. the callback should add 5 to each number and return the update array.

// function addInArray(arr, callback) {
//     // console.log(arr);
//     return callback(arr)
// }
// function addInArrayCallback(numbersArr) {
//     let updateArr = [];
//     for (let i = 0; i < numbersArr.length; i++) {
//         updateArr[i] = numbersArr[i] + 5;
//     }
//     return updateArr;
// }
// let data = addInArray([10, 29, 39, 20, 4, 8, 10], addInArrayCallback);
// console.log(data);


// function addInArray(arr, callback) {
//     // console.log(arr);
//     return callback(arr)
// }
// function addInArrayCallback(arr) {
//     let updateArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         updateArr.push(arr[i] + 5)
//     }
//     return updateArr;   
// }
// console.log(addInArray([10, 29, 39, 20, 4, 8, 10], addInArrayCallback));

//! write a funtion that takes an array and return the sum of all the elements of array.

// let cartData = [
//     {
//         productName: "Oneplus",
//         productPrice: 299
//     },
//     {
//         productName: "Sumsung",
//         productPrice: 2999
//     },
//     {
//         productName: "Noting",
//         productPrice: 399
//     },
//     {
//         productName: "Iphone",
//         productPrice: 299
//     }
// ]

// function totalOfCartPrice(data) {
//     let total = 0
//     for (let i = 0; i < data.length; i++) {
//         total += data[i].productPrice
//     }
//     return total;
// }
// let totalpayment = totalOfCartPrice(cartData)
// console.log(totalpayment);


// function addInArray(arr, callback) {
//     return callback(arr)
// }
// function addInArrayCallback(arr) {
//     let sum = 0;
//     for (let num of arr) {
//         sum += num.productPrice
//     }
//     return sum;
// }
// console.log(addInArray(cartData, addInArrayCallback));

