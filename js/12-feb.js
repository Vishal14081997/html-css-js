// Math methods , type conversion and type coercion


// let randomNumber = Math.random()
// console.log(randomNumber);

// let number = 10.501
// let newNumber = Math.ceil(number)
// let newNumber = Math.floor(number)
// let newNumber = Math.round(number)

// console.log(newNumber);

// let result = Math.pow(2,3)
// let result = Math.pow(5,1/2)
// let result = Math.pow(5,1/3)
// let result = Math.pow(16,1/2)

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



//---- type conversion(Explicit Type Conversion) and type coercion(Implicit Conversion)----

// type conversion (Explicit Type Conversion)

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


// let firstVar = 0;
// let firstVar = -100;
// let firstVar = [];
// let firstVar = {};
// let firstVar = "false";

// let conversion = Boolean(firstVar)
// console.log(typeof conversion , conversion);


//-------- type coercion---------- 

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
// console.log(5 - [10]);
// console.log(5 + [10]);
// console.log(5 + true + "hello");
// console.log("hello" + 5 + true);
// console.log([] + 1);
// console.log([] - 1);

