var models  = require('../models');
var express = require('express');
var router  = express.Router();
var request = require('request');
var cheerio = require('cheerio');

router.get('/bom', function(req, res) {
    // TODO move into a module
    var city = req.param('city') || 'melbourne';
    var state = req.param('state') || 'vic';
    request('http://www.bom.gov.au/' + state + '/forecasts/' + city +
    '.shtml', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            $ = cheerio.load(body);
            var today = $('#content .day.eve');
            var tomorrow = $('#content .day.main');
            var bom_data = {
                title: $('h1').text(),
                today: {
                    summary: today.find('.summary').text(),
                    rain: today.find('.rain').text(),
                    min: today.find('.min').text(),
                    max: today.find('.max').text(),
                    text: today.text(),
                    html: today.html()
                },
                tomorrow: {
                    summary: tomorrow.find('.summary').text(),
                    rain: tomorrow.find('.rain').text(),
                    min: tomorrow.find('.min').text(),
                    max: tomorrow.find('.max').text(),
                    text: tomorrow.text(),
                    html: tomorrow.html()
                },
                week: {}
            };

            $('#content .day').each(function(i, element) {
                bom_data['week'][i] = {
                    summary: $(this).find('.summary').text(),
                    rain: $(this).find('.rain').text(),
                    min: $(this).find('.min').text(),
                    max: $(this).find('.max').text(),
                    text: $(this).text(),
                    html: $(this).html()
                };
            });
            res.json(bom_data);
        }
    })
});

module.exports = router;
