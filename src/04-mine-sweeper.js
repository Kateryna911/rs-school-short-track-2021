const matrix = [
  [true, false, false],
  [false, true, false],
  [false, false, false],
];
// eslint-disable-next-line no-shadow
function minesweeper(matrix) {
  // eslint-disable-next-line max-len
  return matrix.map((l, i) => l.map((e, j) => matrix.slice(Math.max(0, i - 1), i + 2).map((f) => f.slice(Math.max(0, j - 1), j + 2).reduce((a, b) => a + b)).reduce((a, b) => a + b) - e));
}
// eslint-disable-next-line no-console
console.log(minesweeper(matrix));

module.exports = minesweeper;
