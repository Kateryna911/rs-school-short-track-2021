function renameFiles(names) {
  const result = names;
  const index = [];
  do {
    for (let i = 0; i < names.length; i++) {
      const k = result.filter((item) => (item === `${result[i]}`));
      if (k.length > 1) {
        index.push(i);
      }
    } if (index.length === 0) break;
    for (let j = 1; j < index.length; j++) {
      result[index[j]] += `(${j})`;
    }
    index.length = 0;
  } while (result !== Array.from(new Set(result)));
  return result;
}

module.exports = renameFiles;
