// Mock data by hicoldcat

var express = require('express')
var apiRoutes = express.Router();

var home = require('./mockdata/home.json');
var daily = require('./mockdata/daily.json');
var vocality = require('./mockdata/vocality.json');
var travels = require('./mockdata/travels.json');
var essay = require('./mockdata/essay.json');
var personal = require('./mockdata/personal.json');
var detail = require('./mockdata/detail.json');


apiRoutes.get('/home', function (req, res) {
	res.json(home);
});


apiRoutes.get('/daily', function (req, res) {
	res.json(daily);
});

apiRoutes.get('/vocality', function (req, res) {
	res.json(vocality);
});

apiRoutes.get('/travels', function (req, res) {
	res.json(travels);
});


apiRoutes.get('/essay', function (req, res) {
	res.json(essay);
});

apiRoutes.get('/personal', function (req, res) {
	res.json(personal);
});

apiRoutes.get('/detail', function (req, res) {
	res.json(detail);
});

module.exports = apiRoutes;
