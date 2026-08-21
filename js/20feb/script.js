// function fetchData(callback) {
//     let data = { name: "vishal", email: "vishal@gmail.com" }

//     setTimeout(() => {
//         // console.log(data);
//         callback(data)
//     }, 2000)
// }

// function fetchPorfileDetails(userName) {
//     setTimeout(() => {
//         console.log(`profile details for ${userName}`, { age: "100", gender: "Male", address: "jaipur" });
//     }, 1000)
// }
// fetchData((userData)=>{
//     // console.log(userData);
//     fetchPorfileDetails(userData.name)
// })

// 2nd way --(promise)

// function fetchData() {
//   return new Promise((resolve, reject) => {
//     let data = { name: "vishal", email: "vishal@gmail.com" };
//     setTimeout(() => {
//       resolve(data);
//     }, 2000);
//   });
// }
// function fetchPorfileDetails(userName) {
//   console.log("Received username:", userName);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({
//         userName: userName,
//         age: "100",
//         gender: "Male",
//         address: "jaipur",
//       });
//     }, 2000);
//   });
// }
// // console.log(fetchData());

// fetchData()
//   .then((res) => {
//     console.log("User Data:", res);
//     return fetchPorfileDetails(res.name);
//   })
//   .then((profileData) => {
//     console.log("Profile Data:", profileData);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// ------------ async/await---------------

// function fetchData() {
//     return new Promise((resolve, reject) => {
//         let data = { name: "vishal", email: "vishal@gmail.com" };
//         setTimeout(() => {
//             resolve(data);
//         }, 2000);
//     });
// }
// function fetchPorfileDetails(userName) {
//     // console.log("Received username:", userName);
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({
//                 userName: userName,
//                 age: "100",
//                 gender: "Male",
//                 address: "jaipur",
//             });
//         }, 2000);
//     });
// }
// async function fetchUserData() {
//     try {
//         const userData = await fetchData()
//         console.log(userData);
//         // console.log("hello vishal");
//         const profileData = await fetchPorfileDetails(userData.name)
//         console.log(profileData);
//     } catch (error) {
//         console.log("Error received : ", error);
//     }
// }
// fetchUserData()

// api call in javascript ----------

// let response = fetch("https://fakestoreapi.com/products")
// .then((res)=>{
//     // console.log(res.json());
//     return res.json()
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log(error);
// })

// const fetchData = async () => {
//     try {
//         const response = await fetch("https://fakestoreapi.com/products");
//         data = await response.json();
//         console.log(data);

//         // this is only single cart fetch

//         // let myDiv = document.getElementById("container")

//         // let newDiv = document.createElement("div")
//         // newDiv.innerHTML = `<h2>${data[0].id}</h2><p>${data[0].category}</p>`

//         // newDiv.style.padding = "20px"
//         // newDiv.style.background = "skyblue"
//         // newDiv.style.borderRadius = "10px"

//         // myDiv.appendChild(newDiv);

//         // this is all cart fetch

//         let myDiv = document.getElementById("container");

//         data.forEach((item) => {
//             let newDiv = document.createElement("div");
//             newDiv.innerHTML = `<img src="${item.image}"  width="150" height="150"/><h2>${item.id}</h2><p>${item.category}</p> <p>${item.price}</p>`;

//             newDiv.style.padding = "20px";
//             newDiv.style.background = "skyblue";
//             newDiv.style.borderRadius = "10px";

//             myDiv.appendChild(newDiv);
//         });
//     } catch (error) {
//         console.log(error);
//     }
// };
// fetchData();
