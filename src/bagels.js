class Bagels {

    #bagelName;
    bagelPrice;
    static bagelTypes = [];

    constructor(bagelName = "", bagelPrice = 4) {
        // BagelMenu.addBagel(this);
        try {
            if (typeof bagelName !== 'string' || typeof bagelPrice !== 'number') {
                throw new Error(`Make sure bagelName is string, and bagelPrice is number`);
            }
            this.#bagelName = bagelName;
            this.bagelPrice = bagelPrice;

        } catch (err) {
            console.log(err.message);
        }
    }

    getBagelPrice() {
        return this.bagelPrice;
    }

}

// testBagel = new Bagels("Test1");
// testBagel2 = new Bagels("Test2");

// console.log(Bagels.bagelTypes);

module.exports = Bagels;