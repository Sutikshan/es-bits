# ES6 Modules
## Exporting Module Object's Contents
1. Named exports
```
export const tangent = (degree) => Math.tan( PI180 * degree); // exported specifically only

// exporting existing variables 
export {
    add, 
};
```

2. Default exports (function/class)

```
export default {
    add,
    subtract,
    logBase10,
};
```

## Importing Module's content
1. Importing Default
```
import calculator from "./calculator.js";
```

2. Import properties (with same or with alias name)
```
// Following is example of object destructuring, reading from whole Module object
// which otherwise get imported as given in step 3 below. Refer Object Destructuring
import { add, tangent, default as calculatorDefault } from "./calculator.js";
```

3. Import Everything (Refer app.js)
```
import * as calculatorUtil from "./calculator.js"; 

```