const models = require('../models');

module.exports = {
  deal: {
    get: (req, res, next) => {
      models.deal.get((error, result) => {
        if (error) {
          res.status(500).send('Internal Server Error');
        } else {
          res.status(200).json(result);
        }
      });
    },
  },
};
