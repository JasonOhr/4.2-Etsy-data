var data = require("./items.json");
var _ = require("underscore");
//I made a map of all the objects prices
var allPrices = _.map(data, function(item){
    return item.price;
});
//I then used that and added all the prices together
var ttlPrice = _.reduce(allPrices,function(a,b){
    return a + b;
});
//using the total of all prices and the number of items with a prices, I found the average price
var avePrice = (ttlPrice/allPrices.length).toFixed(2);
console.log("\nNumber 1\n");
console.log("The average price is $"+avePrice);

// ====  #2 =======
// I used filter to find prices between 14 and 18 dollars
var arrayOfPrices  = _.filter(data, function(items){
   return (items.price > 14 && items.price < 18 ) ;
});
console.log("\nNumber 2\n");
console.log("Items that cost between $14.00 USD and $18.00 USD:", arrayOfPrices);

// ========= #3 =============
//I used filter to find the GBP currency code and logged it
var GBP = _.filter(data, function(items){
   return items.currency_code === 'GBP';
});
console.log("\nNumber 3\n");
console.log(_.first(GBP).title + " costs £" + _.first(GBP).price);

// ========== #4 ==============
console.log("\nNumber 4\n");

//I knew I could console.log the answer easier in filter but I didn't want to have a finger
//waved at me, so I tried using chaining and .each to do it.  Also, I was definitely over thinking things.
//I ended up just using indexOf to find 'things made of wood' inside of the arrays
 _.chain(data).filter(function(items){

     return (_.indexOf(items.materials,"wood") > -1)

}).each(function(items){
     console.log(items.title + " is made of wood")
});


// ============ #5 ============
console.log("\nNumber 5\n");

//again, I used filter to find the answers.  Keeping things straight as far as what I've grabbed at any point in the
//chain is probably the most difficult part of this
_.chain(data)
    .filter(function(items){
        return (items.materials.length >= 8)
    })
    .each(function(items){
        console.log(items.title + " has " + items.materials.length + " materials ");
        console.log((items.materials));
    });

// ======== #6 ========
// this didn't seem to be to difficult
console.log("\nNumber 6\n");

   var itemsMade = _.filter(data,function(items){
    return (items.who_made ==="i_did");
    });

console.log(itemsMade.length + " were made by their sellers");