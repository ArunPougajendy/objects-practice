var players = 'virat dhoni virat sachin virat rahul rahul dhoni';
function wordFrequency(players) {
    var person = {};
    var count;
    var word= players.split(' ');
    console.log(word);
    /*for ( i = 0; i < word.length; i ++) {
        if(person[word[i]]===undefined) {
            person[word[i]] = 1;
           // console.log(person);
        } else {
            person[word[i]]++;
           // console.log(person);
        }
    }*/

    word.forEach(function(name) {
        // if(person[name])
        if(person[name]===undefined) {
            person[name] = 1;
           // console.log(person);
        } else {
            person[name]++;
        }
    });

    return person;
}

console.log(wordFrequency(players));

// person['firstName'] = 'ravi'

