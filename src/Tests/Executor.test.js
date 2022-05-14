const Executor = require("../Services/Executor");

test("should return error when use Executor service with string constructor param", function() {
    var exception = '';
    try {
        new Executor("kkk");
    } catch(error) {
        exception = error.message
    }
    expect(exception).toBe("O valor inserido deve ser um número do tipo inteiro.");
});

test("should return error when use Executor service with constructor param equal zero or lass", function() {
    var exception = '';
    try {
        new Executor(0);
    } catch(error) {
        exception = error.message
    }
    expect(exception).toBe("O valor inserido deve ser maior que zero.");
});

test("should return two arrays when use Executor service correctly", function() {
    const executor = new Executor(45);
    const values = executor.divisor();

    expect(values.divisorNumbers.length > 0).toBe(true);
    expect(values.divisorNumbersPrime.length > 0).toBe(true);
});