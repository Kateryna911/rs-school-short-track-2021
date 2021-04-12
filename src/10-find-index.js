function findIndex(array, value) {
  const l = array.length;
  const n = Math.floor(l / 2);
  let i = n;
  do {
    if (array[i] === value) {
      break;
    } else if (array[i] > value) {
      i--;
    } else {
      i += Math.floor((l + i) / 2) - 1;
    }
  } while (i < l);
  return i;
}

module.exports = findIndex;
