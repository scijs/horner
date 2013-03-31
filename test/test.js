var horner = require("../horner.js")

require("tap").test("horner's rule", function(t) {

  t.equals(horner([1, 0, 1], 2.0), 5.0)
  t.equals(horner([1, 0, 2], 2.0), 9)
  t.equals(horner([[0,0], [0,1]], [0,1]).join(), [-1, 0].join())
  t.equals(horner([[2, 0, 4], [0, -3, 5]], [1, 2]).join(), [-24,-2].join())
  
  t.end()
})