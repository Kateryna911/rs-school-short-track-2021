function deleteDigit(n) {
  const k = n.toString().split('');
  k.indexOf(`${Math.min(...k)}`);
  k.splice(k.indexOf(`${Math.min(...k)}`), 1);
  return Number(k.join(''));
}

module.exports = deleteDigit;
