class StockPicker
  
  WEEK = {
    0 => "monday",
    1 => "tuesday",
    2 => "wednesday",
    3 => "thursday",
    4 => "friday",
    5 => "saturday",
    6 => "sunday" 
  }

  def initialize
    @stockPrices = []
<<<<<<< HEAD
    @currentPrice
    @results = []
  end

  def getCurrentPrice 
    currentPrice
  end

  def setCurrentPrice current
    @currentPrice = current    
  end

  def getStockPrice target
    @stockPrices[target]
  end

  def setStockPrices
    for i in 0..6 
      puts "Give me the stock price on #{WEEK[i]}"
      @stockPrices[i] = gets.chomp.to_i
=======
    @results = []
  end

  def getStockPrice target
    stockPrice[target]
  end

  def setStockPrices
    for 0..6 
      puts "Give me the stock price on #{WEEK[index]}"
      @stockPrices[index] = gets.chomp.is_i
>>>>>>> 272e16d90cffb3e216a020a445cac9dea381b047
    end
  end

  def writeStockPrices
<<<<<<< HEAD
    for i in 0..6
      puts "#{WEEK[i]}: #{getStockPrice i}"
    end
  end

  def main
    setStockPrices
    writeStockPrices
  end

end

run = StockPicker.new
run.main
=======
    for 0..6
      puts "#{WEEK[index]}: #{getStockPrice index}"
    end
  end

end
>>>>>>> 272e16d90cffb3e216a020a445cac9dea381b047
