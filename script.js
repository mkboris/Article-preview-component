"use strict";

const shareButton = document.querySelector(".share-div");
const socialLinks = document.querySelector(".social");
const hideIcon = document.querySelector(".hide");

shareButton.addEventListener("click", function (share) {
  if (share) {
    socialLinks.classList.toggle("hidden");
    hideIcon.style.top = "0";
  }
});

hideIcon.addEventListener("click", function (share) {
  if (share) {
    socialLinks.classList.toggle("hidden");
    hideIcon.style.top = "0";
  }
});
