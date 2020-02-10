const db = require("../connection/");

module.exports = {
  getMovcat: (req, res) => {
    //syntax sql
    let sql = `select ct.nama as namakategori,m.nama as namamovie
    from movcat mc 
    join categories ct on ct.id=mc.idcategory
    join movies m on m.id= mc.idmovie;`;
    //database action
    db.query(sql, (err, result) => {
      if (err) res.status(500).send(err);
      res.status(200).send(result);
    });
  },
  addMovCat: (req, res) => {
    const { id, idcategory, idmovie } = req.body;

    //set data
    let data = {
      id,
      idcategory,
      idmovie
    };

    //syntax SQL
    let sql = `INSERT INTO movcat SET ?`;

    //Database Action
    db.query(sql, data, (err, result) => {
      if (err) res.status(500).send(err);
      res.status(200).send(result);
    });
  },
  deleteMovCat: (req, res) => {
    const id = req.params.id;

    //syntax sql
    let sql = `DELETE FROM movcat WHERE id= ?`;
    //Database Action
    db.query(sql, id, (err, result) => {
      if (err) res.status(500).send(err);
      res.status(200).send(result);
    });
  }
};
