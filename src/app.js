/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  darCarta();
};

function darCarta() {
  let numeroRandom = Math.floor(Math.random() * 13) + 1;
  let figuraRandom = Math.floor(Math.random() * 4) + 1;

  let numero = document.getElementById("numero");
  let figura1 = document.getElementById("figura1");
  let figura2 = document.getElementById("figura2");

  switch (numeroRandom) {
    case 1:
      numero.innerHTML = "A";
      break;
    case 11:
      numero.innerHTML = "J";
      break;
    case 12:
      numero.innerHTML = "Q";
      break;
    case 13:
      numero.innerHTML = "K";
      break;
    default:
      numero.innerHTML = numeroRandom;
      break;
  }

  switch (figuraRandom) {
    case 1:
      figura1.innerHTML = "♦";
      figura1.style.color = "red";

      figura2.innerHTML = "♦";
      figura2.style.color = "red";
      break;
    case 2:
      figura1.innerHTML = "♥";
      figura1.style.color = "red";

      figura2.innerHTML = "♥";
      figura2.style.color = "red";
      break;
    case 3:
      figura1.innerHTML = "♠";
      figura1.style.color = "black";

      figura2.innerHTML = "♠";
      figura2.style.color = "black";
      break;
    case 4:
      figura1.innerHTML = "♣";
      figura1.style.color = "black";

      figura2.innerHTML = "♣";
      figura2.style.color = "black";

      break;
    default:
      figura1.innerHTML = "ERR";
      break;
  }
}
