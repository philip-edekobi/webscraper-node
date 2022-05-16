const router = require('express').Router();
const Controller = require('./controller');

const { searchPage } = require('./utils');

router.post("/", Controller.queryPage(req, res));

module.exports = router;