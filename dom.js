// console.log(window);
// console.log(document);

// let element = document.getElementById("demo");
// element.innerText = "G+"
// console.log(element);

// let ele = document.getElementById("test");
// // ele.innerText= "<h1>Header</h1>"
// ele.innerHTML = "<h1>Header</h1>"
// console.log(ele);

//!

let ele = document.getElementsByClassName("test");
console.log(ele);

ele[0].innerText="Hello"

let x = [...ele];
x.map(element=>{
    element.style.backgroundColor="Orange"
})