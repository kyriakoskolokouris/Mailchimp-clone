// 1. Hide/show password functionality


const show = document.querySelector(".show");
const hide = document.querySelector(".hide");
const password = document.querySelector(".password");


show.addEventListener("click", () => {
  password.setAttribute("type", "text");
  show.style.display = "none";
  hide.style.display = "inline";
  document.getElementById("password-text").textContent = "Hide";
  hide.style.visibility = "visible";
  password.style.border = "2px solid #007c89";
})

hide.addEventListener("click", () => {
  password.setAttribute("type", "password");
  hide.style.display = "none";
  show.style.display = "inline";
  document.getElementById("password-text").textContent = "Show";
  password.style.border = "2px solid #007c89";
})
