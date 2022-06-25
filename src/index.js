const cart = [];

function log(message) {
  console.log(message + " " + message);
}

function addToCart(item) {
  cart.push(item);
  log("added: " + item);
}

function removeFromCart(index) {
  cart.splice(index, 1);
  log("removed: ", index);
}

addToCart("Waterproof Boots");
