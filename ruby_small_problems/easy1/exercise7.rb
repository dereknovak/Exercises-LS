=begin
*** P ***
I: 4 Strings, individually prompted
O: A string using the 4 inputted strings
>>Requirements:
- Prompt user 4 times for 4 different strings
- Use string interpolation to add to results string

>>Questions?
1. Do I need to validate the string inputs?
2. Should I keep the inputted case, or adapt it to my story?
3. 
>>Mental Model
- Prompt user 4 times
1. noun
2. verb
3. adverb
4. adjective
- With each input, validate that it's a string
*** E ***
Enter a noun: dog
Enter a verb: walk
Enter an adjective: blue
Enter an adverb: quickly

Do you walk your blue dog quickly? That's hilarious!
>>Edge Cases
- number
- blank
*** D ***
- Hash, for inputted answers
  choices = {noun: '', verb: '', adj: '', adv: ''}
*** A ***
- define method `valid_input?`
  - string is not empty
  - string in not an integer

- define method `get_choice`
  - prompt user
  - get choice
    - validate choice
    - push to hash if valid
    - Repeat if not valid

- get user noun
- get user verb
- get user adj
- get user adv
- print message
*** C ***
=end

choices = { noun: '',
            verb: '',
            adjective: '',
            adverb: '' }

# Methods

def prompt(str)
  puts "=> #{str}"
end

def valid_input?(str)
  /^[A-Za-z]+$/.match?(str)
end

def get_choice(hash, type)
  if type.start_with?('a')
    prompt("Enter an #{type}:")
  else
    prompt("Enter a #{type}:")
  end

  loop do
    choice = gets.chomp.downcase

    if valid_input?(choice)
      hash[type.to_sym] = choice
      break
    else
      prompt("Must input a word.")
    end
  end
end

# Program Start

get_choice(choices, 'noun')
get_choice(choices, 'verb')
get_choice(choices, 'adjective')
get_choice(choices, 'adverb')

prompt("Do you #{choices[:verb]} your #{choices[:adjective]} #{choices[:noun]} #{choices[:adverb]}? That's hilarious!")
