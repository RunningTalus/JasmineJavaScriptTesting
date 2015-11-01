beforeEach(function() {
    this.addMatchers({
        toBeAGoodInvestment: function() {
            var investment = this.actual;
            return investment.isGood();
        };
    });
});