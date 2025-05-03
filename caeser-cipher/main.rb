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
    puts "Welcome to Caeser Cipher\nWhat would you like to do:\n(1) Encrypt message\n(2) Decrypt message\n(3) See rules\n(4) Exit"
    selection = gets.chomp.to_i

    case selection
    when 1
      message = encrypt
      puts "Your encrypted message is: '#{message.join()}'"
    when 2
      message = decrypt
      puts "Your decrypted message is: '#{message.join()}'"
    when 3
      rules
    when 4
      quit
    else
      puts "That's not a valid choice."
    end
  end

  def setKey(given_key)
    @key = given_key
  end

  def getKey()
    @key
  end

  def encrypt
    encryptedMessage = []
    
    puts "Start by giving me a key\n"
    setKey(gets.chomp.to_i)
    
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

    puts "Start by giving me a key\n"
    setKey(gets.chomp.to_i)

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