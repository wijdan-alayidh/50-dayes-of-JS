"use strict";
// If I use querySelector here will choose the first item only
// Uncomment this lines for more understanding if you forget :)
// const panels = document.querySelector(".panel");
// panels.style.opacity = 0;

// So, I have to use querySelectorAll to choose all panels
const panels = document.querySelectorAll(".panel");
// console.log(panels);

// The forEach() method calls a function once for each element in an array, in order.
// ineasted looping through the array is a build in function can used for this
// This function loop on every panel and add active class if the user click on the panel
// and also make sure to remove active class from another panels
// To make the active panel only expaned and others be in collapse state
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClass(panels);
    panel.classList.add("active");
  });
});

// Remove active classes if any is there
function removeActiveClass(array) {
  array.forEach((item) => {
    item.classList.remove("active");
  });
}
