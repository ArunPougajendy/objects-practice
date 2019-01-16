winnerList = [
    { "season": "1999-00", "team": "real madrid", "country": "Spain" }, 
    { "season": "2000-01", "team": "bayern munich", "country": "Germany" },
     { "season": "2001-02", "team": "real madrid", "country": "Spain" }, 
     { "season": "2002-03", "team": "milan", "country": "Italy" }, 
     { "season": "2003-04", "team": "porto", "country": "Portugal" }
];

function countWins( winnerList , name) {
    var count = 0;
    for ( var i = 0; i < winnerList.length; i++) {
        if ( winnerList[i].country === name ) {
            count++;
        } 
    }

    return count;
}


console.log(countWins(winnerList,'Spain'));