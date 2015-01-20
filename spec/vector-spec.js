// spec/vector-spec.js
var Vector = require('../vector.js');

describe("vector addition", function() {
  var vector1 = new Vector(1, 1);
  var vector2 = new Vector(-1, 0);
  var vector3 = new Vector(0, 0);

  var v1plus2 = new Vector(0, 1);
  var v3plus3 = new Vector(0, 0);

  it("should add vectors (1,1) and (-1, 0)", function() {
    var newVector = vector1.plus(vector2);
    expect(newVector.x).toBe(v1plus2.x);
    expect(newVector.y).toBe(v1plus2.y);
  });

  it("should add vectors (0, 0) and (0, 0)", function() {
    var newVector = vector3.plus(vector3);
    expect(newVector.x).toBe(v3plus3.x);
    expect(newVector.y).toBe(v3plus3.y);
  });
});
