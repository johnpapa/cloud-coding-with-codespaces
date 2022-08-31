const data = {
  products: [
    {
      id: 10,
      name: 'Carrots',
      description: '16oz package of fresh organic carrots',
      quantity: 7,
      imageClass: 'fas fa-carrot fa-3x',
    },
    {
      id: 20,
      name: 'Lemons',
      description: 'Bag of 100 ripe lemons',
      quantity: 100,
      imageClass: 'fas fa-lemon fa-3x',
    },
    {
      id: 30,
      name: 'Apples',
      description: 'Bag of 7 fresh McIntosh apples',
      quantity: 21,
      imageClass: 'fas fa-apple-whole fa-3x',
    },
    // add another product here for hot peppers
  ],
};

const getProducts = () => {
  return data.products;
};

module.exports = { getProducts };
