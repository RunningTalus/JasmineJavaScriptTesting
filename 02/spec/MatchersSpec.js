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

    describe("toBe", function() {
        it("should pass equal numbers", function() {
            expect(1).toBe(1);
        });

        it("should pass equal strings", function() {
            expect("testing").toBe("testing");
        });

        it("should pass equal booleans", function() {
            expect(true).toBe(true);
        });

        it("should pass same objects", function() {
            var object = {a: "testing"};
            expect(object).toBe(object);
        });

        it("should pass same arrays", function() {
            var array = [1, 2, 3];
            expect(array).toBe(array);
        });

        it("should not pass equal objects", function() {
            expect({a: "testing"}).not.toBe({a: "testing"});
        });

        it("should not pass equal arrays", function() {
            expect([1, 2, 3]).not.toBe([1, 2, 3]);
        });
    });

});