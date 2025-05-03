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
    @results = []
  end

  def getStockPrice target
    stockPrice[target]
  end

  def setStockPrices
    for 0..6 
      puts "Give me the stock price on #{WEEK[index]}"
      @stockPrices[index] = gets.chomp.is_i
    end
  end

  def writeStockPrices
    for 0..6
      puts "#{WEEK[index]}: #{getStockPrice index}"
    end
  end

end