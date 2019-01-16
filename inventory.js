var currentInventory = [
    { name: "HTC", stock: 25 }, 
    { name: "Nokia", stock: 1000 }, 
    { name: "Samsung", stock: 50 }, 
    { name: "Sony", stock: 10 }, 
    { name: "Apple", stock: 15 }
];

var newInventory = [
    { name: "LG", stock: 5 , price: 25000}, 
    { name: "Sony", stock: 10, price: 25000 }, 
    { name: "Samsung", stock: 5 }, 
    { name: "Apple", stock: 15 }
];

function updateInventory( currentInventory , newInventory) { 
    newInventory.forEach(function(item) {
        var itemFound = currentInventory.find(function(currentItem) {
            return currentItem.name == item.name;
        });
        if (itemFound) {
            itemFound.stock += item.stock;
        }
        else {
            currentInventory.push(item);
        }
    });
    return currentInventory;
}

console.log(updateInventory(currentInventory,newInventory));