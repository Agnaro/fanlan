"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../helpers/helpers");
class Monad {
    constructor() { }
    chain(fn) {
        throw new Error("Not Implemented");
    }
    static do(...expr) {
        return function (...args) {
            const [head, tail] = helpers_1.cons(expr);
            if (!tail) {
                return head(args);
            }
            else {
                return head(args).chain(Monad.do(...tail));
            }
        };
    }
}
exports.Monad = Monad;
//# sourceMappingURL=monad.js.map