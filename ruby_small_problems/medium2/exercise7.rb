require 'date'
MONTHS_PER_YEAR = 12

def friday_13th(year)
  unlucky_days = 0

 1.upto(MONTHS_PER_YEAR) do |month|
    unlucky_days += 1 if Date.new(year, month, 13).friday?
  end

  unlucky_days
end

p friday_13th(2015) == 3
p friday_13th(1986) == 1
p friday_13th(2019) == 2
p friday_13th(2024)