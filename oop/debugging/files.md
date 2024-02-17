When attempting to locate the object referenced by the constant `FORMAT` on line 19, Ruby is unable to find the source, throwing the `NameError` exception. This is because constants have *lexical scope*, meaning that they are only scoped at the location where it is defined. Each of the 3 constants defined in the code (lines 24, 28, and 32) are defined at their repsective classes, and are therefore only available within their class.

A simple usage of the constant resolution operator will fix this problem, as it will tell Ruby specifically where to look for the constant. In order to reference the correct class, you can specify `self` to reference the calling object, call the `class` method on it to return the object's class, then include `FORMAT` alongside the constant resolution operator.

```ruby
def to_s
 "#{name}.#{self.class::FORMAT}"
end
```