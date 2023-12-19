text = File.read('exercise1.txt')

def longest_sentence(text)
  sentences = text.split(/\.|\?|!/)
  sentences.sort_by! { |sentence| sentence.split.size }
  sentences.last.split.size
end

puts "The longest sentence is #{longest_sentence(text)} words!"