// operators-

//! Assigment operators-
// let firstVariable  = "hello world";

// let firstNumber = 10;
// let seconNumber = 25;

// let sum = firstNumber + seconNumber // Addition operators
// let sub = firstNumber - seconNumber // subtration operators

// console.log("the sum of the two number is :" , sum ,"the subtration of the two number is :",sub);

// console.log(`the sum of the two number is : ${sum} ,"the subtration of the two number is : ${sub}`); // template string  (``)  say this (java script m  variable ko access kiya jata h es s)

// let muliplication =  firstNumber*seconNumber

// let division = seconNumber / firstNumber
// console.log(division);

// exponential  = seconNumber ** firstNumber
// console.log(exponential);

// let modulus = seconNumber % firstNumber;
// console.log(modulus);


//! Addition assigment oprators

// let x =10; 
// let y = 20;
// console.log(x);


// x += y; // x = x + y
// console.log(x);


//! subtration assigment oprators

// let x =10; 
// let y = 20;
// console.log(x);

// y -= x
// console.log(y);

//! muliplication assigment oprators

// let x =10; 
// let y = 20;
// console.log(y);

// x *= y
// console.log(x);


//! logical operators
//  &&  || !

// let firstVariable = true;
// let secondVariable = !firstVariable
// console.log(secondVariable);

// let firstVariable = -100;
// let secondVariable = !!firstVariable
// console.log(secondVariable);

// let firstVariable = "vishal";
// let secondVariable = !firstVariable
// console.log(secondVariable);

// let firstVariable = [];
// let secondVariable = !firstVariable
// console.log(secondVariable);

// let firstVariable = null;
// let secondVariable = !firstVariable
// console.log(secondVariable);

// let firstVariable = undefined;
// let secondVariable = !firstVariable
// console.log(secondVariable);

let firstVariable = {};
let secondVariable = !firstVariable
console.log(secondVariable);


// && (and) || (OR)
// firstVariable    secondVariable    &&     ||
//    T                 F              F      T 
//    T                 T              T      T 
//    F                 T              F      T 
//    F                 F              F      F 

//! Q . print the number divisible by 3 as well as 5 under 100;

// number % 3 === 0  number % 5 === 0
// 1 % 3 -- 1
// 2 % 3 -- 2
// 3 % 3 -- 0
// 4 % 3 -- 1
// 5 % 3 -- 2
// 6 % 3 -- 0

// for (let number = 1; number <=100; number++){
//     if(number % 3 === 0 && number % 5 ===0){
//         console.log(number); 
//     }
// }


//! Q . print the number divisible by 3 or 5 under 100;


// for (let number = 1; number < 100; number++) {
//     if (number % 3 === 0 || number % 5 === 0) {
//         console.log(number);
//     }
// }

// console.log(true && true);
// console.log(true || false);
// console.log(10 && 5);

// short circuit evaluation 
// console.log("" || "vishal");
// console.log("" || 0);
// console.log("" && 0);



//! comparision operators
// <  -  less than
// > -  greater than 
// == - equal to 
// != - not equal to

// let firstVariable = "vishal";
// let secondVariable = "vishal";

// console.log(firstVariable == secondVariable);

// let firstVariable = true;
// let secondVariable = 1;

// console.log(firstVariable == secondVariable);


// let firstVariable = false;
// let secondVariable = "false"; // it is trueth value

// console.log(firstVariable == secondVariable);

//! strict Equality  === 

// let firstVariable = 10 ;
// let secondVariable = "10";

// console.log(firstVariable === secondVariable);



