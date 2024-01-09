def solution(num)
  (1...num).select { |n| n % 3 == 0 || n % 5 == 0 }.sum
end

p solution(10) == 23
p solution(20) == 78
p solution(200) == 9168