const { assertEquals } = require(`./test.framework`);
const Basket = require(`../src/basket.js`);


/*const testEmptyBasketHasArray = () => {

    //Arrange
    const testBasket = new Basket();
    const expected = true;
    //Act
    const actual = Array.isArray(testBasket.items)
    //Assert
    const result = assertEquals(actual, expected);
    //Report
    console.log(`testEmptyBasketHasArray result: ${result}`);
}*/

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

const basketTests = {
    // testEmptyBasketHasArray,
    testAddingNewItem,
    testRemovingItem
}


module.exports = basketTests;

class MockBagel {
    bagelName = 'Salmon';
    bagelPrice = 300;
}

describe('Bobs Bagels Test Suit', () => {
    describe('Basket Tests', () => {

        it('Testing Empty Basket Has Array', () => {
            //Arrange
            const testBasket = new Basket();
            //Act
            const actual = Array.isArray(testBasket.items)
            //Assert 
            expect(actual).toBeTrue();
        });
        it('Testing Adding Item to empty basket', () => {
            //Arrange
            const testBasket = new Basket();
            let testBagel = new MockBagel();
            //Act
            testBasket.addBagel(testBagel);
            const actual = testBasket.items.length;

            // const actual = Array.isArray(testBasket.items)
            //Assert 
            expect(actual).toBe(1);
        });
        it('Testing removing Item from basket', () => {
            //Arrange
            const testBasket = new Basket();
            let testBagel = new MockBagel();
            testBasket.addBagel(testBagel);
            //Act
            testBasket.removeBagel(testBagel);
            const actual = testBasket.items.length;

            // const actual = Array.isArray(testBasket.items)
            //Assert 
            expect(actual).toBe(0);
        });
        it('Testing removing Item from Empty basket', () => {
            //Arrange
            const testBasket = new Basket();
            let testBagel = new MockBagel();
            // testBasket.addBagel(testBagel);

            //Act
            const actual = testBasket.removeBagel(testBagel);

            // const actual = Array.isArray(testBasket.items)
            //Assert 
            expect(actual).toBeInstanceOf(Error);
        });
    });
});

