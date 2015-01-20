// spec/bouncing-critter-spec.js
var BouncingCritter = require('../bouncing-critter');
var Vector = require('../vector');

describe("Bouning critter action", function() {
  var critter = new BouncingCritter();
  var view = {};
  var alternateDirection = new Vector(1, 1);
  view.find = function() {return alternateDirection;};

  it("should return an object with type 'move' with direction equal to alternateDirection", function() {
    view.look = function() {return "X";};
    var action = critter.act(view);
    expect(action.type).toBe("move");
    expect(action.direction).toBe(alternateDirection);
  });
});
