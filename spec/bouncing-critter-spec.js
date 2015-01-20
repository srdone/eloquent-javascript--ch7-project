// spec/bouncing-critter-spec.js
var BouncingCritter = require('../bouncing-critter');
var Vector = require('../vector');

describe("Bouning critter action", function() {
  var critter = new BouncingCritter();
  var view = {};
  var alternateDirection = new Vector(1, 1);
  view.look = function() {return "X";};
  view.find = function() {return alternateDirection;};
  var action = critter.act(view);

  it("should return an object with type 'move'", function() {
    expect(action.type).toBe("move");
  });

  it("should return an object with direction property equal to alternateDirection", function() {
    expect(action.direction).toBe(alternateDirection);
  });
});
