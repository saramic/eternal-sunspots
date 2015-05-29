var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {
  models.Character.findAll().then(function(characters) {
    res.render('index', {
      title: 'Characters',
      characters: characters
    });
  });
});

router.post('/create', function(req, res) {
  models.Character.create({
    name: req.param('name'),
    layout: req.param('layout')
  }).then(function() {
    res.redirect('/');
  });
});

router.get('/:character_id', function(req, res) {
  models.Character.find({
    where: {id: req.param('character_id')},
  }).then(function(character) {
    res.send({name: character.name, layout: character.layout})
      /*
    res.render('character', {
      title: 'Character',
      character: character
    });
    */
  });
});

router.get('/:character_id/destroy', function(req, res) {
  models.Character.find({
    where: {id: req.param('character_id')},
  }).then(function(character) {
    character.destroy().then(function() {
      res.redirect('/');
    });
  });
});

/*
router.post('/:character_id/tasks/create', function (req, res) {
  models.Character.find({
    where: { id: req.param('character_id') }
  }).then(function(character) {
    models.Task.create({
      title: req.param('title')
    }).then(function(title) {
      title.setUser(user).then(function() {
        res.redirect('/');
      });
    });
  });
});
*/
/*
router.get('/:user_id/tasks/:task_id/destroy', function (req, res) {
  models.User.find({
    where: { id: req.param('user_id') }
  }).then(function(user) {
    models.Task.find({
      where: { id: req.param('task_id') }
    }).then(function(task) {
      task.setUser(null).then(function() {
        task.destroy().then(function() {
          res.redirect('/');
        });
      });
    });
  });
});
*/

module.exports = router;
