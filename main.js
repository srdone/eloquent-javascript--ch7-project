var World = require('./world');
var Wall = require('./wall');
var BouncingCritter = require('./bouncing-critter');
var plan = require('./plan');

var world = new World(plan, {"#": Wall,
                             "o": BouncingCritter});
console.log(world.toString());

for (var i = 0; i < 5; i++) {
  world.turn();
  console.log(world.toString());
}