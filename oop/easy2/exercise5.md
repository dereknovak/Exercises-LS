```ruby
class Something
  def initialize
    @data = 'Hello'
  end

  def dupdata
    @data + @data
  end

  def self.dupdata
    'ByeBye'
  end
end

thing = Something.new
puts Something.dupdata
puts thing.dupdata
```
The following code will output `ByeBye`, then `HelloHello`.

On line 15, `thing` is instantiated from the `Something` class. On line 16, the class method `dupdata` is called on `Something`, outputting `ByeBye` to the console. This method is determined by the prepended `self` on line 10, which signifies a class method. On line 7, the instance method `dupdata` is called on `thing`, outputting `HelloHello` to the console. Because this method is *not* prepended by `self` on line 6, it is considered an instance method and can be called on any instances of the `Something` class.