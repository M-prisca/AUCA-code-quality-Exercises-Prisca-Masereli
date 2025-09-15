// Format any integer provided into a string with "," (commas) in the correct places.

// Example:

// For n = 100000 the function should return '100,000';
// For n = 5678545 the function should return '5,678,545';
// for n = -420902 the function should return '-420,902'.

function formatNumber(n) {
  return n.toLocaleString("en-US");
}

console.log(formatNumber(100000));
console.log(formatNumber(5678545));
console.log(formatNumber(-420902));
