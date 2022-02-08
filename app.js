let cookieAmount = 0,
  cookieClick = 1;
let cpsAmount = 0,
  cps = document.querySelector(".cps");

let cookieButton = document.querySelector(".cookieButton");
let cookieCounter = document.querySelector(".cookieCounter");

cookieButton.addEventListener("click", cookie);

function cookie() {
  cookieAmount += cookieClick;

  cookieCounter.innerHTML = cookieAmount;
}
