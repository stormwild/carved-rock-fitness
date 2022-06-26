import util from "./util";
import "./css/main.scss";
import msg from "./message.txt";

console.log(msg);

const cart = [];

function addToCart(item) {
  cart.push(item);
  util.log("added item: " + item);
}

function removeFromCart(idx) {
  cart.splice(idx, 1);
  util.log("removed: " + idx);
}

addToCart("Waterproof Boots");
