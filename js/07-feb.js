// -------fill---------------

// let arr = [10, 20, 30, 31, 40, 50]
// arr.fill(0,3)
// arr.fill(0,2,4)
// arr.fill("hello",2,4)
// console.log(arr);

// -------flat---------------

// let arr = [10, 20, 30, [200,300,400] ,[1000,2000,3000]]

// let newArr = arr.flat()
// console.log(newArr);

// let arr = [10, 20, 30, [200,300,400 , ["hello", "Grras"]] ,[1000,2000,3000]]

// let newArr = arr.flat(2)
// console.log(newArr);


// --------- copywithin----------

// same array s copy krna ho or same hi array m past karna ho to copywithin use krte h

// let arr = [10,20,30,40,50,60,70]
// let newArr = arr.copyWithin(2, 0 , 2 )
// console.log(newArr);

// let arr = [10,20,30,40,50,60,70]
// let newArr = arr.copyWithin(4, 0 , 4 )
// console.log(newArr);

// let arr = [10,20,30,40,50,60,70]
// arr.copyWithin(2, 0 )
// console.log(arr);

// arr.splice(2, 1)
// console.log(arr);


// ------- flatmap----------------------

// const arr = [1, 2, 3];
// const result = arr.flatMap(num => [num, num * 2]);
// console.log(result);

// let arr = [10, 21, 30, 41, 50, 60, 70];
// let newArr =arr.map((item) => {
//    return item % 2 === 0 ? [(item*2)**2]:[]
// })
// console.log(newArr);


// let arr = [10, [], 21, [30], [40], 50];
// let newArr =arr.flat();
// console.log(newArr);

// ----- findIndex----------------------

// let arr = [10, 20, 30, 41, 50, 60, 70];
// let result = arr.findIndex((item) => {
//     return item % 2 !== 0
// });
// console.log(result);


// *********** Object methods *********------------

// let obj ={
//     firstName :"vishal",
//     lastName:"singh",
//     address:"Jaipur",
//     companyName:"Grras",
//     dept:"FSD"
// };
// let keys = Object.keys(obj)
// console.log(keys);

// for(let i =0; i<keys.length; i++){
//     console.log(obj[keys[i]] );
// }

// let valuesOfObj = Object.values(obj);
// console.log(valuesOfObj);

// let keyValuePair = Object.entries(obj);
// console.log(keyValuePair);


// let productData = [
//     {
//         productName:"Iphone 16",
//         productCategory:"SmartPhone",
//         productPrice:"$1000",
//         quantity:10,
//     },
//     {
//         productName:"Samsung s24 Ultra",
//         productCategory:"SmartPhone",
//         productPrice:"$15000",
//         quantity:10,
//     },
//     {
//         productName:"google pixel 9 pro",
//         productCategory:"SmartPhone",
//         productPrice:"$14000",
//         quantity:10,
//     },
// ]

// let keys = Object.keys(productData[0]);
// console.log(keys);

// const person = {            // let
//     firstName :"vishal",
//     lastName:"singh",
//     address :"Jaipur",
//     companyName:"Grras",
// }
// person.gender = "Male"
// person.firstName = "rajendra"
// console.log(person);

// Object.seal(person);
// person.firstName = "sagar"
// person.gender = "Female"
// console.log(person);

// Object.freeze(person);
// person.firstName = "sagar"
// person.gender = "Female"
// person = {};
// console.log(person);

// let isExist = person.hasOwnProperty("firstName");
// console.log(isExist);

// let obj = {         
//     firstName :"vishal",
//     lastName:"singh",
// }
// Object.assign(obj , {
//     address:"Jaipur",
//     gender:"Male"
// } )
// console.log(obj);

