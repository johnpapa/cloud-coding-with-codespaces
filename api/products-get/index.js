const data = require('../shared/product-data');

module.exports = async function (context, req) {
  try {
    const products = data.getProducts();
    // sort products by name in ascending order
    products.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    });

    context.res.status(200).json(products);
  } catch (error) {
    context.res.status(500).send(error);
  }
};
