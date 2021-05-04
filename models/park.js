const Park = function (name, ticketPrice, dinoCollection){
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinoCollection = [];
};

Park.prototype.addDino = function(newDino) {
    this.dinoCollection.push(newDino);
};

Park.prototype.removeDino = function(Dino) {
    this.dinoCollection.pop(Dino);
};

Park.prototype.findMostPopularDino = function() {
    let currentMaximum = 0;
    let mostPopularDino;
    for (let dino of this.dinoCollection) {
        if (dino.guestsAttractedPerDay > currentMaximum) {
            mostPopularDino = dino
        };
    };
    return mostPopularDino.species;
};


module.exports = Park;