/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const res = email;
  const k = email.lastIndexOf('@');
  return res.split('').splice(k + 1).join('');
}

module.exports = getEmailDomain;
