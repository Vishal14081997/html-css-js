
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
// 1st way 

// function getUserDetail() {
//     let filterData = jsonData.users.map((item) => {
//         let newObj = {};
//         newObj.name = item.name;
//         newObj.userName = item.userName;
//         return newObj;
//     })

//     setTimeout(() => {
//         console.log(filterData);
//     }, 4000)
// }
// getUserDetail()

// 2nd way

// let userDetails;
// function getUserDetail() {
//     let filterData = jsonData.users.map((item) => {
//         let newObj = {};
//         newObj.name = item.name;
//         newObj.userName = item.userName;
//         return newObj;
//     })
//     setTimeout(() => {
//         userDetails = filterData;
//     }, 4000)
// }
// getUserDetail();
// setTimeout(() => {
//     console.log(userDetails);
// }, 4000);

// 3rd -

// let profileData;
// function getProfileDetail(user) {
//     let filterData = jsonData.users.filter((item) => {
//         return item.userName === user;
//     });
//     // console.log(filterData[0].profile);
//     setTimeout(() => {
//        profileData = filterData = filterData[0].profile
//        console.log(profileData);
//     }, 3000)
// }
// getProfileDetail("Ankit1408")

// 4th (this is right methods)--

// function getUserDetail(callback) {
//     setTimeout(() => {
//         let filterData = jsonData.users.map((item) => {
//             let newObj = {};
//             newObj.name = item.name;
//             newObj.userName = item.userName;
//             return newObj;
//         })
//         callback(filterData)
//     }, 4000)
// }
// function getProfileDetails(user, callback) {
//     setTimeout(() => {
//         let profileData = jsonData.users.filter((item) => {
//             return item.userName === user
//         })
//         callback(profileData[0].profile)
//     }, 3000)
// }
// function getPostDetails(user, callback) {
//     setTimeout(() => {
//         let postData = jsonData.users.filter((item) => {
//             return item.userName === user
//         })
//         callback(postData[0].posts)
//     }, 5000)
// }
// getUserDetail((data) => {
//     // console.log(data);
//     data.forEach((element) => {
//         // console.log("user details:",element);
//         getProfileDetails(element.userName, (profile) => {
//             console.log(`profile for ${element.name}`, profile);
//         })
//         getPostDetails(element.userName , (post)=>{
//             console.log(`post for ${element.name}`, post);

//         }) 
//     })
// });

// es ko callback hell  bolte hai (callback ki ek chain hoti h ek callback dusre callback pr depand rahta h )


//-------------- Promises-----------------------

function getUserDetail() {
    return new Promise((resole, reject) => {
        setTimeout(() => {
            let filterData = jsonData.users.map((item) => {
                let newObj = {};
                newObj.name = item.name;
                newObj.userName = item.userName;
                return newObj;
            })
            resole(filterData)
        }, 4000)
    })
}
getUserDetail()