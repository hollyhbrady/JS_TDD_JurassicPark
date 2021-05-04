const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  
  let park;
  // let dino stuuf

  beforeEach(function () {
    park = new Park('Jurassic', 100);
    dino1 = new Dinosaur('Funosaurus', 'Carnivore', 20);
    dino2 = new Dinosaur('Triceratops', 'Omnivore', 30);
  });

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic');
  });

  it('should have a ticket price', function() {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 100);
  });

  it('should have a collection of dinosaurs', function() {
    const actual = park.dinoCollection;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.addDino(dino1);
    const actual = park.dinoCollection.length;
    assert.strictEqual(actual, 1)
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.addDino(dino1);
    park.removeDino(dino1);
    const actual = park.dinoCollection.length;
    assert.strictEqual(actual, 0)
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    park.addDino(dino1);
    park.addDino(dino2);
    const result = park.findMostPopularDino();
    assert.strictEqual(result, 'Triceratops')
  });

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
