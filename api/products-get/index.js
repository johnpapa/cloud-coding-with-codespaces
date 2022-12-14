const data = require('../shared/product-data');

module.exports = async function (context, req) {
  try {
    const products = data.getProducts();
    // sort by name in ascending order
    products.sort((a, b) => a.name.localeCompare(b.name));

    context.res.status(200).json(products);
  } catch (error) {
    context.res.status(500).send(error);
  }
};
