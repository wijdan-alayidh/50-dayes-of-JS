"use strict";

const next = document.getElementById("next");
const prev = document.getElementById("prev");
const progress = document.getElementById("progress");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;
const maxWidth = circles.length;

// click on next button
next.addEventListener("click", () => {
  currentActive >= maxWidth ? currentActive == maxWidth : currentActive++;

  update();
});

// click on next button
prev.addEventListener("click", () => {
  currentActive <= 1 ? currentActive == 1 : currentActive--;

  update();
});

// update function to update the active buttons and progress bar width
function update() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }

    let actives = document.querySelectorAll(".active");
    progress.style.width = ((actives.length - 1) / (maxWidth - 1)) * 100 + "%";

    currentActive === 1 ? (prev.disabled = true) : (prev.disabled = false);

    currentActive === maxWidth
      ? (next.disabled = true)
      : (next.disabled = false);
  });
}