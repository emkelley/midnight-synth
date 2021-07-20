<!--
  Courtesy of rosettacode.org under the GNU Free Documentation License 1.2
  https://rosettacode.org/wiki/FizzBuzz#PHP
  https://www.gnu.org/licenses/old-licenses/fdl-1.2.html
-->

<?php
for ( $i = 1; $i <= 100; ++$i )
{
  $str = "";

  if (!($i % 3 ))
    $str .= "Fizz";

  if (!($i % 5 ))
    $str .= "Buzz";

  if (empty( $str ))
    $str = $i;

  echo $str . "\n";
}
?>
