// Mock data by hicoldcat

var express = require('express')
var apiRoutes = express.Router();

const home = require('./mockdata/home.json');
const momentlife = require('./mockdata/momentlife.json');
const hearsensation = require('./mockdata/hearsensation.json');
const meetyourself = require('./mockdata/meetyourself.json');
const skipcharacter = require('./mockdata/skipcharacter.json');


apiRoutes.get('/home', function (req, res) {
	res.json({
		errno: 0,
		data: home
	});
});


apiRoutes.get('/momentlife', function (req, res) {
	res.json({
		errno: 0,
		data: momentlife
	});
});

apiRoutes.get('/hearsensation', function (req, res) {
	res.json({
		errno: 0,
		data: hearsensation
	});
});

apiRoutes.get('/meetyourself', function (req, res) {
	res.json({
		errno: 0,
		data: meetyourself
	});
});


apiRoutes.get('/skipcharacter', function (req, res) {
	res.json({
		errno: 0,
		data: skipcharacter
	});
});

module.exports = apiRoutes;
