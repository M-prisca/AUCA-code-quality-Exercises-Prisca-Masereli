// Implement a JavaScript function to remove duplicate elements from an array.

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

function removeDuplicatesFilter(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
console.log(removeDuplicatesFilter([1, 2, 2, 3, 4, 4, 5]));
