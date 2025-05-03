# choose mode - encrypt or decrypt
# encrypt message
# input: what is the message
# need a 'key' = number of characters to shift over
# encrypts the message
# decrypt message
# need a 'key' = number of characters to shift over
# input: what is the message
# decrypts the message

class CaeserCipher
  
  ALPHA = ('a'..'z').to_a

  def initialize() 
    @key = 0
  end

  def startGame
    puts "Welcome to Caeser Cipher\nStart by giving me a key\n"
    setKey(gets.chomp.to_i)
  end

  def setKey(given_key)
    @key = given_key
  end

  def getKey()
    @key
  end

  def encrypt
    encryptedMessage = []

    puts "Provide a message you wish to encrypt:"
    givenMessage = gets.chomp
    messageArray = givenMessage.chars
    
    messageArray.each {|letter| 
      index = ALPHA.find_index(letter)
      index += getKey
      encryptedMessage << ALPHA[index]      
  }

    encryptedMessage

  end

  def decrypt
    decryptedMessage = []

    puts "Provide a message you wish to decrypt:"
    givenMessage = gets.chomp
    messageArray = givenMessage.chars
    
    messageArray.each {|letter| 
      index = ALPHA.find_index(letter)
      index -= getKey
      decryptedMessage << ALPHA[index]      
  }

    decryptedMessage
    
  end

end

new_game = CaeserCipher.new
new_game.startGame
message = new_game.encrypt
puts "Your encrypted message is: '#{message.join()}'" 
message = new_game.decrypt
puts "Your decrypted message is: '#{message.join()}'"