const router = require('express').Router({});

const logger = require('../../logger');
const schemas = require('./schemas/admin');
const validate = require('../middlewares/validator_middleware');


/*
 * Methods
 */
/**
 * Ping method
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 * @return {Promise<void>}
 */
const universeAnswer = async (req, res, next) => {
  res.result = 42;
  next();
};

const getLogLevel = async (req, res, next) => {
  res.result = logger.getGlobalLevel();
  next();
};

const setLogLevel = async (req, res, next) => {
  logger.setGlobalLevel(req.body.toLowerCase());
  res.result = 'OK';
  next();
};

/*
 * Routes
 * 'validate req (optional)' -->
 * 'Invoke method' -->
 * 'Map result (optional)'
 */
router.get('/universe-answer', universeAnswer);
router.get('/log-level', getLogLevel);
router.post('/log-level', validate(schemas.setLogLevel), setLogLevel);


module.exports = router;
