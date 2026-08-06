// -------- filter ----------
// let arr = [10, 20, 40, 43, 5, 3, 2, 103]

// let newArr =arr.filter((item)=>{
//     if(item % 2 !== 0){
//         return item;
//     }
// })
// console.log(newArr);

// let newArr = arr.filter((item) => {
//     return item % 2 !== 0;
// })
// console.log(newArr);


// let newArr = arr.filter((item) => {
//     return item > 100;
// })
// console.log(newArr);

// filter original arr m chhec chhad nhi krta h map krta h 


// ------------ reduce------------

// let arr = [10, 20, 40, 49, 50];

// let result = arr.reduce((acc, curr) => {
//     console.log("Acc value : ", acc);
//     console.log("curr value : ", curr);
//     console.log("---- Iteration completed------");

//     return acc + curr;

// },2)
// console.log("Result : ",result);

//   Acc    curr
//    0  +   10
//    10  +  20
//    30  +  40 


// let cartData = [
//     {
//         productName: "Iphone",
//         productCategory: "smartPhone",
//         productPrice: 1000,
//         qunatity: 2
//     },
//     {
//         productName: "Sumsung",
//         productCategory: "smartPhone",
//         productPrice: 800,
//         qunatity: 100
//     },
//     {
//         productName: "OnePlus",
//         productCategory: "smartPhone",
//         productPrice: 600,
//         qunatity: 10
//     },
//     {
//         productName: "Nothing",
//         productCategory: "smartPhone",
//         productPrice: 800,
//         qunatity: 100
//     },
// ]

// let result = cartData.reduce((acc, curr) => {
//     console.log("Acc value : ", acc);
//     console.log("curr value : ", curr);
//     console.log("---- Iteration completed------");
//     return acc + curr.productPrice*curr.qunatity
// },0)
// console.log(result);


// -------find-----------
// let arr = [10, 20, 30, 31, 31, 40, 50]

// let result = arr.find((item) => {
//     return item > 30
// });
// console.log(result);

// -------every---------------

// let arr = [10, 20, 30, 31, 40, 50]

// let result = arr.every((item) => {
//     return item % 2 ===0
// });
// console.log(result);

// -------some---------------

// let arr = [10, 20, 30, 31, 40, 50]

// let result = arr.some((item) => {
//     return item % 2 ===0
// });
// console.log(result);

