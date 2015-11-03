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

    describe("toBeFalsy", function () {
        it("should pass undefined", function() {
            expect(undefined).toBeFalsy();
        });

        it("should pass null", function() {
            expect(null).toBeFalsy();
        });

        it("should pass NaN", function() {
            expect(NaN).toBeFalsy();
        });

        it("should pass the false boolean value", function() {
            expect(false).toBeFalsy();
        });

        it("should pass the number 0", function() {
            expect(0).toBeFalsy();
        });

        it("should pass an empty string", function() {
            expect("").toBeFalsy();
        });
    });

    describe("toBeTruthy", function() {
        it("should pass the true boolean value", function() {
            expect(true).toBeTruthy();
        });

        it("should pass any number different than +0 and -0", function() {
            expect(1).toBeTruthy();
        });

        it("should pass any non empty string", function() {
            expect("a").toBeTruthy();
        });

        it("should pass any object (including an array)", function() {
            expect([]).toBeTruthy();
            expect({}).toBeTruthy();
        });
    });

});