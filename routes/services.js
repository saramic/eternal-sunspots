var models  = require('../models');
var express = require('express');
var router  = express.Router();
var request = require('request');

router.get('/bom', function(req, res) {
    request('http://www.bom.gov.au/vic/forecasts/melbourne.shtml', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            //console.log(body)
            res.json({body: body})
        }
    })
});

module.exports = router;
