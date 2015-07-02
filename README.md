horner
======
Evaluates polynomials using [Horner's rule](http://en.wikipedia.org/wiki/Horner's_method).

[![build status](https://secure.travis-ci.org/scijs/horner.png)](http://travis-ci.org/scijs/horner)

# Example
## Real polynomial
Evaluate the polynomial `1 + 2 * x^2 at x = 2`:

```javascript
var horner = require("horner")

console.log(horner([1, 0, 2], 2.0))
```
### Output
```
9
```
## Complex polynomial
Evaluate the polynomial `2 - 3i * x + (4 + 5i)*x^2` at `x = 1+2i`:

```javascript
var horner = require("horner")

console.log(horner([[2, 0, 4]     //Real coefficients
                  , [0, -3, 5]]   //Imaginary coefficients
                  , [1, 2]))
```

### Output
```
[-24,-2]
```

# Install
Install using npm:

    npm install horner

# API    
#### `require("horner")(poly, z)`
Evaluates the polynomial at the point z

* `poly` is the coefficients of the polynomial arranged in increasing degree.  If complex, is a pair of arrays, the first representing the real coefficients and the second representing the imaginary coefficients.
* `z` is the point to evaluate the polynomial at.  Either a scalar for a real valued function or a pair for a complex number.

**Returns:** A scalar for real results, a pair for complex results

**Time Complexity:** `O(poly.length)`

# License
(c) 2013 Mikola Lysenko. MIT License