class Calculator {

    constructor() {
        this.argument = "";
        this.storedOperand = 0;
        this.currentOperand = 0;
        this.operator = null;
        this.result = null;
    }

    setOperand(targetValue) {
        if (this.operator != null) {
            this.setStoredOperand(this.currentOperand);
        }
        
        this.currentOperand = targetValue;
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

    updateOperand(targetValue) {
        const screen = document.getElementById("screen");
        let currentValue = screen.innerText;

        if (currentValue === "0") {
            this.setScreen(String(targetValue));
        } else if (this.getOperator() !== null) {
            this.setScreen(String(targetValue));
        } else {
            let newValue = (String(currentValue) + String(targetValue));     
            this.setScreen(String(newValue));
        }
    }

    setOperator(targetValue) {

        const screen = document.getElementById("screen");
        let currentValue = screen.innerText;

        this.setOperand(currentValue);
        
        switch (targetValue) {
            case "+/-":
                this.operator = "+/-";
                break;
            case "%":
                this.operator = "%";
                break;
            case "/":
                this.operator = "/";
                break;
            case "x":
                this.operator = "x";
                break;
            case "-":
                this.operator = "-";
                break;
            case "+":
                this.operator = "+";
                break;
            default:
                console.log("Error");
                return;
        }

    }

    calculate() {
        let oper_1 = this.getStoredOperand(); 
        let oper_2 = this.getCurrentOperand();
        let operator = this.getOperator();

        console.log(`oper_1: ${oper_1}`);
        console.log(`oper_2: ${oper_2}`);
        console.log(`operator: ${operator}`);

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

    setScreen(targetValue) {
        const screen = document.getElementById("screen");
        screen.innerText = targetValue;
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