console.log('--------------------');
console.log(containsDuplicateWithinK([1,2,3,1], 3)); // true
console.log(containsDuplicateWithinK([1,0,1,1], 1)); // true
console.log(containsDuplicateWithinK([1,2,3,1,2,3], 2)); // false
console.log(containsDuplicateWithinK([1, 1], 0)) // false

function containsDuplicateWithinK(array, k) {
  const s = new Set();
  for(let i = 0; i < array.length; i++) {
    if(i > k) {
      s.delete(array[i - k - 1]);
    }
    const el = array[i];
    if(s.has(el)) {
      return true;
    }
    s.add(el);
  }
  return false;
}