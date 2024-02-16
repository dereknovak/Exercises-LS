The problem with this example is that, when invoking `puts`, the `GeoLocation#to_s` instance method is automatically applied to each `Person` object, which outputs its location using the `"(#{latitude}, #{longitude})"` format. However, because we are comparing the objects *before* invoking `puts` online 39, the `to_s` method is never called, and `==` compares the `GeoLocation` objects themselves, which are different.

A great workaround for this problem is to define a new `GeoLocation#==` instance method that will override the `BasicObject#==` method. Within the method, compare the latitude and longitude of one object with another. By doing so, rather than comparing the instance objects, their values will be compared instead, returning `true`.

```ruby
class GeoLocation
  # Omitted for brevity

  def ==(other)
    [latitude, longitude] == [other.latitude, other.longitude]
  end
end
```