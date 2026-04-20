const db = require("../models");
const Student = db.student;

exports.create = (req, res) => {
  const studentData = {
    name: req.body.name,
    email: req.body.email,
    age: req.body.age,
  };

  Student.create(studentData)
    .then(data => {
      res.send(data);
    })
    .catch(error => {
      res.status(500).send("Terjadi kesalahan saat menambahkan data");
    });
};

exports.findAll = (req, res) => {
  Student.findAll()
    .then(result => {
      res.send(result);
    })
    .catch(error => {
      res.status(500).send("Gagal mengambil data");
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Student.findByPk(id)
    .then(data => {
      if (!data) {
        return res.send("Data tidak ditemukan");
      }
      res.send(data);
    })
    .catch(error => {
      res.status(500).send("Terjadi kesalahan");
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Student.update(req.body, {
    where: { id: id }
  })
    .then(() => {
      res.send("Data berhasil diupdate");
    })
    .catch(error => {
      res.status(500).send("Gagal update data");
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Student.destroy({
    where: { id: id }
  })
    .then(() => {
      res.send("Data berhasil dihapus");
    })
    .catch(error => {
      res.status(500).send("Gagal menghapus data");
    });
};