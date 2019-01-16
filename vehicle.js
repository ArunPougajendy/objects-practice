var vehicle = {
    name: 'swift',
    type: 'car',
    currentPosition: 0,
    getPosition: function() {
        return this.currentPosition;
    },
    move: function() {
        this.currentPosition++;
        return this.currentPosition;
    },  
    reset: function() {
       return  this.currentPosition = 0;
    },
    movedistance: function(num) {
        this.currentPosition+=num;
        return this.currentPosition;
    }
};

console.log(vehicle.getPosition());
console.log('calling move');
console.log(vehicle.move());
console.log('getting position');
console.log(vehicle.getPosition());
console.log('resetting position');
console.log(vehicle.reset());

console.log(vehicle.movedistance(5));
console.log('getting position');
console.log(vehicle.getPosition());