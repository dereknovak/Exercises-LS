def compute(value)
  block_given? ? yield(value) : 'Does not compute.'
end

# p compute { 5 + 3 } == 8
# p compute { 'a' + 'b' } == 'ab'
# p compute == 'Does not compute.'

p compute(1) { |num| num + 2 } == 3
p compute('hello') { |str| str + ' world!' } == 'hello world!'
p compute('Does this compute?') == 'Does not compute.'