const openMenuBtn = document.querySelector("#projects-menu");
const menuContainer = document.querySelector(".menu-container");
const projectLinks = document.querySelectorAll("[data-link]");

// openMenuBtn.addEventListener("click", function (e) {
//   if (e.target.closest("#projects-menu")) {
//     menuContainer.classList.toggle("open");
//   } else {
//     menuContainer.classList.add("js-is-hidden");
//   }
// });

document.addEventListener("click", function (e) {
  console.log("evenclick", e.target.closest("#projects-menu"));
  if (e.target.closest("#projects-menu")) {
    menuContainer.classList.toggle("open");
    // menuContainer.classList.remove("js-is-hidden");
  } else {
    // menuContainer.classList.add("js-is-hidden");
    menuContainer.classList.remove("open");
    e.preventDefault();
  }
});

menuContainer.addEventListener("click", function (e) {
  e.stopPropagation();
});

// SELECT THE CLASSES
const bio = document.querySelector(".bio-container");
const showbio = document.querySelector(".biography-button");
// EVENT LISTENER TO LISTEN FOR A CLICK WITH AN IF STATEMENT
// FOR THE biography-button class AND IF THE CLICKED ELEMENT OR
// ANY OF IT'S ANCESTORS HAVE THE biography-button CLASS
// THE CODE BELOW WILL RUN.
document.addEventListener("click", (e) => {
  console.log(e);
  if (e.target.closest(".biography-button")) {
    bio.style.transform = "translateY(150%)";
    bio.style.transition = "1s";
  } else {
    bio.style.transform = "scale(0.00001)";
    bio.style.transition = "0.5s";
    e.stopPropagation();
  }
});

// const button = document.querySelector(".randColorButton");

// function randomColor() {
//   const r = Math.floor(Math.random() * 255);
//   const g = Math.floor(Math.random() * 255);
//   const b = Math.floor(Math.random() * 255);
//   return `rgb(${r}, ${g}, ${b})`;
// }

// button.addEventListener("click", function () {
//   button.style.backgroundColor = randomColor();
// });

// function blabla(res) {
//   // const result = await res.json();
//   // console.log("dadsada", result);
//   res.json().then((result) => console.log(result));
// }

// async function result() {
//   const result = await fetch("https://dummyjson.com/products/1");
//   console.log(await result.json());
// }
// result();

// fetch("https://dummyjson.com/products/1")
//   .then((value) => value.json())
// .then((bla) => console.log(bla));

// fetch("https://dummyjson.com/products/1").then((value) => {
//   value.json().then((bla) => console.log(bla));
// });
