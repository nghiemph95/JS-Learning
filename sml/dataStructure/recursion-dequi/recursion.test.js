// recursion: de qui

/** fibonacci - loop*/
function fibonacciV1(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;

  let prev = 0;
  let curr = 1;
  let next = 1;
  let i = 2;
  while (i <= n) {
    next = prev + curr;
    i++;
    prev = curr;
    curr = next;
  }
  return next;
}

/** fibonancci - recursion de qui
 */
function fibonacci(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

describe("Name of the group", () => {
  test("should ", () => {
    [0, 1, 1, 2, 3, 5, 8, 13, 21, 34].forEach((element, n) => {
      expect(fibonacci(n)).toBe(element);
    });
  });
});
