var express = require('express');
var router = express.Router();



/**
 *  HOME PAGE
 */
router.get('/', function(req, res, next) {
  res.render('web/index', {
    title: 'Tracko'
  });
});

module.exports = router;
