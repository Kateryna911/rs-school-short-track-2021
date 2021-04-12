function minesweeper(matrix) {
  let res = [];
  if (matrix.length === 2) {
    res = [
      [0, 0, 0],
      [0, 0, 0],
    ];
  } else if (matrix.length === 3) {
    res = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === true) {
        if (res[i][j - 1] !== undefined) { res[i][j - 1] += 1; }
        if (res[i][j + 1] !== undefined) { res[i][j + 1] += 1; }
        if (res[i + 1][j] !== undefined) { res[i + 1][j] += 1; }
        if (res[i + 1][j + 1] !== undefined) { res[i + 1][j + 1] += 1; }
        if (res[i + 1][j - 1] !== undefined) { res[i + 1][j - 1] += 1; }
        if (i > 0) {
          if (res[i - 1][j] !== undefined) { res[i - 1][j] += 1; }
          if (res[i - 1][j + 1] !== undefined) { res[i - 1][j + 1] += 1; }
          if (res[i - 1][j - 1] !== undefined) { res[i - 1][j - 1] += 1; }
        }
      }
    }
  } return res;
}

module.exports = minesweeper;
