class Calculator {

    constructor() {
        this.screen = document.getElementById("screen");
        this.argumentScreen = document.getElementById("argument-screen");
        this.currentArgument = "";
        this.currentOperand = 0;
        this.storedOperand = 0;
        this.nextOperand = false;
        this.operator = null;
        this.result = null;
        this.memory = [];
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

        this.setCurrentArgument(this.getCurrentOperand());
        this.setCurrentArgument(targetValue);
        this.moveCurrentOperand();
        this.setCurrentOperand(0);
        this.setOperator(targetValue);
        this.setScreen("stored");

        console.log("current argument is: " + this.getCurrentArgument());

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
        return;

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