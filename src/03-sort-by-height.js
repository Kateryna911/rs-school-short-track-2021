function sortByHeight(arr) {
  let result = arr;
  const index = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      index.push(i);
    }
  } result.sort((a, b) => (a - b));
  result = result.slice(index.length);
  for (let i = 0; i < index.length; i++) {
    result.splice(index[i], 0, -1);
  } return result;
}

module.exports = sortByHeight;
