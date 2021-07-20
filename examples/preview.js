// Courtesy of rosettacode.org under the GNU Free Documentation License 1.2
// https://rosettacode.org/wiki/FizzBuzz#JavaScript
// https://www.gnu.org/licenses/old-licenses/fdl-1.2.html

(() => {
  const fizzBuzz = (n) =>
    caseOf(
      n,
      [
        [(x) => x % 15 === 0, "FizzBuzz"],
        [(x) => x % 3 === 0, "Fizz"],
        [(x) => x % 5 === 0, "Buzz"],
      ],
      n.toString()
    );
  const caseOf = (e, pvs, otherwise) =>
    pvs.reduce((a, [p, v]) => (a !== otherwise ? a : p(e) ? v : a), otherwise);
  const enumFromTo = (m, n) =>
    Array.from(
      {
        length: Math.floor(n - m) + 1,
      },
      (_, i) => m + i
    );
  const map = (f, xs) => xs.map(f);
  const unlines = (xs) => xs.join("\n");
  return unlines(map(fizzBuzz, enumFromTo(1, 100)));
})();
