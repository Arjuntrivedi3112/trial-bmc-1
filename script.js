// Toggle between Login and Signup forms
const signupLink = document.getElementById("signup-link");
const loginLink = document.getElementById("login-link");
const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");

signupLink.addEventListener("click", function () {
  loginForm.classList.add("hidden");
  signupForm.classList.remove("hidden");
});

loginLink.addEventListener("click", function () {
  signupForm.classList.add("hidden");
  loginForm.classList.remove("hidden");
});

// Playful Login Button Animation
const loginButton = document.getElementById("login-button");
let moveCount = 0;

loginButton.addEventListener("mouseover", function () {
  if (moveCount < 3) {
    this.style.position = "relative";
    this.style.transform = `translate(${Math.random() * 100}px, ${Math.random() * 100}px)`;
    moveCount++;
  }
});
