=begin

- If anything is said within the block, record for later
- If nothing is said, do not record

- Use the `listen` method for listening.
  - If there is a block, use the record method to record it
  - If no block, then do nothing

=end

class Device
  def initialize
    @recordings = []
  end

  def record(recording)
    @recordings << recording
  end

  def listen
    record yield if block_given?
  end

  def play
    puts @recordings.last
  end
end

listener = Device.new
listener.listen { "Hello World!" }
listener.listen
listener.play # Outputs "Hello World!"