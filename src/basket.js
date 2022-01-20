class Basket {

    constructor(size) {
        this.items = [];
        if (size === 'small') {
            this.capacity = 5
        } else {
            this.capacity = 10
        }
    }

    addBagel(bagel) {
        try {
            if (!(this.items.length <= this.capacity)) {
                throw new Error(`Basket if full. You can't add any more bagels.`);
            }
            if (this.items.includes(bagel)) {
                throw new Error(`You already have ${bagel} in your basket! You can't have another!`)
            }
            this.items.push(bagel);
        } catch (err) {
            console.log(err.message);
        }
    }

    removeBagel(bagel) {
        try {
            if (!(this.items.includes(bagel))) { //Checks to see if bagel exists within the items list
                throw new Error(`Item does not exist - you can't remove nothing.`);
            }
            this.items.splice(this.items.indexOf(bagel), 1); //this.items.indexOf(bagel) produces an Int which is the index of the array, splice removes the 
        } catch (err) {
            console.log(err.message);
        }
    }

    getTotalPrice() {
        let pricesList = this.items.map(tempBagel => tempBagel.bagelPrice);
        console.log(`pricesList: ${pricesList}`);
        const reducer = (previousValue, currentValue) => previousValue + currentValue;

        let totalPrice = pricesList.reduce(reducer);
        console.log(`totalPrice: ${totalPrice}`);
        return totalPrice;
        // this.items.reduce()
    }

}

module.exports = Basket;

//Debugging
