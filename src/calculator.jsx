function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function mult(a, b) {
  return a * b;
}
function div(a, b) {
  let ans = a / b;
  ans = ans.toFixed(2);
  return ans;
}
export { add, sub, mult, div };
