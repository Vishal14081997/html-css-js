// scope , hosting -- var let const , array method

// global scope , local scope/ functional scope , block scope (es 6 m add hua h)

// var = global scope variable (but in case of function it becomes local scope or functional scope variable)

// let and const - block scope variable 

// let  a= 20;
// console.log(a);

// if(true){
//     console.log(a);
// }
// for(let i =0; i<10; i++){
//     console.log(a);
// }


// for (let i = 0; i < 10; i++) {
//     var a = 20;
//     console.log(a);
//     if(true){
//         console.log("if condition", a); 
//     }
// }
// console.log("outside the for loop:", a);



// for (let i = 0; i < 10; i++) {
//     if (true) {
//         var a = 20;
//         console.log(a);
//     }
//     console.log(a);
// }
// console.log("outside the for loop:", a);


// for (let i = 0; i < 10; i++) {
//     if (true) {
//         let a = 20;
//         console.log(a);
//     }
//     console.log(a);
// }


// for (let i = 0; i < 10; i++) {
//     if (true) {
//         const a = 20;
//         {
//             console.log(a);
//             {
//                 console.log(a);
//                 {
//                     console.log(a);
//                 }
//             }
//         }
//         console.log(a);
//     }
//     // console.log(a);
// }


// var a = "vishal"
// console.log(a);

// for(let i=0;i<2; i++){
//     let a = 10
//     console.log(a);
// }

// console.log(a);


// function sum(){
//     var a= 20;
//     console.log(a);  
// }
// sum()
// console.log(a);


//------- hoisting -----------

// console.log(a);
// var a = "vishal"

// console.log(a);
// let  a = "vishal" //ReferenceError


// sum()
// function sum(){
//     console.log("sum function called");
// }



// console.log(sum);
// sum();
// var sum = function () {
//     console.log("sum function called");
// }


// console.log(sum);
// sum();
// const sum = () => {
//     console.log("sum function called");
// }



//----------- Array methods -------------

// push , pop ,shift , unshift

let arr = [10, 30, 40, 20, 50]

// let pushReturn = arr.push(100);
// console.log(pushReturn);

// console.log(arr);

// let popReturn = arr.pop();
// console.log(popReturn)
// console.log(arr);

// arr.shift();
// console.log(arr);

// arr.unshift(1000)
// console.log(arr);


