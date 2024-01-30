class Pet
  attr_reader :name

  def initialize(name)
    @name = name
  end

  def to_s
    "My name is #{name}."
  end
end

# name = 'Fluffy'
# fluffy = Pet.new(name)
# puts fluffy.name
# puts fluffy
# puts fluffy.name
# puts name

name = 42
fluffy = Pet.new(name)
name += 1
puts fluffy.name
puts fluffy
puts fluffy.name
puts name

=begin
On line 1, local variable `name` is initialized and references the
integer object `42`. On line 2, `fluffy` is instantiated from the
`Pet` class, passing in `name` as an argument. Within the
`initialize` constructor method, the `to_s` method *returns the new
converted string* `"42"` and assigns it to the instance variable
`@name`. Because this return value is assigned to `@name` rather
than `name` itself, the alias relationship between `@name` and 
name` is broken.

Regardless, an integer is an immutable object, so any operations
performed within the class would not change the value of `name`.

Line 4 will output `42` due to the `:name` getter method being
established after `attr_reader`. Line 5 will output `My name is 42`
due to the overwritten `to_s` method's return value within the
`Pet` class. Line 6 will output `42` for the same reasoning as line
5. Lastly, because `name` was incremented by `1` on line 3, Line 7
will output `43`.

--Important clarification--

The `to_s` method on line 5 is **not** the same as the instance
method defined on line 8. This is because the `to_s` called on line
5 is being called on the string object `"42"` referenced by `name`,
which, when following the method lookup path, would start in the
module `Kernel`. This is a great example of why it's important to
know *exactly* which object a method is being called upon, as that
will determine the method lookup path.
=end