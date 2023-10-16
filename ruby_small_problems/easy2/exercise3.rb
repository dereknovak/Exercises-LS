def prompt(message)
  puts "=> #{message}"
end

def integer?(num)
  /^-?\d+$/.match(num)
end

def float?(num)
  /\d/.match(num) && /^-?\d*\.?\d*$/.match(num)
end

def valid_number?(num)
  integer?(num.to_s) || float?(num.to_s)
end

def get_bill
  prompt('What is the bill?')

  loop do
    bill = gets.chomp.to_f

    if valid_number?(bill)
      return bill
    else
      prompt('Not a valid number.')
    end
  end
end

def get_tip
  prompt('What is the tip percentage?')

  loop do
    tip_percent = gets.chomp.to_f

    if valid_number?(tip_percent)
      return tip_percent / 100
    else
      prompt('Not a valid number.')
    end
  end
end

def calculate_tip(bill, tip_percent)
  (bill * tip_percent).round(2)
end

def calculate_total(bill, tip)
  (bill + tip).round(2)
end

bill = get_bill
tip_percent = get_tip
tip = calculate_tip(bill, tip_percent)
total = calculate_total(bill, tip)

tip = format("%.2f", tip)
total = format("%.2f", total)

prompt("The tip is $#{tip}.")
prompt("The total is $#{total}.")
