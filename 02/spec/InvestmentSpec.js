describe("Investment", function() {
    it("should be of a stock", function() {
        var stock = new Stock();
        var investment = new Investment({
            stock: stock,
            shares: 100
        });
        expect(investment.stock).toBe(stock);
    });

    it("should have the invested shares quantity", function() {
        var stock = new Stock();
        var investment = new Investment({
            stock: stock,
            shares: 100
        });
        expect(investment.shares).toEqual(100);
    });
});