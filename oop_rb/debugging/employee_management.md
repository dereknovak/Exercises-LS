In this example, we need to access the serial number of another object while within the class. While `private` methods are unable to access this information, `protected` methods can, so long as it is within a class instance definition.

```ruby
class Employee
 # Omitted for brevity

 protected

 attr_reader :serial_number

 private

 def abbreviated_serial_number
   serial_number[-4..-1]
 end
end
```