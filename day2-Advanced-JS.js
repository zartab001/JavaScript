// Task 1
// Products array

const products = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Phone", price: 500, inStock: false },
  { name: "Tablet", price: 300, inStock: true },
  { name: "Monitor", price: 200, inStock: true }
];

// 1. Get array of product names

const productNames  = products.map(product => product.name);
console.log(productNames); 
// Expected: ["Laptop", "Phone", "Tablet", "Monitor"]

// 2. Get only products that are in stock

const inStockProducts = products.filter(product => product.inStock);
console.log(inStockProducts);
// Expected: Laptop, Tablet, Monitor objects

// 3. Calculate total price of in-stock products

const totalInStockPrice = products
  .filter(product => product.inStock)
  .reduce((total, product) => total + product.price, 0);

console.log(totalInStockPrice);
// Expected: 1500

// 4. Get names of products costing more than 400

const expensiveProductNames = products
  .filter(product => product.price > 400)
  .map(product => product.name);

console.log(expensiveProductNames);
// Expected: ["Laptop", "Phone"]




// Task 2
// Closure Function

function makeMultiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}

// Create specific multiplier functions
const double = makeMultiplier(2);
const triple = makeMultiplier(3);

// Test cases
console.log(double(10));   // Expected: 20
console.log(triple(5));   // Expected: 15
console.log(double(15));  // Expected: 30
