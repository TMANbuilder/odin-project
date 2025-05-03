class SubString

  def initialize
    @message
  end

  def getMessage
    @message
  end

  def setMessage(user_message)
    @message = user_message
  end

  def main
    puts "Welcome to the Substring Tool"
    puts "This tools counts the number of times a word appears in a line of text"
    puts "Start by typing a line of text in the input field"
    setMessage gets.chomp 
  end
end

run = SubString.new
run.main