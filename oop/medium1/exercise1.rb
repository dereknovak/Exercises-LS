class Machine
  def start
    self.flip_switch(:on)
  end
  
  def stop
    self.flip_switch(:off)
  end

  def current_status
    puts switch
  end
  
  private
  
  attr_accessor :switch

  def flip_switch(desired_state)
    self.switch = desired_state
  end
end

printer = Machine.new
printer.start
printer.stop
printer.current_status
