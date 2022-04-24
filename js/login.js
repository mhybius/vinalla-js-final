const loginSection = document.querySelector(".login-section");
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");
const contentSection = document.querySelector(".content-section");

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginSection.classList.add(HIDDEN_CLASS);
  const username = loginInput.value;

  localStorage.setItem(USERNAME_KEY, username);

  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `안녕하세요. ${username} 님`;
  contentSection.classList.remove(HIDDEN_CLASS);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  // SHOW THE FORM
  loginSection.classList.remove(HIDDEN_CLASS);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // SHOW GREETING MESSAGE
  paintGreetings(savedUsername);
}
