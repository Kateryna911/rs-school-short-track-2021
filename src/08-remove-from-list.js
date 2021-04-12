function removeKFromList(l, k) {
  let res = l;
  if (res.value === k) {
    res = res.next;
  }
  if (res.value === k) {
    res = res.next;
  } else if (res.next.value === k) {
    res.next = res.next.next;
  } else if (res.next.next.value === k) {
    res.next.next = res.next.next.next;
  }
  return res;
}

module.exports = removeKFromList;
