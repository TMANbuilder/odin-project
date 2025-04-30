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

    setOperator(value) {
        
        switch (value) {
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