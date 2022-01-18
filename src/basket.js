class Basket {

    constructor() {
        this.items = [];
    }

    addBagel(bagel) {
        this.items.push(bagel);
    }

    removeBagel(bagel) {
        if (this.items.includes(bagel)) {   //Checks to see if bagel exists within the items list
            this.items.splice(this.items.indexOf(bagel), 1);   //this.items.indexOf(bagel) produces an Int which is the index of the array, splice removes the object at that int
        }
    }

}

module.exports = Basket;

//Debugging
