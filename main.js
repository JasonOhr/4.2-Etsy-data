var data = require("./items.json");
var _ = require("underscore");

var allPrices = _.map(data, function(item){
    return item.price;
});
var ttlPrice = _.reduce(allPrices,function(a,b){
    return a + b;
});
var avePrice = (ttlPrice/allPrices.length).toFixed(2);
console.log("\nNumber 1\n");
console.log("The average price is $"+avePrice);

// ====  #2 =======

var arrayOfPrices  = _.filter(data, function(items){
   return (items.price > 14 && items.price < 18 ) ;
});
console.log("\nNumber 2\n");
console.log("Items that cost between $14.00 USD and $18.00 USD:", arrayOfPrices);

// ========= #3 =============

var GBP = _.filter(data, function(items){
   return items.currency_code === 'GBP';
});
console.log("\nNumber 3\n");
console.log(_.first(GBP).title + " costs £" + _.first(GBP).price);

// ========== #4 ==============
console.log("\nNumber 4\n");
 _.chain(data).filter(function(items){

     return (_.indexOf(items.materials,"wood") > -1)

}).each(function(items){
     console.log(items.title + " is made of wood")
});


// ============ #5 ============
console.log("\nNumber 5\n");

_.chain(data)
    .filter(function(items){
        return (items.materials.length >= 8)
    })
    .each(function(items){
        console.log(items.title + " has " + items.materials.length + " materials ");
        console.log((items.materials));
    });

// ======== #6 ========
console.log("\nNumber 6\n");

   var itemsMade = _.filter(data,function(items){
    return (items.who_made ==="i_did");
    });

console.log(itemsMade.length + " were made by their sellers");