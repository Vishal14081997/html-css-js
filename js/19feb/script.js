let jsonData = {
  users: [
    {
      name: "vishal",
      userName: "vishal1408",
      profile: {
        email: "vishal@gmail.com",
        age: "100",
      },
      posts: ["Post1", "Post2", "Post3"],
    },
    {
      name: "Ankit",
      userName: "Ankit1408",
      profile: {
        email: "ankit@gmail.com",
        age: "100",
      },
      posts: ["AnkitPost1", "AnkitPost2", "AnkitPost3"],
    },
    {
      name: "Pawan",
      userName: "pawan123",
      profile: {
        email: "pawan@gmail.com",
        age: "100",
      },
      posts: ["PawanPost1", "PawanPost2", "PawanPost3"],
    },
  ],
};

// 1st way---------

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

// 2nd way---------

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
// // console.log(userDetails);
// setTimeout(() => {
//     console.log(userDetails);
// }, 4000);

// 3rd ----------

// let profileData;
// function getProfileDetail(user) {
//   let filterData = jsonData.users.filter((item) => {
//     return item.userName === user;
//   });
//   // console.log(filterData[0].profile);
//   setTimeout(() => {

//     if (filterData.length === 0) {
//       console.log("User not found");
//       return;
//     }

//     profileData = filterData[0].profile
//     console.log(profileData);
    
//   }, 3000)
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

// getUserDetail((user) => {
//     getProfileDetails(user, (profile) => {
//         getPostDetails(user, (posts) => {
//             getComments(posts, (comments) => {
//                 getLikes(posts, (likes) => {
//                     console.log(user, profile, posts, comments, likes);
//                 });
//             });
//         });
//     });
// });

// Callback Hell ka solution
// Callback → Promise → async/await

// Problems with Callback Hell:-
// Code becomes difficult to read.
// Debugging becomes difficult.
// Error handling becomes difficult.
// Code becomes difficult to maintain.
// Too much nesting makes the code complex.

//-------------- Promises-----------------------

// function getUserDetail() {
//     return new Promise((resole, reject) => {
//         setTimeout(() => {
//             let filterData = jsonData.users.map((item) => {
//                 let newObj = {};
//                 newObj.name = item.name;
//                 newObj.userName = item.userName;
//                 return newObj;
//             })
//             resole(filterData)
//             // reject("Error")
//         }, 4000)
//     })
// }
// const userDetails = getUserDetail()
// // console.log(userDetails);

// userDetails
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log(error);
//     })

// 2nd way---------

// function getUserDetail() {
//     return new Promise((resole, reject) => {
//         setTimeout(() => {
//             let filterData = jsonData.users.map((item) => {
//                 let newObj = {};
//                 newObj.name = item.name;
//                 newObj.userName = item.userName;
//                 return newObj;
//             })
//             resole(filterData)
//             // reject("Error")
//         }, 4000)
//     })
// }
// const userDetails = getUserDetail()
// // console.log(userDetails);

// function getProfileDetail(user) {
//     return new Promise((resole, reject) => {
//         setTimeout(() => {
//             let profileData = jsonData.users.filter((item) => {
//                 return item.userName === user
//             })
//             resole(profileData[0].profile);
//         }, 3000)
//     })
// }
// userDetails
//     .then((data) => {
//         console.log(data);
//         data.forEach((element) => {
//             getProfileDetail(element.userName)
//                 .then((d) => {
//                     console.log(d);
//                 })
//                 .catch((error) => {
//                     console.log(error);
//                 })
//         })
//     })
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(() => {
//         console.log("user details fetched");
//     })

// 3rd-------

// function getUserDetail() {
//   return new Promise((resole, reject) => {
//     setTimeout(() => {
//       let filterData = jsonData.users.map((item) => {
//         let newObj = {};
//         newObj.name = item.name;
//         newObj.userName = item.userName;
//         return newObj;
//       });
//       resole(filterData);
//       // reject("Error")
//     }, 2000);
//   });
// }
// const userDetails = getUserDetail();

// function getProfileDetail(user) {
//   return new Promise((resole, reject) => {
//     setTimeout(() => {
//       let profileData = jsonData.users.filter((item) => {
//         return item.userName === user;
//       });
//       resole(profileData[0].profile);
//     }, 1000);
//   });
// }
// userDetails
//   .then((data) => {
//     // console.log(data);
//     let profileDetails = data.map((element) => {
//       return getProfileDetail(element.userName);
//     });
//     // console.log(profileDetails);
//     return Promise.all(profileDetails)
//       .then((result) => {
//         console.log(result);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   })
//   .catch((error) => {
//     console.log(error);
//   });


// 4th ---

// let promiseArray = [
//   new Promise((resole, reject) => resole("hello grras")),
//   new Promise((resole, reject) => resole("hello vishal")),
//   new Promise((resole, reject) => resole("hello jaipur")),
// //   new Promise((resole, reject) => reject("error")),
// ];

// // console.log(promiseArray);

// Promise.all(promiseArray)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });







