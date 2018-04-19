export const mapArrToObj = (arr, key, fn) =>
  (a => (
    (a = [arr, arr.map(fn)]), a[0].reduce((acc, val, ind) => ((acc[val[key]] = a[1][ind]), acc), {})
  ))();
