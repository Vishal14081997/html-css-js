// let mydiv = document.getElementById("container")
// console.log(mydiv);

// let mydiv = document.getElementsByClassName("box")

// console.log(mydiv);
// console.log(mydiv[4]);

// mydiv[4].style.background = "yellow";
// mydiv[4].style.padding = "10px"


// for (let i = 0; i < mydiv.length; i++) {
//     if (i % 2 === 0) {
//         mydiv[i].style.background = "green";
//     } else {
//         mydiv[i].style.background = "yellow"
//     }
//     // mydiv[i].style.background = "yellow";
//     mydiv[i].style.padding = "10px"
//     mydiv[i].style.margin = "10px"

// }

// let colors = ["blue", "brown", "yellow", "skyblue", "green", "red", "orange", "pink", "white", "green"]

// for (let i = 0; i < mydiv.length; i++) {
//     mydiv[i].style.background = colors[i];
//     mydiv[i].style.padding = "10px"
//     mydiv[i].style.margin = "10px"
// };


// querySelector -Sirf first matching element
// querySelectorAll -Saare matching elements

// let newdiv = document.querySelector("div")
// console.log(newdiv);

let newdiv = document.querySelectorAll(".box")
console.log(newdiv);

// newdiv.forEach((item)=>{
//     item.style.background = "green"
// });
    
// newdiv.forEach((item) => {
//     item.addEventListener("click", () => {
//         item.style.background = "green";
//         console.log("Clicked");
//     })
// });
// console.log(newdiv);


// let newDiv = document.createElement("div")

// newDiv.id = "item"
// newDiv.className = "box"
// newDiv.style.background = "green";
// newDiv.style.padding="10px";
// newDiv.style.margin = "10px"

// document.body.appendChild(newDiv)


// let mydiv = document.getElementById("item-4")
// document.body.insertBefore(newDiv, mydiv )

// document.getElementById("container").appendChild(newDiv)

// console.log(newDiv);


