In this example, the `display_data` instance method is attempting to be called on the value of `books` within the `community_library` object. While this method does exist within the `Book` class, the method is being called on the array object containing the list of books, rather than the books themselves. To fix this, you can simply invoke the `each` iterative method on `books` and call `display_data` on each individual book.

```ruby
community_library.books.each(&:display_data)
```

To further implement this into a more "Object Oriented" approach, we can take this iterative method and create a library instance method that will perform it instead. Because outputting the current set of books is likely a recurring action, it's best to keep this as its own method.

```ruby
class Library
  # omitted for brevity

  def display_books
    books.each(&:display_data)
  end
end
```
