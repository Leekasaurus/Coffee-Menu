const coffeeMenu = require("./coffee_data");


// Return an array of all the drinks on the menu.

const drinks = coffeeMenu.filter((element)); {
    return characters.name.includes();
};
console.log(name);


// an array of all the items that are less or equal to $5
const underFive = (item) => {
    return item.price <= 5;
}
const itemsUnderFive = coffeeMenu.filter(underFive);
console.table(itemsUnderFive);


//Return an array of drinks that are priced at an even number.
const evenArr = coffeeMenu.filter(function (num) {
    return num % 2 === 0;
});
console.log(evensArr);

//Return the total if you were to order one of every drink.
const totalprice = coffeeMenu.reduce((acc, cur) => {
    return acc + cur.price;
    //0 is the intial value if there is no intitial value its is automatically the first element
}, 0)