var tag = {
    value: 'travel explore discover',
    generateHashTag: function() {
        var result, hash='#';
        result=this.value.split(' ');
        result.forEach(function(word){
            hash += word[0].toUpperCase() + word.slice(1);
            
        })
        
        return hash;
    }
};

console.log(tag.generateHashTag());
