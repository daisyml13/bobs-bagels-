//

const Bagels = require("./src/bagels");
const Basket = require("./src/basket");

let bagelList = [];

basketTest = new Basket();
salmonBagel = new Bagels(`Salmon Bagel`, 5);
baconBagel = new Bagels(`Bacon Bagel`, 9);
cheeseBagel = new Bagels(`CHEESE BAGEL`, 30);
plainBagel = new Bagels(`Plain bagel`, 1);

basketTest.addBagel(salmonBagel);
basketTest.addBagel(baconBagel);
basketTest.addBagel(cheeseBagel);
basketTest.addBagel(plainBagel);
console.log(basketTest.getTotalPrice());
