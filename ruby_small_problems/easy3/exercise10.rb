def uppercase?(str)
  str == str.upcase
end

=begin

From lines 1 - 3, the uppercase? method is defined with 1 parameter: str.
Within the method, the conditional operator == is employed, which checks
whether the returned value of the upcase method's call on str is equal to str
itself. If evaluated as true, the method will return the boolean object true;
otherwise, it will return false.

The method uppercase?, when passed an empty string object, ought to return
false. Returning true from the method is deceptive as an empty string has no
character-case and therefore cannot be considered 'uppercase'.

=end