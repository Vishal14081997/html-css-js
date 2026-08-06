//String , date , math 

// -------string methods --------------

// toUppercase , toLowerCase , slice , split , trim , charAt , replace , substring , includes , indexOf

// let str = "Hello, My name is vishal singh";

// console.log(str[4]);
// console.log(str.length);

// let newStr = str.toUpperCase();
// let newStr = str.toLowerCase();
// console.log(newStr);

// let newStr = str.slice(5 , 11)
// console.log(newStr);


// let str = "Hello, My name is vishal singh";

// let result = str.split(",")
// let result = str.split(".")
// let result = str.split("e")

// console.log(result);


// let date = "10-03-2026" // 10/02/2025
// let result = date.split("-")
// let joinArr = result.join("/")
// console.log(joinArr);


// let str = "    hello vishal   "
// console.log(str.length);

// let newStr = str.trim()
// console.log(newStr.length);

// let str = "Hello, my name is vishal singh"
// console.log(str.charAt(1));



// let str = "Hello, my name is vishal singh"
// let newStr = str.replace("vishal" , "mukesh")  
// console.log(newStr);

// let str = "Hello vishal, my name is vishal singh"
// let newStr = str.replace("vishal" , "mukesh")  
// console.log(newStr);

// let str = "Hello vishal, my name is vishal singh"
// let newStr = str.replaceAll("vishal" , "mukesh")  
// console.log(newStr);

// let date = "10-02-2025"
// let newDate = date.replaceAll("-", "/")
// console.log(newDate);


// let str = "    hello     vishal   "
// let newStr = str.replace(/\s+/g, " ")
// console.log(newStr);

// let str = "5";
// let newStr = str.padStart(3 ,"0")
// let newStr = str.padEnd(3 ,"0")
// console.log(newStr);


// let str = "My Name is vishal singh";
// let result = str.includes("vishal singh");
// console.log(result);


// let str = "My Name is vishal singh";
// let result = str.indexOf("e");
// let result = str.indexOf("e" ,7);
// console.log(result);


// let str = "My Name is vishal singh";
// let result = str.substring(7,3);
// console.log(result);



// -----------------Date  Object -----------------

let currentDate = new Date();
console.log(currentDate);

// console.log(currentDate.getDate());
// console.log(currentDate.getFullYear());
// console.log(currentDate.getDay());
// console.log(currentDate.getMonth()); // 0-11
// console.log(currentDate.getTime());
// console.log(currentDate.toTimeString());
// console.log(currentDate.getHours());
// console.log(currentDate.getMinutes());

// console.log(currentDate.toString());
// console.log(currentDate.toDateString());
// console.log(currentDate.toTimeString());
// console.log(currentDate.toJSON());
// console.log(currentDate.toLocaleDateString());
// console.log(currentDate.toLocaleTimeString());


