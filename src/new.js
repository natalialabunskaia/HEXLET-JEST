const countOccurrences = (arr) => {
  const result = arr.reduce((acc, element) => {
    if (Object.hasOwn(acc, element)) {
      acc[element] += 1;
    } else {
      acc[element] = 1;
    }
    return acc;
  }, {});
  return result;
};
console.log(countOccurrences(['a', 'b', 'a', 'c', 'b', 'a'])); // { a: 3, b: 2, c: 1 }
