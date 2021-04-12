function getSumOfDigits(n) {
  let nn = n.toString().split('').reduce((a, b) => (a + Number(b)), 0);
  if (nn.toString().length > 1) {
    nn = nn.toString().split('').reduce((a, b) => (a + Number(b)), 0);
  }
  return nn;
}

module.exports = getSumOfDigits;
