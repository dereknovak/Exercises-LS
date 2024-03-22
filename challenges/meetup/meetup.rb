=begin
Class Meetup
Methods
- day
- initialize
=end

require 'date'

class Meetup
  WEEKDAYS = { sunday: 0, monday: 1, tuesday: 2, wednesday: 3,
               thursday: 4, friday: 5, saturday: 6 }

  WEEKS = { first: 1, second: 2, third: 3, fourth: 4, fifth: 5 }

  DAYS_IN_MONTH = { 30 => [2, 4, 6, 9, 11],
                    31 => [1, 3, 5, 7, 8, 10, 12] }

  def initialize(year, month)
    @year = year
    @month = month
  end

  def day(weekday, schedule)
    range = date_range(schedule)
    wday_method = method_select(weekday)

    range.map! { |day| Date.civil(year, month, day) }

    range.find(&wday_method)
  rescue Date::Error
    nil
  end

  private

  def date_range(schedule)
    case schedule.downcase
    when 'first' then (1..7).to_a
    when 'second' then (8..14).to_a
    when 'third' then (15..21).to_a
    when 'fourth' then (22..28).to_a
    when 'fifth' then (29..last_day).to_a
    when 'last' then last_range
    when 'teenth' then (13..19).to_a
    end
  end

  def last_day
    if Date.civil(year).leap? && month == 2
      29
    elsif DAYS_IN_MONTH[30].include?(month)
      30
    else
      31
    end
  end

  def last_range
    if Date.civil(year).leap? && month == 2
      (23..29).to_a
    elsif month == 2
      (22..28).to_a
    elsif DAYS_IN_MONTH[30].include?(month)
      (24..30).to_a
    else
      (25..31).to_a
    end
  end

  def method_select(weekday)
    case weekday.downcase
    when 'monday' then :monday?
    when 'tuesday' then :tuesday?
    when 'wednesday' then :wednesday?
    when 'thursday' then :thursday?
    when 'friday' then :friday?
    when 'saturday' then :saturday?
    when 'sunday' then :sunday?
    end
  end

  attr_reader :year, :month
end
