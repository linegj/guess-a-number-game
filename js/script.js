"use strict";

// variabler
const min = 0;
const max = 100;

let targetNumber = Math.floor(Math.random() * (max - min) + min); // finder et tal mellem 0 to 100

let attempts = 0; // antal forsøg
let guess; // gæt
let running = true; // boolean variabel

while (running) {
  guess = parseInt(prompt("Gæt et tal mellem 0 og 100:")); // prompt for at gætte et tal

  if (guess === targetNumber) {
    attempts++;
    alert(`Tillykke, du gættede rigtigt! Det tog dig ${attempts} forsøg.`);
    running = false;
  } else if (guess < targetNumber) {
    attempts++;
    alert("Dit gæt er for lavt, prøv igen.");
  } else if (guess > targetNumber) {
    attempts++;
    alert("Dit gæt er for højt, prøv igen.");
  }
}