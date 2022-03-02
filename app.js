let title = document.querySelector("title");
let cookieImg = document.getElementById("cookieImg")[0];

let cookieAmount = 15,
  cookieClick = 1,
  cpsAmount = 0;

let cps = document.querySelector(".cps"),
  cookieButton = document.querySelector(".cookieButton"),
  cookieCounter = document.querySelector(".cookieCounter");

cookieButton.addEventListener("click", CookieClick);

let upgradeMultiplier = 1.15;

let clickerAmount = 0,
  clickerCost = 15,
  clickerCPS = 0.1;

let clickerButton = document.querySelector(".clickerButton"),
  clickerCounter = document.querySelector(".clickerAmount"),
  clickerPrice = document.querySelector(".clickerPrice");

clickerButton.addEventListener("click", ClickerBuy);

let grandmaAmount = 0,
  grandmaCost = 100,
  grandmaCPS = 1;

let grandmaButton = document.querySelector(".grandmaButton"),
  grandmaCounter = document.querySelector(".grandmaAmount"),
  grandmaPrice = document.querySelector(".grandmaPrice");

grandmaButton.addEventListener("click", GrandmaBuy);

function CookieClick() {
  cookieAmount += cookieClick;

  cookieCounter.innerHTML = Math.floor(cookieAmount);
}

setInterval(function () {
  cookieAmount += cpsAmount;

  cookieCounter.innerHTML = Math.floor(cookieAmount);

  title.innerHTML = Math.floor(cookieAmount) + " cookies - Cookie Clicker";
}, 1000);

function ClickerBuy() {
  if (cookieAmount >= clickerCost) {
    clickerAmount++;
    cpsAmount += clickerCPS;
    cookieAmount -= clickerCost;

    clickerCost = Math.round(
      (clickerCost * upgradeMultiplier) ^ (clickerAmount + 1)
    );

    cps.innerHTML = parseFloat(cpsAmount.toFixed(1));
    cookieCounter.innerHTML = Math.floor(cookieAmount);
    clickerCounter.innerHTML = clickerAmount;
    clickerPrice.innerHTML = clickerCost;
  }
}

function GrandmaBuy() {
  if (cookieAmount >= grandmaCost) {
    grandmaAmount++;
    cpsAmount += grandmaCPS;
    cookieAmount -= grandmaCost;

    grandmaCost = Math.round(
      (grandmaCost * upgradeMultiplier) ^ (grandmaAmount + 1)
    );

    cps.innerHTML = parseFloat(cpsAmount.toFixed(1));
    cookieCounter.innerHTML = Math.floor(cookieAmount);
    grandmaCounter.innerHTML = grandmaAmount;
    grandmaPrice.innerHTML = grandmaCost;
  }
}