class Executor {
    constructor(number) {
        this.number = parseInt(number);
        this._validateNumber(this.number);
    }

    divisor() {
        var divisorNumbers = [];
        var divisorNumbersPrime = [];

        for(let i = 1; this.number >= i; i++) {
            let divisor = (this.number / i);
            
            if(Number.isInteger(divisor)) {
                divisorNumbers.push(divisor);

                if(this._isPrime(divisor)) {
                    divisorNumbersPrime.push(divisor);
                }
            }
        }

        return {
            divisorNumbers : divisorNumbers.reverse(),
            divisorNumbersPrime : divisorNumbersPrime.reverse()
        }
    }

    _isPrime(number) {
        var isPrime = true;
        for(let prime = 1; number >= prime; prime++) {
            if(Number.isInteger(number / prime) && (prime != 1 && prime != number)) {
                isPrime = false; break;
            }
        }

        return isPrime;
    }

    _validateNumber(number) {
        if(!Number.isInteger(number)) {
            throw new Error("O valor inserido deve ser um número do tipo inteiro.");
        }

        if(number === 0) {
            throw new Error("O valor inserido deve ser maior que zero.");
        }
    }
}

module.exports = Executor;