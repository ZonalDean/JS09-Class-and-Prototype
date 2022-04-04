class sale {
    name=""
    calcPrice() {
      return (this.price * (100 - this.discount.slice(0, -1))) / 100;
    }
  }
  
  class Beverage extends sale {
    constructor(name, amount, price, discount) {
      this.name = name;
      this.amount = +amount;
      this.price = +price;
      this.discount = discount;
    }
  }
  const obj = new Beverage('Pepsi', '3', '19', '10%');
  obj.calcPrice();