function getDNSStats(domains) {
  let domain = domains;
  const result = {};
  for (let i = 0; i < domain.length; i++) {
    domain[i] = domain[i].split('.');
    for (let j = domain[i].length - 1; j >= 0; j--) {
      if (j === domain[i].length - 1) {
        domain[i][j] = `.${domain[i][j]}`;
      } else {
        const n = `${domain[i][j + 1]}`;
        const m = `.${domain[i][j]}`;
        domain[i][j] = n + m;
      }
    }
  }
  domain = domain.reduce((a, b) => (a.concat(b)), []);
  domain = domain.sort((a, b) => (a.length - b.length));
  for (let i = 0; i < domain.length; i++) {
    if (!result[`${domain[i]}`]) {
      result[`${domain[i]}`] = 1;
    } else {
      result[`${domain[i]}`] += 1;
    }
  }
  return result;
}

module.exports = getDNSStats;
