const PI180 = 0.0174533; // private to module, no way for other modules to import it.
const logBase10 = (x) => Math.log10(x); // exported via default object ONLY

const add = (x, y) => x + y; 
const subtract = (x, y) => x - y;
export const tangent = (degree) => Math.tan( PI180 * degree); // exported specifically only

// exporting existing variables at one place
export {
    add, // can be exported specifically and as part of default object both
    subtract, // can be exported specifically and as part of default object both
};

export default {
    add,
    subtract,
    logBase10,
};
