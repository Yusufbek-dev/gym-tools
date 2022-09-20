let hamburger = document.querySelector(".hamburger");
let nav = document.querySelector(".list");
let catalog= document.querySelector(".catalog");



hamburger.addEventListener("click", ()=> {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
  catalog.classList.toggle("active");
});

document.querySelectorAll(".list a").forEach(item => {
  item.addEventListener("click", ()=> {
    hamburger.classList.remove("active");
    nav.classList.remove("active");
    catalog.classList.remove("active");
  });
});
