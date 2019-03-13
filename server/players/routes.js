const { Router } = require('express');
const bcrypt = require('bcrypt');

const Player = require('./model');

const router = new Router();

router.get('/players', (req, res, next) => {
  Player.findAll().then(player => {
    return res.status(200).send({ player });
  });
});

router.get('/players/:id', (req, res, next) => {
  const id = req.params.id;

  Player.findByPk(id)
    .then(player => {
      if (!player)
        return res.status(404).send({
          message: 'Player does not exist'
        });
      return res.status(200).send(player);
    })
    .catch(error => next(error));
});

router.post('/players', (req, res, next) => {
  const { name, password, avatar } = req.body;
  const player = {
    name: name.toUpperCase(),
    password: bcrypt.hashSync(password, 10),
    avatar
  };
  Player.create(player)
    .then(player => {
      return res.status(201).send(player);
    })
    .catch(error => next(error));
});

module.exports = router;
