/* --------------  APPEND OR PREPEND/ BEFOR OR AFTER    createTextNode----------------------------- */

// const main = document.getElementById("main");
// const div = document.createElement("div");
// const textNode = document.createTextNode("succsees");/* div ekak create krnwa wage mekn text ekak create krla eka div ekta append krnna puluwan*/
// div.className = "alert";
// div.append(textNode);
// main.append(div);/* mekn wenne main kiyna ekn palwniytma (first child)widihta create wenwa*/
// main.prepend(div); /* mekn wenne main kiyna ekn anthimta (last child)widihta create wenwa*/
// main.before(div);/*mekn wenne div ekat kalin add krnwa*/
// main.after(div); /*mekn wenne div ekat passe add krnwa*/
// console.log(div);

/* ------------------- food list add (append) -------------------*/

let btn = document.getElementById("input-btn");
let nfood = document.getElementById("foodul");
let img = document.getElementById("no-list");
let count = document.getElementById("food-list-count");

function update() {
  refou();
  let food = document.getElementById("input-food");
  let li = document.createElement("li");


  let divitem = document.createElement("div");
  let divremovebtn = document.createElement("div");

  divremovebtn.setAttribute("onclick", "removelist(event);")
  divremovebtn.innerHTML = '<i class = "fa fa-xmark" > </i>';

  nfood.append(li);
  divitem.append(food.value)
  li.append(divitem);
  li.append(divremovebtn);
  li.className = "food-item";





}
btn.addEventListener("click", update);

function refou() {
  //   let y =nfood.children.length;
  //   if (y > 0) {
  //      count.innerText = `you have ${nfood.children.length} list`;
  //     img.hidden = true;


  //   } else  {
  // count.innerText = `you have ${nfood.children.length} list`;
  //     img.hidden = false;

  //   }

  nfood.children.length > 0
    ? (img.hidden = true)
    : (img.hidden = false);

}
/* ------------------ textContent, innerText, innerHtml ------------------ */

// let alel = document.querySelector(".alert .alert-message");
// console.log(alel);

//innerText // element ekat withri wada krnne
// alel.innerText = " <strong>✅ Successful!</strong> Hello, i've been <i/> method";
// console.log(alel.innerText);

//innerHtml
// alel.innerHTML = " <strong>✅ Successful!</strong> Hello, i've been <i/> method";
// console.log(alel.innerHTML);

// textContent
// alel.textContent = " <strong>✅ Successful!</strong> Hello, i've been <i/> method";
// console.log(alel.textContent);

/*  ------------------ Javascript DocumentFragment/ for loop (timing check) ------------------  */

// let foodcontainerel = document.getElementById("foodul");
// console.time("normal way");
// let x;
// for (let index = 0; index <=1000; index++) {
//     const li = document.createElement("li");
//     li.textContent = `food item ${index}`;
//     li.className = " food-item";
//     foodcontainerel.append(li);
// }
// console.timeEnd("normal way");

// // let foodcontainerel = document.getElementById("foodul");
// let fragment = document.createDocumentFragment();
// console.time("fragment way");
// for (let index = 0; index <= 1000; index++) {
//     const li = document.createElement("li");
//     li.textContent = `food item ${index}`;
//     li.className = " food-item";
//     fragment.append(li);
// }
//  foodcontainerel.append(fragment);
// console.timeEnd("fragment way");

/* ------------------- food list add ( DocumentFragment) -------------------*/

// let foodcontainerel = document.getElementById("foodul");
// let foodadd = [
//     "fish biriyani",
//     "veg biriyani"
// ];
// let foodfragment = document.createDocumentFragment();
// let li = document.createElement("li");

// console.time("normal way");
// for (let index = 0; index < foodadd.length; index++) {
//     let li = document.createElement("li");                          BEAD PROGRAM
//     li.textContent = foodadd[index];
//     li.className = " food-item";
//     foodfragment.append(li);
//     foodcontainerel.append(foodfragment);
// }
// console.timeEnd("normal way");
// // --------------------------
// console.time("fragment way");
// foodadd.forEach((food) => {
//     let li = document.createElement("li");                           GOOD POROGRAM
//     li.textContent = food;
//     li.className = " food-item";
//     foodfragment.append(li);

// })
// foodcontainerel.append(foodfragment);
// console.timeEnd("fragment way");

/* -------------------------------   CLONE (duplicate) ----------------------------------- */

// const Resnyc = document.getElementById("Resnyc");
// const dupli = document.getElementById("duplicate");
// let foodcontainerel = document.getElementById("foodul");
// Resnyc.addEventListener("click", () => {
//     dupli.innerHTML = '';
//     const clone = foodcontainerel.cloneNode(true);
//     dupli.append(clone);
// });

/* -------------------------   REMOVE  -------------------------- */

// console.time("n");
// function removelist() {
//     let remov = document.getElementById("food-item");
//     remov.remove();
//     console.log(remov);
// }
// console.timeEnd("n");


// console.time("n1");

function removelist(event) {
  let remov = event.target.parentNode.parentNode;
  remov.remove();
  refou();

}
// console.timeEnd("n1");

/* ---------------------------      FINDING CHILD and SIBLING(bro,sis) DOM     ------------------------------ */
//method 1 -- nodelist
// let x = document.querySelectorAll('li'); /*.food-item , #food-item' */
// console.log(x, x.length);

// //method 2 ---  htmlcpllections
// let y = document.querySelector(".food-container");
// console.log(y.children, y.children.length);

// //method 3 --nodelist
// console.log(y.childNodes, y.childNodes.length);


// console.log(y.firstChild);
// console.log(y.firstElementChild);
// console.log(y.lastChild);
// console.log(y.lastElementChild);

// let z = document.querySelector('ul:last-child li');
// console.log(z.nextElementSibling);
// console.log(z.nextElementSibling.innerText);
// let l = document.querySelector('ul:last-child li:last-child');
// console.log(l.previousElementSibling);
// console.log(l.previousElementSibling.innerText);

/* ------------------------------  GET or SET HTML Properties,Attributes     --------------------------------- */
// let x = document.querySelector(".input-container input");

// console.log(x.attributes);
// console.log(x.attributes[3].value);
// console.log(x.attributes.name.value);
// console.log(x.attributes.hello.value);

// console.log("");
// console.log("");


// console.log(x.type);
// console.log(x.id);
// console.log(x.name);
// console.log(x.placeholder);
// console.log(x.classList);
// console.log(x.className);

// console.log("");
// console.log("");

// x.setAttribute("name", "hello");     /*setAttribute */
// console.log(x.name);

// console.log("");
// console.log("");

// let a = x.className;
// console.log(a);

// console.log("");
// console.log("");

// let d = x.getAttribute("hello");/* html ekta api dena custom attribute mehmi ganne */
// console.log(d);

/* ------------------------------   HTML Properties,Attributes  tru or false   AND   remove   --------------------------------- */

// let x = document.querySelector(".input-container input");

// console.log(x.hasAttribute("name"));
// console.log(x.hasAttribute("na"));

// console.log("");

// console.log(x.id);
// x.removeAttribute("id");
// console.log("remove-Id", x.id);

// console.log(x.className);
// x.removeAttribute("class");
// console.log("remove-className",x.className);

/* ------------------------------   for loop with attributes  check   --------------------------------- */
// let x = document.querySelector(".input-container input");
// for (const att of x.attributes) {
//   console.log(att.name, "is", att.value);
// }
//

/* ------------------------------  CSS add,remove,toogle,replace,contains  --------------------------------- */

// let x = document.querySelector(".input-container input");

// x.className += " class1 class2 class3 class4";
// console.log(x.classList);
// console.log(x.classList.length);

// console.log(x.classList.contains("class1"));/*contains eken wenne thiynwd nedda kiyala check krna eka */
// console.log(x.classList.contains("class6"));

// x.classList.replace("class1","cl11");    /**repalce */
// console.log(x.classList);


// x.classList.remove("class3");          /**remove */
// console.log(x.classList);

// x.classList.toggle("class3");          /*toggle (on off)*/
// console.log(x.classList);

/* ------------------------------ table event (CLOSEST)  --------------------------------- */

// const table = document.querySelector("table");

// let selectedid;

// table.addEventListener("click", (event) => {
//   const target = event.target;
//   const closeTr = target.closest("tr");

//   if (target.tagName === "th") {
//     return;

//   }
//   if (selectedid != undefined) {
//     selectedid.classList.remove("active");
//   }

//   selectedid = closeTr;
//   closeTr.classList.add("active");

// });

/* ------------------------------ Mouse events  --------------------------------- */

// document.addEventListener("mousedown", (event) => {
//   console.log("down",event);
// })

// document.addEventListener("mouseup", (event) => {
//   console.log("up",event);
// })

// document.addEventListener("mouseenter", (event) => {
//   console.log(event);
//   alert("enter");
// })

// document.addEventListener("mouseleave", (event) => {
//   console.log(event);
//   alert("leave");
// })


// document.addEventListener("mousemove", (event) => {
//   console.log(event);
//   alert("move");
// })

// document.addEventListener("dblclick", (event) => {
//   console.log(event);
//   alert("move");
// })