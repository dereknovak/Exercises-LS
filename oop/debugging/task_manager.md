The issue lies within the `display_high_priority_tasks` instance method, which attempts to assign local variable `tasks` to the return of calling the `select` method on itself. Because `tasks` had not yet been initialized, it takes on a temporary value of `nil` when being evaluated, which explains the thrown exception as `Nil#select` does not exist. It's clear that this was not the intent of the programmer; they more then likely wanted to use the `tasks=` setter method. In this case,  you would need to prepend the method with `self.` so to not confuse Ruby with a local variable.

That being said, we should *not* reassign `@tasks` to just the priority task, as this can create problems in the program. Instead, change the local variable `tasks` to `high_priority_task`, then pass it into the `display` method invocation on line 39. This avoids an unnecessary reassignment and allows `tasks.select` to be evaluated.

```ruby
  def display_high_priority_tasks
    high_priority_tasks = tasks.select do |task|
      task.priority == :high
    end

    display(high_priority_tasks)
  end
```