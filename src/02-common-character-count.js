function getCommonCharacterCount(s1, s2) {
  let counter = 0;
  let s3 = s1;
  let s4 = s2;
  for (let i = 0; i < Math.max(s1.length, s2.length); i++) {
    const reg = new RegExp(`\\${s4[i]}`, '');
    if (s3.indexOf(`${s4[i]}`) >= 0) {
      counter++;
      s3 = s3.replace(reg, ' ');
    }
    s4 = s4.replace(reg, ' ');
  }
  return counter;
}

module.exports = getCommonCharacterCount;
