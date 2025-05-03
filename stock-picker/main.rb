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

  def setResults index, value 
    @results[index] = value      
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
    end
  end

  def writeStockPrices
    for i in 0..6
      puts "#{WEEK[i]}: #{getStockPrice i}"
    end
  end

  def calcProfits 
    bestProfit = 0
    targetProfit

    for i in 0..6
      @stockPrices.each { | value | 
        targetProfit = getStockPrice(i) - value
        if targetProfit > bestProfit 
          bestProfit = targetProfit
          setResults i, y
        end 
      }         
    end
  end

  def main
    setStockPrices
    writeStockPrices
  end

end

run = StockPicker.new
run.main
