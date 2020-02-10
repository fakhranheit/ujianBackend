const db = require("../connection/");

module.exports = {
  getMovie: (req, res) => {
    //syntax sql
    let sql = `SELECT * FROM movies`;
    //database action
    db.query(sql, (err, result) => {
      if (err) res.status(500).send(err);
      res.status(200).send(result);
    });
  },
  addMovie: (req, res) => {
    const { nama, tahun, description } = req.body;

    //set data
    let data = {
      nama,
      tahun,
      description
    };

    //syntax SQL
    let sql = `INSERT INTO movies SET ?`;

    //Database Action
    db.query(sql, data, (err, result) => {
      if (err) res.status(500).send(err);
      res.status(200).send(result);
    });
  },
  deleteMovie: (req, res) => {
    const id = req.params.id;
    console.log(id);

    //syntax sql
    let sql = `DELETE FROM movies WHERE id= ?`;
    //Database Action
    db.query(sql, id, (err, result) => {
      if (err) res.status(500).send(err);
      res.status(200).send(result);
    });
  },
  updateMovie: (req, res) => {
    let { nama, id, description } = req.body;

    let data = {
      nama,
      description
    };
    //syntax sql
    let sql = `UPDATE movies SET ? WHERE id=?`;

    //database action
    db.query(sql, [data, id], (err, result) => {
      if (err) res.status(500).send(err);
      res.status(200).send(result);
    });
  }
};
