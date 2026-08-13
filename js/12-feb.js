// Math methods , type conversion and type coercion


// let randomNumber = Math.random()
// console.log(randomNumber); // 0 to 1 random number return

// let number = 10.501
// let newNumber = Math.ceil(number)
// Math.ceil(10.1);  // 11
// Math.ceil(10.5);  // 11
// Math.ceil(10.9);  // 11
// Math.ceil(10);    // 10
// let newNumber = Math.floor(number)
// let newNumber = Math.round(number) // nearest integer 

// console.log(newNumber);

// let result = Math.pow(2,3)
// let result = Math.pow(5,1/2)
// 5^(1/2) = √5
// let result = Math.pow(5,1/3)
// let result = Math.pow(16,1/2)
// √16 = 4

// console.log(result);

// let result = Math.sqrt(16)
// console.log(result);


// Q . generate a 4 digit otp

// let number = Math.random(); // 0-1

// console.log((number*10000)); // 0- 10000

// let result = Math.floor(number * 10000); // 0-9999

// let result = 1000 + Math.floor(number * 9000); // 1000- 9999

// console.log(result);


// function generateOtp() {
//     console.log("otp generated");

//     let otp = Math.floor(Math.random() * 10000);

//     if (otp < 1000) {
//         generateOtp();  //recursive function
//     }
//     if (otp > 1000) {
//         console.log(otp);
//     }
// }
// generateOtp()
 

// -------------------------Types of Type Conversion-----------------

// Type Conversion ka matlab hota hai ek data type ki value ko dusre data type mein convert karna

// 1. Explicit Type Conversion (Manually conversion / Type Casting)

// let str = "55";
// console.log(typeof str);
// let newNum = Number(str)
// console.log(typeof newNum , newNum);

// let str = "hello";
// let str = "10,20";
// let str = "10.20";
// let newNum = Number(str)
// console.log(typeof newNum , newNum);


// let str = [10];
// let str = [10 ,20];
// let str = " ";
// let str = undefined;
// let str = null;
// let newNum = Number(str)
// console.log(typeof newNum , newNum);


// let firstVar = -10;
// let firstVar = true;
// let firstVar = ["hello" , "vishal"];
// let firstVar = undefined;

// let conversion = String(firstVar)
// console.log(typeof conversion , conversion);

// Falsy values- false ,0 ,-0 ,"" ,null ,undefined ,NaN

// let firstVar = 0;
// let firstVar = -100;
// let firstVar = [];
// let firstVar = {};
// let firstVar = "false";

// let conversion = Boolean(firstVar)
// console.log(typeof conversion , conversion);


//2. Implicit Type Conversion (Automatic / Type Coercion) (को-अर्शन → "Ko-ar-shun")----------

// Compiler khud automatically ek type ko dusre type mein convert kar deta hai, programmer ko manually kuch karne ki zaroorat nahi hoti.

// console.log(5 + "5");
// console.log("5" + 4);
// console.log("5" + "7"); // + ke case m hi string hoga
// console.log(5 - "3");
// console.log(5 * "3");
// console.log(5 % "3");
// console.log(5 / "3");

// console.log(5 + "true");
// console.log(5 - true);

// console.log(5 - []);
// [] ko primitive conversion ke through string banaya jata hai:
// [] → ""
// Then:
// 5 - ""
// ↓
// 5 - 0
// ↓
// 5

// console.log(5 - [10]);
// console.log(5 + [10, 20]);
// console.log(5 + true + "hello");
// console.log("hello" + 5 + true);
// console.log([] + 1);
// console.log([] - 1);

