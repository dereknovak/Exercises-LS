=begin
************** P **************
I: A number, integer or float, representing the degrees of an angle
O: A string, representing the degrees, minutes, and seconds of angle
>>Requirements<<
- Convert degree to degree, min, secs
  - Degree * 60 == min * 60 == sec
- Use degree symbol for degrees, ' for min, and " for sec
  - Degree syntax provided
>>Questions?<<
1. 
2. 
3. 
>>Mental Model<<
- Convert using *
- Round using format()
- String interpolation
************** E **************
dms(30) == %(30°00'00")
dms(76.73) == %(76°43'48")
dms(254.6) == %(254°36'00")
dms(93.034773) == %(93°02'05")
dms(0) == %(0°00'00")
dms(360) == %(360°00'00") || dms(360) == %(0°00'00")
>>Edge Cases<<

************** D **************

************** A **************
DEFINE dms (num)
- INIT degrees
  - degrees rounded down
- INIT minutes
  - (num - degrees) * 60
- INIT seconds
  - (minutes - minutes(round)) * 60
- Format for string interpolation
  - Helper format_dms
- RETURN string

DEFINE format_dms
- round using format
- interpolate into string
************** C **************
=end
DEGREE = "\xC2\xB0"

def dms(num)
  deg = num.floor
  min = (num - deg) * 60
  sec = (min - min.floor) * 60

  format_dms(deg, min, sec)
end

def format_dms(deg, min, sec)
  min = format("%02d", min)
  sec = format("%02d", sec)

 %(#{deg}#{DEGREE}#{min}'#{sec}")
end

puts dms(30) #== %(30°00'00")
puts dms(76.73) #== %(76°43'48")
puts dms(254.6) #== %(254°36'00")
puts dms(93.034773) #== %(93°02'05")
puts dms(0) #== %(0°00'00")
puts dms(360) #== %(360°00'00") || dms(360) == %(0°00'00")