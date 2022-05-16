const router = require('express').Router();
const Controller = require('./controller');

const { searchPage } = require('./utils');

router.post("/", (req, res) => Controller.queryPage(req, res));

module.exports = router;