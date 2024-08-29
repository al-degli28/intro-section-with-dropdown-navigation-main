const hamburger = document.querySelector(".hamburger-menu");
const iconMenu = document.querySelector(".icon-menu");
const iconCloseMenu = document.querySelector(".icon-close-menu");

// Features
const firstLink = document.querySelector("nav ul li a:first-of-type");

const arrowDownFeatures = document.querySelector("img[src='src/images/icon-arrow-down.svg'][class='arrow-down-features']");

const arrowDownCompany = document.querySelector("img[src='src/images/icon-arrow-down.svg'][class='arrow-down-company']");

// Company
const secondLink = document.querySelector("nav ul li:nth-child(2) a");

// .active-state-1
const activeState1 = document.querySelector(".active-state-1");


// .active-state-2
const activeState2 = document.querySelector(".active-state-2");

const mobileMenuCollapsed = document.querySelector(".mobile-menu-collapsed");


iconMenu.addEventListener("click", (e) => {
  iconMenu.style.display = "none";
  iconCloseMenu.style.display = "block";
});


iconCloseMenu.addEventListener("click", (e) => {
  iconMenu.style.display = "block";
  iconCloseMenu.style.display = "none";
});


firstLink.addEventListener("click", (e) => {
  if(activeState1.style.display === "none"){
    arrowDownFeatures.src = "src/images/icon-arrow-up.svg";
    activeState1.style.display = "block";
  }
  else{
    arrowDownFeatures.src = "src/images/icon-arrow-down.svg";
    activeState1.style.display = "none";
  }
  
});


secondLink.addEventListener("click", (e) => {
  if(activeState2.style.display === "none"){
    arrowDownCompany.src = "src/images/icon-arrow-up.svg";
    activeState2.style.display = "block";
  }
  else{
    arrowDownCompany.src = "src/images/icon-arrow-down.svg";
    activeState2.style.display = "none";
  }
});

activeState2.addEventListener("mouseleave", (e) => {
  activeState2.style.display = "none";
});

iconMenu.addEventListener("click", (e) => {
  mobileMenuCollapsed.style.display = "block";
});

iconCloseMenu.addEventListener("click", (e) => {
  mobileMenuCollapsed.style.display = "none";
});


firstLink.addEventListener("mouseover", (e) => {
  activeState2.style.display = "none";
});

secondLink.addEventListener("mouseover", (e) => {
  activeState1.style.display = "none";
});


const overlay = document.querySelector(".overlay");



iconMenu.addEventListener("click", (e) => {
  overlay.classList.add("active");
  mobileMenuCollapsed.classList.add("animate__slideInRight");
});


iconCloseMenu.addEventListener("click", (e) => {
  overlay.classList.remove("active");
});


const features = document.getElementById("features"),
      todoList = document.getElementById("todo-list"),
      calendar = document.getElementById("calendar"),
      reminders = document.getElementById("reminders"),
      planning = document.getElementById("planning");

const arrowFeatures = document.querySelector(".mobile-menu-collapsed nav ul li:first-child img");



features.addEventListener("click", (e) => {
  if(todoList.style.display === "none" && calendar.style.display === "none" && reminders.style.display === "none" && planning.style.display === "none"){
    arrowFeatures.src = "src/images/icon-arrow-up.svg";
    todoList.style.display = "block";
    calendar.style.display = "block";
    reminders.style.display = "block";
    planning.style.display = "block";
  }
  else{
    arrowFeatures.src = "src/images/icon-arrow-down.svg";
    todoList.style.display = "none";
    calendar.style.display = "none";
    reminders.style.display = "none";
    planning.style.display = "none";
  }
});


const company = document.getElementById("company"),
      history = document.getElementById("history"),
      team = document.getElementById("team"),
      blog = document.getElementById("blog");


const arrowCompany = document.querySelector(".mobile-menu-collapsed nav ul li:nth-child(6) img");


company.addEventListener("click", (e) => {
  if(history.style.display === "none" && team.style.display === "none" && blog.style.display === "none"){
    arrowCompany.src = "src/images/icon-arrow-up.svg";
    history.style.display = "block";
    team.style.display = "block";
    blog.style.display = "block";
  }
  else{
    arrowCompany.src = "src/images/icon-arrow-down.svg";
    history.style.display = "none";
    team.style.display = "none";
    blog.style.display = "none";  
  }
});

































































  




