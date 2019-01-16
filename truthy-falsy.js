var values = ['Arun', 10, 23, false , '', [] ,0, 1, NaN];

values.forEach(function(value) {
    if(value) {
        console.log(value);
    }
});

function filterValues(values) 
{
    var truthy =[] , falsy =[];
    values.forEach(function(value) {
        if(value) {
            truthy.push(value);
        } else {
            falsy.push(value);
        }
    })
    return [truthy,falsy];
}

function filterValuesObj(values) 
{
    var truthy =[] , falsy =[];
    values.forEach(function(value) {
        if(value) {
            truthy.push(value);
        } else {
            falsy.push(value);
        }
    })
   /* return { truthy: truthy, 
             falsy: falsy        
            }*/

    //ES6 if property and variable name are same -> represent by single name
    return { truthy, falsy };
       }

/*
function filterValuesObj1(values) 
{
    var truthy ={} , falsy ={};
    values.forEach(function(value) {
        if(value) {
            truthy = value;
        } else {
            falsy = value;
        }
    })
    return { 'truthy': truthy, 
             'falsy' : falsy        
            }
}
*/

console.log(filterValues(values));
console.log(filterValuesObj(values));
//console.log(filterValuesObj1(values));
