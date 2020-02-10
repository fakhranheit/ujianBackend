const db = require("../connection/");

module.exports = {
  getCategories: (req, res) => {
    //syntax sql
    let sql = `SELECT * FROM categories`;
    //database action
    db.query(sql, (err, result) => {
      if (err) res.status(500).send(err);
      res.status(200).send(result);
    });
  },
  addCategories: (req, res) => {
    const { nama, tahun, description } = req.body;

    //set data
    let data = {
      nama
    };

    //syntax SQL
    let sql = `INSERT INTO categories SET ?`;

    //Database Action
    db.query(sql, data, (err, result) => {
      if (err) res.status(500).send(err);
      res.status(200).send(result);
    });
  },
  deleteCategories: (req, res) => {
    const id = req.params.id;
    console.log(id);

    //syntax sql
    let sql = `DELETE FROM categories WHERE id= ?`;
    //Database Action
    db.query(sql, id, (err, result) => {
      if (err) res.status(500).send(err);
      res.status(200).send(result);
    });
  },
  updateCategories: (req, res) => {
    let { nama, id } = req.body;

    let data = {
      nama
    };
    //syntax sql
    let sql = `UPDATE categories SET ? WHERE id=?`;

    //database action
    db.query(sql, [data, id], (err, result) => {
      if (err) res.status(500).send(err);
      res.status(200).send(result);
    });
  }
};
