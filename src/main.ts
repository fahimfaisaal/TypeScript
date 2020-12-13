console.clear();

//* Start from here
const msg: String = "Al-hamdulillah done";
console.log(msg);

function sum(a: number, b: number, c: Array<number>) {
  let sum;
  sum = c.map((item) => item + a + b);
  return sum;
}

const Sum = sum(5, 10, [1, 2, 6]);
console.log(Sum);
