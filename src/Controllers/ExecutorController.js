const Executor = require("../Services/Executor");

class ExecutorController {
    index(req, res) {
        try {
            const number = req.query.number;
            const response = new Executor(number);

            return res.json(response.divisor());
        } catch(error) {
            return res.json(error.message);
        }
    }
}

module.exports = new ExecutorController;