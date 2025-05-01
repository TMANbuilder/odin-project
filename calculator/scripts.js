class Calculator {

    constructor() {
        this.screen = document.getElementById("screen");
        this.argument = "";
        this.storedOperand = 0;
        this.currentOperand = 0;
        this.nextOperand = false;
        this.operator = null;
        this.result = null;
    }

    setNextOperand() {
        this.nextOperand = !this.nextOperand;
        console.log(`nextOperand is set to: ` + this.nextOperand);
    }
    
    getNextOperand() {
        return this.nextOperand;
    }
    
    setStoredOperand(targetValue) {
        this.storedOperand = targetValue;
    }
    
    setCurrentOperand(targetValue) {
        this.currentOperand = targetValue;
    }

    getStoredOperand() {
        return this.storedOperand;
    }

    getCurrentOperand() {
        return this.currentOperand;
    }

    getOperator() {
        return this.operator;
    }

    setScreen(targetValue) {
        this.screen.innerText = targetValue;
    }

    clearScreen() {
        this.screen.innerText = 0;
    }

    resetOperand() {
        this.setCurrentOperand(0);
        this.setStoredOperand(0);

        console.log("After reset...");
        console.log("currentOperand: " + this.currentOperand);
        console.log("storedOperand: " + this.storedOperand);
    }

    resetOperator() {
        this.setOperator(null);
    }

    resetNextOperand() {
        this.nextOperand = false;
    }

    setOperand(targetValue) {
        if (this.operator != null) {
            this.setStoredOperand(this.currentOperand);
            this.setCurrentOperand(0);
        }
        this.currentOperand = targetValue;
    }

    updateOperand(targetValue) {
        
        let currentValue = this.screen.innerText;

        if (this.getNextOperand() === true) {
            this.setOperand(targetValue);
            this.setScreen(this.currentOperand);
            this.setNextOperand();
            console.log('Inside the updateOperand()');
            return;
        } 

        if (currentValue === "0") {
            this.setOperand(targetValue);
            this.setScreen(this.currentOperand);
        } else {
            let newValue = (String(this.currentOperand) + String(targetValue));     
            this.setOperand(newValue);
            this.setScreen(this.currentOperand);
        }
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

    calculate() {
        let oper_1 = Number(this.getStoredOperand()); 
        let oper_2 = Number(this.getCurrentOperand());
        let operator = this.getOperator();

        console.log(`oper_1: ${oper_1}`);
        console.log(`oper_2: ${oper_2}`);
        console.log(`operator: ${operator}`);

        console.log(`Type oper_1: ` + typeof(oper_1));
        console.log(`Type oper_2: ` + typeof(oper_2));

        switch (operator) {
            case "+/-":
                this.operator = "+/-";
                break;
            case "%":
                this.operator = "%";
                break;
            case "/":
                this.result = oper_1 / oper_2;
                break;
            case "x":
                this.result = oper_1 * oper_2;
                break;
            case "-":
                this.result = oper_1 - oper_2;
                break;
            case "+":
                this.result = oper_1 + oper_2;
                break;
            default:
                console.log("Error");
                return;
        }

        this.setScreen(this.result);
        return;

    }

}

const calculator = new Calculator();

function submitOperand(targetValue) {
    calculator.updateOperand(targetValue);
}

function submitOperator(targetValue) {
    calculator.setOperator(targetValue);
}

function calculate() {
    calculator.calculate();
}

function clearCalcScreen() {
    calculator.clearScreen();
    calculator.resetOperand();
    calculator.resetOperator();
    calculator.resetNextOperand();
}