# ES6 Modules
## Exporting Module Object's Contents
1. Named exports
```
export const tangent = (degree) => Math.tan( PI180 * degree); // exported specifically only

// exporting existing variables 
export {
    add, // exported specifically and default object both
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
import { add, tangent, default as calculatorDefault } from "./calculator.js";
```

3. Import Everything (Refer app.js)
```
import * as calculatorUtil from "./calculator.js"; 

```