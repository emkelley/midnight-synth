// Courtesy of rosettacode.org under the GNU Free Documentation License 1.2
// https://rosettacode.org/wiki/FizzBuzz#C.23
// https://www.gnu.org/licenses/old-licenses/fdl-1.2.html

class Program
{
  static void Main()
  {
    for (uint i = 1; i <= 100; i++) {
      string s = null;

      if (i % 3 == 0)
        s = "Fizz";

      if (i % 5 == 0)
        s += "Buzz";

      System.Console.WriteLine(s ?? i.ToString());
    }
  }
}
