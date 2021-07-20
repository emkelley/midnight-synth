// Courtesy of rosettacode.org under the GNU Free Documentation License 1.2
// https://rosettacode.org/wiki/FizzBuzz#Go
// https://www.gnu.org/licenses/old-licenses/fdl-1.2.html

package main

import "fmt"

func main() {
	for i := 1; i <= 100; i++ {
		switch {
		case i%15 == 0:
			fmt.Println("FizzBuzz")
		case i%3 == 0:
			fmt.Println("Fizz")
		case i%5 == 0:
			fmt.Println("Buzz")
		default:
			fmt.Println(i)
		}
	}
}
