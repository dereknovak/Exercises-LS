def greetings(name, description)
  "Hello, #{name.join(' ')}! Nice to have a #{description[:title]} #{description[:occupation]} around."
end

p greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' })
