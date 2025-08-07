let userInput = prompt("Enter froyo flavors (comma separated):");
let flavors = userInput.split(",");
let order = {};

for (let i = 0; i < flavors.length; i++) {
  let flavor = flavors[i].trim();

  if (order[flavor]) {
    order[flavor]++;
  } else {
    order[flavor] = 1;
  }
}

console.log("Froyo order summary:");
console.log(order);
