class Calculator {

    constructor() {
        this.screen = document.getElementById("screen");
        this.argumentScreen = document.getElementById("argument-screen");
        this.currentArgument = [];
        this.currentOperand = 0;
        this.storedOperand = 0;
        this.nextOperand = false;
        this.operator = null;
        this.result = null;
        this.memory = [];
    }

    setResultScreen(targetValue) {
        this.screen.innerText = String(targetValue);
    }

    getPreviousArgument(previousArgument, previousResult) {
        
        console.log(`previousArgument is ${previousArgument}`);
        console.log(`previousResult is ${previousResult}`);
        
        this.resetCalculator();
        this.setResult(previousResult);
        this.setCurrentArgument(previousArgument);
        this.setArgumentScreen(previousArgument);

        console.log("in the getPreviousArgument method...");
        console.log("result: " + this.getResult());

        this.setResultScreen(this.getResult());    
    }

    setNextOperand(targetValue = null) {
        
        if (targetValue === null) {
            this.nextOperand = !this.nextOperand;    
        } else {
            this.nextOperand = targetValue;
        }
        
    }
    
    getNextOperand() {
        return this.nextOperand;
    }
    
    setCurrentOperand(targetValue) {
        this.currentOperand = targetValue;
    }
    
    setStoredOperand(targetValue) {
        this.storedOperand = targetValue;
    }

    getCurrentOperand() {
        return this.currentOperand;
    }

    getStoredOperand() {
        return this.storedOperand;
    }

    setOperator(targetValue) {

        switch (targetValue) {
            case "+/-":
                this.operator = "+/-";
                this.setNextOperand();
                break;
            case "%":
                this.operator = "%";
                this.setNextOperand();
                break;
            case "/":
                this.operator = "/";
                this.setNextOperand();
                break;
            case "x":
                this.operator = "x";
                this.setNextOperand();
                break;
            case "-":
                this.operator = "-";
                this.setNextOperand();
                break;
            case "+":
                this.operator = "+";
                this.setNextOperand();
                break;
            default:
                console.log("Error");
                return;
        }
    }

    getOperator() {
        return this.operator;
    }

    setScreen(targetOperand) {

        console.log("Entering setScreen...");

        if (targetOperand === "current") {
            console.log("current...");
            this.screen.innerText = this.getCurrentOperand();
        } else if (targetOperand === "stored") {
            console.log("stored...");
            this.screen.innerText = this.getStoredOperand();
        } else if (targetOperand === "result") {
            console.log("updating the results...");
            this.screen.innerText = this.getResult();
        } else if (targetOperand === "reset") {
            console.log("reset...");
            this.screen.innerText = 0;
        } else {
            console.log("Error when setting screen");
        }
        
    }

    setArgumentScreen(targetValue) {
        console.log(`The targetValue is: ${targetValue}`);
        this.argumentScreen.innerText = String(targetValue);
    }

    getResult() {
        return this.result;
    }

    setResult(targetValue) {
        this.result = targetValue;
    }

    getCurrentArgument() {
        return this.currentArgument;
    }

    setCurrentArgument(targetValue) {
        let tempArgument = this.getCurrentArgument();
        this.currentArgument = String(tempArgument) + " " + String(targetValue);
    }

    resetCurrentArgument() {
        this.currentArgument = "";
    }

    moveCurrentOperand() {
        let currentOperand = this.getCurrentOperand();
        this.setStoredOperand(currentOperand);
    }

    moveCurrentArgument() {
        let array = this.memory;
        let tempArray = [];
        
        console.log("memroy is: " + this.memory[0]);

        tempArray.push(this.getCurrentArgument());
        tempArray.push(this.getResult());

        console.log("FROM WITHIN moveCurrentArgument()");
        console.log("tempArray[0]:" + tempArray[0]);
        console.log("tempArray[0]:" + tempArray[1]);

        array.push(tempArray);
        this.resetCurrentArgument();
    }

    setMemoryScreen() {
        const memoryContainer = document.getElementById("memory-container");
        let tempArray = this.getMemoryArguments();  

        const toBeRemoved = memoryContainer.querySelectorAll(".memory-record");
        toBeRemoved.forEach(target => target.remove());

        tempArray.forEach((target, index) => {
            
            console.log("target[0]: " + target[0]);
            console.log("target[1]: " + target[1]);
            
            const container = document.createElement("div");
            const argument = document.createElement("div");
            const result = document.createElement("div");
            
            container.className = "memory-record";
            argument.className = "memory-result";
            result.className = "memory-argument";
            
            result.innerText = target[0];
            argument.innerText = target[1];
        
            // I THINK THE ISSUE IS HERE!!!!!
            container.appendChild(argument).append(result);
            // WORK ON 
            container.addEventListener("click", () => {

                console.log("IVE BEEN PRESSED");
                const targetArgument = container.querySelector(".memory-argument").innerText;
                const targetResult = container.querySelector(".memory-result").innerText; 

                console.log(`targetArgument is ${targetArgument}`);
                console.log(`targetResult is ${targetResult}`);

                this.getPreviousArgument(targetArgument, targetResult);

            });

            memoryContainer.appendChild(container);
        });   
    }

    getMemoryArguments() {
        return this.memory;
    }

    resetCalculator() {
        this.setCurrentOperand(0);
        this.setStoredOperand(0);
        this.setNextOperand(false);
        this.setOperator(null);
        this.setResult(null);
        this.setScreen("reset");
        this.resetCurrentArgument();
        this.setArgumentScreen("");
    }

    updateOperand(targetValue) { 

        let currentOperandValue = String(this.getCurrentOperand());

        if (currentOperandValue === "0") {
            this.setCurrentOperand(targetValue);
            this.setScreen("current");
        } else {
            let newValue = (String(this.currentOperand) + String(targetValue));     
            this.setCurrentOperand(newValue);
            this.setScreen("current");
        }
    }

    updateOperator(targetValue) {

        this.setArgumentScreen("");
        this.setCurrentArgument(this.getCurrentOperand());
        this.setCurrentArgument(targetValue);
        this.moveCurrentOperand();
        this.setCurrentOperand(0);
        this.setOperator(targetValue);
        this.setScreen("stored");
    }

    calculate() {
        let storedOperand = Number(this.getStoredOperand()); 
        let currentOperand = Number(this.getCurrentOperand());
        let operator = this.getOperator();
        let result = "";

        this.setCurrentArgument(String(currentOperand));

        console.log(`storedOperator: ${storedOperand}`);
        console.log(`currentOperator: ${currentOperand}`);
        console.log(`operator: ${operator}`);

        console.log(`Type stored: ` + typeof(storedOperand));
        console.log(`Type current: ` + typeof(currentOperand));

        switch (operator) {
            case "+/-":
                this.operator = "+/-";
                break;
            case "%":
                this.operator = "%";
                break;
            case "/":
                result = storedOperand / currentOperand;
                break;
            case "x":
                result = storedOperand * currentOperand;
                break;
            case "-":
                result = storedOperand - currentOperand;
                break;
            case "+":
                result = storedOperand + currentOperand;
                break;
            default:
                console.log("Error");
                return;
        }

        this.setResult(result);
        this.setScreen("result");
        this.setArgumentScreen(this.getCurrentArgument());
        this.nextRound();
        this.setMemoryScreen();
        return;

    }

    nextRound() {

        this.moveCurrentArgument();
        this.setCurrentOperand(this.getResult());
        this.setStoredOperand(0);
        this.setOperator(null);
        this.setResult(null);

        console.log("nextRound() ran...");
        console.log("current " + this.getCurrentOperand());
        console.log("stored " + this.getStoredOperand());
        console.log("operator " + this.getOperator());

    }

}

const calculator = new Calculator();

function submitOperand(targetValue) {
    calculator.updateOperand(targetValue);
}

function submitOperator(targetValue) {
    calculator.updateOperator(targetValue);
}

function calculate() {
    calculator.calculate();
}

function clearCalcScreen() {
    calculator.resetCalculator();
}