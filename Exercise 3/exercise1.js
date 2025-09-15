// Write a function(s) that checks the level of nesting of an array.
// Then, use that function to flatten the array into a single-dimensional array.

function getNestingLevel(arr) {
  if (!Array.isArray(arr)) return 0;
  return 1 + Math.max(0, ...arr.map(getNestingLevel));
}

function flattenArray(arr) {
  return arr.reduce((flat, item) => {
    return flat.concat(Array.isArray(item) ? flattenArray(item) : item);
  }, []);
}

const nested = [1, [2, [3, [4]]]];
console.log("Nesting Level:", getNestingLevel(nested));
console.log("Flattened:", flattenArray(nested));
