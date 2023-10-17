name = 'Bob'
save_name = name
name.upcase!
puts name, save_name

=begin

This example demonstrates how Ruby appears to be treat mutative objects as
pass by reference when a destructive method is called on them. On line 3, the
destructive upcase! method is called on local variable name, mutating its
referenced string object 'Bob' to 'BOB'. Because name and save_name point to
the same object, as indicated on line 2, their values are identical and thus
BOB is output twice.

=end