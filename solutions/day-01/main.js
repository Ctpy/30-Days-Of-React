let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
words = text.split(" ");
console.log(words);
console.log(words.length);

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

shoppingCart.unshift("Meat");
shoppingCart.push("Sugar");
shoppingCart.slice(
  shoppingCart.indexOf("Honey"),
  shoppingCart.indexOf("Honey") + 1
);
import countries from countries

if (!countries.includes('ETHIOPIA')){
    countries.push('ETHIOPIA');
}