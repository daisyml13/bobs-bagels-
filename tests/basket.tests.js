const { assertEquals } = require(`./test.framework`);
const Basket = require(`../src/basket.js`);


const testEmptyBasketHasArray = () => {

    //Arrange
    const testBasket = new Basket();
    const expected = true;
    //Act
    const actual = Array.isArray(testBasket.items)
    //Assert
    const result = assertEquals(actual, expected);
    //Report
    console.log(`testEmptyBasketHasArray result: ${result}`);
}

const testAddingNewItem = () => {
    //Arrange
    const testBasket = new Basket();
    const expected = 1;
    //Act
    testBasket.addBagel('bacon');
    const actual = testBasket.items.length;
    //Assert
    const result = assertEquals(actual, expected);
    //Report
    console.log(`testAddingNewItem result: ${result}`);
}

const testRemovingItem = () => {
    //Arrange
    const testBasket = new Basket();
    testBasket.addBagel('Salmon');
    testBasket.addBagel('Cheese');
    testBasket.addBagel('Chicken Mayo');
    const expected = 2;

    // console.log(testBasket.items);
    //Act
    testBasket.removeBagel('Cheese');
    const actual = testBasket.items.length;
    // console.log(testBasket.items);
    //Assert
    const result = assertEquals(actual, expected);
    //Report
    // console.log(`Actual: ${actual}`)
    console.log(`testRemovingItem result: ${result}`);
}



// changing basket capacity 

// checking basket capacity property 

// making order 

// changing an order 

// full basket check 

// item price before adding 

// sum total of basket 

// not allowing an already existig item 

// remomving a non existing item 

const basketTests = {
    testEmptyBasketHasArray,
    testAddingNewItem,
    testRemovingItem
}


module.exports = basketTests;