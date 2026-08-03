//!------- Spread operators and rest operators--------

// let arr1 = [10, 20, 30, 40, 50]
// let arr2 = [10, 20, 30, 40, 50]

// console.log(arr1 == arr2);

// let arr3 = [100, 200, 300, 400, 500]
// let arr4 = arr3;
// console.log(arr3 == arr4);

// In JavaScript, an Array is a Reference Type (Object). Therefore, == and === do not compare the values inside the arrays; they compare the memory address (reference) of the arrays.

// arr3[5] = 1000;
// console.log(arr3);
// console.log(arr4);


// let data = [
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
// modifiedData = data;
// modifiedData = [...data];

// modifiedData[4] = {
//     productName: "Vivo",
//     productPrice: 400
// }
// console.log("modified data", modifiedData);
// console.log("original data", data);


// let arr = [1,2,3];

// let copy = [...arr];

// copy.push(4);

// console.log(arr); //[1,2,3]
// console.log(copy);// [1,2,3,4]


// let arr1 = [10, 20, 30,]
// let arr2 = [100, 200, 300]
// let arr3 = [...arr1, ...arr2 , "vishal"]
// console.log(arr3);


// let obj1 = {
//     firstName: 'vishal',
//     lastName: "singh"
// }
// let obj2 = {
//     gender: 'Male',
//     age: 100,
//     firstName:"rajesh"
// }
// let arr1 = [10, 20, 30,]

// let obj3 = { ...obj1, ...obj2, ...arr1 , firstName:"suman" }
// console.log(obj3);


//!------ rest operators -------

// let arr = [10, 20, 30, 40, 50];

// destructuring
// let [firstValue, , thirdValue , ...rest] = arr
// console.log(firstValue);
// console.log(thirdValue);
// console.log(rest);


//! object destructuring 

// let obj = {
//     firstName: "vishal",
//     lastName: "singh",
//     gender: "Male",
//     age: "200",
//     address: "Jaipur"
// }
// let { age, firstName } = obj; // let firstName = obj.firstName;
// console.log(firstName);
// console.log(age);



