=begin
************** P **************
I: A string, representing hours/minutes in clock syntax
O: The total amount of minutes before/after midnight
>>Requirements<<
- Write 2 methods (after_midnight, before_midnight)
- after_midnight
  - Counts total minutes between midnight and time going forward
- before_midnight
  - Counts total minutes between midnight and time going backward
- CANNOT USE Date/Time methods
* If midnight, returns 0
>>Questions?<<
1. Can I use to_i for this problem?
2. No example uses leading 0s, should I account for these, too?
3. 
>>Mental Model<<
- Split clock str into hr/min
- Use to_i to convert to int
- Convert hours to minutes, then add to minutes
- If multiple of 1440 min, reset to 0
************** E **************
after_midnight('00:00') == 0
before_midnight('00:00') == 0
after_midnight('12:34') == 754
before_midnight('12:34') == 686
after_midnight('24:00') == 0
before_midnight('24:00') == 0
>>Edge Cases<<

************** D **************
Array, to contain the split hr/min
************** A **************
DEFINE after_midnight (clock_str)
- INIT clock_arr
  - Split clock str by : and assign
- Convert elements to integers
- Convert hrs to mins
- INIT total minutes
  - Sum clock array
- LOOP
  - Divide by 1440 until less than 1440 (helper)
- RETURN sum
DEFINE before_midnight (clock_str)
************** C **************
=end

def convert_hours_to_mins(hours)
  hours * 60
end

def reduce_to_1_day(total_mins)
  until total_mins < 1440
    total_mins -= 1440
  end
  total_mins
end

def convert_clock_to_mins(clock_str)
  clock_arr = clock_str.split(':').map(&:to_i)
  clock_arr[0] = convert_hours_to_mins(clock_arr[0])
  clock_arr
end

def after_midnight(clock_str)
  clock_arr = convert_clock_to_mins(clock_str)
  total_mins = clock_arr.sum
  reduce_to_1_day(total_mins)
end

def before_midnight(clock_str)
  clock_arr = convert_clock_to_mins(clock_str)
  total_mins = clock_arr.sum
  total_mins = 1440 - total_mins
  reduce_to_1_day(total_mins)
end

p after_midnight('00:00') == 0
p before_midnight('00:00') == 0
p after_midnight('12:34') == 754
p before_midnight('12:34') == 686
p after_midnight('24:00') == 0
p before_midnight('24:00') == 0