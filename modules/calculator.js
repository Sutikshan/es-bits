const PI180 = 0.0174533; // private to module, no way for other modules to import it.
const logBase10 = (x) => Math.log10(x); // exported via default object ONLY

export const add = (x, y) => x + y; // can be exported specifically and as part of default object both
export const subtract = (x, y) => x - y; // can be exported specifically and as part of default object both
export const tangent = (degree) => Math.tan( PI180 * degree); // exported specifically only

export default {
    add,
    subtract,
    logBase10,
};
