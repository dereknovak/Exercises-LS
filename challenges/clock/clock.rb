=begin
Class Clock
Methods
- at (class) (one or two arguments)
- +/-
- to_s

- Can add/subtract mins from the clock object
  - This should not mutate the object, create a new `Clock` object
- 2 clocks with the same time should equal one another
- military time

=end

class Clock
  def initialize(hours, minutes)
    @hours = hours
    @minutes = minutes
  end

  def +(min)
    self.minutes += min

    until hours < 24 && minutes < 60
      if minutes >= 60
        self.hours += 1
        self.minutes -= 60
      end

      self.hours -= 24 if hours >= 24
    end

    Clock.new(hours, minutes)
  end

  def -(min)
    self.minutes -= min

    until hours >= 0 && minutes >= 0
      if minutes < 0
        self.hours -= 1
        self.minutes += 60
      end

      self.hours += 24 if hours <= 0
    end

    Clock.new(hours, minutes)
  end

  def ==(other)
    (hours == other.hours) &&
      (minutes == other.minutes)
  end

  def to_s
    format('%02d:%02d', hours, minutes)
  end

  def self.at(hours, minutes = 0)
    Clock.new(hours, minutes)
  end

  protected

  attr_reader :hours, :minutes

  private

  attr_writer :hours, :minutes
end
