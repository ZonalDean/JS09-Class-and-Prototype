class Calculator {
    constructor(num = 0) {
      this.num = num;
    }
    sum(num) {
      this.num += num;
    }
    subtract(num) {
      this.num -= num;
    }
    multiply(num) {
      this.num *= num;
    }
    divide(num) {
      this.num /= num;
    }
    show(num) {
      alert(this.num);
    }
  }
  
  const cal = new Calculator(10);