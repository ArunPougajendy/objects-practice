var person = {
    firstName: 'Arun',
    lastName: 'Pugahz',
    city: 'Bangalore',
    skills: 'c++, Java',
    details: function() {
        return `${this.firstName} lives in ${this.city}`;
    }
};

console.log(person.firstName);
console.log(person['lastName']);
console.log(person.details());

//find property exists
console.log(person.hasOwnProperty('firstName'));// boolean
console.log(Object.keys(person).includes('firstName'));// boolean
//find value exists
console.log(Object.values(person).includes('Arun')); // boolean


//loop over object using for in

for(var key in person) {
    console.log( key , person[key]);
}

//loop over object using forEach

Object.keys(person).forEach(function(key) {
    console.log( key, person[key]);
})

//delete a prop frm a object
delete person['details'];
console.log(person);
//add a prop
person.phoneno= 7598500900;
console.log(person);
//add a prop which is in a variable
var newkey = 'sex';
person[newkey] = 'male';
console.log(person);

console.log(Object.keys(person).length);


person.programmingLangues = function() {
    return ' List of langs known '+ this.skills;
}

console.log(person.programmingLangues());

console.log(person);