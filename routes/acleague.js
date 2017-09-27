var express = require('express');
var router = express.Router();
var http = require('http');
var cheerio = require('cheerio');

var options = {
    host: 'managerdc7.rackservice.org',
    port: 50915,
    path: '/lapstat?valid=1'
};

/* GET home page. */
router.get('/', function(req, res, next) {
    loadPage(options).then(function(data){
        return getPodium(data);
    });
});





module.exports = router;