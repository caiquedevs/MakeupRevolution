/* eslint-disable eqeqeq */
/* eslint-disable no-throw-literal */
const products = require('../database/products.json');

module.exports = {
  index(req, res) {
    try {
      const productTypes = req.params.type;

      const filtered = products.filter((product) => product.product_type === productTypes);

      if (filtered.length === 0) throw { msg: 'Nenhum produto foi encontrado nesta categoria' };

      return res.status(200).json(filtered);
    } catch (e) {
      return res.status(404).json({ error: e.msg });
    }
  },

  show(req, res) {
    try {
      const productId = req.params.id;

      const filtered = products.filter((product) => product.id == productId);

      if (filtered.length === 0) throw { msg: 'Nenhum produto foi encontrado nesta categoria' };

      return res.status(200).json(filtered);
    } catch (e) {
      return res.status(404).json({ error: e.msg });
    }
  },
};
