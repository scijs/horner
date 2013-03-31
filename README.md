horner
======
Evaluates polynomials using [Horner's rule](http://en.wikipedia.org/wiki/Horner's_method).

Use
===
First install via npm:

    npm install horner
    
Then you can use it as follows:

```javascript
var horner = require("horner")


//Example:  Evaluate the polynomial 1 + 2 * x^2 at x = 2
console.log(horner([1, 0, 2], 2.0))

//Prints:  9

//Example:  Evaluate a complex polynomial
//
//      2 - 3i * x + (4 + 5i)*x^2
//
// At x = 1+2i

console.log(horner([[2, 0, 4]     //Real coefficients
                  , [0, -3, 5]]   //Imaginary coefficients
                  , [1, 2]))

//Prints: [-24,-2]
```

### `require("horner")(poly, z)`
Evaluates the polynomial at the point z

* `poly` is the coefficients of the polynomial arranged in increasing degree.  If complex, is a pair of arrays, the first representing the real coefficients and the second representing the imaginary coefficients.
* `z` is the point to evaluate the polynomial at.  Either a scalar for a real valued function or a pair for a complex number.

**Returns:** A scalar for real results, a pair for complex results

**Time Complexity:** `O(poly.length)`

Credits
=======
(c) 2013 Mikola Lysenko. MIT License