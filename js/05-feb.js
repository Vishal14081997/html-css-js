// push , pop , shift , unshift , concat , slice , splice , indexOf , includes , reverse , join ,sort , map , filter , find , every , some , fill , copywithin , flat , flatmap , findIndex

//------------- concat------------

// let arr1 = [10,30,40]
// let arr2 = ["vishal" , "singh" , "raj"]
// let arr3 = [true, false , "rajendra"]
// let newArr = arr1.concat(arr2 ,"this is static value", arr3)

// console.log(arr1);
// console.log(arr2);
// console.log(newArr);

//------------- slice------------

// let arr = [10,20,30,40,50,60,70]

// let newArr = arr.slice(2)
// let newArr = arr.slice(2, 5)

// console.log(arr);
// console.log(newArr);

//------------- splice------------
// add or remove

// let arr = [10,20,30,40,50,60,70,80]

// let returnArr = arr.splice(3)
// let returnArr = arr.splice(3,1)
// let returnArr = arr.splice(3,2)
// let returnArr = arr.splice(3,3, 1000)
// let returnArr = arr.splice(3,0, 1000)
// let returnArr = arr.splice(3,0, "vishal", true , 40)

// console.log(arr);
// console.log("return value",returnArr);

//------------- indexOf------------------

// let arr = [10,20,30,40,50,60,50,70,50,80 ]

// let indexOfValue = arr.indexOf(50)
// let indexOfValue = arr.indexOf(50,5)
// let indexOfValue = arr.indexOf(100)
// let indexOfValue = arr.lastIndexOf(50)

// console.log(arr);
// console.log(indexOfValue);

//------------- includes------------------

// let arr = [10,20,30,40,50,60,50,70,50,80 ]

// let isExist = arr.includes(50)

// console.log(isExist);

//------------- includes------------------

// let arr = [10,20,30,40,50,60,50,70,50,80 ]

// let reverse = arr.reverse();

// console.log(arr);
// console.log(reverse);

//------------- join------------------

// let arr = [10,20,30,40,50,60,50,70,50,80 ]

// let joinedString = arr.join("+");
// let joinedString = arr.join(" ");

// console.log(arr);
// console.log(joinedString);

//------------- sort------------------

// let arr = [109,101 ,20,5,888,789 ,33,44]
// console.log("original array :", arr);
// // arr.sort((a,b)=>{
// //     return b-a;
// // });
// arr.sort((a,b)=>b-a);
// console.log("sorted array : ", arr);


// let arr = ["aaa", "aab", "vxd", "csd", "bbd", "bfd","res"]
// console.log("original array :", arr);
// arr.sort();
// console.log("sorted array : ", arr);

//----------------- map --------------

let arr = [10, 20, 40, 20, 60, 55];

// arr.map((item)=>{
// console.log("the value of item is :" , item);
// })

// arr.map((item) => {
//     console.log((item * 2) ** 2);
// })


// let returnValue = arr.map((item) => {
//     return item*2
// })
// console.log("return value : ", returnValue);


// let returnValue = arr.map((item) => {
//      if(item % 2 ===0){
//         return item;
//      }
// })
// console.log("return value : ", returnValue);


// let returnValue = arr.map((item) => {
//     return item > 20
// })
// console.log("return value : ", returnValue);