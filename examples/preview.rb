# Courtesy of rosettacode.org under the GNU Free Documentation License 1.2
# https://rosettacode.org/wiki/FizzBuzz#Ruby
# https://www.gnu.org/licenses/old-licenses/fdl-1.2.html

1.upto(100) do |n|
  print "Fizz" if a = (n % 3).zero?
  print "Buzz" if b = (n % 5).zero?
  print n unless (a || b)
  puts
end
