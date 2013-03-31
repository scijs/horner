"use strict"

var bits = require("bit-twiddle")

function horner_cplx(r_coef, i_coef, r_z, i_z) {
  var n = r_coef.length
    , r_v = r_coef[n-1]
    , i_v = i_coef[n-1]
    , zs = r_z + i_z
    , zd = i_z - r_z
    , k1, k2, k3
  for(var i=n-2; i>=0; --i) {
    k1 = (r_v + i_v) * r_z
    k2 = r_v * zd
    k3 = i_v * zs
    r_v = k1 - k3 + r_coef[i]
    i_v = k1 + k2 + i_coef[i]
  }
  return [r_v, i_v]
}

function horner_real(coef, x) {
  var n = coef.length
  var r = coef[n-1]
  for(var i=n-2; i>=0; --i) {
    r *= x
    r += coef[i]
  }
  return r
}

var scratch = new Float32Array(64)

function horner(poly, z) {
  if(poly.length === 0) {
    if(z.length) {
      return [0.0, 0.0]
    }
    return 0.0
  }
  if(typeof(poly[0]) !== "number") {
    if(poly[0].length === 0) {
      return [0.0, 0.0]
    }
    if(z.length) {
      return horner_cplx(poly[0], poly[1], z[0], z[1])
    }
    return horner_cplx(poly[0], poly[1], z, 0.0)
  }
  if(z.length) {
    if(scratch.length < poly.length) {
      scratch = new Float32Array(bits.nextPow2(poly.length))
    }
    return horner_cplx(poly, scratch, z[0], z[1])
  }
  return horner_real(poly, z)
}

module.exports = horner