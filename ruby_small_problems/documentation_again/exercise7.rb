s = 'abc'
puts s.public_methods.inspect

# If only public methods that are defined or overridden by the `String` class
# puts s.public_methods(false).inspect

# `public_methods` has a default parameter of `all=true`, so reassigning all
# to `false` will only list the methods used or overridden by the `String` class