beforeEach(function() {
    this.addMatchers({
        toBeAGoodInvestment: function() {
            var investment = this.actual;

            this.message = function() {
                return 'Expected investment to be a good investment';
            };

            return investment.isGood();
        }
    });

});