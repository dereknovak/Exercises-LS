```Ruby
count = 1

until count > 10
  puts count
  count += 1
end
```
On line 1, local variable `count` is initialized and references an integer object with the value `1`. From lines 3-6, an `until` loop is employed, which continues looping until `count` is greater than `10`. Upon each loop iteration, `count` is output via calling the `puts` method, then incremented by `1`. Once `count` exceeds `10`, the loop is terminated.

In summary, the loop will iterate 10 times, outputting the integers `1` through `10`, in sequence, on separate lines.