// Courtesy of rosettacode.org under the GNU Free Documentation License 1.2
// https://rosettacode.org/wiki/FizzBuzz#C
// https://www.gnu.org/licenses/old-licenses/fdl-1.2.html

#include <stdio.h>

int main (void)
{
  int i;
  for (i = 1; i <= 100; i++)
  {
    if (!(i % 15))
      printf ("FizzBuzz");
    else if (!(i % 3))
      printf ("Fizz");
    else if (!(i % 5))
      printf ("Buzz");
    else
      printf ("%d", i);

    printf("\n");
  }
  return 0;
}
