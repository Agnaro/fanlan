"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Breaks an array into its head and tail
 */
function cons(array) {
    const [x, ...y] = array;
    return [x, y];
}
exports.cons = cons;
function liftA2(fn, a1, a2) {
    return a1.map(fn).ap(a2);
}
exports.liftA2 = liftA2;
//# sourceMappingURL=helpers.js.map