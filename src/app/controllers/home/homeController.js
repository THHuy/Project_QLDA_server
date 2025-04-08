const Data = require("../../model/homeModel");
const data = new Data();
class homeController {
  index(req, res, next) {
    data.select((err, val) => {
      if (err) {
        console.log(err);
      }
      res.json(val.rows);
    });
  }
}
module.exports = new homeController();
