describe("Jasmine Built-in matchers", function() {
    describe("toEqual", function () {
        it("should pass equal numbers", function () {
            expect(1).toEqual(1);
        });

        it("should pass equal strings", function () {
            expect("testing").toEqual("testing");
        });

        it("should pass equal booleans", function () {
            expect(true).toEqual(true);
        });

        it("should pass equal objects", function () {
            expect({a: "testing"}).toEqual({a: "testing"});
        });

        it("should pass equal arrays", function () {
            expect([1, 2, 3]).toEqual([1, 2, 3]);
        });
    });

});