class Banner
  def initialize(message, width=0)
    @message = message
    @width = width
  end

  def to_s
    [horizontal_rule, empty_line, message_line, empty_line, horizontal_rule].join("\n")
  end

  private

  def horizontal_rule
    "+-#{'-' * (message.size + width)}-+"
  end

  def empty_line
    "| #{' ' * (message.size + width)} |"
  end

  def message_line
    "| #{' ' * (width / 2)}#{message}#{' ' * (width / 2)} |"
  end

  attr_reader :message, :width
end

banner = Banner.new('To boldly go where no one has gone before', 4)
puts banner

# banner = Banner.new('')
# puts banner