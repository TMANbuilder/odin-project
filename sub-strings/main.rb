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
    results = {}
    puts "Welcome to the Substring Tool"
    puts "This tools counts the number of times a word appears in a line of text"
    puts "Start by typing a line of text in the input field"
    setMessage gets.chomp
    array = getMessage.split(" ")
    array.each {
      |word|
      results[word] = array.count(word)
    }    
    results
  end
end

run = SubString.new
message = run.main
puts "String count is:  #{message}"