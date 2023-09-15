let arr = Array(5).fill(1);
console.log(arr.length);

console.log("First item", arr[0]);
console.log("Middle item", arr[Math.floor(arr.length / 2)]);
console.log("Last item", arr[arr.length - 1]);

let mixedDataTypes = ["string", 1, true, false, "c", 1.2];

let itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "Oracle",
  "Amazon",
];
console.log(itCompanies);
console.log(itCompanies.length);

console.log("First IT Company", itCompanies[0]);
console.log(
  "Middle IT Company",
  itCompanies[Math.floor(itCompanies.length / 2)]
);
console.log("Last IT Company", itCompanies[itCompanies.length - 1]);

if (itCompanies.includes("Facebook")) {
  return "Facebook";
} else {
  return "Not Found";
}

