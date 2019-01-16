var person = {
    firstName: 'Arun',
    lastName: 'Pugahz',
    city: ['Pondy', 'bangaloe'],
    skills: ['C++', 'JAVA'],
    details: function() {
        //console.log(Object.keys(this));
        return this.firstName + ' ' + person.city;
    },
    greets: function(type) {
        if(type == 'casual')
            return 'hi';
        else
            return 'hello';
    },
    // option 1 create  var for this
    languagesKnown: function(){
        var p1 = this;
        this.skills.forEach(function(skill) {
            console.log(p1.firstName + ' knows ' + skill)
        });
    },
    // option 2 use binf=d
    livedIn: function() {
        this.city.forEach(function(city){
            console.log(this.firstName + ' has livied in ' + city)
        }.bind(this));
    },
    // option 3 : ES6
    programming: function() {
        this.skills.forEach((skill) => {
            console.log( `${this.firstName} knows ${skill}`)
        });
    },
    // option 4: for loop
    places: function() {
        for (i =0 ; i < this.city.length; i++) {
            console.log(`${this.firstName} lived in ${this.city[i]}`);
        }
    }
};

//console.log(person.firstName);
console.log(person['lastName']);
console.log(person.details());
console.log(person.greets('casual'));
console.log(person.languagesKnown());
console.log(person.livedIn());
console.log(person.programming());
console.log(person.places());