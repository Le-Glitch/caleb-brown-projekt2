let title = document.querySelector("title");
let cookieImg = document.getElementById("cookieImg")[0];

let cookieAmount = 0,
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



let grandmaAmount = 0,
  grandmaCost = 100,
  grandmaCPS = 1;

let grandmaButton = document.querySelector(".grandmaButton"),
  grandmaCounter = document.querySelector(".grandmaAmount"),
  grandmaPrice = document.querySelector(".grandmaPrice");

grandmaButton.addEventListener("click", GrandmaBuy);

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



let factoryAmount = 0,
  factoryCost = 1100,
  factoryCPS = 8;

let factoryButton = document.querySelector(".factoryButton"),
  factoryCounter = document.querySelector(".factoryAmount"),
  factoryPrice = document.querySelector(".factoryPrice");

factoryButton.addEventListener("click", FactoryBuy);

function FactoryBuy() {
  if (cookieAmount >= factoryCost) {
    factoryAmount++;
    cpsAmount += factoryCPS;
    cookieAmount -= factoryCost;

    factoryCost = Math.round(
      (factoryCost * upgradeMultiplier) ^ (factoryAmount + 1)
    );

    cps.innerHTML = parseFloat(cpsAmount.toFixed(1));
    cookieCounter.innerHTML = Math.floor(cookieAmount);
    factoryCounter.innerHTML = factoryAmount;
    factoryPrice.innerHTML = factoryCost;
  }
}



function CookieClick() {
  cookieAmount += cookieClick;

  cookieCounter.innerHTML = Math.floor(cookieAmount);
}

setInterval(function () {
  cookieAmount += cpsAmount;

  cookieCounter.innerHTML = Math.floor(cookieAmount);

  title.innerHTML = Math.floor(cookieAmount) + " cookies - Cookie Clicker";
}, 1000);



