
// console.log("hello world");

// var firstName = "vishal"

// var firstName = "rekha"
// console.log(firstName);

// let firstVariable = 100
// let firstVariable = 200
// console.log(firstVariable);


// let firstName = "Vishal"
// let middleName = "kumar"
// let lastName = "Jain"
// console.log(`Hello my name is ${firstName} ${middleName} ${lastName} `);


// let isAdmin = true;
// console.log(typeof isAdmin);

// let firstVariable = undefined;
// console.log(typeof firstVariable);

// let secondVariable = null;
// console.log(typeof secondVariable);


// let firstKey = Symbol("test")
// let secondKey = Symbol("test")

// let obj = {
//     [firstKey]:"FSD",
//     [secondKey]:"DS"
// }
// // console.log(firstKey === secondKey);
// console.log(obj);


// Array - 
// collection of the multiple types dataTypes 
// collection of elements that can store multiple data types
// Array is a collection of multiple values stored in a single variable.

// 0    1     2    3     4      5
// const arr = ["20", "44", "43", "23", "48", "79"];
// console.log(arr[5]);

// const arr1 = ["Vishal", 22, true, { city: "Delhi" } ,null ,undefined ,[433,"vishal",[]]];
// console.log(arr1[6][1])
// console.log(arr1.length);
// console.log(arr1[arr1.length-1]);

// let obj = {
//    firstName:"vishal",
//    lastName:"singh",
//    gender:"Male",
//    department:"FSD",
//    companyName:"Grras",
//    location:"Jaipur",
//    teamMember:[33,22,22,44,11,66],
//    permission:{
//     isWrite:true,
//     isRead:true
//    }
// }
// console.log(obj.firstName);
// console.log(obj.permission.isWrite);

// let a = [1, 2, 3, 4];
// let b = [3, 4, 5, 6];

// let common = a.filter((val)=>b.includes(val))
// console.log(common);

// function app(start , end){
//     for(i=start; i <= end; i++){
//         if(i % 3 ===0 && i % 5===0){
//             console.log(i);
//         }
//     }
// }
// app(1,100);

// let num = 429;
// let reverse = num.toString().split("").reverse().join("")
// console.log( Number(reverse));


// let arr = [10 , 45 ,77 , 90 , 3 ,3]
// let unique = [...new Set(arr)]
// console.log(unique);




// let str = ("hare krishna hare krihsna krishna hare hare").split(" ")
// let count = {}
// for(let i=0; i<str.length; i++){
//    count[str[i]] =(count[str[i]] || 0)+1
// }
// console.log(count);


// function maxNumber(arr) {
//    let max = 0;
//    let second = 0;
//    for (let num of arr) {
//       if (num > max) {
//          second = max
//          max = num
//       }
//       else if (second < num) {
//          second = num
//       }
//    }
//    return second;
// }
// console.log(maxNumber([33, 22, 55, 7, 2]));

// let arr = [1, 2, 3, 4, 5, 6];
// let even = []
// let odd = []
// for (let i = 0; i <arr.length; i++) {
//    if (arr[i] % 2 === 0) {
//       even.push(arr[i])
//    } else {
//       odd.push(arr[i])
//    }
// }

// console.log(even);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let prime = []
// function isPrime(num){
//    if(num<2) return false;
//    for(let i=2; i<num; i++){
//       if(num % i === 0) return false;
//    }
//    return true;
// }
// for(let num of arr){
//    if(isPrime(num)){
//       prime.push(num)
//    }
// }
// console.log(prime);

// let arr = "Vishal"
//  let reverse = ""
// for(let i=arr.length-1; i>=0; i--){
//     reverse +=arr[i]
// }
// console.log(reverse);


// function factorial(num){
//    if (num === 0 || num === 1) return 1;
//    let fact = 1
//    for(let i =1; i<=num; i++){
//       console.log(i);
//       fact = fact*i
//    }
//    return fact
// }
// console.log(factorial(5));

// function isPalindrome(str){
//    let left = 0;
//    let right = str.length-1
//    while(right>left){
//       if(str[left] !== str[right]){
//          return false
//       }
//       left++
//       right--
//    }
//    return true
// }
// console.log(isPalindrome("madam"));

//   let str="hello vishal"
//     let vowels = "aeiou"
//     let vowelsCount= 0
//     let consonantsCount=0

//    for(let i= 0; i<=str.length; i++){
//       if(vowels.includes(str[i])){
//          vowelsCount ++
//       }else{
//          consonantsCount++
//       }
//    }
//    console.log(vowelsCount);

// let prime = []
// function isPrime (num){
//    for(let i=2; i<num; i++){
//       if(num % i === 0) return false
//    }
//    return true
// }

// function sum(start, end){
//  for(let i=start; i<=end; i++){
//    if(isPrime(i)){
//       prime.push(i)
//    }
//  }
//  return prime
// }
// console.log(sum(10 ,50));

// let arr = [{price:300},{price:700}, {price:2500} ,{price:200}];
// for (let i = 0; i < arr.length; i++) {
//    for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i].price > arr[j].price) {
//          let temp = arr[i]
//          arr[i] = arr[j]
//          arr[j] = temp
//       }
//    }
// }
// console.log(arr);

// function dublicate(arr) {
//    let charCount = {};
//    let result = []
//    for (let i = 0; i < arr.length; i++) {
//       charCount[arr[i]] = (charCount[arr[i]] || 0) + 1;
//       if(charCount[arr[i]] === 1){
//         result.push(arr[i])
//       }
//    }

//    return result;
// }
// console.log(dublicate([1,2,2,2,4,4,5,6,7,8,9,9]))

















// variable = diffrent diffrent type value store
// javasript syn hota h but some time it is async behaviour
// Thread execution ka ek path hota hai jisme program ke instructions execute hote hain.
// Simple language :
// Thread = CPU ka ek worker jo code ko execute karta hai.
// console.log("A");
// console.log("B");
// console.log("C");
// Ek thread is code ko line by line execute karega

// JavaScript by default Single-Threaded hai.
// Matlab ek time par sirf ek hi task execute kar sakti hai.


