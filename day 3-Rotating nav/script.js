"use strict";

const container = document.querySelector(".container");
const closeButton = document.querySelector(".close");
const openButton = document.querySelector(".open");
const body = document.querySelector("body");
const nav = document.querySelector(".nav");

openButton.addEventListener("click", () => {
  container.classList.add("rotate-container");
  body.style.overflowY = "hidden";
  nav.classList.add("active");
});

closeButton.addEventListener("click", () => {
  nav.classList.remove("active");
  container.classList.remove("rotate-container");
  body.style.overflowY = "visible";
});
