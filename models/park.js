const Park = function (name, ticketPrice, dinoCollection){
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinoCollection = [];
};

Park.prototype.addDino = function(newDino) {
    this.dinoCollection.push(newDino);
};

Park.prototype.removeDino = function(Dino) {
    const index = this.dinoCollection.indexOf(Dino);
    this.dinoCollection.splice(index, 1);
    // this.dinoCollection.pop(Dino);
};

Park.prototype.findMostPopularDino = function() {
    let currentMaximum = 0;
    let mostPopularDino;
    for (let dino of this.dinoCollection) {
        if (dino.guestsAttractedPerDay > currentMaximum) {
            currentMaximum = dino.guestsAttractedPerDay;
            mostPopularDino = dino;
            };
        };
    return mostPopularDino.species;
};

Park.prototype.countDinoOfSpecies = function(species) {
    let speciesTotal = 0;
    for (let dino of this.dinoCollection) {
        if (dino.species === species) {
            speciesTotal += 1
            };
        };
    return speciesTotal;
};

Park.prototype.visitorsPerDay = function() {
    let visitors = 0;
    for (let dino of this.dinoCollection) {
        visitors += dino.guestsAttractedPerDay
    };
    return visitors;
};

Park.prototype.visitorsPerYear = function() {
    // let visitors = 0;
    return this.visitorsPerDay() * 312; // 6 days x 52 weeks = 312 days open per year
};

Park.prototype.revenueForYear = function() {
    // let revenue = 0
    return this.visitorsPerYear() * this.ticketPrice;
};

module.exports = Park;