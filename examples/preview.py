# Courtesy of rosettacode.org under the GNU Free Documentation License 1.2
# https://rosettacode.org/wiki/FizzBuzz#Python:_Simple_-_no_duplication
# https://www.gnu.org/licenses/old-licenses/fdl-1.2.html

for n in range(1, 101):
  response = ''

  if not n % 3:
    response += 'Fizz'
  if not n % 5:
    response += 'Buzz'

  print(response or n)
