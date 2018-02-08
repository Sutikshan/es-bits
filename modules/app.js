// this demo is possible on browser via .html as nodeJS still not support ES6-modules (else need babel precompiler).


// import only default
import calculator from "./calculator.js";

console.log("1. ímported default object--------------------------------");
console.dir(calculator);
console.log(`calculator.add (15 , 5) = ${calculator.add (15 , 5)}`);
console.log(`calculator.logBase10 (1000) = ${calculator.logBase10 (1000)}`);


// import Module object, it contains everything which has export keyword, 
import * as calculatorUtil from "./calculator.js"; 
console.log("\n2. ímported Module object --------------------------------");
console.dir(calculatorUtil);
console.log(`calculatorUtil.Tan (45) = ${calculatorUtil.tangent (45)}`);
console.log(`calculatorUtil.default.logBase10 (1000) = ${calculatorUtil.default.logBase10 (1000)}`);


// destructuture Module object
import { add, tangent, default as calculatorDefault } from "./calculator.js";

console.log("\n3. ímported specifically from destructured Module object --------------------------------");
console.dir(calculatorDefault);
console.log(`add (4 , 5) = ${add (4 , 5)}`);
console.log(`calculatorDefault.logBase10 (1000) = ${calculatorDefault.logBase10 (1000)}`);
