=begin
Class Robot
Methods
  - initialize
  - name

- When instantiated, robot gets a random name
- If requesting a name, a new random one will be generated
  - Cannot use the same name twice

- Names should be 2 upcase letters followed by 3 nums

=end

class Robot
  attr_reader :name

  @@names_used = []

  def initialize
    random_name
  end

  def reset
    random_name
  end

  def self.used
    @@names_used
  end

  private

  attr_writer :name

  def random_name
    new_name = generate_name
    @@names_used << new_name
    self.name = new_name
  end

  def generate_name
    loop do
      new_name = ''
      5.times do |i|
        case i
        when 0..1 then new_name << ('A'..'Z').to_a.sample
        when 2..4 then new_name << rand(10).to_s
        end
      end

      return new_name unless @@names_used.include?(new_name)
    end
  end
end
