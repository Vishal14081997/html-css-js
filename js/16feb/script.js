// event delegation ----------------------

// 1) event bubbling 
// 2) event capturing
// 3) event target

// 1) event bubbling - (ander to bahar ki taraf jata h pehele child run fir parant run)

// document.getElementById("parent-list").addEventListener("click", function () {
//     console.log("Parant list clicked");
// })

// document.getElementById("waterfall").addEventListener("click", function () {
//     console.log(" waterfall image clicked");
// })

// 2) event capturing-(bahar to ander ki taraf capturing)

// document.getElementById("parent-list").addEventListener("click", function () {
//     console.log("Parant list clicked");
// },true)

// document.getElementById("waterfall").addEventListener("click", function () {
//     console.log(" waterfall image clicked");
// })

// 3)  event target-

// document.getElementById("parent-list").addEventListener("click", function (e) {
//     e.stopPropagation();
//     console.log("Parant list clicked");
// }, false);

// document.getElementById("waterfall").addEventListener("click", function (e) {
//     e.stopPropagation();
//     console.log(" waterfall image clicked");
// })

// 2nd --

// document.getElementById("container").addEventListener("click", function () {
//     console.log("container clicked");
// })

// document.getElementById("addToCart").addEventListener("click", function (e) {
//     e.stopPropagation()
//     console.log("Add to cart button clicked");
// })


//------------------ Timer function--------------

// console.log("hello world");

// setTimeout -------(fix time in run)

// setTimeout(() => {
//     console.log("hello world");
// }, 2000);

// interval-------- (perticular time k bad code bar bar run)

// setInterval(() => {
//     let random = Math.random();
//     console.log(random);
// }, 2000)

// console.log("hello world");

// setTimeout(() => {
//     console.log("hello vishal singh");
// }, 5000);

//Q . run my interval only for 10 seconds  then stop it ?

// let interval = setInterval(() => {
//     let random = Math.random();
//     console.log(random);
// }, 2000)

// setTimeout(()=>{
//     clearInterval(interval);
// }, 10000);

//------------- async javascript ------------------

// let a;
// console.log(a);
// a = 100;
// console.log(a);


// console.log("First Step");
// setTimeout(() => {
//     console.log("Second Step");
// }, 2000)
// console.log("Third Step");
// console.log("Fourth Step");


let jsonData = {
    users: [
        {
            name: "vishal",
            userName: "vishal1408",
            profile: {
                email: "vishal@gmail.com",
                age: "100"
            },
            posts: ["Post1", "Post2", "Post3"]
        },
        {
            name: "Ankit",
            userName: "Ankit1408",
            profile: {
                email: "ankit@gmail.com",
                age: "100"
            },
            posts: ["AnkitPost1", "AnkitPost2", "AnkitPost3"]
        },
        {
            name: "Pawan",
            userName: "pawan123",
            profile: {
                email: "pawan@gmail.com",
                age: "100"
            },
            posts: ["PawanPost1", "PawanPost2", "PawanPost3"]
        },
    ]
}

function getUserDetail() {
    let filterData = jsonData.users.map((item) => {
        let newObj = {};
        newObj.name = item.name;
        newObj.userName = item.userName;
        return newObj;
    })
    setTimeout(() => {
        console.log(filterData);
    }, 4000)
}
getUserDetail()

