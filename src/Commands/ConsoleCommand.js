var readline = require('readline');
const Executor = require("../Services/Executor");

var terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

terminal.question("Digite um número para saber seus divisores: \n", function(answer) {
    const executor = new Executor(answer);
    const divisors = executor.divisor();

    console.log(`Número de Entrada: ${answer}`);
    console.log(`Números divisores: ${divisors.divisorNumbers}`);
    console.log(`Divisores Primos: ${divisors.divisorNumbersPrime}`);
    
    terminal.close();
});