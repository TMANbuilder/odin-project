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

  def getResults target
    @results[target]
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

  def writeResults
    for i in 0..6
      puts "If you bought #{WEEK[i]}, best time to sell would be: #{WEEK[getResults i]}, for a profit of: #{getProfit i}"
    end
  end

  def getProfit date 
    buy = getStockPrice date
    sellDate = getResults date
    sell = getStockPrice sellDate
    profit = sell - buy
  end

  def calcProfits 
    for i in 0..6
      bestProfit = 0
      targetProfit = 0

      purchasePrice = getStockPrice(i)
      puts "Target Price is: #{purchasePrice}"

      for y in (i + 1)..6
        sellPrice = getStockPrice(y)

        puts "Target: #{sellPrice} - #{purchasePrice}"
        targetProfit = sellPrice - purchasePrice
        puts "Profit: #{targetProfit}"

        if targetProfit > bestProfit
          puts "RESULTS BEING SET" 
          bestProfit = targetProfit
          setResults i, y
        end
      end          
    end
  end

  def main
    setStockPrices
    writeStockPrices
    calcProfits
    writeResults
  end

end

run = StockPicker.new
run.main
