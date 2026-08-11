// dom  - document object model

// console.log(window);
// console.log(window.document); 
// console.log(document);

// alert("hello world")

// let firstVar = prompt("Enter the first number")
// firstVar = Number(firstVar)
// console.log(firstVar);

// let secondVar = confirm("is this  true")
// console.log(secondVar);

// y web apies k function  h y terminal m nhi dekhenge y only browser m hi show honge  


// let mydiv = document.getElementById("container")
// console.log(mydiv);
// console.log(mydiv.id);

// console.log(mydiv.className);
// mydiv.className = "box"
// mydiv.id= "item"
// mydiv.className = "container"

// console.log(mydiv.style);

// mydiv.style.borderRadius = "50%"
// mydiv.style.backgroundColor = "yellow"

// let myInput = document.getElementById("password")
// console.log(myInput);
// console.log(myInput.type);
// myInput.type = "text"

// setAttribute and getAttribute 

// let mydiv = document.getElementById("container")
// console.log(mydiv.getAttribute("id"));
// console.log(mydiv.getAttribute("class"));


// let mydiv = document.getElementById("container")

// mydiv.setAttribute("class","box")
// mydiv.setAttribute("id","item")
// mydiv.setAttribute("style" ,"background-color: green;")
// mydiv.setAttribute("style" ,"border-radius:50%")


//--------- innerHtml , innerTest , textContent-----

let mydiv = document.getElementById("container")

console.log(mydiv.innerHTML);
console.log(mydiv.innerText);
console.log(mydiv.textContent);

// mydiv.innerHTML = "<input type='text' placeholder='enter name' />";

// mydiv.innerText = "<input type='text' placeholder='enter name' />";