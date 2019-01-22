var john = {
    bill: [124, 48, 268, 180],
    tip: [],
    total: [],
    calculate: function(cost){
      switch (true) {
          case cost < 50: return cost * .2;
          case cost >= 50 && cost < 200: return cost * .15;
          default: return cost * .1;
      }
    },
    calculateTip: function() {
        for(var i = 0; i < this.bill.length; i++){
            this.tip[i] = this.calculate(this.bill[i]);
            this.total[i] = this.tip[i] + this.bill[i];
        }
    }
}

john.calculateTip();
console.log(john);