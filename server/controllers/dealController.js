const { Deals } = require('../models');

module.exports = {
  getDeal: async (req, res) => {
    try {
      //? query ex) http://localhost:80/deal?&page=3&pageSige=5
      let pageNum = req.query.page;
      let pageSize = Number(req.query.pageSige);
      let offset = 0;
  
      if (pageNum > 1) {
        offset = pageSize * (pageNum - 1);
      }
      Deals.findAll({
        offset: offset,
        limit: pageSize,
        order: [['createdAt', 'DESC']],
        subQuery: false
      })
      .then((result) => {
        if (result.length === 0) {
          return res.status(404).send("페이지를 찾을 수 없습니다.")
        } else {
          return res.status(200).json(result);
        }
      })
      .catch(err => {
        return res.status(500).send('err');
      });
    } catch (err) {
      throw err;
    }
  },

  postComment: () => {

  },
}