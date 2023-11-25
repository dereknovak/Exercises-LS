=begin
************** P **************
I: An integer, representing the number of minutes before/after midnight
O: A string, representing "hh:mm"
>>Requirements<<
- CANNOT USE
  - Date/Time classes
- Convert time to hh:mm
- If negative, reverse from 24hr. If positive, add from 0hr
* If exceeds a day, resets to 0 or 24
>>Questions?<<
1. What if the number exceeds 24hrs?
2. 
3. 
>>Mental Model<<
- Convert minutes to hours (divmod?)
- Use string interpolation "(hr):(min)"
- format("%3d")
************** E **************
time_of_day(0) == "00:00"
time_of_day(-3) == "23:57"
time_of_day(35) == "00:35"
time_of_day(-1437) == "00:03"
time_of_day(3000) == "02:00"
time_of_day(800) == "13:20"
time_of_day(-4231) == "01:29"
>>Edge Cases<<

************** D **************

************** A **************
DEFINE time_of_day (total_minutes)
- INIT Current_hour
- INIT Current_min
- Find hours and minutes of total_minutes
  - Divmod, set to hours and minutes
  - Divide until less than 24 hours
- IF positive
  - Add from 0
  - Push to current_hour
- IF negative
  - Subtract from 24
  - Push to current_min
- Interpolate hour/min into " : "


************** C **************
=end

# MINUTES_PER_HOUR = 60
# HOURS_PER_DAY = 24
# MINUTES_PER_DAY = 1440

# def reduce_to_day(minutes)
#   loop do
#     return minutes if minutes.abs < MINUTES_PER_DAY
#     minutes -= (minutes / minutes.abs) * MINUTES_PER_DAY
#   end
# end

# def format_to_clock(hours, minutes)
#   format("%02d:%02d", hours, minutes)
# end

# def time_of_day(total_minutes)
#   total_minutes = reduce_to_day(total_minutes)
#   hours, minutes = total_minutes.divmod(MINUTES_PER_HOUR)
#   hours += 24 if hours.negative?
#   format_to_clock(hours, minutes)
# end
require 'pry'

MINUTES_IN_DAY = 1440
MINUTES_IN_HOUR = 60

def time_of_day(minutes)
  minutes = minutes % MINUTES_IN_DAY
  binding.pry
  hours, minutes = minutes.divmod(MINUTES_IN_HOUR)
  "#{format('%02d', hours)}:#{format('%02d', minutes)}"
end

p time_of_day(0) == "00:00"
p time_of_day(-3) == "23:57"
p time_of_day(35) == "00:35"
p time_of_day(-1437) == "00:03"
p time_of_day(3000) == "02:00"
p time_of_day(800) == "13:20"
p time_of_day(-4231) == "01:29"