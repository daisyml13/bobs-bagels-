const { assertEquals } = require(`./test.framework`);
const Basket = require(`../src/basket.js`);

// Empty basket
const testEmptyBasket = () => {
    //Setup

    //let input = ;
    let expected = 0;
    console.log(`Testing that a new basket is empty => ${expected}`);

    //Execute
    const basket = new Basket();
    let actual = basket.items.length;

    //Verify
    let result = assertEquals(actual, expected);
    console.log(`testEmptyBasket\n expected = ${expected}\n actual = ${actual}\n assertEquals = ${result}`);

}

// adding an item 

// removing an item 

// changing basket capacity 

// checking basket capacity property 

// making order 

// changing an order 

// full basket check 

// item price before adding 

// sum total of basket 

// not allowing an already existig item 

// remomving a non existing item 


module.exports = testEmptyBasket;