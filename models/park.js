const Park = function (name, ticketPrice, dinoCollection){
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinoCollection = [];
};

Park.prototype.addDino = function(newDino) {
    this.dinoCollection.push(newDino);
};


module.exports = Park;