def tricky_number
  if true
    number = 1
  else
    2
  end
end

puts tricky_number

# This will print an error as 'number' was never established as an argument.
