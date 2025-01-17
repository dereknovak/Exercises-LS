/* 
11:02 // 12:18
*/

class Item {
  constructor(name, category, quantity) {
    this.skuCode = this.#generateSKU(name, category);
    this.itemName = name;
    this.category = category;
    this.quantity = quantity;
  }

  #generateSKU(name, cat) {
    name = name.replace(' ', '').toUpperCase().slice(0, 3);
    cat = cat.toUpperCase().slice(0, 2);

    return name + cat;
  }
}

const ItemManager = {
  items: [],

  create(name, category, quantity) {
    if (this.validName(name) &&
        this.validCategory(category) &&
        this.validQuantity(quantity)) {
      const item = new Item(name, category, quantity);
      this.items.push(item);
    } else {
      return { notValid: true };
    }
  },

  update(sku, updates) {
    const item = this.items.find(item => item.skuCode === sku);

    for (let prop in updates) {
      item[prop] = updates[prop];
    }
  },

  delete(sku) {
    const item = this.items.find(item => item.skuCode === sku);
    const idx = this.items.indexOf(item);

    this.items.splice(idx, 1);
  },

  inStock() {
    return this.items.filter(item => item.quantity > 0);
  },

  itemsInCategory(cat) {
    return this.items.filter(item => item.category === cat);
  },

  validName(name) {
    return name.replace(' ', '').length >= 5;
  },

  validCategory(cat) {
    return cat.split(' ').length === 1 & cat.length >= 5;
  },

  validQuantity(quantity) {
    return quantity >= 0;
  }
};

const ReportManager = {
  items: undefined,

  init(obj) {
    this.items = obj;
  },

  createReporter(sku) {
    const item = this.items.items.find(item => item.skuCode === sku);

    return {
      itemInfo() {
        for (let prop in item) {
          console.log(`${prop}: ${item[prop]}`);
        }
      },
    }
  },

  reportInStock() {
    console.log(this.items.inStock().map(item => item.itemName).join(','));
  },
};

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item

ItemManager.items;
// returns list with the 4 valid items

ReportManager.init(ItemManager);
ReportManager.reportInStock();
// logs soccer ball,football,kitchen pot

ItemManager.update('SOCSP', { quantity: 0 });
ItemManager.inStock();
// returns list with the item objects for football and kitchen pot
ReportManager.reportInStock();
// logs football,kitchen pot
ItemManager.itemsInCategory('sports');
// returns list with the item objects for basket ball, soccer ball, and football
ItemManager.delete('SOCSP');
ItemManager.items;
// returns list with the remaining 3 valid items (soccer ball is removed from the list)

const kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10