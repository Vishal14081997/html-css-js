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

function fetchData() {
    return new Promise((resolve, reject) => {
        let data = { name: "vishal", email: "vishal@gmail.com" };
        setTimeout(() => {
            resolve(data);
        }, 2000);
    });
}
function fetchPorfileDetails(userName) {
    // console.log("Received username:", userName);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                userName: userName,
                age: "100",
                gender: "Male",
                address: "jaipur",
            });
        }, 2000);
    });
}
async function fetchUserData() {
    try {
        const userData = await fetchData()
        console.log(userData);
        // console.log("hello vishal");
        const profileData = await fetchPorfileDetails(userData.name)
        console.log(profileData);
    } catch (error) {
        console.log("Error received : ", error);
    }
}
fetchUserData()